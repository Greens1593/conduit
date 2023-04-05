import { FC } from 'react'
import ReactPaginate from 'react-paginate'


import { FEED_PAGE_SIZE } from '../../../../const'
import { FeedData } from '../../api/repository'
import { usePageParams } from '../../hooks/use-page-params.hook'
import { ArticleList } from '../article-list/article-list.component'


interface FeedProps{ 
    isLoading: boolean,
    isFetching: boolean,
    error: any,
    data?: FeedData
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => { 
    

    const {page, setPage} = usePageParams()
   
    if (isLoading || isFetching) return <p className='mt-6'>Feed loading...</p>
    if (error) return <p className='mt-6'>Error while loading feed</p>
    if(data?.articlesCount === 0) return <p className='mt-6'>No articles are here ... yet</p>
    
    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected)
        window.scrollTo(0, 0)
    }

    return <>
                <>
                    <ArticleList list={data?.articles || []} />
                    <nav className='my-6'>
                        <ReactPaginate
                            pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
                            previousLabel={null}
                            nextLabel={null}
                            pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                            pageClassName='group flex'
                            containerClassName='flex flex-wrap text-conduit-green'
                            pageLinkClassName='p-3 ml-[-1px] bg-white border border-conduit-gray-300 hover:bg-conduit-gray-200 hover:text-conduit-darkGreen hover:underline group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r'
                            activeClassName='active group'
                            activeLinkClassName='group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-gray-300'
                            onPageChange={handlePageChange}
                            forcePage={page}
                            /> 
                    </nav>    
                </>     
    </>
}
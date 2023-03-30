import { FC, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'

import { Container } from '../../../../common/components/conteiner/container.component'
import { FEED_PAGE_SIZE } from '../../../../const'
import { serializeSearchParams } from '../../../../utils/router'
import { FeedData } from '../../api/repository'
import { ArticleList } from '../article-list/article-list.component'
import { FeedToggle } from '../feed-toggle/feed-toggle.component'
import { TagBord } from '../tag-bord/tag-bord.component'

interface FeedProps{ 
    isLoading: boolean,
    isFetching: boolean,
    error: any,
    data?: FeedData
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => { 
    

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0
   
    if (isLoading || isFetching) return <Container>Feed loading...</Container>
    if (error) return <Container>Error while loading feed</Container>

    const handlePageChange = ({ selected }: { selected: number }) => {
        setSearchParams(serializeSearchParams({page: String(selected)}))
        window.scrollTo(0, 0)
    }

    return <Container>
            <FeedToggle/>
            <div className='flex flex-col tab:flex-row gap-[30px]'>
                <div className='tab:w-[75%]'>
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
                </div>
                <TagBord />
            </div>      
    </Container>
}
import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../../../../common/components/conteiner/container.component';
import { ArticleList } from '../../../feed/components/article-list/article-list.component';

interface ProfileFeedProps {}

export const ProfileFeed: FC<ProfileFeedProps> = () => {

    // const [searchParams, setSearchParams] = useSearchParams()
    // const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 0) 
    // const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    //     page,
    //     tag: searchParams.get('tag'),
    // })

    // if (isLoading || isFetching) return <Container>Feed loading...</Container>
    // if (error) return <Container>Error while loading feed</Container>

    // const handlePageChange = ({ selected }: { selected: number }) => {
    //     setPage(selected)
    //     setSearchParams(serializeSearchParams({page: String(selected)}))
    //     window.scrollTo(0, 0)
    // }
  return (
          <Container>
            {/* <div className='tab:w-[75%]'>
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
            </div> */}
          </Container>        
  );
};
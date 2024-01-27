import React from 'react'
import useFetch from '../hook/useFetch'
import { getBookData } from '../service/book.service'
import { Link } from 'react-router-dom';
import { BookListComponent,HomeSkeletonComponent} from '../components';


const homePage = () => {
    const {data,error,loading} = useFetch(getBookData,"book");
    const skeletonArr = Array.from({length:6},(_,index) => index);

  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 w-auto xl:w-[1200px] mx-auto '>
        {loading ? skeletonArr.map((el,index) => <HomeSkeletonComponent key={index} index={index} />) : <>
            {error ? <h1>Error</h1> : data.map(i => <Link className={`${(i.id ===1 ||i.id===4 || i.id===5)  && "col-span-2 row-span-2"}`} to={`/book/${i.id}`} key={i.id}><BookListComponent  data={i}/></Link>)}
        </>}
    </div>
  )
}

export default homePage
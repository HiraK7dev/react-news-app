import { useState } from 'react'
import Card from './components/Card.jsx'
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

function App() {
  const getData = async () => {
    const resJson = await fetch(`https://newsdata.io/api/1/news?apikey=YOUR_API_KEY`);
    const res = await resJson.json();
    return res;
  }
  const { isPending, data, isError } = useQuery({
      queryKey: ['news'],
      queryFn: getData,
  })
  
  if (isPending) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <span className="text-4xl">Loading&nbsp;</span><span className="loading loading-spinner loading-lg"></span>
    </div>
  )
  
  if (isError) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div role="alert" className="alert alert-error w-3/4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  )
  
  return (
    <>
    <div className="navbar bg-primary text-primary-content fixed z-10">
      <button className="btn btn-ghost text-xl">News App</button>
    </div>
    {/*background*/}
    <div className="h-fit w-screen flex flex-wrap justify-evenly content-evenly pt-16 p-5">
      {
        data?.results.map((item) => {
          return <Card key={item.article_id} image={item.image_url} title={item.title} desc={item.description} link={item.link} category={item.category[0]} />
        })
      }
    </div>
    </>
  )
}

export default App
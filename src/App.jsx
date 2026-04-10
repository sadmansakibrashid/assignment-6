import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Tools from './components/tools/tools';

const fetchData =async()=>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
   const dataPromise = fetchData();

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Tools dataPromise={dataPromise}></Tools>
     </Suspense>
         
        
   </>
  )
}

export default App

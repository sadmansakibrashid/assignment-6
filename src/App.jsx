import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Tools from './components/tools/tools';
import User from './components/user/User';
import Footer from './components/footer/Footer';
import Steps from './components/steps/Steps';
import Card from './components/card/Card';
import { ToastContainer } from 'react-toastify';

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
     <User></User>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Tools dataPromise={dataPromise}></Tools>
     </Suspense>
     <Steps></Steps>
     <Card></Card>
      <Footer></Footer>   


      <ToastContainer />  
   </>
  );
}

export default App;

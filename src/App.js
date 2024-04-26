import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { MyTable } from './Table/MyTable';
import PostsList from './Table/fetch';
import Posts from './Table/fetchEach';
import { Suspense, lazy } from 'react';
import Component1 from './components/component1';
import ErrorBoundary from './components/errorBoundary';
import { PositiveNumber } from './components/positiveNumber';
import Level1 from './context/Level1';

//function for counter button
function Mybutton({ count, handleclick }) {
  return (<>
    <button onClick={handleclick}>{count}</button></>);
}

//loading the navbar with dalay lazy loading
const LazyComponent = lazy(() => addDelay(import('./components/Navbar')));
function addDelay(myComponent) {

  return new Promise((resolve) => {

    setTimeout(resolve, 5000);

  }).then(() => myComponent)

}

//using useContext which helps to directly pass value to all the descendent components using Provider
export const MyContext = React.createContext();

function App() {

  //useState for both the counter button
  const [count, SetCount] = useState(0);
  const [count2, SetCount2] = useState(30);

  //function to increase the counter
  function handleclick() {
    SetCount(count + 1);
  }

  //function to decrease the counter
  function handleclick2() {
    SetCount2(count2 - 1);
  }

  const [Info, setInfo] = useState({
    name: "Abhishek",
    favMovie: "MS DHONI",
    favBook: "Merchant of Venice",
    favDish: "Chicken Rice",
    favColor: "Blue"
  });


  function changeMovie() {
    setInfo({
      ...Info,
      favMovie: "Manjhi The Mountain Man"
    })
  }
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}

        {/* suspense used in lazy loading of Navbar */}
        <Suspense fallback={<div>loading.....</div>}>
          <LazyComponent />
        </Suspense>

        {/* MyContext.Provide is used to provide data to the descendent components */}
        <MyContext.Provider value={"week3day2"}>
          <Level1 />
        </MyContext.Provider>

        {/* Demostration of PureComponent which only renders when there is a change in the value of the state */}
        <Component1 />

        {/* Error boundary is used to find if any error in the component and do not crash the whole site */}
        {/* <ErrorBoundary>
          <PositiveNumber postiveNumber="4" />
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
          <PositiveNumber postiveNumber="-4" />
        </ErrorBoundary> */}

        {/* button for counter button */}
        <Mybutton count={count} handleclick={handleclick} />

        {/* changing the movie name of info state */}
        <div>
          <p>Name: {Info.name}</p>
          <p>Favorite Movie: {Info.favMovie}</p>
          <button onClick={changeMovie}>Change Movie</button>
        </div>



        <Routes>
          {/* <Route path='/' element={<Home />} ></Route>  */}
          {/* <Route path='/' element={<MyTable />}></Route > */}
          <Route path='/About' element={<About />} ></Route>
          <Route path='/vehicles' element={<PostsList />} ></Route>
          <Route path='/vehicles/:id' element={<Posts />} ></Route>

        </Routes>

        <Mybutton count={count2} handleclick={handleclick2} />

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;

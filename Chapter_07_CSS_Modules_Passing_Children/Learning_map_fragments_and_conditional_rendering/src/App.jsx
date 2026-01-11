import './App.css'
import List from './components/List';

function App() {
  
  const studentArr = ["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Gopi"];

  //This is a Fragment Use to wrap different JSX elements without adding extra nodes to the DOM so that we can return multiple elements from a component.
  //Fragments can be written using the shorthand syntax <>...</> or using <React.Fragment>...</React.Fragment>.
  // For <React.Fragment>...</React.Fragment> we need to import React from 'react'.
  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
  </>
  );
}

export default App

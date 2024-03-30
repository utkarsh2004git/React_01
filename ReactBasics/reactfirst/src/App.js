// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Home from './components/home/home';
import "./components/home/header.css"
import "./components/home/button.css"
import "./components/primary-button/primary-button"
import PrimaryButton from './components/primary-button/primary-button';



function Header(props) {
  return (

    <h1 className='myheader'>{props.title}</h1>
  );
}

const myApp=()=>{
  const list=[
    "first",
    "second",
    "third"
  ];

  return<>
    <Header title="MyReactApp"/>
    <Home list={list}/>
    <PrimaryButton label="Click"/>
    <Footer notice="Copyright &copy;2024 from My App "/>
  </>;
}

export default myApp;

import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Home from './components/home/home';



function Header() {
  return (
    <h1>This is header</h1>
  );
}

const myApp=()=>{
  return<>
    <Header />
    <Home />
    <Footer />
  </>;
}

export default myApp;

import './App.css';
import './components/NavComponent'
import NavComponent from './components/NavComponent';
import RenderComponent from './components/RenderComponent';
import MyEvent from './events/MyEvent';
// import Imagem from './assets/images.jpg'
import MyComponent from './components/MyComponent';
import CountComponent from './components/CountComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <MyEvent />
      <RenderComponent />
      {/* <img src={Imagem} alt="" /> */}
      <MyComponent />
      <CountComponent />
      <hr />
      <LoginComponent />
    </div>
  );
}

export default App;

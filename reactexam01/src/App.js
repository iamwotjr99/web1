import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';
//import './App.css';

function App() {
  return (
    <Container>
    <div>
      <MyHeader />
      <Counter a={1} initialValue={5}/>
      <MyFooter />
    </div>
    </Container>
  );
}

export default App;

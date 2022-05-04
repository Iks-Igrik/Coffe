import React from 'react';
import Home from './Home';
import Cart from './components/carts/Cart';
import { Routes, Route} from 'react-router-dom';
import './app.css';
import Header from './components/Header/Header';



/*function App() {
    const [coffee, setState] = React.useState([]);
    
    fetch().then((resp) => resp.json()).then(json => {
    setState(json.coffee);
  });

  React.useEffect(() => {
  axios.get('http://localhost:3000/db.json').then(({data}) => {
    setState(data.coffee);
  });
  },[]);

  return;
  */
 /* class App extends React.Component {
    componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
        this.props.setCoffe(data.coffee);
    });
  }*/
 /* const sortItems = 
    [
      { name: 'популярности', type: 'popular'},
      { name: 'цене', type: 'price'}, 
      { name: 'алфавиту', type: 'alphabet'}
      ]
  
  const categoryNames = ['Арабика','Робуста','Арабика/Робуста','Марагожин'];
   function App() {
   const dispatch = useDispatch();

   const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    }, []);*/
    function App() {
    return (
      <div className="wrapper"> 
      <Header />
      <div className="content">
        <Routes>
        <Route exact path="/" element = { <Home />}/>
        <Route exact path="/cart" element = { <Cart /> }  />
        </Routes>
        </div>
       </div> 
       )
    }  
  
/*const mapStateToProps = (state) => {
 return {
   items: state.coffee.items
 }
};
const mapDispatchToProps = {
     setCoffe,
 }
export default connect(mapStateToProps, mapDispatchToProps)(App); */
  
export default App;

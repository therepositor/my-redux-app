import Posts from './Components/Posts'
import './App.css';
import PostForm from './Components/PostForm'
import { Provider } from 'react-redux'
import { store } from './Store'
// import rootReducer from './Components/reducers/index'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
             Edit <code>src/App.js</code> and save to reload.
          </p> 
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
    
  );
}

export default App;

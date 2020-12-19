import { userContext } from '../contexts/UserContext.js';
import './App.css'

const UserGreeter = ({user: { attributes }}) => {
  return <div>Hi, {attributes.email}</div>
} 

function App() {
  return (
    <div className="App">
      <userContext.Consumer>
        {value => <UserGreeter user={value} />}
      </userContext.Consumer>          
    </div>
  );
}

export default App;

import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import ListTask from './Component/ListTask';
import Addtask from './Component/Addtask';
import { Filter_Task } from './redux/Actions/TaskActions';
function App(props) {
const dispatch = useDispatch()
const aff = useSelector(state => state.TaskReducer.task)
const Filter_Done =() => {
  dispatch(Filter_Task())
}
console.log(aff)



  return (
    <div>
    <button onClick={Filter_Done}> Done_or_Not</button>
      <ListTask aff={aff}></ListTask>
      <Addtask></Addtask>
    </div>
  );
}

export default App;

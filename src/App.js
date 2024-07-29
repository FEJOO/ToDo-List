import './App.css';
import { useState } from 'react';

function App() {
  const date = new Date();
  const today = date.getDay();
  let [currentDate] = useState(today);
  switch (currentDate) {
    case 0:
      currentDate = "Sunday ❤️";
      break;
    case 1:
      currentDate = "Monday 😒";
      break;
    case 2:
      currentDate = "Tuesday ✌️";
      break;
    case 3:
      currentDate = "Wednesday 🌝 ☕";
      break; 
    case 4:
      currentDate = "Thursday (●'◡'●)";
      break; 
    case 5:
      currentDate = "Friday 👾";
      break;  
    case 6:
      currentDate = "Saturday 🌠";
      break; 
    default : ;       
  }

  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    if(toDo === ""){
      setList([...list]);
      alert("The input field cannot be blank");
    }else{
      setList([...list, {text: toDo, status: false, id: Date.now()}]);
    }
  } 

  const deleteList = (obj) => {
    const updatedList = list.filter((lists) => lists !== obj);
    setList(updatedList) 
  }    

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDate}  </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => {setToDo(e.target.value);}} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={addList}></i>
      </div>
      <div className="todos">
        {
          list.map((obj)=> {
            return(
              <div className="todo">
                <div className="left">
                  <input type="checkbox" name="" id="" value={obj.status} onChange={(e)=>{
                    setList(list.filter((obj2)=>{
                      if(obj2.id === obj.id){
                        obj2.status = e.target.checked
                      }
                      return obj2;
                    }))
                  }}  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => deleteList(obj)}></i>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="last">
        <div className="completedTasks">
          <h3>Completed Tasks</h3>
          <div className="tasks">
          {
            list.map((obj)=>{
              if(obj.status){
                return(<li>{obj.text}</li>);
              }
              return null;
            })
          }
          </div>
        </div>
      </div>

    </div>
  );
}
export default App;

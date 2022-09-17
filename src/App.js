import React from "react";
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";
import { useState } from "react";
import NoElements from "./components/users/NoElements";
// import ErrorModal from "./components/ui/ErrorModal";


function App() {
  const [data, setData] = useState([]);
  const updateUsersHandler = (uName, uAge) => {
    // data =(prevData =)
    setData((prevData) => {
      return [...prevData, {username: uName, age: uAge, id: Math.random().toString}]
      // const updatedData = [...prevData];
      // updatedData.unshift({ UserName: userInputs.enteredUsername, age: userInputs.enteredAge, id: Math.random().toString() });
      // return updatedData;  
    }
    
    );
    console.log(data)
  };

  return (
    <div>
      <AddUsers onUpdateUsers={updateUsersHandler}/>
      {data.length>0? (<UsersList data={data} />)
      :<NoElements />
      }
      {/* <ErrorModal /> */}
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import { axiosConfig } from "./Network";
import Card from "./Card";

const SearchBook = () => {
  const [users, setUser] = useState([]);
  const [seacrhInput,setSeacrhInput] = useState("");

  const inputSearchHandelr = (event)=>{
    setSeacrhInput(event.target.value)
  }

  useEffect(() => {
    axiosConfig
      .get("", {
        headers: {},
      })
      .then((resp) => {
        setUser(resp.data.Data);
        localStorage.setItem("users", resp.data.Data);
      })
      .catch((error) => {
        console.log(error + "errrrrrrrrrrrrrrrroe");
      });
  }, []);
  useEffect(() => {
    //clean up
    return () => {
      localStorage.removeItem("users");
    };
  }, []);

  return (
    <div >
      <h1 className="text-center"> Search User Name  </h1>
      { console.log(seacrhInput)}
      <input
        type="text"
        className="form-control m-3"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Search Name"
        onChange={inputSearchHandelr}
      />
      <div className="big-container " >

      
      {console.log(users)}
      {users.filter((user)=>{
          if(seacrhInput==""){
              return user ;
          }
              else if(user.Name.toLowerCase().includes(seacrhInput.toLowerCase())){
                return user ;
              }
         
      }).map((user, index) => {
          
            return (
                <div className="d-flex" key={index}>
                  <Card
                    name={user.Name}
                    JobName={user.JobName}
                    Mobile={user.Mobile}
                  />
                </div>
              );
          
         
       
       
      })}
      </div>
    </div>
  );
};

export default SearchBook;

import React from "react";
import Card from "../ui/Card";
import styles from "./users.module.css";

const UsersList = (props) => {
  return(
  <Card className={styles.users}>
     <ul>
      {props.data.map((user) => ( 
      <li key={user.id} className={styles.list}>
          {user.username} ({user.age} years old)
      </li>
      ))}
      </ul>
    </Card>
)};

export default UsersList;

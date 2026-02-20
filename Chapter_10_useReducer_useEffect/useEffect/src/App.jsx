import { useEffect, useState } from "react";
import { UserCardContainer } from "./components/UserCardContainer";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
      });
  }, []);

  return <UserCardContainer users={users} />;
}

export default App;

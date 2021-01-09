import { useState } from "react";
import Card from "./Components/Card";
import axios from "axios";
import Search from "./Components/Search";
import "./App.css";

function App() {
  const APIURL = "https://api.github.com/users/";

  const [isUserFound, setisUserFound] = useState(false);
  const [person, setPerson] = useState([]);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");

  async function getUser(username) {
    try {
      const { data } = await axios(APIURL + username);
      // console.log(data);
      setPerson(data);
      setisUserFound(true);
    } catch (err) {
      console.log(err);
      setisUserFound(false);
    }
  }

  async function getRepos(username) {
    try {
      const { data } = await axios(APIURL + username + "/repos?sort=created");
      setRepos(data);
      setisUserFound(true);
    } catch (err) {
      console.log(err);
      setisUserFound(false);
    }
  }

  const inputEvent = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
    getRepos(username);
  };

  return (
    <>
      <Search inputEvent={inputEvent} handleSubmit={handleSubmit} />
      <main id="main">
        {isUserFound ? <Card person={person} repos={repos} /> : ""}
      </main>
    </>
  );
}

export default App;

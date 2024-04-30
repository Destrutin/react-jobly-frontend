import {BrowserRouter} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {useEffect, useState} from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Api from "./api/Api";
import UserContext from "./auth/UserContext";
import NavBar from "./routes/NavBar";
import AppRoutes from "./routes/AppRoutes";
import './App.css';

function App() {
  const [token, setToken] = useLocalStorage(Api.token)
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  async function login(loginData) {
    try {
      let token = await Api.login(loginData);
      setToken(token);
    } catch (err) {
      console.log(err);
      return {success: false}
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await Api.signup(signupData);
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error(err)
      return {success: false};
    }
  }

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let {username} = jwtDecode(token);
          Api.token = token;
          let currentUser = await Api.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error(err);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    Api.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
          <NavBar logout={logout}/>
          <AppRoutes signup={signup} login={login}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

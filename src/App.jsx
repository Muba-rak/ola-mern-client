import axios from "axios";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;

  return <Routes />;
}

export default App;

import "./App.css";
import "./assets/css/style.css"
import { Home, User } from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Register from "./pages/register";
import { theme } from "./utils/theme"
function App() {
  const array = [10, 20, 30, 40, 50];

  const userName = "Mohit";


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

        <div className="App">
          <header>This is header</header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User name={userName} age={99} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <footer>This is footer</footer>

          {/* <User name={userName} age={42} /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

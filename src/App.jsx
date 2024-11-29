import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { DatePicker } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MainHome from "./components/MainHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<MainHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

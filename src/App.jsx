import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;

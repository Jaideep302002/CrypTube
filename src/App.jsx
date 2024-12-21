import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Contact,
  Cryptocurrencies,
  CryptoDetails,
  HomePage,
  Navbar,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<About />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "gray", textAlign: "center" }}
          >
            Cryptube <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About us</Link>
          </Space>
          <Space className="social-media-container">
            <a
              target="_blank"
              href="https://www.instagram.com/_jaideep_._singh._/"
            >
              <InstagramOutlined className="icon" />
            </a>
            <a target="_blank" href="https://github.com/Jaideep302002">
              <GithubFilled className="icon" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jaideep-singh-75959a21b/"
            >
              <LinkedinFilled className="icon" />
            </a>
          </Space>
        </div>
      </div>
    </div>
    // <>yyu</>
  );
}

export default App;

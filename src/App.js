import React from "react";
import "../src/App.css";
import { Col, Image, Layout, Menu, Row } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import rendomImage from "./images/rendomimage.png";
import DashboardLayout from "./components/DashboardLayout";
import { Link, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Contact from "./components/Contact";
import BookList from "./components/BookList";
import NotFound from "./components/NotFound";
const { Sider, Content } = Layout;

function App() {
  return (
    <>
      {/* <nav>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/Books">Books</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav> */}
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/Books" element={<BookList />} />
        <Route path="/Books/:id" element={<Books />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

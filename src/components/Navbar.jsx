import {
  BulbOutlined,
  MenuOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons/lib/icons";
import { Typography, Avatar, Menu, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/logo.png";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 760) {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">MyCryptoWorld</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item key={1} icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<FundOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key={4} icon={<BulbOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
import { useSelector } from "react-redux";
import Experiences from "./AdminExperiences";
const { TabPane } = Tabs;

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <h1 className="text-2xl px-5 py-2  text-quaternary">Admin Panel</h1>
        <h1 className="underline text-quaternary text-xl cursor-pointer" onClick={
          () => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }
        }>LogOut</h1>
      </div>

      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1" tabPosition="left">
            <Tabs.TabPane tab="Intro" key="1">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="3">
              <Experiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              <AdminProjects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Courses" key="5">
              <AdminCourses />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="6">
              <AdminContact />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default Admin;

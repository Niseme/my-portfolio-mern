import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    const tempSkills = values.skills.split(",");
    values.skills = tempSkills;
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{...portfolioData.about,
          skills:portfolioData.about.skills.join(",")}}
      >
        <Form.Item name="lottieUrl" label="lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Enter your description1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Enter your description2" />
        </Form.Item>
        <Form.Item name="skills" label="skills">
          <textarea placeholder="Enter your skills" />
        </Form.Item>
        <div className="flex justify-end">
          <button className="px-10 py-2 bg-primary text-tertiary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAbout;

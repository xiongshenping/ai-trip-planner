"use client";
import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Space,
  Tooltip,
  Typography,
  Row,
  Col,
  Card,
  List,
} from "antd";
import Link from "next/link";
const { Option } = Select;
const { Meta } = Card;
const { Item } = List;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const data = [
  {
    title: "Title 1",
    id:'1'
  },
  {
    title: "Title 2",
    id:'2'
  },
  {
    title: "Title 3",
    id:'3'
  },
  {
    title: "Title 4",
    id:'4'
  },
];

const App = () => (
  <div>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      size="large"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Destination"
        name="destination"
        rules={[{ required: true, message: "Destination is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Preference"
        name="preference"
        rules={[{ required: true, message: "Preference is required" }]}
      >
        <Select>
          <Select.Option value="preference1">preference1</Select.Option>
          <Select.Option value="preference2">preference2</Select.Option>
          <Select.Option value="preference3">preference3</Select.Option>
          <Select.Option value="preference4">preference4</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="People"
        name="people"
        rules={[{ required: true, message: "How many people with you?" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Date is required" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label="">
        <Button type="primary" htmlType="submit">
          Create Trip
        </Button>
      </Form.Item>
    </Form>
    <div>Tell me the why - I’ll nail the when, where & what</div>
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Link href={`/trip/${item.id}`}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={item.title} description="www.instagram.com" />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  </div>
);
export default App;

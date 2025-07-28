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

import styles from "./page.module.css";
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
    id: "1",
  },
  {
    title: "Title 2",
    id: "2",
  },
  {
    title: "Title 3",
    id: "3",
  },
  {
    title: "Title 4",
    id: "4",
  },
];

export default function User() {
  return (
    <div className={styles.main}>
      <div>My History</div>
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
}

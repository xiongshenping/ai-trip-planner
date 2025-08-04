"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,

  Row,
  Col,
  Card,
  List,
  message
} from "antd";
import Link from "next/link";



const { Meta } = Card;
// const { Item } = List;
import { useRouter } from 'next/navigation';
// import './page.module.css'

import { useAuth } from "react-oidc-context";

const data = [
  {
    title: "Title 1",
    id: '1'
  },
  {
    title: "Title 2",
    id: '2'
  },
  {
    title: "Title 3",
    id: '3'
  },
  {
    title: "Title 4",
    id: '4'
  },
];

const travelStyleOptions = [{ label: '🌴 Relaxed', value: 'Relaxed' }, { label: '⚡ Moderate', value: 'Moderate' }, { label: '🏃 Intensive', value: 'Intensive' }];
const travelPreferenceOptions = [
  { label: '🏛️ Attractions', value: 'Attractions' },
  { label: '🍜 Food', value: 'Food' },
  { label: '🎭 Culture', value: 'Culture' },
  { label: '🌿 Nature', value: 'Nature' },
  { label: '🛍️ Shopping', value: 'Shopping' },
  { label: '🏔️ Adventure', value: 'Adventure' }
];

const App = () => {
  const auth = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState(null); // 新增错误状态

  const onFinish = async (values) => {
    const idToken = auth.user?.id_token; // 替换为真实 token
    if (!idToken) {
      setErrorMsg('Please sign in to plan your trip.');
      return;
    }

    console.log("Submitting trip plan:", values);
    const query = new URLSearchParams({ ...values, departureDate: values.departureDate?.format('YYYY-MM-DD') }).toString()
    router.push(`/plan?${query}`)


  };
  const handleStyleChange = () => { }
  const handlePreferenceChange = () => { }
  useEffect(() => {
    if (errorMsg) {

      messageApi.open({
        type: 'error',
        content: errorMsg,
      });
      setErrorMsg(null); // 清空错误


    }
  }, [errorMsg, messageApi]);

  return (
    <>
      {contextHolder}
      <div
        style={{
          // minHeight: '100vh',
          // background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          padding: '0',
          margin: 0,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 顶部渐变光晕装饰 */}
        <div style={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 240,
          // background: 'radial-gradient(circle at 50% 40%, #a5b4fc 0%, #f0f2f5 80%, transparent 100%)',
          // filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div style={{ width: '100%', maxWidth: 800, marginBottom: 32, position: 'relative', zIndex: 1 }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 28,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              padding: '32px 24px 24px 24px',
              backdropFilter: 'blur(8px)',
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}
          >
            <span style={{ position: 'absolute', right: '10px', top: '10px', fontSize: 42, display: 'block' }}>🌍</span>
            <div style={{ textAlign: 'center', marginBottom: 16, position: 'relative' }}>

              {/* <span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  fontSize: 32,
                  letterSpacing: 1,
                  fontFamily: 'inherit',
                }}
              >
                AI Trip Planner
              </span> */}
              {/* <div style={{ color: '#64748b', fontSize: 16, marginTop: 8, fontWeight: 400 }}>
                Let AI customize your exclusive travel plan
              </div> */}
              <div style={{ color: '#6366f1', fontSize: 18, marginTop: 18, fontWeight: 600, letterSpacing: 0.5 }}>
                Let AI customize your exclusive travel plan
              </div>
              <div style={{ color: '#64748b', fontSize: 15, marginTop: 8, marginBottom: 4, fontWeight: 400 }}>
                Your personal travel assistant. Effortlessly manage itineraries, hotels, attractions, and food. One click for a perfect trip!
              </div>
            </div>
            <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, #e0e7ff 0%, #6366f1 100%)', opacity: 0.18, margin: '24px 0 18px 0', borderRadius: 1 }} />
            <Form
              form={form}
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              size="large"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label={<span style={{ fontWeight: 500 }}>Destination</span>}
                name="destination"
                rules={[{ required: true, message: "Where do you want to travel?" }]}
              >
                <Input placeholder="Where do you want to travel?" style={{ borderRadius: 12, border: 'none' }} />
              </Form.Item>



              <Form.Item
                label={<span style={{ fontWeight: 500, color: '#475569' }}>Trave Style</span>}
                name='travelStyle'
                rules={[{ required: true, message: "What kind of travel pace do you prefer?" }]}
              >
                <Select onChange={handleStyleChange} placeholder="What kind of travel pace do you prefer?" style={{ borderRadius: 12, width: '100%' }} options={travelStyleOptions} />

              </Form.Item>

              <Form.Item
                label={<span style={{ fontWeight: 500, color: '#475569' }}>Trave Preference</span>}
                name='travelPreference'
                rules={[{ required: true, message: "What are your travel preferences?" }]}
              >
                <Select
                  mode="tags"
                  style={{ borderRadius: 12, border: 'none', width: '100%' }}
                  placeholder="What are your travel preferences?"
                  onChange={handlePreferenceChange}
                  options={travelPreferenceOptions}
                />
              </Form.Item>

              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label={<span style={{ fontWeight: 500, color: '#475569' }}>People</span>}
                    name="people"
                    rules={[{ required: true, message: "How many people with you?" }]}
                  >
                    <InputNumber min={1} max={20} style={{ width: '100%', borderRadius: 12, border: 'none' }} placeholder="How many people with you?" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<span style={{ fontWeight: 500, color: '#475569' }}>Days</span>}
                    name="days"
                    rules={[{ required: true, message: "How many travel days?" }]}
                  >
                    <InputNumber min={1} max={20} style={{ width: '100%', borderRadius: 12, border: 'none' }} placeholder="How many travel days?" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label={<span style={{ fontWeight: 500, color: '#475569' }}>Date</span>}
                name="departureDate"
                rules={[{ required: true, message: "What day do you want to depart?" }]}
              >
                <DatePicker format='YYYY-MM-DD' placeholder="What day do you want to depart?" style={{ width: '100%', borderRadius: 12, border: 'none' }} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  style={{ borderRadius: 16, fontWeight: 600, fontSize: 18, height: 48, background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)', border: 'none' }}
                >
                  {loading ? 'Creating Trip...' : 'Create Trip'}
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: 'center', color: '#6366f1', fontWeight: 500, marginTop: 8, marginBottom: 8, fontSize: 15, letterSpacing: 0.5 }}>
              Tell me the why - I’ll nail the when, where & what
            </div>
          </div>
        </div>
        <div style={{ display: 'none', width: '100%', maxWidth: 900, margin: '0 auto', padding: '0 8px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'left', margin: '24px 0 12px 8px', color: '#6366f1', fontWeight: 600, fontSize: 20, letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 22 }}>🧳</span> My Travel History
          </div>
          <div style={{ color: '#64748b', fontSize: 15, margin: '0 0 18px 8px' }}>
            Review every wonderful journey, and revisit your past trips and inspirations anytime.
          </div>
          <List
            grid={{ gutter: 24, column: 4 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link href={`/trip/${item.id}`}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: 16,
                      boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)',
                      border: 'none',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s, transform 0.25s cubic-bezier(.4,2,.6,1)',
                      minHeight: 180,
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(4px)',
                      cursor: 'pointer',
                    }}
                    
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        style={{ width: '100%', height: 100, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16, transition: 'transform 0.25s cubic-bezier(.4,2,.6,1)' }}
                      />
                    }
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'scale(1.035)';
                      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.16)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(31, 38, 135, 0.08)';
                    }}
                  >
                    <Meta title={<span style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</span>} description={<span style={{ color: '#64748b', fontSize: 12 }}>www.instagram.com</span>} />
                    <div style={{ textAlign: 'center', marginTop: 8, color: '#6366f1', fontWeight: 500, fontSize: 13, letterSpacing: 0.5 }}>
                      Travel History
                    </div>
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>

      </div>

    </>
  );
};
export default App;

"use client";
import React from "react";
import "./globals.css";
import "./mkd.css";
import Link from "next/link";
import { Layout, Col, Row } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";


import { AuthProvider } from "react-oidc-context";
import LoginBar from "./components/LoginBar";

const currentURL=`${window.location.origin}/`;
const cognitoAuthConfig = {
  authority: "https://cognito-idp.ca-central-1.amazonaws.com/ca-central-1_DmvfKYuqZ",
  client_id: "3e8mco70n2u93o8okhbsoam66c",
  redirect_uri: currentURL,
  response_type: "code",
  scope: "email openid profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
        position: 'relative'

      }}>
        <AntdRegistry>
          <AuthProvider {...cognitoAuthConfig}>
            <Layout style={{
              // background: "none" 
              background: 'radial-gradient(circle at 50% 40%, #a5b4fc 0%, #f0f2f5 80%, transparent 100%)',
              // filter: 'blur(60px)',
              minHeight: '100vh'
            }}>
              <Header
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                  background: "none",
                  padding: "30px 30px",
                  position: "sticky",
                  justifyContent: "space-between",

                }}
              >
                <div className="wmhd">
                  <div className="wmhd_logo_wrap">
                    <Link className="wmhd_logo" href="/">
                    </Link>
                  </div>
                  <div className="wmhd_info">
                    <h1 className="wmhd_title" style={{
                      background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 700,
                      fontSize: 32,
                      letterSpacing: 1,
                      fontFamily: 'inherit',
                    }}>AI Trip Planner</h1>

                    <div className="wmhd_description" style={{ color: '#6366f1', fontSize: 18, marginTop: 18, fontWeight: 600, letterSpacing: 0.5 }}>
                      Smart Planning · Instant Generation · Personalized Recommendations
                    </div>
                  </div>
                </div>
                <div className="status">
                  <LoginBar currentURL={currentURL} />
                </div>
              </Header>
              <Content>
                <Row justify="center">
                  <Col span={20}>{children}</Col>
                </Row>
              </Content>
              <Footer style={{ background: 'none' }}>
                {/* 页脚版权/品牌 slogan */}
                <div style={{ width: '100%', textAlign: 'center', color: '#b4b8c7', fontSize: 15, marginTop: 48, marginBottom: 16, letterSpacing: 0.5, zIndex: 2 }}>
                  © 2025 AI Trip Planner · Plan your next adventure with intelligence and style.
                </div>
              </Footer>

            </Layout>
          </AuthProvider>

        </AntdRegistry>
        {/* 彩色SVG圆形装饰 */}
        <svg width="320" height="320" style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 0, opacity: 0.18 }}>
          <circle cx="160" cy="160" r="120" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </radialGradient>
          </defs>
        </svg>
      </body>
    </html>
  );
}

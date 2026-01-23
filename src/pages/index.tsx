import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const interviewCategories = [
  {
    emoji: "💻",
    title: "Computer Science",
    link: "/docs/interview-questions/computer-science",
    color: "#7e22ce",
    background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
    description: "CS 5대 과목 핵심 정리",
  },
  {
    emoji: "⚡",
    title: "JavaScript",
    link: "/docs/interview-questions/javascript",
    color: "#a16207",
    background: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
    description: "이벤트 루프, 클로저, 프로토타입 등",
  },
  {
    emoji: "⚛️",
    title: "React",
    link: "/docs/interview-questions/react",
    color: "#0369a1",
    background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    description: "생명 주기, 상태 관리, 최적화 등",
  },
  {
    emoji: "🌐",
    title: "General FE",
    link: "/docs/interview-questions/general-FE",
    color: "#0e7490",
    background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    description: "렌더링 전략, 인프라, 테스팅 등",
  },
  {
    emoji: "📘",
    title: "TypeScript",
    link: "/docs/interview-questions/typescript",
    color: "#4338ca",
    background: "linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)",
    description: "동작 원리, 기초 문법 등",
  },
  {
    emoji: "🎨",
    title: "HTML/CSS",
    link: "/docs/interview-questions/html-css",
    color: "#c2410c",
    background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    description: "접근성, 반응형, 최적화 등",
  },
  {
    emoji: "🎭",
    title: "Culture Fit",
    link: "/docs/interview-questions/culture-fit",
    color: "#be185d",
    background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
    description: "회사와 나를 알아보는 질문",
  },
  {
    emoji: "🧠",
    title: "CS 테스트",
    link: "/docs/cs-test/algorithm/알고리즘",
    color: "#10b981",
    background: "white",
    description: "문제로 익혀보는 CS 5대 과목",
  },
];

function Card({
  title,
  emoji,
  link,
  color,
  background,
  description,
}: {
  title: string;
  emoji: string;
  link: string;
  color: string;
  background?: string;
  description: string;
}) {
  return (
    <Link
      to={link}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1.5rem",
        borderRadius: "20px",
        background: background || "white",
        color: "var(--ifm-color-emphasis-900)",
        textDecoration: "none",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className={`${styles.cardHover} card-hover`}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{emoji}</div>
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: "800",
          marginBottom: "0.5rem",
          color: color,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          opacity: 0.75,
          margin: 0,
          lineHeight: "1.5",
          fontWeight: "600",
          color: "#475569",
        }}
      >
        {description}
      </p>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Boospeak"
      description="Boospeak - 개발자를 위한 전공 지식 면접 대비"
    >
      <header className={`hero ${styles.heroBanner} hero-header`}>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div
          className="container hero-content"
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <Heading
            as="h1"
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              marginBottom: "4rem",
              color: "transparent",
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src="img/logo.png"
                alt="Boospeak Logo"
                className="hero-logo"
                style={{ width: "60px", height: "60px", borderRadius: "12px" }}
              />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Boospeak
              </span>
            </div>
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                background: "none",
                WebkitTextFillColor: "var(--ifm-color-emphasis-700)",
                opacity: 0.8,
                letterSpacing: "normal",
              }}
            >
              개발자를 위한 전공 지식 & 면접 대비 올인원
            </span>
          </Heading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {/* 8 Cards including CS Test */}
            {interviewCategories.map((cat) => (
              <Card key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Contribution Section */}
        <section
          style={{
            padding: "3rem 2rem",
            background: "var(--ifm-background-surface-color)",
            textAlign: "center",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>🤝</div>
            <Heading
              as="h2"
              style={{ marginBottom: "0.8rem", fontSize: "1.5rem" }}
            >
              기여를 환영합니다
            </Heading>
            <p
              style={{
                fontSize: "1rem",
                opacity: "0.75",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              여러분의 참여로 더 좋은 내용을 채워갈 수 있어요.
              <br />
              새로운 질문 추가, 오타 수정, 답변 개선 등 모든 기여 환영합니다!
            </p>
            <Link
              className="button button--primary button--lg"
              to="https://github.com/boospeak-study/CS-Interview-Study"
              style={{
                padding: "0.8rem 2rem",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              GitHub에서 기여하기
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

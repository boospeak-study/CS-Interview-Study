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
    color: "#1d4ed8",
    background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    description: "CS 전반에 대한 핵심 질문",
  },
  {
    emoji: "⚡",
    title: "JavaScript",
    link: "/docs/interview-questions/javascript",
    color: "#a16207",
    background: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
    description: "JS 동작 원리와 개념",
  },
  {
    emoji: "⚛️",
    title: "React",
    link: "/docs/interview-questions/react",
    color: "#0369a1",
    background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    description: "리액트 핵심 개념과 훅",
  },
  {
    emoji: "🌐",
    title: "General FE",
    link: "/docs/interview-questions/general-FE",
    color: "#0e7490",
    background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    description: "프론트엔드 일반 지식",
  },
  {
    emoji: "📘",
    title: "TypeScript",
    link: "/docs/interview-questions/typescript",
    color: "#4338ca",
    background: "linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)",
    description: "타입 시스템과 활용",
  },
  {
    emoji: "🎨",
    title: "HTML/CSS",
    link: "/docs/interview-questions/html-css",
    color: "#c2410c",
    background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    description: "마크업과 스타일링",
  },
  {
    emoji: "🎭",
    title: "Culture Fit",
    link: "/docs/interview-questions/culture-fit",
    color: "#be185d",
    background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
    description: "협업과 커뮤니케이션",
  },
];

function Card({
  title,
  emoji,
  link,
  color,
  background,
  description,
  isSpecial = false,
}: {
  title: string;
  emoji: string;
  link: string;
  color: string;
  background?: string;
  description: string;
  isSpecial?: boolean;
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
        background: isSpecial
          ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
          : background || "white",
        color: isSpecial ? "white" : "var(--ifm-color-emphasis-900)",
        textDecoration: "none",
        border: isSpecial ? "none" : "1px solid rgba(0,0,0,0.05)",
        boxShadow: isSpecial
          ? "0 8px 20px rgba(16, 185, 129, 0.4)"
          : "0 4px 20px rgba(0, 0, 0, 0.03)",
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
          color: isSpecial ? "white" : color,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          opacity: isSpecial ? 0.9 : 0.75,
          margin: 0,
          lineHeight: "1.5",
          fontWeight: "600",
          color: isSpecial ? "white" : "#475569",
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
      title="Boospeak Study"
      description="Boospeak Study - 개발자를 위한 전공 지식 면접 대비"
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
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
            }}
          >
            Boospeak Study
          </Heading>
          <p className="hero-subtitle">
            개발자를 위한 전공 지식 & 면접 완벽 대비
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {/* 7 Interview Cards */}
            {interviewCategories.map((cat) => (
              <Card key={cat.title} {...cat} />
            ))}

            {/* 1 Special Test Card */}
            <Card
              title="CS 지식 테스트"
              emoji="🧠"
              link="/docs/cs-test/algorithm/알고리즘"
              color="#10b981"
              description="알고리즘, 자료구조, OS, DB, 네트워크 실전 테스트"
              isSpecial={true}
            />
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
              Boospeak Study는 오픈소스 프로젝트입니다.
              <br />
              새로운 질문 추가, 오타 수정, 내용 개선 등 모든 기여를 환영합니다!
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

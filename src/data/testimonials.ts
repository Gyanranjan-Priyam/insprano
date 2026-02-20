export interface Testimonial {
  id: number;
  name: string;
  role: string;
  batch: string;
  message: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Deepankar Sahoo",
    role: "Full Stack Developer",
    batch: "2024",
    message: "CodeBreakers transformed my journey from a beginner to landing my dream job at a top tech company. The mentorship and hands-on projects were invaluable!",
  },
  {
    id: 2,
    name: "Harsh Keshari",
    role: "Software Engineer",
    batch: "2021",
    message: "The collaborative environment at CodeBreakers helped me build real-world projects and develop skills that set me apart in interviews. Best decision ever!",
  },
  {
    id: 3,
    name: "Podili Biswajit",
    role: "DevOps Engineer",
    batch: "2022",
    message: "From hackathons to tech talks, CodeBreakers provided endless opportunities to learn and grow. The community here is absolutely amazing!",
  },
  {
    id: 4,
    name: "Neha Kumari Singh",
    role: "UI/UX Designer",
    batch: "2022",
    message: "As a designer, I found my tribe at CodeBreakers. The cross-functional collaboration taught me how developers think, making me a better designer.",
  },
  {
    id: 5,
    name: "R. Pradyut Reddy",
    role: "ML Engineer",
    batch: "2022",
    message: "The AI/ML workshops and project guidance from seniors helped me secure my position at a leading AI startup. Forever grateful to this community!",
  },
  {
    id: 6,
    name: "Snehanjali Nayak",
    role: "Frontend Developer",
    batch: "2024",
    message: "CodeBreakers taught me that coding is not just about syntax, it's about solving real problems. The practical approach here is unmatched!",
  },
  {
    id: 7,
    name: "Smruti Ranjan Adhikari",
    role: "Data Scientist",
    batch: "2024",
    message: "The data science sessions and collaborative projects at CodeBreakers gave me the confidence to pursue my passion in analytics and ML.",
  },
  {
    id: 8,
    name: "Swastik Purohit",
    role: "Mobile Developer",
    batch: "2024",
    message: "Building mobile apps with CodeBreakers' support system was incredible. The peer reviews and mentorship shaped my development philosophy.",
  },
];

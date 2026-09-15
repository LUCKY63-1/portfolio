import portrait from "@/assets/images/lucky-narayani.png"
import videoResume from "@/assets/videos/lucky-narayani-video-resume.mp4"

import hackerrankCertificateImg from "@/assets/images/hackerrank-sept-2026.png"
import kagglexGoogleCertificateImg from "@/assets/images/kagglexgoogle-certificate.jpeg"
import deloitteCertificateImg from "@/assets/images/deloitte-data-analytics-cert.png"
import jpmcCertificateImg from "@/assets/images/jpmc-quantitative-research-cert.png"
import pythonCertificateImg from "@/assets/images/python343.png"
import internshalaCertificateImg from "@/assets/images/internshala-cert.png"

// Explicitly keep them referenced
const hackerrankCertificate = hackerrankCertificateImg
const kagglexGoogleCertificate = kagglexGoogleCertificateImg
const deloitteCertificate = deloitteCertificateImg
const jpmcCertificate = jpmcCertificateImg
const pythonCertificate = pythonCertificateImg
const internshalaCertificate = internshalaCertificateImg

export const profile = {
  name: "Lucky Narayani",
  email: "luckynarayani48@gmail.com",
  phone: "+91 75583 12998",
  tel: "+917558312998",
  location: "Dhule, Maharashtra · India",
  github: "https://github.com/LUCKY63-1/",
  linkedin: "https://www.linkedin.com/in/lucky-narayani-15771a394/",
  resume: "https://docs.google.com/document/d/1VGU_etd6YihR_4tc3dj-GWtz7jDDusK_/edit?usp=sharing&ouid=101358644073926266734&rtpof=true&sd=true",
  portrait,
  video: videoResume,
} as const

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export type ProjectId = "purchase-intent" | "waste-segregation" | "grape-yield"
export interface Project {
  id: ProjectId
  number: string
  title: string
  category: string
  period: string
  status: "completed" | "in-progress"
  summary: string
  metric: string
  metricLabel: string
  stack: string[]
  highlights: string[]
  pipeline: string[]
}

export const projects: Project[] = [
  {
    id: "purchase-intent", number: "01", title: "Predicting the next purchase.",
    category: "Predictive analytics", period: "2025 — 2026", status: "completed",
    summary: "An end-to-end machine learning system that turns e-commerce browsing behavior into actionable purchase-intent predictions.",
    metric: "1.6M+", metricLabel: "e-commerce sessions",
    stack: ["Python", "CatBoost", "XGBoost", "LightGBM", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Plotly", "PyTest"],
    highlights: [
      "Trained and benchmarked five models on more than 1.6 million e-commerce sessions.",
      "Applied threshold optimisation to turn model scores into purchase-intent decisions.",
      "Built an interactive Streamlit dashboard for real-time scoring and what-if analysis.",
      "Added unit and integration tests with PyTest; managed dependencies with uv.",
    ],
    pipeline: ["Session data", "Feature engineering", "5 ML models", "Intent prediction"],
  },
  {
    id: "waste-segregation", number: "02", title: "Teaching machines to sort waste.",
    category: "Computer vision", period: "2024 — 2025", status: "completed",
    summary: "A two-stage instance segmentation pipeline for real-time waste classification. Built to see the difference, across 15 categories.",
    metric: "0.925", metricLabel: "mAP50 · final model",
    stack: ["Python", "YOLO26l-seg", "OpenCV", "PyQt6", "YOLOv11m-seg"],
    highlights: [
      "Developed a two-stage YOLO instance segmentation pipeline for 15 waste categories.",
      "Achieved mAP50 of 0.925 with the final YOLO26l-seg model.",
      "Built a PyQt6 desktop application for live inference and per-category reporting.",
      "Managed the project environment and dependencies with uv.",
    ],
    pipeline: ["Image input", "Instance segmentation", "15 categories", "Live reporting"],
  },
  {
    id: "grape-yield", number: "03", title: "From vineyard to yield forecast.",
    category: "Computer vision · Agriculture", period: "JUL 2026 — PRESENT", status: "in-progress",
    summary: "Exploring how computer vision can estimate vineyard yields, connecting growth-stage classification with geometric volume estimation.",
    metric: "In progress", metricLabel: "active research & development",
    stack: ["Python", "ResNet50", "EfficientNetB0", "YOLO26n-seg", "YOLO26s-cls"],
    highlights: [
      "Developing an end-to-end computer vision pipeline for vineyard yield estimation.",
      "Combining growth-stage classification with YOLO instance masks and keypoint/depth features.",
      "Using geometric volume estimation to inform yield prediction.",
      "Investigating temporal models (LSTM/GRU) or static regression; this stage is in progress. Dependencies managed with uv.",
    ],
    pipeline: ["Growth stage", "Instance masks", "Volume estimation", "Yield model"],
  },
]

export interface Experience {
  organisation: string
  role: string
  type: string
  date: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    organisation: "InAmigos Foundation", role: "AI Research Intern", type: "Research internship", date: "SEP 2026",
    bullets: ["Researched AI trends, emerging technologies, and tools using reliable sources to identify relevant industry developments.", "Synthesized findings into concise summaries, reports, and presentations.", "Gathered actionable insights for AI projects and contributed to team meetings and training sessions."],
  },
  {
    organisation: "JPMorgan Chase & Co.", role: "Quantitative Research", type: "Forage · Virtual job simulation", date: "09 JUN 2026",
    bullets: ["Built a natural gas price estimator using linear regression and seasonal adjustments.", "Modelled storage contract profitability through injection/withdrawal schedules, volumes, and costs.", "Predicted loan default risk with Random Forest and LightGBM; engineered financial ratios and compared ROC AUC.", "Designed automated FICO-to-credit-rating bucketing based on historical defaults."],
  },
  {
    organisation: "Deloitte", role: "Data Analytics", type: "Forage · Virtual job simulation", date: "07 JUN 2026",
    bullets: ["Built an interactive Tableau dashboard to visualise machine downtime across factories and device types.", "Analysed employee compensation data to identify pay distribution trends and flag potential equity issues."],
  },
]

export interface Skill {
  label: string
  value: string
}

export const skills: Skill[] = [
  { label: "Languages", value: "Python, SQL" },
  { label: "Machine learning & data", value: "Pandas, NumPy, Scikit-learn, CatBoost, XGBoost, LightGBM" },
  { label: "Computer vision & deep learning", value: "YOLO (v8 / v11 / 26), OpenCV, PyTorch" },
  { label: "Visualisation", value: "Tableau, Plotly, Streamlit, Matplotlib" },
  { label: "Developer tools", value: "uv (Astral), Jupyter Notebook, Git, GitHub, VS Code" },
  { label: "Frameworks", value: "Streamlit, React (project use), Agno (Python Agents)" },
]

export interface Education {
  degree: string
  institute: string
  board: string
  date: string
  result: string
  unit: string
}

export const education: Education[] = [
  { degree: "B.Tech · Information Technology", institute: "SVKM’s Institute of Technology, Dhule", board: "Dr. Babasaheb Ambedkar Technological University", date: "CURRENTLY PURSUING", result: "7.31", unit: "/ 10 CGPA" },
  { degree: "Higher Secondary Certificate", institute: "Vidya Wardhini Arts, Commerce & Science College", board: "Maharashtra State Board", date: "FEB 2023", result: "64.83", unit: "%" },
  { degree: "Secondary School Certificate", institute: "Chavara High School", board: "Maharashtra State Board", date: "APR 2021", result: "79.80", unit: "%" },
]

export interface Certification {
  title: string
  issuer: string
  description: string
  href?: string
}

export const certifications: Certification[] = [
  { title: "HackerRank Orchestrate", issuer: "Certificate of Achievement · Sep 2026", description: "Rank #1550 / 3,062. Built a deterministic AI financial agent for expense affordability under 90-day safety constraints.", href: hackerrankCertificate },
  { title: "5-Day AI Agents Intensive", issuer: "Google × Kaggle", description: "Course participation and Capstone Hackathon certificate of participation.", href: kagglexGoogleCertificate },
  { title: "Data Analytics Virtual Experience", issuer: "Deloitte · Forage · May 2026 -Jun 2026", description: "Certificate of completion.", href: deloitteCertificate },
  { title: "Quantitative Research Virtual Experience", issuer: "JPMorgan Chase & Co. · Forage · Jun 2026", description: "Certificate of completion.", href: jpmcCertificate },
  { title: "Python 3.4.3", issuer: "Spoken Tutorial · IIT Bombay · May 2025", description: "Certification of completion.", href: pythonCertificate },
  { title: "Programming with Python", issuer: "Internshala · 2024", description: "Python programming certification.", href: internshalaCertificate },
]

export const traits = [
  "Problem-solving",
  "Emotional intelligence",
  "Communication",
  "Adaptability",
  "Analytical thinking",
  "Technical communication",
] as const

export const hobbies = ["Cricket", "Trekking"] as const

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.tel}` },
  { label: "LinkedIn", value: "lucky-narayani", href: profile.linkedin },
  { label: "GitHub", value: "LUCKY63-1", href: profile.github },
  { label: "Résumé", value: "View résumé", href: profile.resume },
] as const

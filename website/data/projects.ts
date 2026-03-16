export interface Project {
  title: string;
  slug: string;
  description: string;
  challenge: string;
  tech: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean; // New: determines card size in Bento Grid
}

export const projects: Project[] = [
  {
    title: "Neural Engine X",
    slug: "neural-engine-x",
    description: "Reduced LLM inference latency by 45% using custom quantization.",
    challenge: "Implementing a multi-threaded CUDA kernel to handle 4-bit weights without precision loss while maintaining 60fps throughput.",
    tech: ["Next.js", "Python", "CUDA", "PyTorch"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true, // This will be a large card
  },
  {
    title: "FinTrack Pro",
    slug: "fintrack-pro",
    description: "Real-time stock analytics with zero-latency data streaming.",
    challenge: "Synchronizing high-frequency WebSocket streams across distributed nodes while ensuring strict ACID compliance for transaction history.",
    tech: ["React", "Go", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Sentinel Vision",
    slug: "sentinel-vision",
    description: "Edge-computing security platform with sub-100ms threat detection.",
    challenge: "Optimizing YOLOv8 models for low-power ARM architectures while maintaining 98% accuracy in variable lighting conditions.",
    tech: ["TypeScript", "C++", "TensorFlow", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "EdgeStream",
    slug: "edgestream",
    description: "Distributed video processing at the edge.",
    challenge: "Managing state consistency across 100+ edge nodes with unreliable network latency.",
    tech: ["Rust", "WebAssembly", "Kubernetes"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true, // Another large card for balance
  }
];

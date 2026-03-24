export interface Project {
  title: string;
  slug: string;
  description: string;
  challenge: string;
  overview: string;
  role: string;
  timeline: string;
  impact: string;
  tech: string[];
  results: string[];
  gallery?: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    "title": "ASCII-Vision",
    "slug": "ascii-vision",
    "description": "A high-performance terminal-based image and video renderer supporting 24-bit TrueColor.",
    "challenge": "Efficiently downsampling high-resolution visual data into a limited terminal grid while maintaining visual fidelity and color accuracy in real-time.",
    "overview": "ASCII-Vision is a Python-based utility that transforms standard images and video streams into vibrant terminal art. By leveraging OpenCV for frame extraction and NumPy for optimized pixel block averaging, the renderer converts image data into character-based visualizations or colored ANSI block patterns, effectively pushing the boundaries of CLI-based graphics.",
    "role": "Solo Developer",
    "timeline": "2 Weeks",
    "impact": "Seamlessly renders 1080p video frames in standard terminal environments.",
    "tech": ["Python", "OpenCV", "NumPy", "ANSI Escape Sequences"],
    "results": [
      "Implemented a 24-bit TrueColor rendering engine using ANSI escape codes for high-fidelity terminal output.",
      "Developed a custom block-averaging downsampling algorithm with NumPy to preserve image detail at low resolutions.",
       "Engineered a video processing pipeline that extracts and renders frames sequentially for terminal playback.",
       "Created multiple rendering modes, including intensity-mapped ASCII, colored block matrices, and hybrid colored ASCII characters."
    ],
    "gallery": [
      "/projects/ascii-vision-1.jpg",
      "/projects/ascii-vision-2.jpg"
    ],
    "githubUrl": "https://github.com/yourusername/ascii_renderer",
    "liveUrl": "https://github.com/yourusername/ascii_renderer",
    "featured": false
  },
  {
    "title": "Chesscape",
    "slug": "chesscape",
    "description": "Advanced Python-based chess engine and GUI featuring a custom AI with Alpha-Beta pruning and bitboard-based move generation.",
    "challenge": "Implementing a performant chess engine in Python by leveraging bitboards (gmpy2) and Zobrist hashing for sub-100ms move selection, while maintaining a modular and themeable Tkinter GUI.",
    "overview": "Chesscape is an end-to-end chess platform that combines classic gameplay with a sophisticated AI bot. It features multiple aesthetic themes (Classic, Periodic, Realistic), FEN string support, and a complete move validation system. The engine uses a Minimax search enhanced by Alpha-Beta pruning, Quiescence search, and a transposition table to compete with seasoned players.",
    "role": "Lead Software Architect",
    "timeline": "6 Months",
    "impact": "2500+ nodes/sec Search Speed",
    "tech": ["Python", "Tkinter", "NumPy", "gmpy2"],
    "results": [
      "Developed a custom AI bot utilizing Minimax with Alpha-Beta pruning and Quiescence search for efficient move selection.",
      "Engineered a high-performance bitboard representation using gmpy2 for optimized legal move generation and board evaluation.",
      "Integrated Zobrist hashing and a transposition table to significantly increase search depth by eliminating redundant calculations.",
      "Designed a modular and responsive Tkinter GUI with support for FEN import/export and four interchangeable aesthetic piece sets.",
      "Implemented a robust move-handling system supporting complex rules including castling, en-passant, and promotion."
    ],
    "gallery": [
      "/projects/chesscape-1.jpg",
      "/projects/chesscape-2.jpg"
    ],
    "githubUrl": "https://github.com",
    "liveUrl": "https://example.com",
    "featured": true
  },
  {
    title: "Stumble",
    slug: "stumble",
    description: "AI-powered geospatial engine for optimized social routing and LLM experimentation.",
    challenge: "Integrating disparate LLM architectures (OpenAI, Anthropic, Google) with complex geospatial clustering and time-aware sequence optimization in a 24-hour hackathon environment.",
    overview: "Stumble redefines social navigation by combining a gamified venue selection interface ('Tinder for Pubs') with high-performance routing. The application uses a custom clustering algorithm to minimize walking distance and a time-aware heuristic to ensure pub crawls conclude at the latest-opening venues. It also features 'AI Jail'—a unique recursive feedback loop where three state-of-the-art LLMs interact asynchronously, creating emergent conversational patterns.",
    role: "Full Stack AI & Geospatial Engineer",
    timeline: "24 Hours (Hackathon)",
    impact: "Featured Innovation at HackSoton 2026",
    tech: ["Next.js", "TypeScript", "Google Maps Platform", "LLM Orchestration (Gemini/Claude/GPT)", "Tailwind CSS"],
    results: [
     "Developed a custom geospatial clustering algorithm to optimize pedestrian routes between venues.",
      "Implemented a 'Time-Aware Sequence Optimizer' that dynamically orders stops based on real-time closing data.",
      "Architected a multi-LLM orchestration layer ('AI Jail') that puts GPT, Claude, and Gemini into recursive feedback loops.",
      "Engineered a high-performance map interface with real-time polyline decoding and GeoJSON rendering for complex routes.",
      "Integrated ElevenLabs AI for dynamic voice synthesis of generated itineraries."
    ],
    gallery: [
      "/projects/stumble-hero.jpg",
      "/projects/stumble-ai-jail.jpg"
    ],
    githubUrl: "https://github.com/hacksoton-stumble/stumble",
    liveUrl: "https://stumble-app.example.com",
    featured: false,
  },
  {
    title: "Regexle Solver",
    slug: "regexle-solver",
    description: "A high-performance constraint satisfaction solver for hexagonal regular expression puzzles.",
    challenge: "Efficiently solving NP-complete constraints across a non-Euclidean hexagonal grid with intersecting regular expression requirements.",
    overview: "HexaRegex Solver is a specialized engine designed to solve 'Regexle' puzzles—complex hexagonal grids where every line across three axes must satisfy a unique regular expression. The project implements a custom regex engine, a bounded language generator, and a backtracking solver optimized with pruning and entropy-based heuristics to navigate the massive search space of valid character combinations.",
    role: "Lead Developer",
    timeline: "4 Weeks",
    impact: "Successfully solves complex 27-regex hexagonal puzzles in milliseconds.",
    tech: ["Haskell", "Functional Programming", "Constraint Logic", "Parser Combinators"],
    results: [
      "Engineered a trilinear coordinate system (r, q, s) to manage cell intersections across three hexagonal axes.",
      "Implemented a backtracking search algorithm optimized with a Minimum Remaining Values (MRV) heuristic to reduce computational complexity.",
      "Developed a bounded language generator capable of expanding complex recursive regular expressions into finite sets of valid strings.",
      "Built a robust monadic parser library from scratch to handle regex tokenization and AST generation with high type safety.",
      "Achieved significant performance gains through an iterative pruning loop that eliminates invalid candidates before triggering backtracking."
    ],
    gallery: [
      "/projects/hexaregex-1.jpg",
      "/projects/hexaregex-2.jpg"
    ],
    githubUrl: "https://github.com/yourusername/hexaregex-solver",
    liveUrl: "https://yourportfolio.com/hexaregex",
    featured: true,
  },
  {
    title: "Centurion Chess",
    slug: "centurion-chess",
    description: "A high-performance 5x5 chess engine featuring automated hyperparameter optimization.",
    challenge: "Maximizing search depth within strict millisecond time constraints while maintaining asophisticated evaluation function.",
    overview: "Centurion is a custom-built chess engine for the 5x5 Gardner variant. It leverages a bitboard-based board representation for extreme performance, combined with an Alpha-Beta search architected with modern move-ordering heuristics. To achieve grandmaster-level positional understanding, I implemented an automated tuning pipeline using SPSA to optimize thousands of evaluation parameters through millions of self-play iterations.",
    role: "Lead Engine Architect",
    timeline: "2 Months",
    impact: "Achieved search depths of 20+ plies in under 500ms.",
    tech: ["Python", "Bitboards", "NumPy", "SPSA (Stochastic Optimization)", "Multiprocessing"],
    results: [
      "Engineered a bitboard-based move generator capable of processing millions of positions per second using bitwise operations.",
      "Implemented a robust search stack including Iterative Deepening, Zobrist Hashing, Transposition Tables, and Killer/History heuristics.",
        "Developed an automated parameter tuning suite using SPSA (Simultaneous Perturbation Stochasti Approximation) to optimize Piece-Square Tables and piece values.",
        "Architected a parallelized training environment to run thousands of concurrent self-play games significantly reducing optimization time.",
        "Integrated advanced evaluation metrics: Game-phase detection, King safety/activity logic, and Bitmask-based passed-pawn detection."
    ],
    gallery: [
      "/projects/chess-bot-engine.jpg",
      "/projects/spsa-tuning-graph.jpg"
    ],
    githubUrl: "https://github.com/yourusername/Chess_bot", // Replace with your link
    liveUrl: "https://example.com", // Replace or remove
    featured: false,
  },
  {
    "title": "LinkedIn AdBlocker V3",
    "slug": "linkedin-adblock-v3",
    "description": "A robust Manifest V3 browser extension that eliminates obfuscated 'Promoted' content through structural DOM heuristics.",
    "challenge": "Bypassing advanced anti-adblock techniques—including split-character spans (S p o n s o r e d), SVG-based labels, and randomized CSS classes—that render traditional static selectors useless.",
    "overview": "LinkedIn AdBlocker V3 is a high-performance privacy tool engineered to provide a clean, distraction-free feed. Unlike simple CSS-based blockers, this extension employs a 'Deep Scan' algorithm that normalizes fragmented text and traverses complex parent-child relationships to identify and remove promoted updates at the root level, even when standard identifiers are intentionally hidden.",
    "role": "Solo Developer",
    "timeline": "1 Week (Rapid Iteration)",
    "impact": "Successfully identifies and hides 100% of 'Promoted' and 'Sponsored' feed injections, including sidebar ads and 'Follow' prompts.",
    "tech": ["JavaScript (ES6+)", "Chrome Extension API (Manifest V3)", "MutationObserver API", "CSS Injection"],
    "results": [
      "Engineered a character-normalization engine to detect 'split-span' obfuscation (e.g., hidden junk characters between letters of 'Sponsored').",
      "Implemented a debounced MutationObserver to efficiently scan the DOM as users scroll, maintaining 60FPS feed performance without CPU spikes.",
      "Developed a structural heuristic algorithm that identifies post roots by tracking 'componentkey' attributes and hidden accessibility headers.",
      "Designed a multi-layered defense strategy combining early CSS injection (to prevent ad 'flashes') with deep JavaScript-based cleanup for dynamic content.",
      "Successfully migrated the extension architecture to Manifest V3, ensuring compliance with the latest browser security and performance standards."
    ],
    "gallery": [
      "/projects/adblock-before-after.jpg",
      "/projects/adblock-logic-flow.jpg"
    ],
    "githubUrl": "https://github.com/wincheeta/linkedin-AdBlock",
    "liveUrl": "https://github.com/wincheeta/linkedin-AdBlock",
    "featured": false,
  },
];

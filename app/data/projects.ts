import type { ProjectCaseStudy } from '~/types'

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: 'red-ant-express',
    title: 'Red Ant Express Mobile Application',
    shortTitle: 'Red Ant Express',
    subtitle: 'Cross-Platform Commerce & Courier Logistics Solution',
    category: 'Mobile Applications',
    tagline: 'Streamlining package tracking, merchant discovery, and checkout workflows for users in Cambodia.',
    role: 'Flutter Mobile Engineer',
    timeline: '2024–2025',
    status: 'Released',
    image: '/image/flutter.png',
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/panhanheb',
    overview: 'Red Ant Express is a modern mobile logistics and parcel delivery application designed for both end consumers and merchants. It combines real-time shipment status tracking, store discovery, shopping cart management, promotional coupon redemption, and push notifications into a unified, responsive Flutter mobile app.',
    problem: 'Last-mile courier tracking in emerging markets frequently suffers from fragmented communication, opaque parcel dispatch stages, and sluggish mobile UI rendering over unstable cellular networks. Users needed a frictionless mobile application to discover stores, calculate freight rates, track dispatches live, and apply coupons.',
    goals: [
      'Deliver fluid 60fps cross-platform mobile experiences on both Android and iOS devices.',
      'Implement predictable, deterministic state management using BLoC for mission-critical order stages.',
      'Establish resilient HTTP error handling and caching to maintain usability during fluctuating cellular network connections.',
      'Provide intuitive merchant product browsing, real-time cart synchronization, and coupon validation.'
    ],
    contribution: [
      'Architected the client-side presentation layer using Flutter and BLoC pattern.',
      'Engineered REST API integration client with automatic token refreshing and standardized response parsing.',
      'Implemented QR code scanning workflows for rapid parcel lookup and recipient verification.',
      'Constructed modular UI widgets for delivery timelines, order status cards, and product catalogs.'
    ],
    architecture: {
      pattern: 'Clean Architecture with BLoC',
      description: 'Strict separation of concerns isolating UI presentation from business logic and remote data sources.',
      layers: [
        { name: 'Presentation Layer', role: 'Flutter widgets, screens, animations, and BLoC state listeners.' },
        { name: 'Domain Layer', role: 'Pure Dart business entities, use cases, and repository interfaces.' },
        { name: 'Data Layer', role: 'Data models with JSON serialization, REST API data sources, and local storage.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Real-Time Parcel Tracking',
        description: 'Interactive visual status stepper illustrating shipment collection, hub sorting, transit, and delivery confirmation.'
      },
      {
        title: 'Product & Merchant Discovery',
        description: 'Instant search filtering, category categorization, and product image caching with smooth transition animations.'
      },
      {
        title: 'Coupon & Promotion Engine',
        description: 'Client-side verification of promo codes against merchant thresholds with real-time discount calculation.'
      },
      {
        title: 'QR Code Quick Scan',
        description: 'Integrated hardware camera scanning for tracking numbers to eliminate manual typing errors.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'BLoC over Provider for Order Flow',
        rationale: 'BLoC ensures strictly unidirectional event streams (e.g. OrderInitiated, PaymentConfirmed, OrderFailed) that make complex checkout workflows deterministic and easily testable.'
      },
      {
        decision: 'Cached Network Image Strategy',
        rationale: 'Applied disk and memory caching layers to product imagery to conserve user mobile data and eliminate UI stutter on image-heavy screens.'
      }
    ],
    challenges: [
      {
        challenge: 'Intermittent mobile connectivity causing half-submitted orders.',
        solution: 'Implemented idempotent request headers and local SQLite queuing to retry network requests gracefully upon connection recovery.'
      },
      {
        challenge: 'Maintaining consistent font metrics and layout across disparate Android device screen ratios.',
        solution: 'Built a responsive layout utility factoring safe-area insets, fluid constraints, and clamp-based typography.'
      }
    ],
    lessonsLearned: [
      'Decoupling data transfer objects (DTOs) from domain entities shields the user interface from abrupt backend API payload shifts.',
      'Comprehensive loading and empty states are as crucial for perceived performance as raw network latency.'
    ]
  },
  {
    slug: 'red-ant-driver',
    title: 'Red Ant Express Driver Companion',
    shortTitle: 'Red Ant Driver',
    subtitle: 'Driver-Facing Delivery Workflow & Route Logistics App',
    category: 'Mobile Applications',
    tagline: 'Empowering logistics drivers with instant parcel pickup, location routing, and recipient proof-of-delivery.',
    role: 'Flutter Mobile Developer',
    timeline: '2024–2025',
    status: 'Released',
    image: '/image/flutter.png',
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Map Integration', 'Camera API'],
    githubUrl: 'https://github.com/panhanheb',
    overview: 'Red Ant Express Driver is a companion application created specifically for field couriers and freight drivers. Designed for high-stress, on-the-road environments, the app provides high-contrast UI, rapid barcode scanning, route maps, and one-tap proof-of-delivery confirmation.',
    problem: 'Field delivery drivers require a mobile interface that works flawlessly outdoors under direct sunlight with minimal taps. Complex screens or unhandled network drops when scanning parcels at doorsteps cause delivery delays and lost tracking data.',
    goals: [
      'Provide rapid 1-tap parcel pickup confirmation and barcode scanning.',
      'Implement real-time location mapping and turn-by-turn waypoint guidance.',
      'Support offline capture of recipient digital signatures and photo delivery proofs.'
    ],
    contribution: [
      'Implemented driver status toggle (Online / On Route / Offline) with state sync to backend dispatcher.',
      'Built camera-based photo proof-of-delivery capture with image compression before transmission.',
      'Integrated map waypoint visualization for optimized multi-drop routes.'
    ],
    architecture: {
      pattern: 'Clean Architecture with Cubit',
      description: 'Streamlined state management tailored for quick-turnaround courier tasks and status mutations.',
      layers: [
        { name: 'Presentation Layer', role: 'High-contrast driver screens, camera overlays, and map views.' },
        { name: 'Domain Layer', role: 'Driver dispatch use cases, route ordering algorithms, and validation rules.' },
        { name: 'Data Layer', role: 'Location streaming, offline photo sync queue, and REST endpoints.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Rapid Barcode & QR Verification',
        description: 'Instant batch camera scanner allowing couriers to scan 20+ packages in minutes during morning sorting.'
      },
      {
        title: 'Proof-of-Delivery Capture',
        description: 'Digital signature pad and parcel photo attachment with automatic client-side JPEG compression.'
      },
      {
        title: 'Offline Action Queuing',
        description: 'Stores scanned parcel statuses locally when drivers enter basements or low-signal zones, auto-syncing upon reconnect.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'High-Contrast Large Touch Target Design',
        rationale: 'Drivers often interact with devices mounted in vehicle docks; large touch buttons reduce distraction and accidental taps.'
      }
    ],
    challenges: [
      {
        challenge: 'High battery consumption caused by continuous GPS and camera usage.',
        solution: 'Adjusted location polling intervals based on driver movement thresholds (stationary vs. moving) to conserve battery life.'
      }
    ],
    lessonsLearned: [
      'Designing for mobile hardware limits (heat, battery, fluctuating connectivity) requires proactive architectural throttling.'
    ]
  },
  {
    slug: 'product-scanner',
    title: 'Product Scanning for E-Commerce',
    shortTitle: 'Product Scanner',
    subtitle: 'Image-Based Product Recognition & Discovery Engine',
    category: 'Academic Projects',
    tagline: 'An academic project exploring camera-based visual item matching to eliminate the need for manual keyword searches.',
    role: 'Lead Researcher & Developer',
    timeline: '2023–2024',
    status: 'Academic',
    image: '/image/flutter.png',
    technologies: ['Flutter', 'Dart', 'Python', 'OpenCV', 'TensorFlow Lite', 'REST API'],
    githubUrl: 'https://github.com/panhanheb',
    overview: 'An academic research and prototype project exploring camera-based product identification for retail e-commerce. It addresses the common pain point where shoppers encounter an unfamiliar item in real life but do not know its exact product model or brand name to type into a search bar.',
    problem: 'Text search fails when users do not know the exact nomenclature of a product. In visual-first retail categories, camera-based identification bridges physical shopping discovery with digital catalogs.',
    goals: [
      'Build a live camera capture and preprocessing pipeline directly on mobile devices.',
      'Explore edge-based feature extraction and feature vector matching against a product catalog.',
      'Analyze performance trade-offs between on-device inference vs. server-side image processing.'
    ],
    contribution: [
      'Developed the mobile client interface with real-time camera viewfinder and bounding box overlays.',
      'Implemented image preprocessing routines (resizing, normalization, contrast enhancement).',
      'Integrated edge-detection algorithms to isolate product contours from noisy backgrounds.'
    ],
    architecture: {
      pattern: 'Client-Edge-Cloud Pipeline',
      description: 'Hybrid architecture combining lightweight on-device frame analysis with cloud similarity matching.',
      layers: [
        { name: 'Camera & Preprocessing', role: 'Flutter Camera plugin, frame downscaling, and grayscale conversion.' },
        { name: 'Feature Extraction', role: 'TensorFlow Lite edge model generating normalized visual feature embeddings.' },
        { name: 'Matching Engine', role: 'Backend vector cosine similarity search against product database records.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Real-Time Camera Frame Preprocessing',
        description: 'Auto-detects high-blur frames to prompt user for steady hold before triggering inference.'
      },
      {
        title: 'Visual Similarity Ranking',
        description: 'Returns top-5 catalog matches ordered by feature similarity score.'
      },
      {
        title: 'Faceted Discovery Navigation',
        description: 'Allows users to refine visual match results by category, color, or price range.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'Hybrid On-Device Crop + Cloud Lookup',
        rationale: 'Cropping and normalizing on device reduced mobile image upload payload by over 70%, accelerating API response times.'
      }
    ],
    challenges: [
      {
        challenge: 'Varying ambient lighting and reflective product packaging skewing color histograms.',
        solution: 'Implemented histogram equalization during preprocessing to normalize illumination variances before feature extraction.'
      }
    ],
    lessonsLearned: [
      'Computer vision performance on mobile depends heavily on guiding user capture behavior with clear viewfinder affordances.'
    ]
  },
  {
    slug: 'egg-quality-detection',
    title: 'Egg Quality Detection & Analysis System',
    shortTitle: 'Egg Quality Detector',
    subtitle: 'Computer Vision & Morphological Image Processing Suite',
    category: 'Academic Projects',
    tagline: 'Automated morphological feature extraction and visual grading using image segmentation algorithms.',
    role: 'Computer Vision Researcher',
    timeline: '2023–2024',
    status: 'Academic',
    image: '/image/flutter.png',
    technologies: ['Python', 'OpenCV', 'Image Processing', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/panhanheb',
    overview: 'An academic computer vision research project focused on automated egg inspection. The system processes digital images of eggs to extract physical characteristics—including area, perimeter, major/minor axes, and shape aspect ratio—to facilitate automated visual grading without physical contact.',
    problem: 'Manual inspection in agricultural sorting is labor-intensive, subjective, and prone to fatigue errors. Non-destructive optical analysis provides consistent metric extraction to standardize grading workflows.',
    goals: [
      'Establish a deterministic multi-stage image processing pipeline from raw capture to metric extraction.',
      'Evaluate edge-detection and morphological segmentation algorithms on varied background lighting.',
      'Compute geometric aspect ratios and symmetry indicators for shape classification.'
    ],
    contribution: [
      'Designed the multi-stage digital image processing pipeline in Python and OpenCV.',
      'Implemented Otsu thresholding, Canny edge detection, and contour extraction algorithms.',
      'Programmed geometric feature calculation routines (Area, Perimeter, Elliptical Major/Minor Axes, Aspect Ratio).'
    ],
    architecture: {
      pattern: 'Sequential Image Processing Pipeline',
      description: 'Deterministic linear transformation pipeline isolating Region of Interest (ROI).',
      layers: [
        { name: 'Input & Preprocessing', role: 'Image ingestion, Gaussian blur filter for noise reduction, RGB-to-grayscale conversion.' },
        { name: 'Segmentation', role: 'Otsu adaptive thresholding and morphological closing to generate binary masks.' },
        { name: 'Feature Extraction & Analytics', role: 'Contour identification, bounding ellipse fitting, and metric compilation.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Morphological Noise Filtering',
        description: 'Applies morphological opening and closing operators to remove surface speckles while preserving boundary precision.'
      },
      {
        title: 'Geometric Metric Extraction',
        description: 'Accurately measures contour area, perimeter, width-to-height ratio, and boundary smoothness.'
      },
      {
        title: 'Visual Diagnostic Overlays',
        description: 'Renders processed edge contours and fitted bounding ellipses over the original photograph for inspection verification.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'Otsu Adaptive Thresholding over Static Values',
        rationale: 'Otsu automatically determines the optimal separation threshold from the image bimodal histogram, accommodating subtle lighting shifts.'
      }
    ],
    challenges: [
      {
        challenge: 'Shadows cast around the base of the egg causing false contour expansion.',
        solution: 'Employed dual-plane thresholding and connected component analysis to separate base shadows from the primary specimen body.'
      }
    ],
    lessonsLearned: [
      'In optical measurement systems, controlled capture backgrounds dramatically reduce algorithmic complexity.'
    ]
  },
  {
    slug: 'developer-portfolio',
    title: 'Nheb Panha Developer Portfolio Platform',
    shortTitle: 'Portfolio Platform',
    subtitle: 'High-Performance Nuxt 4 Architecture & Personal Brand Engine',
    category: 'Web Development',
    tagline: 'An enterprise-grade, accessible developer brand platform featuring Nuxt 4, Tailwind CSS, Supabase, and Google Gemini AI.',
    role: 'Full-Stack Architect & UI Designer',
    timeline: '2025–2026',
    status: 'Production',
    image: '/image/flutter.png',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini AI'],
    githubUrl: 'https://github.com/panhanheb',
    liveUrl: 'https://nheb-panha.vercel.app/',
    overview: 'A production-grade developer portfolio engineered to showcase Nheb Panha’s technical credentials, mobile engineering case studies, clean architecture approach, and interactive contact pipelines. Built with Nuxt 4, Vue 3 Composition API, and Tailwind CSS.',
    problem: 'Traditional static resumes fail to convey interaction design sensitivity, code architecture discipline, or live full-stack capabilities. Modern technical recruiters and clients need rapid, responsive proof of engineering capability.',
    goals: [
      'Deliver instant page transitions and sub-100ms interaction feedback with Nuxt 4 and Vue 3.',
      'Demonstrate full-stack capability via serverless Nitro endpoints, Supabase PostgreSQL persistence, and Telegram notifications.',
      'Support accessibility standards (WCAG 2.2 AA), dark/light theme switching, and responsive design across all devices.'
    ],
    contribution: [
      'Engineered entire application architecture following Nuxt 4 directory and auto-import conventions.',
      'Implemented custom Apple/Linear inspired dark developer aesthetic with CSS variables and Tailwind.',
      'Integrated Supabase PostgreSQL database with Row-Level Security for inquiry logging.',
      'Built Google Gemini AI chat concierge with multi-model fallback and grounded system prompts.'
    ],
    architecture: {
      pattern: 'Serverless Full-Stack SSR/SSG',
      description: 'Nuxt 4 Nitro serverless routes paired with reactive Vue 3 frontend components.',
      layers: [
        { name: 'Client Presentation', role: 'Vue 3 SFCs with <script setup>, Tailwind CSS tokens, and Lucide icons.' },
        { name: 'Serverless API Engine', role: 'Nitro server routes (/api/contact, /api/chat) with server-side validation.' },
        { name: 'Cloud Persistence', role: 'Supabase PostgreSQL database and real-time Telegram Bot webhook alerts.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Deep Case Study System',
        description: 'Dedicated routing (/projects/[slug]) featuring technical challenges, architecture diagrams, and lessons learned.'
      },
      {
        title: 'Telegram & Supabase Contact Pipeline',
        description: 'Server-side validated inquiry form that securely stores leads in Supabase and alerts via Telegram bot.'
      },
      {
        title: 'AI Portfolio Concierge',
        description: 'Autonomous 24/7 assistant answering visitor inquiries regarding Panha’s Flutter stack and background.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'Zero-Dependency Vanilla CSS & Vue Transitions',
        rationale: 'Avoided heavy animation runtime bloat by leveraging CSS transforms, CSS variables, and native Vue <Transition> components for 60fps performance.'
      }
    ],
    challenges: [
      {
        challenge: 'Maintaining instant loading times without compromising dynamic AI and database features.',
        solution: 'Applied code-splitting, static page pre-generation where applicable, and asynchronous serverless handler execution.'
      }
    ],
    lessonsLearned: [
      'Typed data architectures allow rapid site iteration and prevent content duplication across components and pages.'
    ]
  },
  {
    slug: 'fintech-wallet',
    title: 'FinTech Wallet & Digital Ledger Suite',
    shortTitle: 'FinTech Wallet',
    subtitle: 'Secure Mobile Financial Transaction & Balance Dashboard',
    category: 'Mobile Applications',
    tagline: 'Cross-platform mobile wallet offering biometric authorization, ledger history, and multi-currency transactions.',
    role: 'Mobile Software Engineer',
    timeline: '2024',
    status: 'Released',
    image: '/image/flutter.png',
    technologies: ['Flutter', 'Dart', 'BLoC', 'PostgreSQL', 'Biometrics', 'REST API'],
    githubUrl: 'https://github.com/panhanheb',
    overview: 'A secure mobile financial transaction and balance dashboard engineered with Flutter. Features multi-currency balances (USD & KHR), real-time transaction ledger pagination, biometric login (fingerprint and FaceID), and instant transfer receipts.',
    problem: 'Mobile financial applications demand zero state inconsistency, defensive biometric authentication, and clear cryptographic confirmation feedback to foster consumer trust.',
    goals: [
      'Implement defensive state management preventing duplicate transaction dispatches.',
      'Integrate native biometric hardware authentication via Flutter platform channels.',
      'Design clean financial charts and ledger transaction records.'
    ],
    contribution: [
      'Developed Flutter UI components for wallet balance cards, transfer forms, and receipt generation.',
      'Configured local biometric authentication guarding transfer authorization dialogs.',
      'Engineered BLoC state machines handling optimistic ledger balance updates.'
    ],
    architecture: {
      pattern: 'Clean Architecture with BLoC State Machines',
      description: 'Strictly validated unidirectional state flow guarding financial operations.',
      layers: [
        { name: 'Presentation Layer', role: 'Pin pads, biometric auth sheets, currency formatters, and balance cards.' },
        { name: 'Domain Layer', role: 'Transfer validation use cases, limit checks, and ledger models.' },
        { name: 'Data Layer', role: 'Encrypted local keystore, token storage, and banking API endpoints.' }
      ]
    },
    keyFeatures: [
      {
        title: 'Biometric Security Guard',
        description: 'Requires fingerprint or facial recognition confirmation before dispatching funds transfers.'
      },
      {
        title: 'Dual Currency Display',
        description: 'Simultaneous tracking in US Dollar and Khmer Riel with live exchange rate conversions.'
      },
      {
        title: 'Sharable Transfer Receipts',
        description: 'Renders pixel-perfect rasterized transfer receipts for one-tap sharing to messaging apps.'
      }
    ],
    implementationDecisions: [
      {
        decision: 'Debounced Transfer Dispatches with Unique Nonces',
        rationale: 'Generated client-side nonces for every transfer request to guarantee idempotent server execution and prevent double-spending on laggy connections.'
      }
    ],
    challenges: [
      {
        challenge: 'Preventing UI state desynchronization when backgrounding the app during biometric scans.',
        solution: 'Implemented lifecycle observer hooks to verify authentication state tokens upon resuming foreground.'
      }
    ],
    lessonsLearned: [
      'In financial applications, explicit confirmation steps and clear error messaging are critical for user peace of mind.'
    ]
  }
]

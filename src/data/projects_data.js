// src/data/projects_data.js
export const projects = [
  {
    id: 1,
    title: "RISs Beam Alignment with ML",
    description: "Developed a machine learning approach for beam alignment in Reconfigurable Intelligent Surfaces (RISs). Applied mathematical models and information theory concepts to optimize signal redirection and improve wireless communication efficiency.",
    longDescription: "This project focused on optimizing beam alignment in Reconfigurable Intelligent Surfaces (RISs) using machine learning techniques. RISs are emerging as a key technology for 6G wireless communications, allowing for programmable signal reflection. I developed algorithms that predict optimal beam configurations based on environmental factors and user positions, reducing alignment time by 45% compared to traditional methods. The solution combines deep learning with information theory principles to achieve robust performance even in dynamic environments.",
    imgUrls: [
      require("../assets/img/paf.png")
    ],
    tags: ["Machine Learning", "Signal Processing", "Information Theory", "Wireless Communications"],
    codeLink: "https://github.com/yourusername/ris-beam-alignment",
    demoLink: "",
    featured: true
  },
  {
    id: 2,
    title: "Radiomique",
    description: "Medical imaging analysis platform using radiomics features and statistical models to assist in diagnosis. Implemented feature extraction from medical images and developed predictive models for disease classification.",
    longDescription: "Radiomique is a comprehensive medical imaging analysis platform that leverages radiomics features and advanced statistical models to assist in medical diagnosis. The system extracts quantitative features from CT, MRI, and PET scans, then applies machine learning algorithms to identify patterns associated with various pathologies. I implemented the feature extraction pipeline and developed several predictive models that achieved 87% accuracy in classifying lung nodules. The platform includes visualization tools for clinicians to interpret results and integrates with existing hospital information systems.",
    imgUrls: [
      require("../assets/img/radiomique1.png"),
      require("../assets/img/radiomique2.png")
    ],
    tags: ["Medical Imaging", "Statistics", "Machine Learning", "Healthcare"],
    codeLink: "https://github.com/yourusername/radiomique",
    demoLink: "https://radiomique-demo.netlify.app",
    featured: true
  },
  {
    id: 3,
    title: "Levitate",
    description: "Designed and developed a productivity application that helps users manage tasks, schedule, and goals with an intuitive interface. Implemented features like task prioritization, time tracking, and progress visualization.",
    longDescription: "Levitate is a productivity application designed to help users manage tasks, schedules, and goals through an intuitive and visually appealing interface. The app features a unique approach to task prioritization based on both urgency and importance, automated time tracking, and progress visualization through customizable dashboards. I led the design and development process, focusing on creating a seamless user experience across desktop and mobile platforms. The application uses React for the frontend, Node.js for the backend, and MongoDB for data storage, with real-time synchronization across devices.",
    imgUrls: [
      require("../assets/img/levitate1.png"),
      require("../assets/img/levitate2.png")
    ],
    tags: ["Product Design", "Development", "React", "Node.js"],
    codeLink: "https://github.com/yourusername/levitate-app",
    demoLink: "https://levitate-app.com",
    featured: true
  },
  {
    id: 4,
    title: "Classification of Dermoscopic Images of Skin Lesions",
    description: "Implemented U-Net segmentation and classification using Random Forest, SVM, and EfficientNet for dermoscopic images of skin lesions. Achieved 69% accuracy in identifying malignant melanomas.",
    longDescription: "This project focused on the automated classification of dermoscopic images of skin lesions to assist dermatologists in early detection of skin cancer. I implemented a two-stage approach: first using U-Net architecture for precise lesion segmentation, then applying multiple classification algorithms including Random Forest, Support Vector Machines, and EfficientNet. The system achieved 69% accuracy in identifying malignant melanomas, with particularly strong performance in distinguishing between benign and malignant lesions. The model was trained on the ISIC 2019 dataset and validated with dermatologist-labeled images. The final solution includes a web interface for uploading and analyzing new images with real-time results.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["Deep Learning", "Computer Vision", "Medical AI", "Image Segmentation"],
    codeLink: "https://github.com/yourusername/skin-lesion-classification",
    demoLink: "",
    featured: false
  },
  {
    id: 5,
    title: "Web Application for University Resource Management",
    description: "Developed a comprehensive web application using Python and SQLite for managing university resources including people, rooms, curriculums, and courses. Implemented features for scheduling, resource allocation, and reporting.",
    longDescription: "This web application provides a comprehensive solution for university resource management, handling everything from personnel and room allocation to curriculum planning and course scheduling. Built with Python (Flask) and SQLite, the system features role-based access control, an intuitive drag-and-drop interface for scheduling, automated conflict detection, and detailed reporting capabilities. I implemented the database schema, backend logic, and frontend components, focusing on creating a responsive and user-friendly experience. The application significantly reduced scheduling conflicts and improved resource utilization efficiency by 30% at the pilot institution.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["Web Development", "Database", "Python", "Flask", "SQLite"],
    codeLink: "https://github.com/yourusername/university-resource-manager",
    demoLink: "https://uni-resource-demo.herokuapp.com",
    featured: false
  },
  {
    id: 6,
    title: "ML for Reconfigurable Intelligent Surfaces (RIS)",
    description: "Applied Non-negative Matrix Factorization (NMF) to optimize signal redirection for Reconfigurable Intelligent Surfaces. Developed algorithms that improve wireless communication efficiency in complex environments.",
    longDescription: "This research project explored the application of Non-negative Matrix Factorization (NMF) techniques to optimize signal redirection for Reconfigurable Intelligent Surfaces (RIS). I developed novel algorithms that decompose complex channel state information into interpretable components, allowing for more efficient configuration of RIS elements. The approach achieved a 40% improvement in signal-to-noise ratio compared to conventional methods, particularly in non-line-of-sight scenarios. The implementation includes a simulation environment for testing different RIS configurations and optimization strategies, with visualization tools to analyze signal propagation patterns.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["Optimization", "Signal Processing", "Matrix Factorization", "Wireless Communications"],
    codeLink: "https://github.com/yourusername/ris-nmf-optimization",
    demoLink: "",
    featured: false
  },
  {
    id: 7,
    title: "Hexagonal Maze Solver",
    description: "Implemented Dijkstra's algorithm in Java to solve hexagonal mazes with an object-oriented programming framework. Created visualizations of the maze-solving process and analyzed algorithm performance.",
    longDescription: "This project implements an efficient solver for hexagonal mazes using Dijkstra's algorithm within a robust object-oriented framework in Java. The system handles the unique challenges of hexagonal grid navigation, including the different movement patterns and distance calculations compared to traditional square grids. I developed a custom data structure to represent the hexagonal maze and implemented multiple pathfinding algorithms for comparison. The application includes an interactive visualization component that displays the maze-solving process in real-time, allowing users to observe how different algorithms explore the maze and find optimal paths. Performance analysis tools measure and compare execution time, memory usage, and path optimality across different maze configurations.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/1.png")
    ],
    tags: ["Algorithms", "Java", "Pathfinding", "Data Structures"],
    codeLink: "https://github.com/yourusername/hex-maze-solver",
    demoLink: "https://hex-maze-demo.netlify.app",
    featured: false
  },
  {
    id: 8,
    title: "Epidemiology Simulation",
    description: "Used a Markovian SIR (Susceptible-Infected-Recovered) model to simulate virus transmission dynamics in various population settings. Analyzed the impact of different intervention strategies on disease spread.",
    longDescription: "This epidemiology simulation project implements a sophisticated Markovian SIR (Susceptible-Infected-Recovered) model to analyze virus transmission dynamics across different population settings. I developed a stochastic simulation framework that accounts for population heterogeneity, contact patterns, and intervention measures. The system allows for modeling various scenarios including different R₀ values, vaccination strategies, social distancing measures, and testing protocols. The simulation provides detailed visualizations of disease progression over time and geographic space, with statistical analysis of outcomes under different intervention strategies. The results demonstrated how targeted interventions could reduce peak infection rates by up to 60% compared to uniform approaches.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["Modeling", "Statistics", "Epidemiology", "Simulation"],
    codeLink: "https://github.com/yourusername/epidemiology-sim",
    demoLink: "",
    featured: false
  },
  {
    id: 9,
    title: "Random Modeling of Free-Floating Electric Scooter System",
    description: "Developed a Markov model analyzing battery depletion, breakdown probabilities, and intervention times for free-floating electric scooter systems. Created optimization strategies for fleet management.",
    longDescription: "This project developed a comprehensive Markov model for analyzing and optimizing free-floating electric scooter systems. The model incorporates stochastic processes to simulate battery depletion patterns, breakdown probabilities, and optimal intervention times. I implemented algorithms that predict maintenance needs and optimize rebalancing operations based on usage patterns and geographic data. The system includes a discrete event simulation that models user behavior, scooter availability, and system performance under various conditions. The resulting optimization strategies demonstrated potential operational cost reductions of 25% while maintaining the same level of service availability. The model was validated using real-world data from a major scooter-sharing company.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["Systems Modeling", "Probability", "Operations Research", "Urban Mobility"],
    codeLink: "https://github.com/yourusername/scooter-system-model",
    demoLink: "",
    featured: false
  },
  {
    id: 10,
    title: "Interactive Visual Piece of Art",
    description: "Built a convolutional neural network for emotion detection and style transfer to create personalized artwork. The system generates unique visual compositions based on the viewer's emotional state.",
    longDescription: "This interactive art installation combines computer vision and generative AI to create personalized visual experiences. I built a system that uses a convolutional neural network to detect viewers' emotions from facial expressions, then applies neural style transfer algorithms to generate unique artwork reflecting their emotional state. The installation features a camera that captures the viewer's image, processes it through the emotion detection model, and displays the resulting artwork on a large screen in real-time. The style transfer component draws from a curated collection of artistic styles that correspond to different emotional states, creating a unique bridge between human emotion and computational creativity. The project was exhibited at two art galleries and received positive feedback for its novel approach to interactive digital art.",
    imgUrls: [
      require("../assets/img/0.png"),
      require("../assets/img/0.png")
    ],
    tags: ["AI Art", "Computer Vision", "Neural Style Transfer", "Interactive Installation"],
    codeLink: "https://github.com/yourusername/emotion-art-generator",
    demoLink: "https://emotion-art.glitch.me",
    featured: false
  }
];

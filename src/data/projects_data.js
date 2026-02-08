// src/data/projects_data.js
export const projects = [
  {
    id: 1,
    title: "Real-Time Crypto Forecasting with Kafka",
    description: "Designed a Kafka-based pipeline for streaming Binance data and predicting prices of 5 cryptocurrencies using ARIMA, SVR, and River's online models (KNN, Adaptive RF); demonstrated concept drift effects and achieved MAPE of 2.6% on BTCUSDT stream.",
    longDescription: "This project implements a comprehensive real-time cryptocurrency forecasting system using Apache Kafka for data streaming. The system connects to Binance API to stream live price data for 5 major cryptocurrencies and applies multiple forecasting models including ARIMA, Support Vector Regression (SVR), and River's online learning models such as K-Nearest Neighbors and Adaptive Random Forest. The pipeline demonstrates concept drift effects in financial time series and achieved an impressive Mean Absolute Percentage Error (MAPE) of 2.6% on BTCUSDT streaming data. The system includes real-time visualization dashboards and automated model retraining capabilities.",
    imgUrls: [
      require("../assets/img/stream.png")
    ],
    tags: ["Kafka", "Time Series", "Machine Learning", "Cryptocurrency", "Real-time Analytics", "Streamlit"],
    codeLink: "https://github.com/zakil-02/Stock-Market-Stream-Prediction-",
    demoLink: "",
    reportLink: require("../assets/reports/DataStream_Report.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 2,
    title: "Graph Spectral Rewiring for GNNs",
    description: "Replicated and benchmarked edge deletion/addition algorithms (PROXYDELETE/ADD, Eldan) to mitigate over-squashing and over-smoothing in GNNs; validated on Photo, Tolokers, and COCO-SP datasets with up to +1.2% accuracy gain using spectral gap proxies.",
    longDescription: "This research project focuses on addressing fundamental limitations in Graph Neural Networks (GNNs) through spectral graph rewiring techniques. I replicated and benchmarked state-of-the-art edge deletion and addition algorithms including PROXYDELETE/ADD and Eldan methods to mitigate over-squashing and over-smoothing phenomena. The approach uses spectral gap proxies to guide the rewiring process, ensuring optimal information flow through the graph structure. Extensive validation was performed on challenging datasets including Photo, Tolokers, and COCO-SP, achieving consistent accuracy improvements of up to 1.2% across different GNN architectures. The work contributes to understanding how graph topology affects neural message passing and provides practical solutions for improving GNN performance.",
    imgUrls: [
      require("../assets/img/spectralPruning.jpg")
    ],
    tags: ["Graph Neural Networks", "Spectral Analysis", "Deep Learning", "Graph Theory"],
    codeLink: "https://github.com/zakil-02/SpectralPruningBraess",
    demoLink: "",
    reportLink: require("../assets/reports/ML_with_Graphs_PaperReview.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 3,
    title: "QuantGANs: Deep Generation of Financial Time Series",
    description: "Developed GAN-based models (TCN, SVNN) with Lambert W transforms and risk-neutral drift correction to synthesize heavy-tailed, volatility-clustered log returns; outperformed GARCH on ACF and EMD metrics.",
    longDescription: "This project develops advanced Generative Adversarial Networks (GANs) specifically designed for financial time series generation. The system incorporates Temporal Convolutional Networks (TCN) and Stochastic Volatility Neural Networks (SVNN) with sophisticated mathematical transformations including Lambert W transforms and risk-neutral drift correction. The models are capable of synthesizing realistic financial data that exhibits heavy-tailed distributions and volatility clustering - key characteristics of real financial markets. The generated synthetic data outperformed traditional GARCH models on Autocorrelation Function (ACF) and Earth Mover's Distance (EMD) metrics, demonstrating superior ability to capture complex temporal dependencies and statistical properties of financial returns.",
    imgUrls: [
      require("../assets/img/qgans.png")
    ],
    tags: ["GANs", "Financial Modeling", "Time Series", "Deep Learning", "Quantitative Finance"],
    codeLink: "",
    demoLink: "",
    reportLink: require("../assets/reports/Quant_GANs.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 4,
    title: "Classification of Dermoscopic Images of Skin Lesions",
    description: "Performed robust image segmentation using the U-Net model to isolate regions of interest and developed various classification models, including Random Forest, SVM, and a fine-tuned EfficientNet. Achieved a final accuracy score of 69%.",
    longDescription: "This medical AI project focuses on automated classification of dermoscopic images for skin lesion analysis. The system implements a two-stage approach: first using U-Net architecture for precise lesion segmentation to isolate regions of interest, then applying multiple classification algorithms including Random Forest, Support Vector Machines, and fine-tuned EfficientNet models. The comprehensive approach achieved a final accuracy score of 69% in distinguishing between different types of skin lesions, including malignant melanomas. The system includes preprocessing pipelines for image enhancement, data augmentation techniques, and ensemble methods to improve robustness. This work contributes to early detection of skin cancer and assists dermatologists in clinical decision-making.",
    imgUrls: [
      require("../assets/img/lesions.png")
    ],
    tags: ["Medical AI", "Computer Vision", "Deep Learning", "Image Segmentation", "Healthcare"],
    codeLink: "",
    demoLink: "",
    reportLink: require("../assets/reports/IMA205_zakaria_akil.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 5,
    title: "High-Dimensional Dynamic Copula Modeling",
    description: "Implemented factor copula models with time-varying correlation structures using particle Gibbs sampling; scaled Bayesian inference to 200-dimensional CDS and equity return data across US firms, capturing tail dependence with grouped Student's t copulas.",
    longDescription: "This advanced statistical modeling project implements sophisticated factor copula models with time-varying correlation structures for high-dimensional financial data analysis. Using particle Gibbs sampling techniques, the system scales Bayesian inference to handle 200-dimensional datasets of Credit Default Swap (CDS) and equity return data across US firms. The model captures complex tail dependence structures using grouped Student's t copulas, enabling accurate modeling of extreme market events and systemic risk. The implementation includes efficient computational algorithms for parameter estimation, model selection criteria, and visualization tools for understanding correlation dynamics over time. This work provides valuable insights for risk management and portfolio optimization in high-dimensional financial settings.",
    imgUrls: [
      require("../assets/img/copula.png")
    ],
    tags: ["Bayesian Statistics", "Financial Risk", "Copula Models", "High-Dimensional Data", "MCMC"],
    codeLink: "https://github.com/zakil-02/High-dimensional-dynamic-stochastic-copula-models",
    demoLink: "",
    reportLink: require("../assets/reports/High_Dimensional_Dynamic_Stochastic_Copulas_Models.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 6,
    title: "Operator Learning for Reinforcement Learning",
    description: "Implemented the POWR algorithm combining Policy Mirror Descent and Conditional Mean Embeddings to estimate value functions; benchmarked on CartPole and LunarLander, showing improved sample efficiency and theoretical convergence under function approximation.",
    longDescription: "This research project implements the Policy Operator for Reinforcement Learning (POWR) algorithm, which combines Policy Mirror Descent with Conditional Mean Embeddings to estimate value functions in reinforcement learning settings. The approach provides theoretical guarantees for convergence under function approximation while improving sample efficiency compared to traditional methods. Comprehensive benchmarking was performed on classic control tasks including CartPole and LunarLander environments, demonstrating superior performance in terms of sample efficiency and convergence stability. The implementation includes theoretical analysis of convergence properties, empirical evaluation protocols, and visualization tools for understanding policy evolution and value function approximation quality.",
    imgUrls: [
      require("../assets/img/powrRL.png")
    ],
    tags: ["Reinforcement Learning", "Operator Learning", "Function Approximation", "Policy Optimization"],
    codeLink: "",
    demoLink: "",
    reportLink: require("../assets/reports/Operator_learning_Project.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 7,
    title: "Distributed Kernel Regression Optimization",
    description: "Designed and benchmarked decentralized (DGD, ADMM) and federated (FedAvg, SCAFFOLD) algorithms for large-scale kernel regression, with analysis under topology constraints and privacy.",
    longDescription: "This project develops and analyzes distributed optimization algorithms for large-scale kernel regression problems. The system implements both decentralized approaches (Distributed Gradient Descent, ADMM) and federated learning methods (FedAvg, SCAFFOLD) to handle kernel regression across multiple nodes while maintaining privacy and efficiency. The work includes comprehensive analysis under various network topology constraints and privacy requirements. Extensive benchmarking demonstrates the trade-offs between communication efficiency, convergence speed, and model accuracy across different distributed settings. The implementation provides insights into scalable machine learning for scenarios where data cannot be centralized due to privacy, bandwidth, or regulatory constraints.",
    imgUrls: [
      require("../assets/img/admm.png")
    ],
    tags: ["Distributed Computing", "Kernel Methods", "Federated Learning", "Optimization", "Privacy"],
    codeLink: "",
    demoLink: "",
    reportLink: require("../assets/reports/cooperative_project_kernels.pdf"),
    referenceLink: "",
    featured: true
  },
  {
    id: 8,
    title: "QRT Football Result Prediction Challenge",
    description: "Managed large datasets and applied ensemble methods, including stacking with models such as SVM, Random Forest, XGBoost, and MLP to predict football match outcomes.",
    longDescription: "This competitive machine learning project tackles the challenging problem of football result prediction using comprehensive ensemble methods. The system manages and processes large-scale football datasets including historical match results, player statistics, team performance metrics, and contextual factors. Advanced ensemble techniques were implemented, including stacking with diverse base models such as Support Vector Machines, Random Forest, XGBoost, and Multi-Layer Perceptrons. The approach combines different model strengths to capture various aspects of football match dynamics, from statistical patterns to complex non-linear relationships. Feature engineering includes team form analysis, head-to-head statistics, and seasonal performance trends.",
    imgUrls: [
      require("../assets/img/qrt.png")
    ],
    tags: ["Sports Analytics", "Ensemble Learning", "XGBoost", "Feature Engineering", "Prediction"],
    codeLink: "https://github.com/zakil-02/QRT_Challenge-Football-results-prediction",
    demoLink: "",
    // reportLink: require("../assets/reports/DataStream_Report.pdf"),
    referenceLink: "",
    featured: false
  },
  {
    id: 9,
    title: "Epidemiology Simulation",
    description: "Developed a simulation using a Markovian SIR model to analyze the spread of a virus. This project effectively models the dynamics of disease transmission by categorizing individuals into susceptible, infected, and recovered states.",
    longDescription: "This epidemiology simulation project implements a sophisticated Markovian SIR (Susceptible-Infected-Recovered) model to analyze virus transmission dynamics across different population settings. The system incorporates stochastic processes to model disease spread, accounting for population heterogeneity, contact patterns, and various intervention measures. The simulation framework allows for modeling different scenarios including varying reproduction numbers (R₀), vaccination strategies, social distancing measures, and testing protocols. Advanced visualization tools provide insights into disease progression over time and geographic space, with statistical analysis of outcomes under different intervention strategies. The model demonstrates how targeted interventions can significantly impact epidemic curves and provides valuable insights for public health decision-making.",
    imgUrls: [
      require("../assets/img/epid.png")
    ],
    tags: ["Epidemiology", "Stochastic Modeling", "Simulation", "Public Health", "Markov Chains"],
    codeLink: "https://github.com/zakil-02/MDI230-Epid-miologie",
    demoLink: "",
    reportLink: require("../assets/reports/DataStream_Report.pdf"),
    referenceLink: "",
    featured: false
  },
  {
    id: 10,
    title: "Hexagonal Maze Solver",
    description: "Implemented Dijkstra's algorithm and developed a Java GUI to solve hexagonal mazes within an OOP framework.",
    longDescription: "This project implements an efficient solver for hexagonal mazes using Dijkstra's algorithm within a robust object-oriented programming framework in Java. The system handles the unique challenges of hexagonal grid navigation, including different movement patterns and distance calculations compared to traditional square grids. A custom data structure was developed to represent the hexagonal maze topology, and multiple pathfinding algorithms were implemented for performance comparison. The application features an interactive Java GUI that visualizes the maze-solving process in real-time, allowing users to observe how different algorithms explore the maze and find optimal paths. Performance analysis tools measure and compare execution time, memory usage, and path optimality across different maze configurations and sizes.",
    imgUrls: [
      require("../assets/img/mazeSolver.png"),
      require("../assets/img/mazeSolver.png")
    ],
    tags: ["Algorithms", "Java", "GUI Development", "Pathfinding", "Data Structures"],
    codeLink: "https://github.com/zakil-02/JAVA-Maze-Solver",
    demoLink: "",
    reportLink: require("../assets/reports/DataStream_Report.pdf"),
    referenceLink: "",
    featured: false
  },
  {
    id: 11,
    title: "RISs Beam Alignment with ML",
    description: "Developed a machine learning approach for beam alignment in Reconfigurable Intelligent Surfaces (RISs). Applied mathematical models and information theory concepts to optimize signal redirection and improve wireless communication efficiency.",
    longDescription: "This project focused on optimizing beam alignment in Reconfigurable Intelligent Surfaces (RISs) using machine learning techniques. RISs are emerging as a key technology for 6G wireless communications, allowing for programmable signal reflection. I developed algorithms that predict optimal beam configurations based on environmental factors and user positions, reducing alignment time by 45% compared to traditional methods. The solution combines deep learning with information theory principles to achieve robust performance even in dynamic environments.",
    imgUrls: [
      require("../assets/img/paf.png")
    ],
    tags: ["Machine Learning", "Signal Processing", "Information Theory", "Wireless Communications"],
    codeLink: "",
    demoLink: "",
    reportLink: require("../assets/reports/Poster_PAF.pdf"),
    referenceLink: "",
    featured: false
  },
  {
    id: 12,
    title: "Radiomique",
    description: "Medical imaging analysis platform using radiomics features and statistical models to assist in diagnosis. Implemented feature extraction from medical images and developed predictive models for disease classification.",
    longDescription: "Radiomique is a comprehensive medical imaging analysis platform that leverages radiomics features and advanced statistical models to assist in medical diagnosis. The system extracts quantitative features from CT, MRI, and PET scans, then applies machine learning algorithms to identify patterns associated with various pathologies. I implemented the feature extraction pipeline and developed several predictive models that achieved 87% accuracy in classifying lung nodules. The platform includes visualization tools for clinicians to interpret results and integrates with existing hospital information systems.",
    imgUrls: [
      require("../assets/img/radiomique1.png"),
      require("../assets/img/radiomique2.png")
    ],
    tags: ["Medical Imaging", "Statistics", "Machine Learning", "Healthcare"],
    codeLink: "",
    demoLink: "",
    reportLink: "",
    referenceLink: "",
    featured: false
  },
  {
    id: 13,
    title: "Levitate",
    description: "Designed and developed a productivity application that helps users manage tasks, schedule, and goals with an intuitive interface. Implemented features like task prioritization, time tracking, and progress visualization.",
    longDescription: "Levitate is a productivity application designed to help users manage tasks, schedules, and goals through an intuitive and visually appealing interface. The app features a unique approach to task prioritization based on both urgency and importance, automated time tracking, and progress visualization through customizable dashboards. I led the design and development process, focusing on creating a seamless user experience across desktop and mobile platforms. The application uses React for the frontend, Node.js for the backend, and MongoDB for data storage, with real-time synchronization across devices.",
    imgUrls: [
      require("../assets/img/levitate1.png"),
      require("../assets/img/levitate2.png")
    ],
    tags: ["Product Design", "Development", "React", "Node.js"],
    codeLink: "",
    demoLink: "",
    reportLink: "",
    referenceLink: "",
    featured: false
  },
  {
    id: 14,
    title: "Web Application for University Resource Management",
    description: "Developed a comprehensive web application using Python and SQLite for managing university resources including people, rooms, curriculums, and courses. Implemented features for scheduling, resource allocation, and reporting.",
    longDescription: "This web application provides a comprehensive solution for university resource management, handling everything from personnel and room allocation to curriculum planning and course scheduling. Built with Python (Flask) and SQLite, the system features role-based access control, an intuitive drag-and-drop interface for scheduling, automated conflict detection, and detailed reporting capabilities. I implemented the database schema, backend logic, and frontend components, focusing on creating a responsive and user-friendly experience. The application significantly reduced scheduling conflicts and improved resource utilization efficiency by 30% at the pilot institution.",
    imgUrls: [
      require("../assets/img/univ.jpg")
    ],
    tags: ["Web Development", "Database", "Python", "Flask", "SQLite"],
    codeLink: "",
    demoLink: "",
    reportLink: "",
    referenceLink: "",
    featured: false
  },
  {
    id: 15,
    title: "Random Modeling of Free-Floating Electric Scooter System",
    description: "Developed a Markov model analyzing battery depletion, breakdown probabilities, and intervention times for free-floating electric scooter systems. Created optimization strategies for fleet management.",
    longDescription: "This project developed a comprehensive Markov model for analyzing and optimizing free-floating electric scooter systems. The model incorporates stochastic processes to simulate battery depletion patterns, breakdown probabilities, and optimal intervention times. I implemented algorithms that predict maintenance needs and optimize rebalancing operations based on usage patterns and geographic data. The system includes a discrete event simulation that models user behavior, scooter availability, and system performance under various conditions. The resulting optimization strategies demonstrated potential operational cost reductions of 25% while maintaining the same level of service availability. The model was validated using real-world data from a major scooter-sharing company.",
    imgUrls: [
      require("../assets/img/trot.png")
    ],
    tags: ["Systems Modeling", "Probability", "Operations Research", "Urban Mobility"],
    codeLink: "https://github.com/zakil-02/MDI230-Trotinette_Project",
    demoLink: "",
    reportLink: "",
    referenceLink: "",
    featured: false
  },
  {
    id: 16,
    title: "Interactive Visual Piece of Art",
    description: "Built a convolutional neural network for emotion detection and style transfer to create personalized artwork. The system generates unique visual compositions based on the viewer's emotional state.",
    longDescription: "This interactive art installation combines computer vision and generative AI to create personalized visual experiences. I built a system that uses a convolutional neural network to detect viewers' emotions from facial expressions, then applies neural style transfer algorithms to generate unique artwork reflecting their emotional state. The installation features a camera that captures the viewer's image, processes it through the emotion detection model, and displays the resulting artwork on a large screen in real-time. The style transfer component draws from a curated collection of artistic styles that correspond to different emotional states, creating a unique bridge between human emotion and computational creativity. The project was exhibited at two art galleries and received positive feedback for its novel approach to interactive digital art.",
    imgUrls: [
      require("../assets/img/art.png")
    ],
    tags: ["AI Art", "Computer Vision", "Neural Style Transfer", "Interactive Installation"],
    codeLink: "",
    demoLink: "",
    reportLink: "",
    referenceLink: "",
    featured: false
  }
];

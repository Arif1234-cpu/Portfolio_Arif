/**
 * Centralized Projects Data Source
 * 
 * Each project entry contains two clearly separated sets of data:
 * 1. Compact Card Fields (displayed on the main horizontal autoscrolling carousel):
 *    - title: Project name
 *    - shortDescription: Concise 1-2 line summary for compact display
 *    - compactTech: 3-4 primary technology tags
 *    - previewImage: Visual thumbnail / architecture preview
 * 
 * 2. Full Details Modal Fields (displayed when visitor clicks a card):
 *    - overview: Complete problem statement and functionality overview
 *    - keyFeatures: Core features and verified evaluation metrics
 *    - techStack: Exhaustive list of genuine tools and libraries used
 *    - myContribution: What Mohammad Arif Khan specifically engineered
 *    - implementationDetails: Architecture, model pipeline, and engineering notes
 *    - challengesSolutions: Genuine engineering challenge and resolution
 *    - githubUrl: Direct GitHub repository link
 *    - liveDemoUrl: Live deployment URL (set to null if not hosted)
 *    - status: Project completion or development status
 */

export const projectsData = [
  {
    id: "potato-disease-classification",
    title: "Potato Disease Classification",
    shortDescription: "A deep learning CNN for 3-class potato leaf disease classification with 98.4% accuracy, deployed via Streamlit.",
    compactTech: ["Python", "TensorFlow", "Keras", "Streamlit"],
    previewImage: "/project-potato-preview.svg",
    projectType: "Deep Learning & Computer Vision",
    date: "Machine Learning",
    status: "Completed",
    githubUrl: "https://github.com/Arif1234-cpu",
    liveDemoUrl: null, // No hosted live URL; runs locally via Streamlit

    // Detailed View Information
    overview: "An automated agricultural diagnostic system that identifies potato leaf diseases (Early Blight, Late Blight, and Healthy leaves) from uploaded imagery, mitigating crop loss caused by delayed manual pathogen identification.",
    keyFeatures: [
      "Achieved 98.44% classification accuracy and 98.44% F1-score across 256 holdout evaluation images.",
      "Input preprocessing pipeline with 256×256 pixel resizing, normalization, and data augmentation (rotations and horizontal/vertical flips).",
      "Trained a convolutional neural network architecture for 40 epochs with Conv2D and MaxPooling2D layers.",
      "Built an interactive Streamlit web dashboard for real-time leaf image upload and instant class prediction."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks (CNN)", "NumPy", "Streamlit"],
    myContribution: "Designed and trained the deep CNN model from scratch in TensorFlow/Keras. Implemented the data augmentation pipeline to overcome dataset class imbalance, tuned learning rates, calculated confusion matrices, and built the Streamlit interface for live test uploads.",
    implementationDetails: "Constructed sequential feature extraction blocks with alternating 3×3 Conv2D filters, ReLU activations, and 2×2 MaxPooling2D downsampling, followed by Flatten, Dense (64 units), Dropout, and a 3-unit Softmax output layer. Evaluated with categorical cross-entropy loss and Adam optimizer.",
    challengesSolutions: "Mitigated model overfitting on limited training samples by introducing random geometric augmentations and dropout regularization, stabilizing validation loss across training epochs."
  },
  {
    id: "traffic-sign-detection",
    title: "Traffic Sign Detection",
    shortDescription: "A custom YOLOv8 object detection model localizing and classifying road signs with 93.8% mAP@50.",
    compactTech: ["Python", "YOLOv8", "Ultralytics", "OpenCV"],
    previewImage: "/project-trafficsign-preview.svg",
    projectType: "Computer Vision & Object Detection",
    date: "Computer Vision",
    status: "Completed",
    githubUrl: "https://github.com/Arif1234-cpu",
    liveDemoUrl: null,

    // Detailed View Information
    overview: "A real-time vision system that detects and identifies road traffic signs under diverse lighting, weather conditions, and viewing perspectives for driver-assistance and autonomous navigation applications.",
    keyFeatures: [
      "Trained a custom YOLOv8 detector achieving 93.8% mAP@50 and 79.8% mAP@50–95 on validation datasets.",
      "Demonstrated high detection fidelity with 94.2% precision and 84.9% recall verified through confusion matrices.",
      "Calibrated bounding-box prediction with non-maximum suppression (NMS) to eliminate duplicate detections.",
      "Engineered high-throughput video stream inference processing for low-latency detection."
    ],
    techStack: ["Python", "YOLOv8", "Ultralytics", "Computer Vision", "OpenCV", "PyTorch"],
    myContribution: "Curated and validated annotation data, configured anchor-free YOLOv8 model training pipelines, performed hyperparameter sweeps, and verified bounding-box IoU thresholds across static photos and recorded driving video sequences.",
    implementationDetails: "Leveraged YOLOv8's CSPDarknet53 feature pyramid backbone and decoupled detection head. Used Mosaic augmentation during training and tuned confidence thresholds for robust inference in varying ambient lighting.",
    challengesSolutions: "Addressed false detections caused by complex background clutter and variable lighting angles by tuning the confidence score threshold (0.45) and IoU overlap criteria (0.50)."
  },
  {
    id: "electricity-consumption-forecasting",
    title: "Electricity Consumption Forecasting",
    shortDescription: "A time-series gradient-boosted regression model forecasting hourly power grid demand with 78.96% R².",
    compactTech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    previewImage: "/project-electricity-preview.svg",
    projectType: "Machine Learning & Time Series",
    date: "Time Series ML",
    status: "Completed",
    githubUrl: "https://github.com/Arif1234-cpu",
    liveDemoUrl: null,

    // Detailed View Information
    overview: "A quantitative regression model that predicts hourly power grid electricity consumption, helping regional energy operators anticipate demand peaks and optimize grid generation dispatch.",
    keyFeatures: [
      "Built an XGBoost regression model achieving an R² score of 78.96% on holdout test periods.",
      "Quantified forecast accuracy with Mean Absolute Error (MAE) of 2,226.59 MW and RMSE of 2,961.58 MW.",
      "Engineered temporal cyclical features capturing intraday cycles, day-of-week demand patterns, and seasonality.",
      "Implemented strict chronological train/test splitting to prevent time-series lookahead bias."
    ],
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    myContribution: "Extracted and cleaned multi-year hourly consumption datasets, created cyclical calendar features (sine/cosine hour transforms, day of week, month), performed sequential train/test splitting, and tuned XGBoost decision trees.",
    implementationDetails: "Trained gradient boosted trees minimizing mean squared error with early stopping on validation loss. Analyzed residual error distributions across peak hours to identify demand outlier trends.",
    challengesSolutions: "Prevented future data leakage by strictly partitioning datasets chronologically instead of random k-fold cross-validation, preserving true time-series predictive validity."
  },
  {
    id: "mark-portfolio",
    title: "MARK — Developer Portfolio & Brand System",
    shortDescription: "A custom personal portfolio and design system built with React, Vite, and CSS tokens under the MARK identity.",
    compactTech: ["React", "JavaScript", "Vite", "Modern CSS"],
    previewImage: "/project-portfolio-preview.svg",
    projectType: "Software & Web Engineering",
    date: "Web Development",
    status: "Completed",
    githubUrl: "https://github.com/Arif1234-cpu",
    liveDemoUrl: null,

    // Detailed View Information
    overview: "A production-grade personal portfolio built to highlight verified academic accomplishments, Machine Learning projects, and software engineering capabilities under a distinctive typographic brand identity.",
    keyFeatures: [
      "Light-themed design system with CSS custom properties, warm neutral backgrounds, and muted indigo accents.",
      "Horizontal auto-scrolling project carousel with seamless circular looping and hover pause.",
      "Accessible project detail modals with React portal rendering and strict body scroll locking.",
      "Fully opaque mobile navigation drawer preventing background bleed-through across all viewport widths.",
      "Direct Gmail compose integration and instant email copy confirmation."
    ],
    techStack: ["React 18", "Vite", "JavaScript (ESNext)", "CSS Custom Properties", "Lucide Icons"],
    myContribution: "Architected the modular component hierarchy, implemented custom React portals for overlays, coded the zero-dependency infinite horizontal carousel, and crafted the design system tokens.",
    implementationDetails: "Utilized React hooks (useState, useEffect, useRef) for carousel animation and modal state. Portaled overlays directly to document.body to isolate CSS containing blocks and backdrop filters.",
    challengesSolutions: "Resolved mobile browser fixed-position containment traps caused by navbar backdrop filters by portaling full-screen drawers and modals directly to the document root."
  }
];

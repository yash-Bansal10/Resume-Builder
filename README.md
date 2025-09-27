Dynamic Resume Builder 📄
A full-stack web application built to solve the personal challenge of creating professional, customized resumes with ease.
![Dynamic Resume Builder Dashboard](./assets/dashboard.png)
📖 Overview
The Dynamic Resume Builder was created to address the common frustration of using rigid, inflexible resume-building tools. Traditional methods often lack real-time feedback and limit customization, making it difficult to tailor resumes for different job applications. This project solves that problem by providing a seamless, interactive experience where users can see their changes instantly and have complete control over their resume's content and structure. The core philosophy is to empower users to create polished, professional documents efficiently, without compromising on quality or flexibility.

✨ Key Features
🧠 Live Real-Time Preview: A dual-panel interface that instantly renders changes as you type, providing an intuitive and efficient editing experience.

🔧 Complete Content Control: Dynamically add, remove, and reorder not just individual entries (like jobs or projects) but also entire sections of the resume.

🎨 Professional Template: A clean, modern, and easily scannable resume design inspired by professional templates, ensuring a great first impression.

⚡ High-Fidelity PDF Generation: Utilizes a server-side rendering engine (Puppeteer) to create pixel-perfect PDF documents that look identical to the live preview.

🔗 Clickable Links: All social media and project links are automatically converted into clickable hyperlinks in the final PDF.

🏗️ System Architecture
This project is a full-stack monorepo application. The frontend, built with Next.js, captures user input and manages the application's state. When a user requests a download, the resume data is sent to a Node.js/Express backend API. The backend then uses Puppeteer to render the data into an HTML template and generate a high-quality PDF, which is streamed back to the user for download.

🛠️ Tech Stack
Frontend: Next.js, React, Zustand, Tailwind CSS, Axios

Backend: Node.js, Express.js

PDF Generation: Puppeteer, EJS

Database: MongoDB, Mongoose

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18.x or later recommended)

npm (comes with Node.js)

MongoDB Community Server installed and running locally.

Installation & Launch
Clone the repository:

git clone [https://github.com/Yash-Bansal10/Resume-Builder.git](https://github.com/Yash-Bansal10/Resume-Builder.git)
cd Resume-Builder

Install all dependencies:
This command installs packages for the root, client, and server.

npm run install-all

Run the development server:
This starts both the backend (on port 5000) and frontend (on port 3000).

npm run dev
View the Application:
Open your browser and go to http://localhost:3000.

🔮 Future Scope
Multi-Template Support: Allow users to choose from a variety of different resume styles and color schemes.

User Accounts & Cloud Sync: Implement user authentication to allow saving, editing, and accessing multiple resumes from any device.

Additional Export Formats: Add the ability to download the resume in other popular formats, such as DOCX or plain text.

AI-Powered Suggestions: Integrate a language model to provide suggestions for improving resume content and wording.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

👨‍💻 Founder
Yash Bansal

LinkedIn: https://www.linkedin.com/in/iamyashbansal/






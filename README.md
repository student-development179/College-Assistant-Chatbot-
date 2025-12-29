
# GEC Bhavnagar College Assistant (Design Engineering Prototype)

## Project Overview
This chatbot is a digital transformation prototype for **Government Engineering College (GEC), Bhavnagar**. It serves as a 24/7 rule-based information desk for students.

## 🚀 Key Features
- **Branch Knowledge Module**: Detailed overview, subjects, and careers for ICT, CE, IT, EC, Civil, and Mechanical.
- **Official Fee Structure**: Integrated logic for government scholarship/gender-based fee exemptions (1500/0 structure).
- **Faculty Database**: Branch-wise faculty listing with specializations.
- **Academic Integration**: Direct links to GTU Syllabus and Student Portal.
- **Contextual Intelligence**: Remembers the selected department for smarter follow-up answers.

## 🛠️ Tech Stack
- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend (Proposed)**: Node.js + Express
- **Database (Proposed)**: Neon Serverless PostgreSQL (Table: `branches_knowledge`)

## 🧠 Viva Readiness (Q&A)
- **Why no AI (ChatGPT)?** "For institutional trust, reliability is key. Rule-based systems ensure the data (like fees or office hours) is always 100% accurate as per government norms."
- **Why PostgreSQL?** "Relational data is perfect for mapping branches to specific faculty and subjects."
- **How is it 'Design Engineering'?** "We identified a communication gap between the college administration and students. This digital solution automates the FAQ process, reducing workload on the office staff."

## 🧪 Testing Scenarios
1.  Ask: "What are the fees?" (Result: Displays 1500/0 logic)
2.  Ask: "ICT" (Result: Sets branch context to ICT)
3.  Ask: "Faculty" (Result: Smartly shows ICT faculty because of context)
4.  Ask: "Syllabus" (Result: Provides GTU link)

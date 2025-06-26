# Ficlance (Fiction + Freelance = Real Skills in a Simulated World)
Simulated Gigs. Real Growth.

# Ficlance Product Documentation

---

## 1. Product Overview

### Purpose

Ficlance is a next-generation simulation platform designed to equip aspiring freelancers, students, and self-taught developers with hands-on experience in real-world freelance workflows—without the risks of real client work.

### Target Audience

* Students in tech or design programs
* Entry-level developers seeking experience
* Self-taught individuals building freelance confidence
* Career switchers exploring freelance opportunities

### Core Value Proposition

Ficlance offers immersive, story-driven simulations that mimic the end-to-end freelance experience. From client interactions to deadline-driven deliverables, users gain verified portfolio pieces and soft skills essential to thriving in the freelance ecosystem.

### Key Features

* Role-based learning tracks
* Interactive simulated clients with feedback loops
* Time-sensitive deadlines and point-based gamification
* Auto-generated portfolios with GitHub integration
* Review and rating systems for skill reputation
* Negotiation and communication simulation
* Career missions and long-term client arcs
* Freelance Hackathons for short-term challenges
* Real-tool workflow simulations (GitHub, Trello, Figma)

---

## 2. Functionality Breakdown

### 2.1 Profile Creation and Role Selection

**What It Does:**
Allows users to create a profile linked to GitHub and select a specialization (frontend, backend, UI/UX, etc.).

**Why It Matters:**
Tailors project briefs and simulations to relevant skills and career goals.

**How It Works:**

* User signs up and links GitHub.
* User selects role and experience level.
* System generates tailored onboarding missions.

**User Flow:**
Signup → Role Selection → GitHub Sync → Onboarding

<!-- Diagram Here: User Onboarding Flow -->

---

### 2.2 Project Simulation Engine

**What It Does:**
Provides structured, realistic project briefs simulating real client expectations.

**Why It Matters:**
Simulates the end-to-end freelance workflow including timelines, scopes, and deliverables.

**How It Works:**

* AI-generated or pre-written briefs assigned based on user profile.
* Includes specs, assets, deadlines, and tools.
* Simulated clients give iterative feedback.

**User Flow:**
Receive Brief → Work on Project → Submit → Get Feedback → Revise → Final Submit

<!-- Diagram Here: Project Simulation Flow -->

---

### 2.3 Client Communication Simulator

**What It Does:**
Simulates asynchronous client interaction via chat and email-like interfaces.

**Why It Matters:**
Develops communication skills vital for freelance success.

**How It Works:**

* User can ask for scope clarification or request deadline extensions.
* Simulated client responds with guidance, approval, or requests.

**User Flow:**
Send Message → Client Reply → User Revises or Proceeds

<!-- Diagram Here: Client Communication Interface -->

---

### 2.4 Skill Progression and Gamification

**What It Does:**
Tracks skill performance, provides feedback, and awards points and badges.

**Why It Matters:**
Encourages motivation, accountability, and mastery of skills over time.

**How It Works:**

* Points awarded for quality, communication, punctuality.
* Levels unlock harder projects and higher-rated clients.

**User Flow:**
Complete Project → Receive Evaluation → Points + Badge → Unlock Next Project

<!-- Diagram Here: Skill Progression System -->

---

### 2.5 Auto-Generated Public Portfolio

**What It Does:**
Compiles all verified projects into a shareable, client-facing portfolio.

**Why It Matters:**
Builds user credibility and helps secure actual freelance work.

**How It Works:**

* Projects added to public profile with ratings.
* GitHub repo linked and highlighted.
* Each project has feedback snapshots.

**User Flow:**
Project Approved → Portfolio Updated → Public Sharing Option Enabled

<!-- Diagram Here: Portfolio Generation Workflow -->

---

## 3. Technical Stack (MERN)

### MongoDB

* Stores user profiles, project data, communication logs, ratings, and feedback.
* Schemas include: `User`, `Project`, `ClientSimulation`, `Review`, `Badge`
* Aggregation pipelines used to calculate ranking and performance history.

### Express.js

* REST API handles authentication, project distribution, and communication requests.
* Middleware supports role validation and deadline enforcement.
* Error handling for project submission, communication lag, and role mismatch.

### React.js

* UI for dashboard, project interface, communication panel, and portfolio view.
* State management via Redux or Context API.
* Components: `ProjectCard`, `SimulatedChat`, `ClientFeedbackModal`, `SkillProgressBar`.

### Node.js

* Executes backend services and scheduled tasks (e.g., deadline reminders, project rotations).
* Manages real-time simulations using `socket.io` for communication simulation.
* Handles email-style async simulation using cron jobs.

---

## 4. Integration Points

### GitHub

* **Usage:** Code submission, repository linking, portfolio integration.
* **Integration:** OAuth for GitHub login; GitHub API for repo cloning, commit checks.
* **Error Handling:** Alerts for invalid repos, auth expiration.

### Figma (Design Role)

* **Usage:** Access design briefs and upload Figma URLs.
* **Integration:** Embeds Figma previews in project dashboard.
* **Error Handling:** Fallback preview image and Figma link validation.

### Trello-Style Kanban

* **Usage:** Project task tracking.
* **Integration:** Custom Kanban-like interface for progress visualization.
* **Data Transformation:** Tasks stored as project nodes in MongoDB.

### Email/Chat Simulation Engine

* **Usage:** Mimics real-world client communication.
* **Integration:** Internal message service using `socket.io` + REST fallback.
* **Authentication:** Session-based, role-protected messaging.

---

## 5. Deployment & Maintenance

### Deployment Strategy

* **Frontend Hosting:** Vercel (React frontend)
* **Backend Hosting:** Render or Railway (Node.js/Express)
* **Database:** MongoDB Atlas
* **Storage:** AWS S3 for asset uploads (e.g., designs, documents)

### CI/CD Pipeline

* GitHub Actions for automated testing and build deployments
* ESLint + Prettier for code quality checks
* Deployment triggers on `main` branch merges

### Version Control & Branching

* GitHub monorepo with `main`, `dev`, and `feature/*` branches
* PR-based review workflow with required approvals
* Weekly sync and release management using GitHub Projects

---

## 6. Future Enhancements

### 1. AI Client Personalities

* Add dynamic personalities and tones for simulated clients (strict, friendly, vague).
* Improves real-world readiness through adaptability training.

<!-- Review Needed: Evaluate performance complexity impact -->

### 2. Voice/Video Client Meetings (Beta)

* Introduce mock Zoom-style meetings with scripted simulations.
* Useful for simulating pitch calls, feedback meetings.

### 3. Project Marketplace

* Allow mentors or verified users to create custom simulation projects.
* Expands diversity and realism in simulations.

### 4. Team Projects Mode

* Simulate working with teammates on client work.
* Encourages collaboration, leadership, and delegation skills.

### 5. Verified Reviewer Program

* Bring in real freelancers to review submissions for credits.
* Enhances credibility of portfolio outputs.

---


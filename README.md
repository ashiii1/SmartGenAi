# 🚀 VOOM - Create Your Own AI Content for Free

![Next.js](https://img.shields.io/badge/Next.js-v13-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.9-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v13-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue)
![SASS](https://img.shields.io/badge/SASS-v1.55-pink)
![Clerk](https://img.shields.io/badge/Clerk-Auth-green)

GEMINI AI 1.5 Flash Platform is an advanced AI-driven application that provides customizable AI templates, Clerk authentication, and a built-in text editor for seamless content editing.

## 🌟 Features

- **AI Templates**: Utilize or customize built-in AI templates for various needs.
- **🛡️ Clerk Authentication**: Secure user authentication and management.
- **✍️ Built-in Text Editor**: Edit AI-generated content directly on the platform.
- **📱 Responsive Design**: Modern UI with Next.js, Tailwind CSS, and SASS.
- **🗄️ Database Integration**: Uses PostgreSQL and Drizzle ORM for data management.
- **⚙️ TypeScript**: Strongly typed codebase for reliability.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [SASS](https://sass-lang.com/)
- **Backend**: Next.js API routes
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
- **Authentication**: [Clerk](https://clerk.dev/)
- **AI Model**: GEMINI AI 1.5 Flash
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later) - [Download](https://nodejs.org/)
- **PostgreSQL** - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

### ⚙️ Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/gemini-ai-platform.git
   cd gemini-ai-platform
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root of the project and add:

   ```plaintext
   DATABASE_URL=your_postgresql_database_url
   CLERK_FRONTEND_API=your_clerk_frontend_api_key
   CLERK_API_KEY=your_clerk_backend_api_key
   GEMINI_API_KEY=your_gemini_ai_api_key
   ```

4. **Run Database Migrations**

   ```bash
   npx drizzle-kit db push
   ```

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000`.

### 🔧 Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run start`**: Runs the app in production mode.
- **`npm run lint`**: Lints the codebase.

## 💡 Usage

1. **User Authentication**: Sign up or log in using Clerk authentication.
2. **AI Templates**: Explore or create AI templates tailored to your needs.
3. **Content Editing**: Use the built-in editor to modify AI-generated content easily.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and open a pull request with your changes.

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

For support or inquiries, please reach out to [manushadananjaya999@gmail.com](mailto:manushadananjaya999@gmail.com).

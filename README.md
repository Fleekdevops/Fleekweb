# Fleek AI

AI-powered technology services platform built with Next.js, featuring custom chatbots, machine learning solutions, and intelligent automation.

## Features

- 🤖 **AI Services**: Custom chatbots, ML models, process automation
- 🛠️ **AI Tools**: Live demos of image generation, code assistance, document analysis
- 💬 **AI Chatbot**: "Freezer" - conversational AI assistant
- 📊 **Solutions Finder**: Interactive quiz to find the perfect AI solution
- 📝 **Contact Form**: Full consultation request system with database storage
- 📈 **Admin Dashboard**: Manage contacts, blog posts, analytics, and chatbot configuration
- 🎨 **Modern UI**: Dark theme with animated particles and smooth transitions

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma with SQLite (easily switchable to PostgreSQL)
- **AI**: OpenAI / Anthropic integration ready
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Set up the database
npm run db:push

# (Optional) Seed the database
npx prisma db seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Admin Dashboard

Access the admin dashboard at [http://localhost:3000/admin](http://localhost:3000/admin)

## Project Structure

```
fleek-ai/
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API routes
│   │   ├── admin/     # Admin dashboard
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   ├── lib/           # Utilities
│   └── styles/        # Global styles
├── prisma/
│   └── schema.prisma  # Database schema
└── public/            # Static assets
```

## Color Theme

- **Primary**: #0066ff (Blue)
- **Secondary**: #8a2be2 (Purple)
- **Accent**: #00ffcc (Teal)
- **Dark**: #0a0a18
- **Darker**: #050510

## API Endpoints

- `POST /api/contact` - Submit consultation request
- `GET /api/contact` - List all contacts
- `POST /api/chat` - Chat with Freezer AI
- `GET /api/blog` - List blog posts
- `POST /api/blog` - Create blog post
- `GET /api/analytics` - Get site analytics

## Environment Variables

Create a `.env` file:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-api-key"
```

## Team

- **Carlos K. Koilai** - Chief AI Architect
- **Nelson M. Macharia** - CEO
- **Godfrey K. Nduati** - Chief AI Marketing Officer
- **Eustace Mutua** - Head of Customer Success
- And more AI experts...

## License

© 2025 Fleek AI by Fleek Tech Inc. All Rights Reserved.

---

Built with ❤️ by Fleek Tech Inc. | Powered by Freezer AI

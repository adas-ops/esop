# ESOP - E-commerce Platform

A headless e-commerce storefront & API backend built with Medusa.js and Next.js, providing a modern, scalable solution for online retail businesses.

## 🚀 Features

- **Headless Architecture**: Decoupled frontend and backend for maximum flexibility
- **Modern Tech Stack**: Built with Next.js 15 and Medusa V2
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Payment Integration**: Support for multiple payment providers (Stripe, PayPal, etc.)
- **Admin Dashboard**: Complete product and order management
- **Customer Management**: User accounts, order history, and profiles
- **Inventory Management**: Real-time stock tracking and management
- **Multi-currency Support**: Global commerce capabilities
- **SEO Optimized**: Built-in SEO features for better search visibility
- **API-First**: RESTful APIs for easy integrations

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

### Backend
- **Medusa V2** - Headless commerce engine
- **Node.js** - Runtime environment
- **PostgreSQL** - Primary database
- **Redis** - Caching and session storage

### Additional Tools
- **Docker** - Containerization
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)
- Redis (v6 or higher)
- Docker (optional but recommended)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/adas-ops/esop.git
cd esop
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd storefront
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup

Create environment files for both frontend and backend:

**Backend (.env)**
```env
DATABASE_URL=postgres://username:password@localhost:5432/medusa_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
MEDUSA_ADMIN_ONBOARDING_TYPE=default
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

### 4. Database Setup

```bash
cd backend
npx medusa migrations run
npx medusa seed -f ./data/seed.json
```

### 5. Start Development Servers

```bash
# Start backend (Medusa)
cd backend
npm run develop

# Start frontend (Next.js) - in a new terminal
cd storefront
npm run dev
```

Your application will be available at:
- **Storefront**: http://localhost:8000
- **Admin Dashboard**: http://localhost:9000/app
- **API**: http://localhost:9000

## 🐳 Docker Setup

For a quick setup using Docker:

```bash
# Clone and navigate to the project
git clone https://github.com/adas-ops/esop.git
cd esop

# Start with Docker Compose
docker-compose up -d
```

## 📁 Project Structure

```
esop/
├── backend/                 # Medusa backend
│   ├── src/
│   │   ├── api/            # Custom API routes
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── subscribers/    # Event handlers
│   ├── uploads/            # File uploads
│   └── medusa-config.js    # Medusa configuration
├── storefront/             # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   └── styles/       # CSS styles
│   └── public/           # Static assets
├── docker-compose.yml     # Docker configuration
└── README.md
```

## 🔧 Configuration

### Payment Providers

Configure payment providers in `backend/medusa-config.js`:

```javascript
const plugins = [
  {
    resolve: `@medusajs/payment-stripe`,
    options: {
      api_key: process.env.STRIPE_API_KEY,
    },
  },
  // Add other payment providers
]
```

### Email Templates

Configure email templates and SMTP settings in the backend configuration for order confirmations, password resets, etc.

## 🚀 Deployment

### Backend Deployment (Railway/Heroku/DigitalOcean)

1. Set up a PostgreSQL database
2. Set up a Redis instance
3. Configure environment variables
4. Deploy the backend application

### Frontend Deployment (Vercel/Netlify)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy with automatic builds

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd storefront
npm test
```

## 📚 API Documentation

The API documentation is automatically generated and available at:
- **API Docs**: http://localhost:9000/docs (when running locally)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an [issue](https://github.com/adas-ops/esop/issues)
- Check the [Medusa documentation](https://docs.medusajs.com)
- Visit the [Next.js documentation](https://nextjs.org/docs)

## 🙏 Acknowledgments

- [Medusa.js](https://medusajs.com) - The headless commerce platform
- [Next.js](https://nextjs.org) - The React framework
- [Vercel](https://vercel.com) - For hosting and deployment solutions

---

Made with ❤️ by the ADAS Ops 

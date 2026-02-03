# TinyTales

A pixel-perfect e-commerce frontend application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. This project showcases a complete authentication flow, product details page, and modern UI/UX patterns following senior-level development standards.

---

## Tech Stack

| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **API Client** | [Axios](https://axios-http.com/) |
| **Validation** | [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Protected dashboard page
│   ├── login/              # Login page
│   ├── register/           # Registration page
│   ├── verify/             # Email verification page
│   ├── products/[id]/      # Dynamic product details page
│   ├── layout.tsx          # Root layout with AuthProvider
│   ├── page.tsx            # Home page (redirects to register)
│   └── globals.css         # Global styles and Tailwind config
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components (Button, Input, Card)
│   ├── Header.tsx          # Main navigation header
│   ├── Footer.tsx          # Footer with links and social icons
│   ├── ProductGallery.tsx  # Interactive product image gallery
│   ├── ProductInfo.tsx     # Product details and add-to-cart
│   ├── RatingSummary.tsx   # Rating breakdown and statistics
│   ├── ReviewList.tsx      # Customer reviews display
│   └── SimilarItems.tsx    # Horizontal product carousel
├── hooks/                  # Custom React hooks
│   ├── useAuth.tsx         # Authentication state management
│   ├── useUser.ts          # User data hook
│   └── useApiError.ts      # API error handling hook
├── services/               # API service layer
│   └── auth.service.ts     # Authentication API calls
├── lib/                    # Utilities and configuration
│   ├── api.ts              # Axios client with interceptors
│   ├── constants.ts        # Design tokens and constants
│   └── utils.ts            # Utility functions (cn)
└── types/                  # TypeScript type definitions
    └── auth.types.ts       # Authentication types
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** (or **yarn**/pnpm)
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shireff/tinytales.git
   cd tinytales
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=API BASE URL
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Authentication Flow

### Step-by-Step Guide

1. **Register** (`/register`)
   - Fill out the registration form with name, email, phone, and password
   - On success, a JWT token is saved to `localStorage`
   - Automatically redirected to the verification page

2. **Verify Email** (`/verify`)
   - Enter the 6-digit verification code sent to your email
   - **For testing purposes, use code: `123456`**
   - On success, redirected to the login page

3. **Login** (`/login`)
   - Enter your email and password
   - On success, user data is fetched and stored
   - Automatically redirected to the dashboard

4. **Dashboard** (`/dashboard`)
   - Protected route accessible only to authenticated users
   - Displays personalized welcome message
   - Provides navigation to the product shop

5. **Product Details** (`/products/[id]`)
   - View product gallery, details, ratings, and reviews
   - Add items to cart with quantity selection
   - Browse similar products

---

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

---

## Testing AUTH

For testing the authentication flow:

- **Email**: Any valid email format (e.g., `test@example.com`)
- **Password**: Minimum 8 characters
- **Verification Code**: `123456` (hardcoded for testing)

---

## Scripts

| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Repository & Live Demo

- **GitHub Repository**: `https://github.com/shireff/tinytales`
- **Live Demo**: `https://tinytales-eta.vercel.app`


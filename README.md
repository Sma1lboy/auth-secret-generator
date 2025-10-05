# Auth Secret Generator

A minimalist web application for generating cryptographically secure secrets for authentication and API keys.

## Features

- 🔐 Cryptographically secure random key generation
- 🎨 Sleek minimalist design
- 📋 One-click copy to clipboard
- 🚀 API endpoint for programmatic access
- ⚡ Built with Next.js 15 and React 19

## Getting Started

### Development

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production

```bash
# Build for production
bun run build

# Start production server
bun start
```

## API Usage

### GET /api/key

Generate a new secret key programmatically.

**Response:**
```json
{
  "secret": "9584dde1c0be29f393fef9fe5796102846477...",
  "timestamp": "2025-10-05T03:20:00.000Z"
}
```

**Example:**
```bash
curl https://auth-secret-generator-uoeg.vercel.app/api/key
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/codefox-repo/auth-secret-generator)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **Runtime:** Bun
- **Styling:** CSS Modules

## License

MIT - See [LICENSE](LICENSE) for details.

---

Built by [codefox](https://github.com/codefox-repo)

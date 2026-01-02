# Cybersecurity Journey - Launch Page 🔐

A professional, viral landing page for launching Sanjay's 7-Day Ethical Hacking Starter Kit + Resume Booster Pack.

## Quick Start

See [SETUP.md](./SETUP.md) for detailed configuration instructions.

## Key Features

- Clean, minimal design with yellow (#ffda6a) accent
- Live learner counter with social proof
- Scarcity elements (first 200 students)
- Community engagement (WhatsApp + Telegram)
- Fully integrated form system:
  - Auto-saves to Google Sheets
  - Sends beautiful welcome emails via Hostinger SMTP
  - Real-time validation and feedback

## Tech Stack

- Next.js 16 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS v4
- Shadcn UI components
- Nodemailer for SMTP
- Google Sheets API

## Required Environment Variables

```env
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_url
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your_email@yourdomain.com
SMTP_PASSWORD=your_email_password
```

See [SETUP.md](./SETUP.md) for step-by-step setup guide.

## Project Structure

```
├── app/
│   ├── page.tsx                    # Main landing page
│   ├── api/submit-form/
│   │   └── route.ts                # Form API with Google Sheets + Email
│   ├── layout.tsx
│   └── globals.css
├── components/ui/                  # Shadcn components
├── SETUP.md                        # Detailed setup guide
└── README.md
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add all environment variables in your Vercel project settings.

---

Built with ❤️ for students

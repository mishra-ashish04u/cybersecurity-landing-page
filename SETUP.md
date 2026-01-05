# Cybersecurity Launch Page - Setup Guide

This is a viral landing page for Sanjay's 7-Day Cybersecurity Journey program with full form integration.

## Features

- Beautiful, minimal design with #ffda6a yellow theme
- Live learner counter with social proof
- Fully functional early access form
- Automatic Google Sheets integration
- Welcome email via Hostinger SMTP
- WhatsApp & Telegram community links

## Environment Variables Setup

You need to configure the following environment variables in your Vercel project (or `.env.local` for local development):

### 1. Google Sheets Integration

**GOOGLE_SHEETS_WEBHOOK_URL**

To save form submissions to Google Sheets:

1. Open your Google Sheet
2. Go to Extensions > Apps Script
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.status
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy > New deployment > Web app
5. Set "Execute as" to "Me"
6. Set "Who has access" to "Anyone"
7. Copy the deployment URL
8. Add it as `GOOGLE_SHEETS_WEBHOOK_URL` in your environment variables

### 2. Hostinger SMTP Configuration

Add these environment variables for email functionality:

**SMTP_HOST** = `smtp.hostinger.com`

**SMTP_PORT** = `465`

**SMTP_USER** = Your Hostinger email (e.g., `hello@yourdomain.com`)

**SMTP_PASSWORD** = Your Hostinger email password

To get your Hostinger SMTP credentials:
1. Log in to Hostinger
2. Go to Email Accounts
3. Find your email account
4. Click "Manage" > "Email Configuration"
5. Use the SMTP details provided

### 3. Community Links (Optional)

Update the social media links in `app/page.tsx`:

- **WhatsApp Group**: Replace `https://chat.whatsapp.com/your-group-link`
- **Telegram Channel**: Replace `https://t.me/your-telegram-link`

## Local Development

1. Create `.env.local` file with all environment variables
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Deployment

1. Push code to GitHub
2. Import to Vercel
3. Add all environment variables in Vercel Project Settings
4. Deploy

## Testing the Form

After setup:
1. Submit a test form entry
2. Check your Google Sheet for the new row
3. Check the email inbox for the welcome email
4. Verify the learner counter increments

## Customization

- Update WhatsApp/Telegram links in `app/page.tsx`
- Modify email template in `app/api/submit-form/route.ts`
- Adjust colors by changing #ffda6a references
- Update Sanjay's message and content as needed

## Support

For any issues, check the console logs or Vercel function logs for debugging information.

# NeuralSites

Premium AI web agency website built with React, Vite, Tailwind CSS, Framer Motion, Lenis, Lucide React, React Router, EmailJS support, and Netlify Forms.

## File Structure

```txt
neuralsites/
  public/
    _redirects
    favicon.svg
    og-neuralsites.svg
  src/
    components/
      BackToTop.jsx
      BackgroundFX.jsx
      ContactForm.jsx
      Counter.jsx
      CursorGlow.jsx
      Footer.jsx
      Navbar.jsx
      ScrollProgress.jsx
      Section.jsx
      TiltCard.jsx
    data/
      siteData.js
    hooks/
      useSmoothScroll.js
    pages/
      Home.jsx
    styles/
      index.css
    utils/
      animations.js
    App.jsx
    main.jsx
  .env.example
  index.html
  netlify.toml
  package.json
  tailwind.config.js
  vite.config.js
```

## Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Environment Variables

Create `.env` from `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=you@example.com
```

If these variables are present, the contact form sends via EmailJS. If they are missing, the form falls back to Netlify Forms in production.

## EmailJS Setup

1. Create an account at EmailJS.
2. Add an email service and copy the Service ID.
3. Create a template with these variables:
   `from_name`, `from_email`, `phone_number`, `business_name`, `project_type`, `budget`, `timeline`, `message`, `to_email`.
4. Copy the Template ID and Public Key.
5. Add the values to `.env` locally and to Netlify environment variables for production.
6. Redeploy after setting variables.

## Netlify Forms Setup

The contact form includes:

```html
data-netlify="true"
name="neuralsites-contact"
```

Deploy to Netlify and Netlify will detect the form during build. Submissions appear in Netlify Dashboard under Forms. The app also includes spam honeypot support.

## Netlify Hosting Guide

1. Push this project to your Git provider.
2. In Netlify, choose **Add new site** then **Import an existing project**.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add EmailJS environment variables if you want direct email delivery.
5. Deploy.

## Custom Domain

1. Open the deployed site in Netlify.
2. Go to **Domain management**.
3. Add your domain.
4. Point DNS records to Netlify as instructed.
5. Enable HTTPS after DNS propagation.

## Ownership Notes

This project is clean source code with no builder branding, no platform links, and no dependency on any website generation platform after export.

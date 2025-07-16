# 🎉 Event Management System

A full-stack **Event Management System** built with **Next.js**, enabling organizers to create and manage events, and users to RSVP or buy tickets. It supports ticket generation, role-based dashboards, and Stripe integration for payments.

---

## 📌 Table of Contents

- [🎯 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [🛡 License](#-license)
- [🙋 Author](#-author)

---

## 🎯 Features

### 👥 User Roles
- **Admin**: Manage all users and events.
- **Organizer**: Create, update, and manage their events.
- **Attendee**: Browse, RSVP, or buy tickets for events.

### 📅 Event Management
- Create and publish events with images, location, date/time, categories, and ticket limits.
- View, update, or delete events (only by event organizers or admins).

### 🎫 Tickets & RSVPs
- Free and paid tickets with Stripe integration.
- Generate QR codes for each ticket.
- Event check-in support for organizers.

### 🔍 Event Discovery
- Search events by name, location, or date.
- Filter by category, upcoming, or popular.
- View in list or calendar format.

### 📊 Dashboard & Analytics
- Organizer dashboard showing event performance.
- Admin dashboard with user/event statistics.

### 📬 Notifications (Optional)
- Email confirmation after RSVP/purchase.
- Event reminders via email or in-app.

---

## 🛠 Tech Stack

| Layer         | Technology                              |
|---------------|------------------------------------------|
| Frontend      | Next.js (App Router), Tailwind CSS, Shadcn UI |
| Backend       | Next.js API Routes / Server Actions      |
| Database      | PostgreSQL with Prisma ORM               |
| Authentication| NextAuth.js (Google, Email login)        |
| Payments      | Stripe API                               |
| Media Uploads | Cloudinary / UploadThing                 |
| Emails        | Resend / Nodemailer / SendGrid           |
| QR Code       | `react-qr-code`                          |
| Deployment    | Vercel (Frontend & Backend), Railway (DB) |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Ndungu-Muigai/event-management-system.git
cd event-management-system
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup the database

- Add your DB credentials to `.env`
- Run the migration:

```bash
npx prisma db push
```

(Optional) Seed data:

```bash
npx prisma db seed
```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋 Author

**Samuel Muigai**  
🧑‍💻 [Portfolio](http://ndungu-muigai.vercel.app/)  
📧 [Email Address](https://mailto:ndungu.muigai01@gmail.com)  
🐙 [GitHub](https://github.com/Ndungu-Muigai)  
🔗 [LinkedIn](https://linkedin.com/in/samuel-muigai-560355224)

---
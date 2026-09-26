# Carbon 3D Labs

A modern and responsive **3D Printing & Engineering Services website** built using **React, Vite, Express.js, Node.js and MongoDB**.

The project includes a dynamic **Admin Panel** that allows website content to be managed without directly modifying the frontend code.

---

## 🚀 Features

### 🌐 Website

* Modern and responsive UI
* Responsive design for desktop, tablet and mobile
* Hero section with engineering visuals
* 3D printing technology section
* Services section
* Industries section
* Client section
* Website statistics
* Contact / Quote section
* Smooth navigation
* Clean and reusable React components

### ⚙️ Dynamic Content

The following website content can be managed from the Admin Panel:

* Website statistics
* Client names
* 3D printing technologies
* Hero section images
* Hero image alt text

### 🛠️ Admin Panel

Admin Panel allows you to:

* Update number of technologies
* Update industries served
* Update 3D printer models
* Update services
* Add clients
* Delete clients
* Update 3 technology cards
* Update 2 hero images
* Preview hero images before saving

---

# 🧰 Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

---

# 📁 Project Structure

```text
carbon-3d-labs/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Admin.jsx
│   │   ├── Admin.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚡ Installation

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go inside the project:

```bash
cd carbon-3d-labs
```

---

# 💻 Frontend Setup

Open the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Frontend will normally run at:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open a new terminal and go to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
node server.js
```

Backend will run at:

```text
http://localhost:5000
```

---

# 🗄️ MongoDB

This project uses **MongoDB** to store dynamic website content.

The backend connects to MongoDB using **Mongoose**.

### Collections

The project uses collections for:

* Statistics
* Clients
* Technologies
* Hero Images
* Quotes

---

# 🔌 API Endpoints

## Health Check

```http
GET /api/health
```

Used to check whether the backend is running.

---

## Statistics

### Get Statistics

```http
GET /api/stats
```

### Update Statistics

```http
PUT /api/stats
```

Example:

```json
{
  "technologies": 6,
  "industries": 14,
  "printerModels": 39,
  "services": 6
}
```

---

# 👥 Clients API

### Get Clients

```http
GET /api/clients
```

### Add Client

```http
POST /api/clients
```

Example:

```json
{
  "name": "Mahindra"
}
```

### Delete Client

```http
DELETE /api/clients/:id
```

---

# 🖨️ Technologies API

The project maintains exactly **3 technology cards**.

### Get Technologies

```http
GET /api/technologies
```

### Update Technologies

```http
PUT /api/technologies
```

Example:

```json
{
  "technologies": [
    {
      "short": "FDM",
      "title": "Fused Deposition Modeling",
      "text": "FDM 3D printing creates parts layer by layer."
    },
    {
      "short": "SLA",
      "title": "Stereolithography",
      "text": "SLA uses liquid resin and UV light."
    },
    {
      "short": "SLS",
      "title": "Selective Laser Sintering",
      "text": "SLS uses a laser to fuse powdered material."
    }
  ]
}
```

---

# 🖼️ Hero Images API

The Hero section contains exactly **2 image slots**.

### Get Hero Images

```http
GET /api/hero-images
```

### Update Hero Images

```http
PUT /api/hero-images
```

Example:

```json
{
  "image1": {
    "url": "https://example.com/engineering.jpg",
    "alt": "Engineering"
  },
  "image2": {
    "url": "https://example.com/cad.jpg",
    "alt": "CAD Design"
  }
}
```

---

# 📋 Quotes API

### Get Quotes

```http
GET /api/quotes
```

### Create Quote

```http
POST /api/quotes
```

### Delete Quote

```http
DELETE /api/quotes/:id
```

---

# 🎛️ Admin Panel

The Admin Panel can be accessed through:

```text
http://localhost:5173/admin
```

Depending on the routing configuration, it can also be accessed through the Admin component route configured in the frontend.

### Admin Features

#### Website Statistics

Admin can update:

```text
Technologies
Industries Served
3D Printer Models
Services
```

#### Clients

Admin can:

```text
Add Client
Delete Client
```

#### Technologies

Admin can update exactly three cards:

```text
Technology 1
Technology 2
Technology 3
```

Each technology contains:

```text
Short Name
Title
Description
```

#### Hero Images

Admin can update exactly two images:

```text
Image 1
Image 2
```

Each image contains:

```text
Image URL
Alt Text
```

---

# 🔄 How Dynamic Content Works

The frontend does not permanently depend on hard-coded content.

For example:

```text
Admin Panel
     ↓
React API Request
     ↓
Express.js Backend
     ↓
MongoDB
     ↓
API Response
     ↓
React Homepage
```

When an administrator changes content:

```text
Admin changes data
        ↓
PUT API request
        ↓
MongoDB updated
        ↓
Homepage fetches latest data
        ↓
Updated content displayed
```

---

# 📱 Responsive Design

The website is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Responsive layouts are implemented using CSS media queries.

---

# 🔐 Environment Variables

Never upload your `.env` file to GitHub.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Add `.env` to `.gitignore`:

```gitignore
node_modules/
.env
dist/
```

---

# ▶️ Running the Project

You need two terminals.

### Terminal 1 — Backend

```bash
cd backend
npm install
node server.js
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🧪 Testing Backend

You can test these URLs directly in your browser:

```text
http://localhost:5000/
```

```text
http://localhost:5000/api/health
```

```text
http://localhost:5000/api/stats
```

```text
http://localhost:5000/api/clients
```

```text
http://localhost:5000/api/technologies
```

```text
http://localhost:5000/api/hero-images
```

---

# 🛠️ Common Issues

## 404 API Error

Example:

```text
PUT http://localhost:5000/api/technologies 404
```

Make sure the backend is running:

```bash
node server.js
```

Also verify that the API route exists in `server.js`.

---

## Unexpected token '<'

Example:

```text
Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

This usually happens when the frontend expects JSON but the backend returns an HTML 404 page.

Check:

```text
Backend URL
API route
Port number
Backend server status
```

---

## MongoDB Connection Error

Check your `.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

Then restart the backend:

```bash
node server.js
```

---

# 🔒 Security Notes

* Keep MongoDB credentials inside `.env`.
* Never commit `.env` to GitHub.
* Use environment variables for production configuration.
* Configure CORS properly before deploying.
* Add authentication/authorization to the Admin Panel before production deployment.

---

# 🚀 Future Improvements

Possible future features:

* Admin authentication
* JWT-based Admin login
* Image upload instead of image URLs
* Cloudinary integration
* Quote management dashboard
* Service management
* Industry management
* Technology image support
* SEO optimization
* Production deployment
* Analytics dashboard
* Role-based Admin access

---

# 👨‍💻 Author

**Prakshal Jain**

B.Tech Computer Science & Engineering

### Skills

* React.js
* JavaScript
* Node.js
* Express.js
* MongoDB
* HTML
* CSS
* REST APIs

---

# 📄 License

This project is developed for educational, portfolio and business website purposes.

All rights reserved.

```
```

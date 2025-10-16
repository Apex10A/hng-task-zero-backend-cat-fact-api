# HNG Backend Task — Node.js / Express

This is a simple Node.js API built for the **HNG Internship** backend task.  
It exposes a single endpoint `/me` that returns basic user information along with a random cat fact from an external API.

---

## 🚀 Features

- Simple Express.js server
- `/me` endpoint returns:
  - Your **name**
  - Your **GitHub URL**
  - A **random cat fact**
- Deployed on **Railway**

---

## 🧩 Project Structure

├── App.js # Entry point of the application
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

---

## ⚙️ Dependencies

This project uses the following dependencies:
|----------|--------------|
| **express** | Web framework for Node.js |
| **axios** | To fetch data from the external cat facts API |
| **dotenv** | Loads environment variables from a `.env` file |

### 📦 Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) (v14 or higher) installed, then run:

```bash
npm install
🧠 Environment Variables
You can create a .env file at the root of your project (optional) if you want to customize your port:

env
PORT=8080
If you don’t set this, the default port is 8080.

🧑‍💻 Running the Project Locally
Follow these steps to get the app running on your local machine:

1️⃣ Clone the Repository
bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
2️⃣ Install Dependencies
bash

npm install
3️⃣ Start the Server
bash
npm start
Your server will start at:

bash
http://localhost:8080/me
You should see a response like:

json
{
  "name": "Praise Afolabi",
  "github": "https://github.com/yourusername",
  "cat_fact": "Cats have five toes on their front paws but only four on the back ones."
}
🌍 Deployment
This project can be deployed easily on Railway, Render, or Vercel.

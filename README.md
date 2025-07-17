# blog-web-application
A simple and functional blog application built with **Node.js**, **Express.js**, and **EJS**. This app allows users to **create**, **view**, **update**, and **delete** blog posts - all handled dynamically through the server. Blog data is stored temporarily in-memory, perfect for learning and testing. Posts will not persist between sessions as no database has been used in this application.

## 💡 Features

- Create blog posts
- View all posts on the home page
- Update existing posts
- Delete unwanted posts

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Templating Engine:** EJS  
- **Frontend:** HTML, CSS, Bootstrap  
- **Data Handling:** In-memory (using an array for blog storage)

## 📂 Project Structure
```bash
blog-web-application/
├── node_modules/
├── public/
│ ├── styles/
|     ├── index.css
├── views/
│ ├── partials/
|      ├── footer.ejs
|      ├── header.ejs
│ ├── about.ejs
│ ├── blog.ejs
│ ├── create.ejs
│ ├── index.ejs
│ ├── manage.ejs
│ └── update.ejs
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 💻 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/levinmathewabraham/blog-web-application.git
    cd blog-web-application
    ```
    
2. **Install dependencies**

    ```bash
    npm install
    ```
    
3. Run the server
 
    ```bash
    node index.js
    ```
    
4. Visit in browser
    ```bash
    http://localhost:3000
    ```
---

## 📌 Notes
- This is a beginner-friendly project with no database — all data is reset when the server restarts.
- Designed for learning purposes and understanding how Express routes and EJS templates work together.

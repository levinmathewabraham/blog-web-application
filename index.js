import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogs = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function createBlog(req, res, next) {
    const blogTitle = req.body.titleBlog;
    const blogContent = req.body.contentBlog;
    blogs.push( {
        title: blogTitle,
        content: blogContent,
    });
    next();
}

//Redirect to home page
app.get("/", (req, res) => {
    res.render("index.ejs", { blogs: blogs });
});

//Redirect to about page
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

//Available blogs to update/delete
app.get("/manage", (req, res) => {
    res.render("manage.ejs", { blogs });
});

//View specific blogs
app.post("/blog", (req, res) => {
    const blogID = req.body.id;
    res.render("blog.ejs", { blog: blogs[blogID] });
});

//Create new blog
app.get("/create", (req, res) => {
    res.render("create.ejs");
});

//Retrieve specific blog data for updation
app.post("/load", (req, res) => {
    const blogID = req.body.id;
    res.render("update.ejs", { blog: blogs[blogID], id: blogID });
});

//Handles blog updates
app.post("/update", (req, res) => {
    const blogID = req.body.id;
    blogs[blogID].title = req.body.titleBlog;
    blogs[blogID].content = req.body.contentBlog;
    res.redirect("/");
});

//Delete blogs
app.post("/delete", (req, res) => {
    const blogID = req.body.id;
    blogs.splice(blogID, 1);
    res.redirect("/");
});

//Handles blog creation and redirects back to home page
app.post("/submit", createBlog, (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

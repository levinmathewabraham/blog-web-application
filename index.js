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

app.get("/", (req, res) => {
    res.render("index.ejs", { blogs: blogs });
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.post("/load", (req, res) => {
    const blogID = req.body.id;
    res.render("update.ejs", { blog: blogs[blogID], id: blogID });
});

app.post("/update", (req, res) => {
    const blogID = req.body.id;
    blogs[blogID].title = req.body.titleBlog;
    blogs[blogID].content = req.body.contentBlog;
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const blogID = req.body.id;
    blogs.splice(blogID, 1);
    res.redirect("/");
});

app.post("/submit", createBlog, (req, res) => {
    // console.log(req.body.titleBlog);
    // console.log(req.body.contentBlog);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

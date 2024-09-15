import { useState } from "react";
import BlogList from "./blog_list";
import useFetch from "./useFetch";

const Home = () => {

    const [text, setText] = useState("Let's see if you can do it?")
    const handleClick = () => {
        setText("You can! Masha'Allah!!!")
    }
    const handleClickAgain = (name) => {
        console.log("Let's get some " + name)
    }
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    const {data: blogs, isPending, err} = useFetch("http://localhost:8000/blogs")
    

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            


            {err && <div>{err}</div>}
            {isPending && <div> Coming in a ziffy! </div>}
            {blogs && <BlogList blogs={blogs} title="All Blog List" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Snow")} title="Snow's Blogs" /> */}

            <p>{text}</p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() => handleClickAgain("coffee?")}>Click Me Again!</button>
        </div>
     );
}
export default Home;
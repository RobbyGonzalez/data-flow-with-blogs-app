import React, { useState } from 'react'
import BlogPost from './BlogPost'
import UserInput from './UserInput'
import UndoPost from './UndoPost'


const Blog = () => {

    let [author, setAuthor] = useState('')
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [listOfPosts, setListOfPosts] = useState([])

    function postKey() {
        let key = new Date();
        return key.getTime();
    }

    function postDate() {
        let date = new Date();
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleString(undefined, options);
    }

    function addToList(newPost) {
        setListOfPosts(previousPosts => {
            return [newPost, ...previousPosts]
        })
    }

    function removeFromList() {
        setListOfPosts(previousPosts => {
            let updatedPosts = previousPosts.slice(1, previousPosts.length);
            return updatedPosts;
        })
    };

    return (
        <>


            {
    /* 
    #################################################################################################################################################################################### HOMEWORK ####################################################################################################################################################################
    
    
    TODO  Create a UserInput Component that will take the information from the input of the user and pass it onto the BlogPost Component
    
    The BlogPost Component should NOT have inputs in it. It should only have a submit button, and after pressing the button, it should create a post and add it to the listOfPosts in the Blog Component.


    Optional TODO: Delete the last post from the listOfPosts
    Optional TODO: Add dates to the posts
    */}

            <UserInput setAuthor={[author, setAuthor]} setTitle={[title, setTitle]} setContent={[content, setContent]} />
            <BlogPost addToList={addToList} setAuthor={[author, setAuthor]} setTitle={[title, setTitle]} setContent={[content, setContent]} postDate={postDate} postKey={postKey} />
            <UndoPost removeFromList={removeFromList} setAuthor={[author, setAuthor]} setTitle={[title, setTitle]} setContent={[content, setContent]} />


            {listOfPosts.map(post => {
                return (
                    <div key={post.key}>
                        <h2>Title: {post.title}</h2>
                        <h3>Author: {post.author}</h3>
                        <h4>Date: {post.date}</h4>
                        <p>Content: {post.content}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default Blog
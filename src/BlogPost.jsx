


const BlogPost = ({ addToList, setAuthor, setTitle, setContent, postDate, postKey }) => {


  function handleSubmit(e) {
    e.preventDefault()
    let key = postKey();
    let date = postDate();
    //Why does this still exist in modern web programing? Is there really still a scenario where you want to refresh the browser?
    let post = { author: setAuthor[0], title: setTitle[0], content: setContent[0], key: key, date: date };
    addToList(post);


    setAuthor[1]('');
    setContent[1]('');
    setTitle[1]('');

  }

  return (
    <>

      <form onSubmit={handleSubmit}>

        <br />

        <button>Submit Post</button>

      </form>

    </>
  )
}

export default BlogPost
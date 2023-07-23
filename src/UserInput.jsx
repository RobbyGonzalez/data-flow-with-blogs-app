

const UserInput = ({ setAuthor, setTitle, setContent }) => {
    return (
        <>
            <form>
                <label>Title: </label>
                <input
                    type="text"
                    onChange={(e) => setTitle[1](e.target.value)}
                    //Is the onChange grabing the value and then overwriting the value prop as well?
                    value={setTitle[0]}
                />
                <br />
                <label>Author: </label>
                <input
                    type="text"
                    onChange={(e) => setAuthor[1](e.target.value)}
                    value={setAuthor[0]}
                />
                <br />
                <label>Content: </label>
                <input
                    type="text"
                    onChange={(e) => setContent[1](e.target.value)}
                    value={setContent[0]}
                />
            </form>
        </>
    )
}

export default UserInput


const UndoPost = ({ removeFromList, setAuthor, setContent, setTitle }) => {

    function handleSubmit(e) {
        e.preventDefault()
        removeFromList()
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <br />

                <button>Undo</button>

            </form>

        </>
    )
}

export default UndoPost
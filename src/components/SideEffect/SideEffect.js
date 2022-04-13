import React, {useEffect, useState} from 'react'



const SideEffect = () => {
    const [error, setError] = useState('')
    const [posts, setPosts] = useState([])


    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users") //promise
        // .then (res => res.json()) 
        // .then(result => setPosts(result))
        // .catch(err => setError(err.message))

        const fetchUsers = async () => {
            try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await res.json();
            setPosts(result);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchUsers();

    }, [])
    // useEffect(() => {....."the "fetch" promise or the "async" code"}, [.....dependency array]) THE PRIMARY CONSTRUCT OF A useEffect.

return (
    <div>
        {error ? <div>{error}</div> :
        posts.map(post => {
            return(
            <div key={post.id}>
                <p>Email: {post.email}</p>
                <h1>Name: {post.name}</h1>
            </div>);
})}
    </div>
  );
}

export default SideEffect



// promise = .then, .catch
// assync await

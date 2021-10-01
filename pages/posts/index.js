import Link from 'next/link'
import Layout from '../../src/components/layout';
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);

    return {
        props: {
            users: data
        }
    }
}

const Post = ({users}) => {
    return (
        <Layout>
            <h1>all users</h1>
            {users.map((user) => (
                <Link href={`/posts/${user.id}`} key={user.id}>
                    <a>
                        <h2 className='bg-danger'>{user.name}</h2>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </a>
                </Link>
            ))}
        </Layout>
    )
}

export default Post

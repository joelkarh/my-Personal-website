import Link from 'next/link';
import Layout from '../../src/components/layout';

export const getStaticPaths = async() => {
    //1. we tell next how many html page need to made based on our data
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    //it will see the path prop that  we return 
    const paths = data.map((user) => {
        return {
            params: {
                id: user.id.toString()
            }
        }
    });
    return {
        //it will now know how many htmlpages we need
        paths, 
        fallback: false}
}

export const getStaticProps = async(context) => {
    //for each path it will run this fucntion and fetch each item that we need
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' +id);
    const data = await res.json();
    return {
        props: {
            user: data
        }
    }
}
//here we render the data and generate a template for each item
const Details = ({user}) => {
    return (
        <Layout>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.address.street}</p>
            <Link href="/posts" className="bg-danger">back</Link>
        </Layout>
    )
}

export default Details

import Link from "next/link"
import {server} from '../../../config'
const ProjectArticle = ({article}) => {
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href='/projects'> go back</Link>
        </>
    )
}



export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`);
    const article = await res.json();
        
    return{
        props:{
            article
        }
    }
}

export const getStaticPaths= async() => {
    const res = await fetch(`${server}/api/projects/`)
    const articles = await res.json();
    //for each article we going to return article id
    const ids= articles.map(article => article.id )
    const paths = ids.map((id) =>({params: {id:id.toString()}}))
    return{
        paths,
        fallback: false,
    }
        
}






// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();
        
//     return{
//         props:{
//             article
//         }
//     }
// }

// export const getStaticPaths= async() => {
//     const res = await fetch(`http://jsonplaceholder.typicode.com/posts/`)
//     const articles = await res.json();
//     //for each article we going to return article id
//     const ids= articles.map(article => article.id )
//     const paths = ids.map((id) =>({params: {id:id.toString()}}))
//     return{
//         paths,
//         fallback: false,
//     }
        
// }






// usualy extern database 
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();
    
//     return{
//         props:{
//             article
//         }
//     }
// }

export default ProjectArticle

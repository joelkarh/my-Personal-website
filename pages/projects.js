import ProjectList from "../src/components/projectList";
import { server } from "../config";



const Projects = ({articles}) => {
    console.log(articles)
    return (
        <>
            <ProjectList articles={articles}/>
        </>
    )
}

export default Projects
export const getStaticProps = async() => {
    const res = await fetch(`${server}/api/projects`);
    const articles = await res.json();
    return {
        props: {
            articles,
        }
    }
}

// export const getStaticProps = async() => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();
//     return {
//         props: {
//             articles,
//         }
//     }
// }



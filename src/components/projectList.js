import projectStyles from '../../styles/css/components/_project.module.scss'
import Layout from './layout'
import ProjectItem from './projectItem'

const ProjectList = ({articles}) => {
    return (
        <Layout>
            <h1>Projects</h1>
        <div className={projectStyles.grid}>
            {articles.map((article) =>(
                // <h3 key={article.id}>{article.title}</h3>
                // eslint-disable-next-line react/jsx-key
                <ProjectItem  article={article}/>
            ))}
        </div>
        </Layout>
    )
}

export default ProjectList

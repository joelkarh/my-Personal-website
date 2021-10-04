import articleStyle from '../../styles/css/components/_project.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {server} from '../../config/index'

const ProjectItem = ({article}) => {
    return (
        <Link href='/project/[id]' as={`/project/${article.id}`}>
            <a className={articleStyle.card}>
                <h3>{article.title}
                    &rarr;</h3>
                <p>{article.body}</p>
                <Image src={`${server}${article.image}`}
                width={500}
                height={500}
                 alt=""/>
            </a>
        </Link>
    )
}

export default ProjectItem

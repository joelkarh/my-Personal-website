import {data} from '../../../data/data'
const handler = ({query:{id}},res) =>{

   const filtered = data.filter(article=> article.id===id)
   if(filtered.length>0){
       res.status(200).json(filtered[0])
   }else{
       res.status(404).json({message:`Article with the id ${id} is  not found` })
   }
}
export default handler
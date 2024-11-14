
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
export default function Todo({text , updateMode ,deleteToDo}) {
    


  return (
    <div className='tasks'>
     <div className="text">{text}</div>
     <div className="icons">
     <BiEdit className='edit' onClick={updateMode}></BiEdit>
    <AiFillDelete className='delete' onClick={deleteToDo}></AiFillDelete>
     </div>
     
    </div>
  )
}

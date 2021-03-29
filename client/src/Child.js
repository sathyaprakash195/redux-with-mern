import React , {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {getMessages} from './messageActions'
import {addnewmessage} from './messageActions'
export default function Child() {

    const dispatch = useDispatch()
    const messagesdata = useSelector(state=>state)
    const messages=messagesdata.messages
    const [input , setinput] = useState('')
    function getmessagesfrombackend()
    {
      dispatch(getMessages())
      console.log(messages)
    }

    function addnewmessagetonode()
    {
       dispatch(addnewmessage(input))
    }

    const messageslist = messages.map(message=>{
        return <h1>{message}</h1>
    })

    return (
        <div>
             
             <button onClick={getmessagesfrombackend}>get messages from backend</button>

             {messageslist}

             <br/>

             <input type="text" placeholder='message' onChange={(e)=>{setinput(e.target.value)}}/>

              <br/>

             <button onClick={addnewmessagetonode}>add new messages</button>

        </div>
    )
}

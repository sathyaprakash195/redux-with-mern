import axios from 'axios'

export const getMessages = () =>dispatch =>{


     axios.get('/api/messages').then(res=>{

        dispatch({
            type : 'GET_MESSAGES' , 
            payload : res.data
        })

        

     }).catch(err=>{
         console.log(err)
     })


}

export const addnewmessage =(message)=>dispatch=>{


        axios.post('/api/addnewmessage' , {message : message}).then(res=>{

            console.log('New Message Added Successfully')

        }).catch(err=>{
            console.log(err)
        })


}



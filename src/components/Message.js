import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import "../Message.css"

/**
* @author
* @function Message
**/

const Message =forwardRef(({msg,username},ref) => {
    const isUser= username===msg.username ;
  return(
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser ? 'message__userCard' : "message__guestCard"} >
            <CardContent>
                <Typography
                color="white"
                variant="h5"
                component="h2"
                >
                    {!isUser && `${msg.username || "Unkown User"} :`} {msg.message}
                    </Typography>


            </CardContent>
        </Card>
        
        
    </div>
   )

 })

export default Message
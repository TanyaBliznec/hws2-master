import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'
import photo from '../assets/photo/Rectangle 3.svg'


// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = ({ message }: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src={message.user.avatar}
                    id={'hw1-avatar-' + message.id}
                // создаёт студент

                //
                />
                <div className={s.text}>

                    <div id={'hw1-name-' + message.id} className={s.name}>

                        {/*создаёт студент*/}
                        {message.user.name}

                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {/*создаёт студент*/}
                {message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message

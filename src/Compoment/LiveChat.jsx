import React from 'react'
import './LiveChat.css'
import { BsChatLeftDots } from 'react-icons/bs'
const LiveChat = () => {
  return (
    <div className='LiveChatContainer'>
        <div className='LiveChatContainerHeader'>
           <h4>
             TÜRKİYENİN EN GÜVENİLİR BAHİS SİTESİNE HOŞ GELDİNİZ DETAYLI BİLGİ İÇİN CANLI DESTEK EKİBİMİZDEN HER SAAT HİZMET ALABİLSİNİZ
           </h4>
        </div>

        <div className='LiveChatContainerİcon'>
            <BsChatLeftDots className='icon' />
        </div>
    </div>
  )
}

export default LiveChat

import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
const Sidebar = () => {

    const [extended, setextended] = useState(false);
    const {prevPrompts,newChat} = useContext(Context)

  return (

    <div className="sidebar">
        <div className="top">
            <img onClick={()=>setextended(!extended)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
                <img className="img" src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p>:null}
            </div>
            {extended?
            
            <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(

                <div key={index} className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)} ...</p>
                </div>
                    )
                })}
            </div>
            :null
        }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
                
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
                
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar
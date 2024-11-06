import { Calendar, CreditCard, EllipsisVertical, HomeIcon, MessageSquare, Settings, UsersRound } from 'lucide-react';
import logo from '../assets/TestLogo.svg';
import avatar from '../assets/avartar.png';

function Header() {
    const links = [
        {name: "Overview", icon: <HomeIcon />},
        {name: "Patients", icon: <UsersRound />, active: true},
        {name: "Schedule", icon: <Calendar />},
        {name: "Message", icon: <MessageSquare />},
        {name: "Transaction", icon: <CreditCard />},
    ]

  return (
    <div className='bg-white flex justify-between items-center py-3 px-5 rounded-full'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex gap-5'>
            {links.map((link, index) => (<div key={index} className='flex gap-2 py-2 px-3 rounded-full cursor-pointer' style={{
                backgroundColor: link.active ? '#01F0D0' : 'white'
            }}>
                {link.icon}
                <div>{link.name}</div>
            </div>))}
        </div>
        <div className='flex items-center gap-2'>
            <div>
                <img src={avatar} alt="avatar"  />
            </div>
            <div>
                <div>Dr. Jose Simmons</div>
                <div>General Practitional</div>
            </div>
            <div className='flex border border-l-[#EDEDED] border-t-0 border-r-0 border-b-0 px-3 py-2'>
                <div><Settings /></div>
                <div><EllipsisVertical /></div>
            </div>
        </div>

    </div>
      
  )
}

export default Header

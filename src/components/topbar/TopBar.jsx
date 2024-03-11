import React from "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
         <i className="topIcons fa-brands fa-square-pinterest"></i>
         <i className=" topIcons fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
         <ul className="topList">
             <li className="topListItem">HOME</li>
             <li className="topListItem">ABOUT</li>
             <li className="topListItem">CONTACT</li>
             <li className="topListItem">WRITE</li>
             <li className="topListItem">LOGOUT</li>
         </ul>
      </div>
      <div className="topRight"> 
         <img className="topImg" src="https://i.ibb.co/f085Ddm/bloom.png" alt="topImg" />
         <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

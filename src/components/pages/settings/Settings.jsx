import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_1280.jpg" alt="current" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
            </div>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <label>Username</label>
            <input type="text" placeholder="YourName" />
            <label>Email</label>
            <input type="text" placeholder="email@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

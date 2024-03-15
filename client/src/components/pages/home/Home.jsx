import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"
import HardcodedPosts from "../../posts/HardcodedPosts"

export default function Home() {
  return (
    <div className="header">
        <Header/>
        <div className="home">
          <HardcodedPosts/>
          <Sidebar/>
        </div> 
    </div>
  )
}

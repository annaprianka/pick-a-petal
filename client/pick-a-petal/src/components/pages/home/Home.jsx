import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import HardcodedPosts from"../../posts/HardcodedPosts"
import PostGoogle from"../../post/HardcodedPost/PostGoogle"
import PostSteckling from"../../post/HardcodedPost/PostSteckling"
import "./home.css"
export default function Home() {
  return (
    <div className="header">
        <Header/>
        <div className="home">
          <HardcodedPosts/>
          {"<Posts/>"}
          <Sidebar/>
        </div> 
    </div>
  )
}

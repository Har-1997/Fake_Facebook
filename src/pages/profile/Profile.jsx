import "./profile.css"; 
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/jampa.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/person8.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Kocaogich</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile />
            </div>
        </div>
        </div>
    </>
  )
}

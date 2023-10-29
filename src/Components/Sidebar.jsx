import "./Sidebar.css";
import crown from "./crown.svg";
import avatar from "./avatar.png";
import background from "./Background.png";

const Sidebar = () => {
  const dashboard_items = [
    "My items",
    "Invitations",
    "Groups",
    "Events",
    "Followed Hashtags",
  ];
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div
          className="background_img"
          style={{
            background: `url(${background})`,
            width: "100%",
            height: "150px",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <img
          src={avatar}
          alt="avatar"
          className="avatar"
          style={{ width: "80px", marginBottom: "10px", position:"relative", top:"-80px", zIndex: "1"}}
        />
        <div className="userinfo">
        <h2>Anna Matveichuk</h2>
        </div>
      </div>
      <div className="sidebar_insights">
        <p>Who’s viewed your profile</p>
        <p>Impressions of your post</p>
      </div>
      <div className="dashboard">
        <ul>
          {dashboard_items.map((item, itemIndex) => (
            <li key={itemIndex}> {item} </li>
          ))}
        </ul>
      </div>
      <div className="sidebar_bottom">
        <div>
          <p>Access exclusive tools & insights</p>
        </div>
        <div>
          <img src={crown} alt="" />
          <p>Try Premium for free</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import "./Sidebar.css";
import crown from "./crown.svg";
import avatar from "./avatar.png";

const Sidebar = () => {
  const dashboard_items = [
    "My items",
    "Invitations",
    "Groups",
    "Events",
    "Followed Hashtags",
  ];
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar_top">
          <img
            src={avatar}
            alt=""
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              margin: "-50px auto 0",
            }}
          />
          <h2>Anna Matveichuk</h2>
          <div className="dashboard">
            <p>Who’s viewed your profile</p>
            <p>Impressions of your post</p>
          </div>
          <div className="dashboard_item">
            <ul>
              {dashboard_items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="additional_tools">
        <p>Access exclusive tools & insights</p>
        <img
          src={crown}
          alt=""
          style={{ width: "18px", height: "18px" }}
        />{" "}
        <span>Try Premium for free</span>
      </div>
    </div>
  );
};

export default Sidebar;

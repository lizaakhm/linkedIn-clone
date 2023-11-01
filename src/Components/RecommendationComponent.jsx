import "./RecommendationComponent.css";
import avatar from "./avatar.png";
import follobtn from "./followbutton.svg";

const RecommendationComponent = () => {
  const recommendedPages = [
    {
      companyName: "ANZ OILFIELD SERVICES PVT. LTD.",
      companyInfo: "Company, Oil & Energy",
    },
    {
      companyName: "UN Political and Peacebuilding Affairs (DPPA)",
      companyInfo: "Company, Oil & Energy",
    },
    {
      companyName: undefined,
      companyInfo: "Company, Oil & Energy",
    },
    {
      companyName: "ANZ OILFIELD SERVICES PVT. LTD.",
      companyInfo: "Company, Oil & Energy",
    },
  ];

  return (
    <div className="Recommendation_Component">
      <h3>Add to your feed</h3>
      <div className="profiles_to_follow">
        {recommendedPages.map((pageinfo, index) => (
          <div className="profile_to_follow" key={index}>
            <img
              src={avatar}
              alt="avatar"
              className="profile_image"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <div className="info_about_profile">
              <h6>{pageinfo.companyName || "\u00a0"}</h6>
              <p>{pageinfo.companyInfo}</p>
              <img
                src={follobtn}
                alt="followbtn"
                style={{ width: "70px", height: "25px", cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p style={{cursor: "pointer"}}>View all recommendations</p>
    </div>
  );
};

export default RecommendationComponent;

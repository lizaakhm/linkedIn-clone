import './GlobalFooter.css';

const GlobalFooter = () => {
  const datas = [
    {
      heading: "General",
      items: [
        "Sign Up",
        "Help Center",
        "About",
        "Press",
        "Blog",
        "Careers",
        "Developers",
      ],
    },
    {
      heading: "Browse LinkedIn",
      items: ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"],
    },
    {
      heading: "Business Solutions",
      items: ["Talent", "Marketing", "Sales", "Learning"],
    },
    {
      heading: "Directories",
      items: [
        "Members",
        "Jobs",
        "Companies",
        "Features",
        "Learning",
        "Posts",
        "Articles",
      ],
    },
    {
        heading: undefined,
        items: [
            "Services",
            "Products",
            "Advice",
            "People Search",
            "Schools",
            "News",
            "News Letters",
        ]
    }
  ];

  return (
    <div className="globalFooter">
      {datas.map((data, index) => (
        <div className='footerdiv' 
        key={index}>
          <h6>{data.heading || '\u00a0'}</h6>
          <ul>
            {data.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GlobalFooter;

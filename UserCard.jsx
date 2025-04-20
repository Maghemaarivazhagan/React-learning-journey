import PropTypes from "prop-types";

const userData = [
  {
    name: "williams",
    city: "NewYork",
    description: "Front-end developer",
    skills: ["UI/UX", "Front End Development", "HTML", "CSS", "Javascript", "React"],
    online: false,
    profile: "/profile1.png",
  },
  {
    name: "Jack",
    city: "Delhi",
    description: "Data analyst",
    skills: ["python", " power BI ", "Mysql", "Django"],
    online: true,
    profile: "/profile2.png",
  },
  {
    name: "kandhan",
    city: "Salem",
    description: "Software Engineer",
    skills: ["UI/UX", "java programming", "spring boot", "MangoDB", "C", "React"],
    online: false,
    profile: "/profile3.png",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} alt="profile" height="150" width="150" className="img" />
      <h3>{props.name}</h3>
      <p>{props.city}</p>
      <p>{props.description}</p>
      <div className="button-group">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};

function UserCard() {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
}

export default UserCard;

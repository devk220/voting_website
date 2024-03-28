import Navbar from './Navbar';
import Footer from './Footer';

const MainPage = () => {

  document.title="Indian Voting Website | Vote Here"

  let party = [
    {
      image: "./images/Modi.webp",
      Name: "Narendra Modi",
      Party: "BJP",
      Logo: "./images/BJP.jpg",
    },
    {
      image: "./images/Mamata Banerjee.jpg",
      Name: "Mamata Banerjee",
      Party: "Trinamool",
      Logo: "./images/Tmc.png",
    },
    {
      image: "./images/Rahul_Gandhi.jpg",
      Name: "Rahul Gandhi",
      Party: "Congress",
      Logo: "/images/congress.png",
    },
    {
      image: "./images/Arvind Kejriwal.jpg",
      Name: "Arvind Kejriwal",
      Party: "Aam Aadmi Party",
      Logo: "./images/Aap.webp",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="container" style={{display:"flex",flexDirection:"row"}}>
      {party.map((item) => (
        <div className="card mt-5 mx-3" style={{ width: "18rem",height:"25rem",border:"2px solid black"}} key={item.Name}>
          <img src={item.image} className="card-img-top" alt="..." style={{height:"200px"}} />
          <div className="card-body" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h4 className="card-title">{item.Name}</h4>
            <p className="card-text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <img src={item.Logo} alt={item.Party} style={{height:"70px"}}/>
              <h6>{item.Party}</h6>
            </p>
            <button className="btn btn-danger" style={{fontFamily:"sans-serif",fontWeight:"bolder",width:"8em"}}>
              VOTE
            </button> 
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default MainPage;

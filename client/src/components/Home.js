import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Home = ({loggedIn,handleLogout}) => {
  document.title="Indian Voting Platform | Home"

  const signin=localStorage.getItem("signin")
  let users

  if(signin)
    users=JSON.parse(localStorage.getItem("user"))

  return (
    <div>
    <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
    <img src="./images/ashok pillar.png" alt="" style={{
          height: "200px",
          opacity: 0.3,
          zIndex: 2,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto"
        }} />
        <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:5,position:"relative"}}>
          <h1>Welcome to ECI Voter Portal {users?users.firstname:"User"}</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit beatae ipsam eaque pariatur modi vitae culpa! Excepturi fugit hic inventore quidem veniam voluptas voluptatem ab atque asperiores autem facere similique ut non sunt tenetur iure quia, labore eligendi repudiandae eos eius adipisci sequi rem? Ipsum aliquam fugiat alias suscipit dolorum consectetur soluta obcaecati voluptas, ratione libero cumque, delectus nesciunt beatae reprehenderit expedita officiis cum voluptatem facilis quis cupiditate! Reiciendis facere laudantium quis cumque placeat quam at eius, provident maiores eligendi pariatur praesentium, et fuga vel ipsam nisi vero, corporis assumenda deleniti! Quaerat, eos? Ullam quia similique pariatur voluptatem nemo amet praesentium delectus doloribus vitae blanditiis, autem excepturi sapiente possimus, fuga ad corporis odio illum. Illum dolorum natus rem? Asperiores velit doloremque nisi ex recusandae omnis voluptatum veritatis, fugit expedita dolores dolorem culpa beatae accusamus molestiae, ipsa, sit error soluta. Omnis eum accusantium vero ipsam tempore, voluptates eaque eos quis nostrum nulla enim natus provident iusto adipisci eligendi culpa sit illo dolorum. Beatae provident soluta animi, similique sint illum ab a voluptatem, cupiditate molestiae repellendus! Laboriosam ad omnis obcaecati eveniet nobis quae corporis illo! Omnis, voluptatem qui similique illo deleniti, vel maxime consequuntur sapiente repellendus ipsam tempora blanditiis accusantium mollitia.</p>
        </div>
    <Footer/>
    </div>
  )
}

export default Home
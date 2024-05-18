import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  document.title="Indian Voting Platform | About"

  useEffect(() => {

    document.body.style.backgroundImage="url(https://t3.ftcdn.net/jpg/04/65/81/24/360_F_465812436_VpBouK7LBB2VGFkaVwXWlaAeYOtbq9OA.jpg)"
    document.body.style.backgroundSize="cover"
  
    return () => {
      document.body.style.backgroundImage=""
    }
  }, [])

  const images=[
    {
      img:"./images/my new image 2.png"
    },
    {
      img:"./images/Sarnab.jpg"
    },
    {
      img:"./images/Ghanistraj dass 2.jpg"
    },
    {
      img:"./images/MESSI.jpg"
    },
  ]

  return (
    <div>
    <Navbar/>
      <h1 style={{textAlign:"center"}}>About Us</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
        <p style={{textAlign:"center",width:"30vw",height:"50vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum temporibus numquam maiores distinctio modi, laborum, ut dolor odit aut aliquam error alias excepturi natus eaque non? Placeat soluta, laborum necessitatibus ullam magnam non dicta tempore, omnis perspiciatis quidem nemo, maiores dolores veniam! Ullam nam quas magni aperiam. Rem natus possimus, quae neque voluptatibus perspiciatis? Explicabo ducimus doloribus excepturi maiores eaque, consequuntur odio fugit sit. Voluptatem assumenda doloribus asperiores facilis qui aliquid illo. Perferendis quasi placeat corporis eveniet? Hic est pariatur possimus </p>
        </div>
          <h1 style={{textAlign:"center"}}>Our Creators</h1>
        <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
          {images.map((item)=>(
            <img src={item.img} style={{height:"80px",borderRadius:"4px"}} alt=""/>
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default About
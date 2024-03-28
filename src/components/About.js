import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
    <Navbar/>
      <h1 style={{textAlign:"center"}}>About Us</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
        <p style={{textAlign:"center",width:"30vw",height:"50vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum temporibus numquam maiores distinctio modi, laborum, ut dolor odit aut aliquam error alias excepturi natus eaque non? Placeat soluta, laborum necessitatibus ullam magnam non dicta tempore, omnis perspiciatis quidem nemo, maiores dolores veniam! Ullam nam quas magni aperiam. Rem natus possimus, quae neque voluptatibus perspiciatis? Explicabo ducimus doloribus excepturi maiores eaque, consequuntur odio fugit sit. Voluptatem assumenda doloribus asperiores facilis qui aliquid illo. Perferendis quasi placeat corporis eveniet? Hic est pariatur possimus </p>
        </div>
          <h1 style={{textAlign:"center"}}>Our Creators</h1>
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
        </div>
        <Footer/>
    </div>
  )
}

export default About
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Result = ({chartData}) => {
  document.title="Indian Voting Platform | Results"
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>View the Results here</h1>
        <div style={{width:450}}>
          <Pie data={chartData} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Result
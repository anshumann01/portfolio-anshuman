import React from 'react'
import Tag from './Tag'
import Work from './Work'
import WeatherApp from "../assets/weatherApp.png"
import QRCODE from "../assets/QRCODE.png"
import ExpenseTracker from "../assets/ExpenseTracker.png"
import JanSeva from "../assets/JanSeva.png"

const Projects = () => {
  return (
    <div className='bg-gray-900 px-8 gap-5 flex flex-col items-center pb-8'>
            <div className='pt-8 '>
            <Tag text={"Projects"}/>
        </div>
            <Work image={JanSeva} text={"Public Issue Reporting System"} details={"Built a role-based React application enabling users to report public issues and admins to manage them, featuring dynamic dashboards, real-time statistics, reusable components, and persistent data storage using LocalStorage."} link={"https://janseva-portal.netlify.app/"}/>
            <Work image={WeatherApp} text={"Weather Application"} details={"A responsive weather application that shows current weather conditions by city, displaying temperature, humidity, and weather icons. Built with modern web technologies for clean UI and seamless user experience."} link={"https://weather-app-078.netlify.app/"}/>
            <Work image={QRCODE} text={"QR Code Generator"} details={"A online QR Code Generator that lets users enter any text or link and instantly create a scannable QR code. It’s fast, easy to use, and perfect for sharing information quickly."} link={"https://qr-code-generatorrrrr.netlify.app/"}/>
            <Work image={ExpenseTracker} text={"Expense Tracker"} details={"A simple, responsive Expense Tracker app to add, track, and manage expenses. It shows total balance, income, and expense history in real time, helping users monitor their finances easily."} link={"https://expense-tracker-01-8.netlify.app/"}/>
        </div>
  )
}

export default Projects
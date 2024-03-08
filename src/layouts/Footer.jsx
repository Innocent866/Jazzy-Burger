import React from 'react'
import qmark from '../assets/footer/Group_27-removebg-preview.png'
import apple from '../assets/footer/apple-removebg-preview.png'
import pay from '../assets/footer/Vector__3_-removebg-preview.png'
import playstore from '../assets/footer/image_10-removebg-preview.png'
import facebook from '../assets/footer/facebook-removebg-preview.png'
import twitter from '../assets/footer/twitter-removebg-preview.png'
import instagram from '../assets/footer/instagram-removebg-preview.png'
import youtube from '../assets/footer/youtube-removebg-preview.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
        <main className='bg-dark text-white p-5'>
        <div className='d-lg-flex d-md-flex justify-content-between'>
               
               <div className='d-lg-flex d-md-flex gap-5 gap-md-1'>
               <div className='d-lg-flex d-md-flex mb-5 text-center gap-1 align-items-center'>
               <img src={qmark} alt="" />
              <div>
              <h5>24/7</h5>
               <p>Support</p>
              </div>
           </div>

           <div className='d-lg-flex d-md-flex gap-1 mb-5 text-center align-items-center'>
               <img src={pay} alt="" />
              <div >
              <h5>100%</h5>
               <p>Payment Secured</p>
              </div>
           </div>
            </div>


             
                <div className='d-lg-flex gap-5 gap-md-1'>
                <div className='border border-white mb-5 border-1 rounded d-flex justify-content-center  gap-1 align-items-center'>
               <img src={apple} alt="" style={{width:"2rem"}}/>
              <div>
              <h6>Download on the </h6>
               <h4>APP STORE</h4>
              </div>
           </div>

           <div className='border border-white border-1 mb-5 rounded d-flex justify-content-center gap-1 align-items-center'>
               <img src={playstore} alt="" />
              <div>
              <h6>Get it on</h6>
              <h4>GOOGLE PLAY</h4>                   
              </div>
           </div>
            </div>

        </div>
        <div className='follow'>
        <div>
        <div>
            <h6>Need Help</h6>
            <p>+234 9138095613</p>
            <p> OR</p>
            <p>help@jazzyburger.com</p>
            <h5>FOLLOW US</h5>
        </div>
        <div className='d-flex gap-3'>
            <img src={facebook} alt="" style={{width:"2rem", height:"2rem"}} className='border border-1 border-white'/>
            <img src={twitter} alt="" style={{width:"2rem", height:"2rem"}} className='border border-1 border-white'/>
            <img src={instagram} alt="" style={{width:"2rem", height:"2rem"}} className='border border-1 border-white'/>
            <img src={youtube} alt="" style={{width:"2rem", height:"2rem"}} className='border border-1 border-white'/>

        </div>
        </div>
        </div>
        </main>
    </>
  )
}

export default Footer
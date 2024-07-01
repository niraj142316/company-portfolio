import React from 'react';
import homeImg2 from '../../assets/linkedin4.png'
import './home.css';
import Skills from '../skills/Skills';
import Services from '../service/Services';
import Team from '../teams/Team';

const Home = () => {

  return (
    <div className='home'>
        <div className="home-firstsection">
          <div className="home-right">
            <div className="home-right1">
              <h2 className='home-right1-h2'>WELCOME TO GLAZINGSTAR</h2>
              <img className='home-right1-img' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/waving-hand-8676752-7143646.png?f=webp&w=256" alt="" />
              <h2>,</h2>
            </div>
            <div className="home-right2">
              <h1 className='home-right2-h1'>We are a creative group of people who design influential brands and digital innovative websites.</h1>
            </div>
            <div className="home-right3">
              <p className='home-right3-p'>We create stunning digital experiences that will help your business stand out.</p>
            </div>
            <div className="home-right4">
              <div className="home-right4-img">
                <img className='home-right-img' src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="" />
              </div>
              <div className="home-right4-img">
                <img className='home-right-img hacker' src="https://cdn.iconscout.com/icon/free/png-512/free-hackerrank-3628233-3031053.png?f=webp&w=256" alt="" />
              </div>
              <div className="home-right4-img">
                <img className='home-right-img linked' src={homeImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-secondsection">
          <div className="home-second1">
            <h1 className='home-second1-h1'>5+</h1>
            <p className='home-second1-p'>YEARS OF EXPERIENCES</p>
          </div>
          <div className="home-second2">
            <h1 className='home-second2-h1'>12</h1>
            <p className='home-second2-p'>PROJECTS COMPLETED AROUND THE WORLD</p>
          </div>
          <div className="home-second3">
            <h1 className='home-second3-h1'>JS</h1>
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=hGdCwhSHUe6L&format=png&color=000000" alt="" />
            <img className='home-second3-img' src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000" alt="" />
          </div>
        </div>
        <Services />
        <Team />
        <Skills />
    </div>
  )
}

export default Home

import React from 'react';
import './about.css';
const About = () => {
  return (
    <div className='about'>
      <section className='about-mission'>
        <h2 className='about-h2'>Our Mission</h2>
        <p className='about-p'>
          We are a digital innovation company dedicated to providing top-notch solutions and services to our clients. Our mission is to help businesses grow by offering a wide range of digital services including product development, online marketing, graphic design, application development, website development, email marketing, SEO, and social media marketing.
        </p>
      </section>
      <section className='about-services'>
        <h2 className='about-h2'>Our Services</h2>
        <ul className='about-services-list'>
          <li>Digital Products</li>
          <li>Online Marketing</li>
          <li>Graphic Design</li>
          <li>Application Development</li>
          <li>Website Development</li>
          <li>Email Marketing</li>
          <li>SEO</li>
          <li>Social Media Marketing</li>
        </ul>
      </section>
      <section className='about-team'>
        <h2 className='about-h2'>Meet Our Team</h2>
        <img src='' alt='Our Team' className='about-team-img' />
        <p className='about-p'>
          Our team of experts is passionate about delivering innovative solutions that drive success. With a diverse range of skills and a commitment to excellence, we work collaboratively to ensure our clients achieve their goals.
        </p>
      </section>
    </div>
  );
}

export default About;

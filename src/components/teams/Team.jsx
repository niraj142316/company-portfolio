
import React from 'react';
import './team.css';
import member1Img from '../../assets/nirajImg.png';
import member2Img from '../../assets/kusum1.jpg';
import member3Img from '../../assets/bhura7.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Niraj Chaurasiya',
      role: 'Senior Developer',
      image: member1Img,
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        facebook: 'https://facebook.com/johndoe'
      }
    },
    {
      name: 'Kusum Rani',
      role: 'VP Sales & Marketing',
      image: member2Img,
      social: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
        facebook: 'https://facebook.com/janesmith'
      }
    },
    {
      name: 'Manish Kumar Singh',
      role: 'CEO & Founder',
      image: member3Img,
      social: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson'
      }
    },
    {
      name: 'Rajnish Singh',
      role: 'Head of Marketing',
      image: "https://glazingstar.com/wp-content/themes/gutenify-base/images/team-member-3.jpg",
      social: {
        linkedin: 'https://www.linkedin.com/in/bobbrown',
        twitter: 'https://twitter.com/bobbrown',
        facebook: 'https://facebook.com/bobbrown'
      }
    },
    {
      name: 'Divya Rajput',
      role: 'Chief Finance Officer',
      image: "https://glazingstar.com/wp-content/themes/gutenify-base/images/team-member-1.jpg",
      social: {
        linkedin: 'https://www.linkedin.com/in/charliewhite',
        twitter: 'https://twitter.com/charliewhite',
        facebook: 'https://facebook.com/charliewhite'
      }
    }
  ];

  return (
    <div className='team'>
      <h2 className='team-h2'>Meet Our Team</h2>
      <p className='team-p1'>Our dedicated team of professionals.</p>
      <div className='team-container'>
        {teamMembers.map((member, index) => (
          <div className='team-card' key={index}>
            <div className='team-card-img'>
              <img src={member.image} alt={member.name} />
            </div>
            <div className='team-card-details'>
              <h4 className='team-card-name'>{member.name}</h4>
              <p className='team-card-role'>{member.role}</p>
              <div className='team-card-social'>
                <a href={member.social.linkedin} target='_blank' rel='noopener noreferrer'>
                  <img src='https://img.icons8.com/fluent/24/000000/linkedin.png' alt='LinkedIn' />
                </a>
                <a href={member.social.twitter} target='_blank' rel='noopener noreferrer'>
                  <img src='https://img.icons8.com/fluent/24/000000/twitter.png' alt='Twitter' />
                </a>
                <a href={member.social.facebook} target='_blank' rel='noopener noreferrer'>
                  <img src='https://img.icons8.com/fluent/24/000000/facebook-new.png' alt='Facebook' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

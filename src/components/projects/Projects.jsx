import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projectImg1 from '../../assets/homebackground.jpg';
import './projects.css';

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <div className='project'>
      <h2 className='project-h2'>OUR TEAMS PROJECTS <span className='project-span'>(fully responsive)</span></h2>
      <p className='project-p1'>Something We've built so far....</p>
      <Carousel showDots={false} infinite={true} responsive={responsive}>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>Social-Network Application</h4>
              <p className='project-card-p2'>
                This is my social networking project, through which users can connect with their friends, see their posts, and like and comment on their posts as well. Also, users can share the posts and their thoughts.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>Node.js</p>
                <p className='project-card-skill'>MongoDB</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>E-Commerce Website</h4>
              <p className='project-card-p2'>
                I have created this E-Commerce website using ReactJS(frontend) and NodeJS(backend). Also created Admin Panel through which admin can, upload new products on the website or remove products from the website. Users can fetch data dynamically from backend side using API.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>Node.js</p>
                <p className='project-card-skill'>API</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>CRUD Application</h4>
              <p className='project-card-p2'>
                It's a crud application made front-end and works at the back-end as well. The user can upload their data, update or delete the data. Developed server-side logic, database, & API to support the functionality of web application.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>Node.js</p>
                <p className='project-card-skill'>MySQL</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>Team Management</h4>
              <p className='project-card-p2'>
                A full-stack web application that allows users to view and interact with a list of users. Implemented, searching logic to search for users by their names, and pagination logic to retrieve a specific number of users per page.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>Node.js</p>
                <p className='project-card-skill'>PostgreSQL</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>Whole Genome Sequence Analysis</h4>
              <p className='project-card-p2 genome-p'>
                This is my last year project completed with a team of 3 member. My role was to analyze the large dataset of sequence genome and build the front-end for the website.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>Python</p>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>Django</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>My Portfolio</h4>
              <p className='project-card-p2'>
                It's my online portfolio where provided introduction about myself like:- Education, Contacts, Interests, Achievements, Work experience, Projects, Skills used in Projects and other skills. Also Clients can leave message to me regarding the projects issues or want to develop the website for themselves.
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>React</p>
                <p className='project-card-skill'>CSS</p>
                <p className='project-card-skill'>JavaScript</p>
              </div>
            </div>
            <div className='project-card-btn'>
              <img className='project-card-img12' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='' />
              <a className='project-card-a' href='/'>view code</a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;

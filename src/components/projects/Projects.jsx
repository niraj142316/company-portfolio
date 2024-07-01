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
                This is our social networking team project, through which users can connect with their friends, see their posts, and like and comment on their posts as well. Also, users can share the posts and their thoughts.
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
                We have created this E-Commerce website using ReactJS(frontend) and NodeJS(backend). Also created Admin Panel through which admin can, upload new products on the website or remove products from the website. Users can fetch data dynamically from backend side using API.
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
              <h4 className='project-card-h4'>Hospital Management System</h4>
              <p className='project-card-p2'>
                The program can look after inpatients, outpatients, records, database treatments, status illness, billings in the pharmacy, and labs. It also maintains hospital information such as ward id, doctors in charge, and department administering.  </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>Angular</p>
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
              <h4 className='project-card-h4'>Bull Capital</h4>
              <p className='project-card-p2'>
                It's an Angular project, which shows the current stock price, also the period which you want to see the performance of the stock price for a day or a week and much more. Also you can take advantage of Real-time bid price. 
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>Angular</p>
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
              <h4 className='project-card-h4'>Online Portfolio</h4>
              <p className='project-card-p2'>
                It's an online portfolio where provided introduction about what is making for, like:- Contacts, Achievements, Work experience, team members, purpose, Projects, Skills used in Projects and other skills. Also Clients can leave message to me regarding the projects issues or want to develop the website for themselves.
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
        <div className='project-card'>
          <div className='project-card-img1'>
            <img className='project-card-img11' src={projectImg1} alt='' />
          </div>
          <div className='project-card-details'>
            <div className='project-card-title'>
              <h4 className='project-card-h4'>SuryaUrza</h4>
              <p className='project-card-p2'>
                Managed all aspects of SEO for websites "SuryaUrza" including Keyword research, on-page optimization, link building and content strategy. 
              </p>
              <div className='project-card-skills'>
                <p className='project-card-skill'>HTML+CSS</p>
                <p className='project-card-skill'>JavaScript</p>
                <p className='project-card-skill'>Semrush</p>
                <p className='project-card-skill'>Divi Builder</p>
                <p className='project-card-skill'>Rank Math SEO</p>
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
              <h4 className='project-card-h4'>Hisar Packers Movers</h4>
              <p className='project-card-p2'>
                Implemented SEO strategies for "Hisarpackersmovers" website, focusing on optimization of meta tags and technical SEO aspects, enhanced websites search engine performance, leading to higher search ranking and improved user engagement. 
              </p>
              <div className='project-card-skills'>
              <p className='project-card-skill'>HTML+CSS</p>
                <p className='project-card-skill'>JavaScript</p>
                <p className='project-card-skill'>Semrush</p>
                <p className='project-card-skill'>Divi Builder</p>
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

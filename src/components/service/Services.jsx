import React from 'react';
import './services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We provide top-notch web development services, creating responsive and dynamic websites tailored to your business needs.',
      image: "https://th.bing.com/th/id/OIP.PHRs__7VEjnILnw5u9y0HQHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: 'Mobile App Development',
      description: 'Our team excels in developing high-quality mobile applications for both iOS and Android platforms, ensuring seamless user experiences.',
      image: "https://th.bing.com/th/id/OIP.b3oo7HykcHWyIiFb8zyg7gAAAA?rs=1&pid=ImgDetMain"
    },
    {
      title: 'UI/UX Design',
      description: 'We craft visually appealing and user-friendly designs, enhancing the overall user experience and engagement on your platforms.',
      image: "https://image.freepik.com/free-vector/realistic-ui-ux-background_23-2149070665.jpg?w=2000"
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with our comprehensive digital marketing services, including SEO, social media marketing, and more.',
      image: "https://glazingstar.com/wp-content/themes/gutenify-base/images/feature-1.jpg"
    },
    {
      title: 'Search Engine Optimization',
      description: '5000+ Website and countless pages ranked on top SERPs.',
      image: "https://glazingstar.com/wp-content/themes/gutenify-base/images/feature-2.jpg"
    },
  ];

  return (
    <div className='services'>
      <h2 className='services-h2'>Our Services</h2>
      <p className='services-p1'>Explore the wide range of services we offer to help you grow your business.</p>
      <div className='services-container'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-card-img'>
              <img src={service.image} alt={service.title} />
            </div>
            <div className='service-card-details'>
              <h4 className='service-card-title'>{service.title}</h4>
              <p className='service-card-description'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
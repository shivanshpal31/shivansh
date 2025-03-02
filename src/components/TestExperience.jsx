import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TestExperience = () => {
    const experiences = [
        {
            'company': 'Inncircles Technologies',
            'role': 'Product Developer',
            'duration': 'April 2023 - Present',
            'logo': 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/e5gz1yggdy8sc1umna3e',
            'points': [
                'Involved in dynamic contributions to web and mobile📱 development projects, actively influencing and improving project outcomes.',
                'Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and teamwork.',
                'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency 📈.',
                'Implemented data security for the company’s product to provide role-based access control ⚙️.'
            ],
            'url': 'https://inncircles.com/#home',
        },
        {
            'company': 'AT & T',
            'role': 'Technical Intern',
            'duration': 'Jan 2023 - March 2023',
            'logo': 'https://www.att.com/ecms/dam/att/consumer/global/logos/att_globe_500x500.jpg',
            'points': [
                'Gained experience with Git version control contributing to the development and maintenance of code repositories.',
                'Worked on the application dashboard, making it more user-friendly and improving its overall functionality📱.'
            ],
            'url': 'https://www.att.com/',
        },
    ]
    return (
      <div className='experience bg-black w-screen text-white pt-4 overflow-x-hidden' id='experience'>
        <div className='pt-12 sm:px-16'>
          <p className='font-light'>MY JOURNEY SO FAR.</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience.</h2>
        </div>
        <VerticalTimeline className='mt-9'>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="relative vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff", }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.duration}
              iconStyle={{ background: '#fff' }}
              icon={
                <a className='flex justify-center items-center w-full h-full' rel="noreferrer" href={experience.url} target='_blank'>
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </a>
              }
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}
                >
                  {experience.company}
                </p>
              </div>
  
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    )
  }
  
  export default TestExperience;



import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

const Projects = ({ darkMode }) => {

  const [popup, setPopup] = useState({
    show: false,
    message: ""
  });

  const projects = [
    {
      id: 1,
      title: 'Full Stack Clothing Store',
      desc: 'Developed a responsive online clothing store with dynamic product display, shopping cart functionality, and cloud-based image handling using Cloudinary.',
      image: project1,
      tags: ['React', 'Express.js', 'MongoDB', 'Cloudinary', 'Vercel deployment'],
      github: 'https://github.com/RonakDev783/ecommerce-frontend',
      demo: 'https://ecommerce-frontend-mauve.vercel.app/'
    },
    {
      id: 2,
      title: 'Food Ordering UI Website',
      desc: 'A responsive food ordering UI built using HTML, Tailwind CSS, and JavaScript. It showcases modern design, menu sections, and interactive components for a smooth user experience.',
      image: project2,
      tags: ['Html', 'TailwindCSS', 'Javascript'],
      github: 'https://github.com/RonakDev783/FoodOrder-Website',
      demo: 'https://ronakdev783.github.io/FoodOrder-Website/'
    },
    {
      id: 3,
      title: 'Electronics E-Commerce Website',
      desc: 'A responsive e-commerce website built using HTML, CSS, and JavaScript with a local storage-based cart system. It allows users to add, remove, and manage products efficiently without a backend.',
      image: project3,
      tags: ['Html', 'Css', 'Javascript'],
      noCode: true,
      noDemo: true
    },
    {
      id: 4,
      title: 'Manufacturing Business Website with WhatsApp & Email Integration',
      desc: 'Built a real-world business website featuring responsive UI, WhatsApp integration for instant communication, and a contact form for customer inquiries.',
      image: project4,
      tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'WhatsApp Integration', 'Contact Form', 'Client Project'],
      demo: 'https://omdiesandtools935131.github.io/Om-Dies-And-Tools/',
      noCode: true
    },
    {
      id: 5,
      title: 'Social Media UI Web App (Mobile-First Design)',
      desc: 'A mobile-first social media UI web app built using HTML, CSS, and JavaScript. The project was AI-assisted and further customized to enhance layout, responsiveness, and user interface design.',
      image: project5,
      tags: ['HTML', 'CSS', 'JavaScript', 'Mobile-First Design', 'AI-Assisted'],
      github: 'https://github.com/RonakDev783/RoGram',
      demo: 'https://ronakdev783.github.io/RoGram/'
    }
  ];

  return (
    <section
      id='projects'
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className='relative py-24'
    >
      <div className='container mx-auto px-4'>

        {/* Heading */}
        <div className='text-center mb-10' data-aos='fade-up'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
            style={{
              color: darkMode ? 'white' : '#1f2937'
            }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className='max-w-xl mx-auto'
            style={{
              color: darkMode ? '#d1d5db' : '#6b7280'
            }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='h-36 overflow-hidden rounded-t-xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              <div className='p-4'>
                <h3
                  className='text-lg font-bold mb-2'
                  style={{
                    color: darkMode ? 'white' : '#1f2937'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-3'
                  style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563'
                      }}
                      className='px-2 py-1 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-2'>
                  
                  {/* Code */}
                  <a
                    href={project.noCode ? "#" : project.github}
                    onClick={(e) => {
                      if (project.noCode) {
                        e.preventDefault();
                        setPopup({
                          show: true,
                          message: "Code is private or not available for this project."
                        });
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? 'white' : '#374151'
                    }}
                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                  >
                    <FaGithub className='text-sm' />
                    <span>Code</span>
                  </a>

                  {/* Demo */}
                  <a
                    href={project.noDemo ? "#" : project.demo}
                    onClick={(e) => {
                      if (project.noDemo) {
                        e.preventDefault();
                        setPopup({
                          show: true,
                          message: "Live demo is not available for this project."
                        });
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    }}
                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                  >
                    <FaExternalLinkAlt className='text-sm' />
                    <span>Demo</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className={`w-[90%] max-w-sm p-6 rounded-2xl text-center ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }`}>
            <h3 className="text-lg font-semibold mb-3">Notice</h3>
            <p className="text-sm mb-5">{popup.message}</p>

            <button
              onClick={() => setPopup({ show: false, message: "" })}
              className="px-5 py-2 rounded-full text-white"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)"
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
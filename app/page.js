'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

export default function Home() {
  const skills = [
    {
      icon: '/path-to-your-nextjs-logo.svg',
      title: 'Next.js',
      description: 'Building fast, scalable web apps using Next.js.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      title: 'MongoDB',
      description: 'NoSQL database for modern web applications.',
    },
    {
      icon: 'fa-solid fa-database',
      title: 'SQL',
      description: 'Structured Query Language for relational databases.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for styling websites.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      title: 'Express.js',
      description: 'Backend framework for building APIs and servers.',
    },
    {
      icon: 'fab fa-html5', // FontAwesome icon
      title: 'HTML & CSS',
      description: 'Build responsive and modern websites.',
    },
    {
      icon: 'fab fa-js', // FontAwesome icon
      title: 'Javascript',
      description: 'Highly proficient in writing efficient JS code.',
    },
    {
      icon: 'fab fa-python', // FontAwesome icon
      title: 'Python',
      description: 'Machine leaning codes written there.',
    },
    {
      icon: 'fab fa-react', // FontAwesome icon
      title: 'React JS',
      description: 'Build scalable web applications using React.',
    },
    {
      icon: 'fab fa-node-js', // FontAwesome icon
      title: 'Node JS',
      description: 'Server-side scripting using Node.js.',
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'Machine Learning',
      description: 'Developing predictive models and working with data-driven insights.',
    },
  ]

  const project = [
   {
    project:"",
    link:"",
  }
  ]
  return (
    <>
      {/* <form className="bg-gray-700 p-3 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="items-center space-x-4 space-y-2 md:grid md:grid-cols-8 grid grid-row-3">
          <input type="file" className=":md:grid md:col-span-2 px-3 py-2 ms-3 mt-2 md:py-2 border border-gray-300 rounded-lg md:text-[16px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={handleFileChange}
          />
          <input disabled={!file} className="md:grid md:col-span-5 px-3 h-10 border border-gray-300 rounded-lg text-black md:text-[16px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={task} onChange={handleTaskChange} placeholder='What you wanted to do with file' type="text"
          />
          <button type="submit" disabled={!(task.length>6)||!file} className={`md:grid md:col-span-1 md:w-22 md:h-10 w-16 h-8 md:text-[16px] text-sm grid justify-center px-4 py-2 font-semibold text-black bg-blue-200 rounded-lg shadow-md transition duration-300 ease-in-out`}>Submit</button>
        </div>
      </form> */}
      <div className="bg-gray-900 items-center justify-center text-white">
        <header className="w-full px-8 py-4 py-2 flex justify-between items-center">
          <h1 className="md:text-3xl text-xl font-bold text-blue-400">Developer X</h1>
          <nav>
            <ul className="flex space-x-8 md:text-md md:px-28 md:font-bold md:text-lg text-sm">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#project" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
            </ul>
          </nav>
        </header>

        <main id='home' className="md:grid md:grid-rows items-center justify-center mt-10">
          {/* Profile Section */}
          <div className="md:grid md:grid-cols-2 text-center px-2 pb-8 md:px-20">
            <div className='md:grid md:col-span-1 content-center'>
              <h1 className="md:text-7xl text-4xl font-bold mt-4">Nice to meet you, I&apos;m <p className="text-blue-400">Piyush Dhyani</p></h1>
              <p className="md:text-lg text-sm text-gray-400 mt-4">Aspiring web developer with a passion for creating user-friendly and efficient solutions. Eager to apply my skills and continuously learn to build innovative projects.</p>
              <p className="md:text-lg text-sm text-gray-400 mt-4">Computer Science Engineering Student (2025) <br /> Loknete Gopinathji Munde Institute of Engineering Education & Research</p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 flex justify-center my-4 md:mt-5">
                <div className="text-center">
                  <h3 className="md:text-4xl text-2xl font-bold text-blue-400">3</h3>
                  <p className="text-gray-400">Internships</p>
                </div>
                <div className="text-center">
                  <h3 className="md:text-4xl text-2xl font-bold text-blue-400">10+</h3>
                  <p className="text-gray-400">Projects</p>
                </div>
              </div>
            </div>
            <div className='md:grid md:col-span-1 content-center md:pe-20'>
              <Image src="/IMG_20240531_185537_063-Photoroom.png" alt="Profile" className="md:pt-8 pt-2 md:px-12 px-6 bg-gray-700 w-[318px] h-[319px] md:w-[448px] md:h-[458px] justify-center mx-auto rounded-full border-4 border-blue-600" width={318} height={319}/>
              {/* <img src="IMG_20240531_185537_063-Photoroom.png" alt="Profile" className="md:pt-8 pt-2 md:px-12 px-6 bg-gray-700 w-[318px] h-[319px] md:w-[448px] md:h-[458px] justify-center mx-auto rounded-full border-4 border-blue-600" /> */}
            </div>
          </div>

          <div className='grid grid-cols-3 bg-gray-700 p-5 md:gap-4 grid justify-items-center'>
            {/* <div className='flex justify-center'> */}
            {skills.map((skill, index) => (
              <div key={index} className="grid col-span-1 bg-gray-800 p-6 rounded-lg md:w-96 flex-shrink-0 text-center" >
                <div className="md:text-4xl text-xl mb-4">
                  {skill.icon.startsWith('https') || skill.icon.startsWith('/path') ? (
                    <Image src={skill.icon} alt={skill.title} className="md:w-15 md:h-9 h-6 w-15 mx-auto text-blue-400" width={60} height={35}/>
                  ) : (
                    <i className={`${skill.icon} text-blue-400`}></i>
                  )}
                </div>
                <h4 className="font-semibold text-sm md:text-xl">{skill.title}</h4>
                <p className="text-gray-400 mt-2 text-sm md:text-md">{skill.description}</p>
              </div>
            ))}
          </div>
        </main>
        <h1 id='project' className='text-4xl text-center p-5 font-semibold'>Projects</h1>
        <section  className='grid grid-rows py-3 gap-1 justify-items-center'>
          <div className="grid row-span-1 grid-cols-5 bg-black p-2 rounded-lg w-4/5 flex-shrink-0 flex items-center text-center" >
            <div className="grid col-span-1 text-4xl mb-1">
              <i className={`fa-solid fa-link text-blue-400`}></i>
            </div>
            <div className='grid col-span-4 text-left gap-1'>
              <h4 className="font-semibold text-lg md:text-xl">Hospital Management System</h4>
              <a className='hover:underline hover:text-blue-300' href="https://digitalised-hospital-system-frontend.vercel.app/">https://digitalised-hospital-system-frontend.vercel.app/</a>
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-5 bg-black p-2 rounded-lg w-4/5 flex-shrink-0 flex items-center text-center" >
            <div className="grid col-span-1 text-4xl mb-1">
              <i className={`fa-solid fa-link text-blue-400`}></i>
            </div>
            <div className='grid col-span-4 text-left gap-1'>
              <h4 className="font-semibold text-lg md:text-xl">CSK webiste</h4>
              <a className='hover:underline hover:text-blue-300' href="https://github.com/piyushD2003/CSK-clone-website-by-php/">https://github.com/piyushD2003/CSK-clone-website-by-php/</a>
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-5 bg-black p-2 rounded-lg w-4/5 flex-shrink-0 flex items-center text-center" >
            <div className="grid col-span-1 text-4xl mb-1">
              <i className={`fa-solid fa-link text-blue-400`}></i>
            </div>
            <div className='grid col-span-4 text-left gap-1'>
              <h4 className="font-semibold text-lg md:text-xl">inotebook</h4>
              <a className='hover:underline hover:text-blue-300' href="https://github.com/piyushD2003/inotebook/">https://github.com/piyushD2003/inotebook</a>
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-5 bg-black p-2 rounded-lg w-4/5 flex-shrink-0 flex items-center text-center" >
            <div className="grid col-span-1 text-4xl mb-1">
              <i className={`fa-solid fa-link text-blue-400`}></i>
            </div>
            <div className='grid col-span-4 text-left gap-1'>
              <h4 className="font-semibold text-lg md:text-xl">Fuel Prediction System</h4>
              <a className='hover:underline hover:text-blue-300' href="https://github.com/piyushD2003/FuelConsumptionPrediction-DS-ML-">https://github.com/piyushD2003/FuelConsumptionPrediction-DS-ML-</a>
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-5 bg-black p-2 rounded-lg w-4/5 flex-shrink-0 flex items-center text-center" >
            <div className="grid col-span-1 text-4xl mb-1">
              <i className={`fa-solid fa-link text-blue-400`}></i>
            </div>
            <div className='grid col-span-4 text-left gap-1'>
              <h4 className="font-semibold text-lg md:text-xl">Tkinter Application</h4>
              <a className='hover:underline hover:text-blue-300' href="https://github.com/piyushD2003/TKinter-Projects">https://github.com/piyushD2003/TKinter-Projects</a>
            </div>
          </div>
        </section>
        <section id='contact' className='bg-gray-700'>
        <h1 className='text-4xl text-center pt-5 font-semibold'>Contact Me</h1>
          <form className="bg-gray-700 p-8 md:px-52 rounded-lg shadow-lg md:space-y-4 space-y-2">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Enter your name</label>
              <input
                type="text"
                className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Your email address</label>
              <input
                type="email"
                className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Subject</label>
              <input
                type="text"
                className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Write me a message</label>
              <textarea
                className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold text-white"
            >
              Send Message
            </button>
          </form>
        </section>
        {/* <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" /> */}
        <footer id='about' className=" bg-gray-900 text-white flex flex-col pt-10 md:pt-14">
          <div className="md:grid md:grid-rows mx-auto">
            {/* Profile Section */}
            <div className="grid row-span-1 md:grid-cols-5 flex items-center md:pb-16">
              <div className='md:grid md:col-span-1 justify-items-end pe-3 md:text-right'>
              <Image src="/IMG_20240531_185537_063-Photoroom.png" alt="Your Name" className="justify-center pt-2 px-2 bg-gray-700 w-[110px] h-[114px] md:w-[134px] md:h-[140px] rounded-full border-2 border-blue-600" height={114} width={110} />
              </div>
              <div className='grid col-span-1 py-2'>
                <h2 className="md:text-4xl text-xl font-semibold">Piyush Dhyani</h2>
                <p className="md:text-xl text-gray-400">Fresher Web Developer</p>
              </div>
              <div className="grid col-span-3 text-center pt-5 mb:pt-0 md:text-right">
                <h3 className="md:text-4xl text-xl font-semibold">Get in touch</h3>
                <p className="md:text-xl">Email me: <a href="mailto:youremail@example.com" className="text-blue-400">piyushdhyani7@gmail.com</a></p>
              </div>
            </div>
            <div className="grid row-span-1 place-content-center">
              <div className='grid-cols-1 place-content-end pt-7 md:pt-14 md:space-x-10 space-x-4'>
                <a href="https://x.com/Up_to_Dowwn" className="text-white md:text-2xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white md:text-2xl"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/piyush-dhyani-14271526b/" className="text-white md:text-2xl"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/piyushD2003/" className="text-white md:text-2xl"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="md:grid md:row-span-1 text-center md:text-lg text-gray-400">
              <p>© Your Portfolio | Designed by Piyush Dhyani</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

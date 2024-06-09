import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";
import { RxCalendar } from "react-icons/rx";
import { FaVideo } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaSearch, FaChevronDown, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
export default function Home() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);


    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.8,
      });
      const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    const scrollRef = useRef(null);
    
    const chevronIcons = Array.from({ length: 37 }, (_, index) => (
        <FaChevronDown key={index} size={index * 15 <= scrollHeight ? 80 : 40} color={index * 15 <= scrollHeight ? '#5DE0E6' : 'transparent'} className={`${index * 15 <= scrollHeight ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}/>
    ));
    

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000); // Promenio sam interval na 5 sekundi radi bržeg demonstriranja animacije

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            const refPosition = scrollRef.current.offsetTop;
            if (currentPosition >= refPosition) {
                const gradientDivHeight = Math.max(10, Math.min(600, 8 + (currentPosition - refPosition) / 4));
                setScrollHeight(gradientDivHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollRef]);

  return (
    <div className='bg-[#292929]'>
        <NavBar/>
        <div className='flex justify-between px-[10%] mt-[15vh] pb-[10vh]' style={{background:'linear-gradient(#292929, #181818)'}}>
{/*             
            <video controls autoPlay loop muted playsInline className='self-center h-[120vw] md:h-[45vw] mt-[-25vw] md:mt-[-5vw]' style={{borderWidth:'1px', boxShadow: '-15px 14px 40px 40px rgba(0, 0, 0, 0.6)'}} >
                <source src="videos/fitLoupeDemo.MP4" type="video/mp4"/>
            </video>  */}
            <div className=' self-start flex flex-col'>
                <p className='text-white text-3xl text-center'>
                    FitLoupe is a centralized mobile app for creating, customizing, and sharing workout plans with clients.
                    <br/><br/>
                    Instead of relying on traditional tools like Word documents, notebooks, or messy PDF files, FitLoupe enables trainers to consolidate all their activities in one place. This means they can easily create, customize, and share workouts with their clients directly through the app, rather than using communication platforms like WhatsApp or email. 
                    <br/><br/>
                    The main focus of the app is to provide a simple and quick solution for creating workouts and tracking the progress of each client, whether trainers are working remotely or in-person at the gym.
                    <br/><br/>
                </p>
                <div className='flex flex-row justify-between text-white pt-[5vw] w-[40%] self-center'>
                    <div className='flex gap-5 items-center'>
                        <img src='images/appStore.png' className='w-[50%]'/>
                        <p className='text-3xl'>iOS</p>
                    </div>
                    <div className='flex gap-5 justify-end items-center'>
                        <img src='images/googlePlayIcon.png' className='w-[18%]'/>
                        <p className='text-3xl'>Android</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        {/*<div style={{position: 'relative', zIndex:1000, overflow: 'hidden', width: '100%', height: '70vh', boxShadow: '-15px 14px 40px 40px rgba(0, 0, 0, 0.6)' }}>
            <video controls autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover' style={{ zIndex: '-1', objectFit: 'cover' }}>
                <source src="../public/videos/FitLoupeBackgroundVideo.mp4" type="video/mp4"/>
            </video> 
        </div>*/}
        <div className='flex flex-col text-white pt-[15vh] gap-[10vh]'>
            <h1 className='text-8xl text-center'>Monetize Your Helth</h1>
            <p className='w-[70%] text-center self-center text-4xl' style={{ lineHeight: '2em' }}>
            FitLoupe serves as a modern alternative to traditional tools, providing trainers with a user-friendly platform to create personalized workout plans, track client progress, manage schedules, and facilitate seamless communication.
            </p>
            <div className='progress-container'>
                <div className={`progress-item ${activeIndex === 0 ? 'active' : ''}`} style={{ order: 2, transform: `translateX(${activeIndex === 0 ? '110%' : activeIndex === 1 ? '0%' : '-110%'}) scale(${activeIndex === 1 ? 1 : 0.7})`, opacity: `${activeIndex === 1 ? 1 : 0.4}` }}>
                    <img src="../public/images/infoNovi.png" alt="Client Info" style={{height:'30vw'}}/>
                    <div className='pt-10 bg-black flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Kalendar ce ovde</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Organize Schedule
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Client Scheduling Features.
                                </p>
                            </span>
                          
                        
                        </div>
                    </div>
                </div>
                <div className={`progress-item ${activeIndex === 1 ? 'active' : ''}`} style={{ order: 3, transform: `translateX(${activeIndex === 0 ? '-240%' : activeIndex === 1 ? '-20%' : '-125%'}) scale(${activeIndex === 2 ? 1 : 0.7})`, opacity: `${activeIndex === 2 ? 1 : 0.4}` }}>
                    <img src="../public/images/progres.png" alt="Progress" style={{height:'30vw'}} />
                    <div className='pt-10 flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Track Progress</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Graphic Progress Display
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Progress Visualization
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Identify Patterns In Progress
                                </p>
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className={`progress-item ${activeIndex === 2 ? 'active' : ''}`} style={{ order: 1, transform: `translateX(${activeIndex === 0 ? '130%' : activeIndex === 1 ? '20%' : '240%'}) scale(${activeIndex === 0 ? 1 : 0.7})`, opacity: `${activeIndex === 0 ? 1 : 0.4}` }}>
                    <img src="../public/images/treningNovi.jpeg" alt="Plan" style={{height:'30vw'}}/>
                    <div className='pt-10 flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Fast and Simple Plan</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Easy Workout Creation
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Remote Training
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Images Of Exercises
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Duplicate and Edit Plan
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Client Workout Archives
                                </p>
                            </span>
                       
                        </div>
                    </div>
                </div>
            </div>              
        </div>
        <div ref={scrollRef} className='mt-[30vh] px-[10%]'>
            <h1 className='text-white text-8xl'>Key Benefits: </h1>
        </div>
        <div className='flex  px-[10%] text-white'>
            <div className='flex flex-col w-[49%] justify-between pt-[20vh] gap-[25vh]'>
                <div className={`flex flex-col items-center justify-center w-[90%] ${inView1 ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} ref={ref1}>
                    <img src='images/trener.png' />
                    <h1 className='text-9xl mt-[-4%] text-center'>Training Plan</h1>
                    <p className='text-center text-2xl'>
                        Our app simplifies the process of creating workouts, making it fast and hassle-free. Trainers and clients can
                        effortlessly collaborate, regardless of their physical location. With just a few clicks, a workout model can
                        be duplicated and customized, saving valuable time that would otherwise be spent on repetitive tasks. Moreover,
                        should any errors occur during the workout creation process, our app ensures that corrections are swiftly addressed,
                        ensuring smooth and efficient workflow.
                    </p>
                </div>

        <div className={`flex flex-col items-center justify-center w-[90%] ${inView2 ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} ref={ref2}>
          <img src='images/calendarSchedule.png' />
          <h1 className='text-8xl mt-[-20%] text-center'>Dynamic Calendar</h1>
          <p className='text-center text-2xl'>
            In addition to its individual calendar usage, which enhances time management and planning, our app also offers
            trainers the ability to organize and manage their clients' schedules effectively. Trainers can designate specific
            appointments or notes in the calendar for each client, ensuring that the respective client is notified and that
            the appointment is included in their calendar as well. This feature significantly improves organization and allows
            trainers to take charge of their clients' schedules effortlessly.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center w-[90%] ${inView3 ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} ref={ref3}>
          <img src='../public/images/app2.jpeg' className='w-[50%]' />
          <h1 className='text-8xl mt-[-15%] text-center'>Communication in One Place</h1>
          <p className='text-center text-2xl'>
            By displaying progress visually after each workout, clients can see their achievements more clearly, addressing
            the lack of motivation that comes from not being able to see progress directly. Even small improvements often go
            unnoticed in daily life, but this app highlights even the slightest changes through progress graphs after each
            session. This helps users stay motivated by making every improvement visible.
          </p>
        </div>
            </div>
            <div className='w-[8%] h-[280vh] flex flex-col justify-between items-center pt-10'>
                {chevronIcons.map((icon, index) => (
                    <div key={index} style={{ marginBottom: '5px' }}>{icon}</div>
                ))}
            </div>
            <div className='flex flex-col items-end justify-between w-[49%] h-[230vh] pt-[60vh]'>
                <div className={`flex flex-col items-center justify-center w-[90%] ${inView4 ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} ref={ref4}>
                    <img src='images/progress2.png'/>
                    <h1 className='text-8xl mt-[-15%] text-center'>Graphical Progress</h1>
                    <p className='text-center text-2xl'>
                    By displaying progress visually after each workout, users can see their achievements more clearly, addressing the lack of motivation that comes from not being able to see progress directly. Even small improvements often go unnoticed in daily life, but this app highlights even the slightest changes through progress graphs after each session. This helps users stay motivated by making every improvement visible.
                    </p>
   
                </div>
                <div className={`flex flex-col items-center justify-center w-[90%] ${inView5 ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} ref={ref5}>
                    <img src='images/videoTraining.png'/>
                    <h1 className='text-8xl mt-[-7%] text-center'>Video Archive</h1>
                    <p className='text-center text-2xl'>
                    Whether your clients are training remotely or unable to attend in-person sessions, FitLoupe offers unparalleled convenience and flexibility. With detailed workout plans accessible anytime, anywhere, clients can stay on track with their fitness goals, even outside the gym. And for trainers, it means the ability to maintain collaboration with clients regardless of geographical constraints.
                    </p>
                    
                </div>
            </div>
        </div>
        {/* <div className='mt-[30%] flex justify-between px-[5%]'>
            <div>
                <h1>Text</h1>
                <p>Pojasnjenje</p>
            </div>
            <img src='../public/images/app2.jpeg' className='w-[30%]'/>
        </div> */}
        <div className='bg-[#181818] text-white h-screen'>
           
        </div>
    </div>
  )
}


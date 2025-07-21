import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './Nav';
// import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
    const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  useEffect(() => {

    if (!gsap || !ScrollTrigger) return;
    
    const sections = gsap.utils.toArray(".panel");
    
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 2.5,
        start: "top top",
        end: () => "+=" + (containerRef.current.scrollWidth - window.innerWidth) * 1.2,
        invalidateOnRefresh: true
      }
    });
    
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 2 });
      
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          containerAnimation: scrollTween,
          start: "left right", 
          end: "center center",
          scrub: 3,
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    }
    
    document.body.style.overflow = "auto";
    document.body.style.height = "100vh";
    
    return () => {
      if (scrollTween) scrollTween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);
  
    return (
        <div className="w-full overflow-hidden">
            {/* <Nav /> */}
            <Nav/>
            <div 
        ref={containerRef} 
        className="flex"
        style={{ 
          height: "100vh",
          position: "relative",
        }}
      >
        <div className="panel flex-shrink-0 h-full flex items-center justify ">
        <div className="w-[650px] h-full flex flex-col items-start justify-center px-8 py-12 bg-[#2D3047]">
  <div className="flex flex-col mb-8">
    <div className="font-merriweather text-5xl mb-1 leading-tight tracking-wide text-[#419D78]">
      Where
    </div>
    <div className="font-merriweather text-5xl mb-1 leading-tight tracking-wide text-yellow-100">
      Freelance Dreams
    </div>
    <div className="font-merriweather text-5xl mb-1 leading-tight tracking-wide text-yellow-100">
      Hit Play —
    </div>
    <div className="font-merriweather text-5xl leading-tight tracking-wide text-yellow-100">
      Without the Stress.
    </div>
  </div>

  <div className="text-lg leading-relaxed text-[#FDFDFD] mb-10 font-inter max-w-xl">
    No angry clients. No 2AM panic texts.<br />
    Just hands-on, story-driven projects that help you grow.<br />
    Learn the real freelance grind — minus the stress —<br />
    and build a portfolio that actually proves it.
  </div>

  <button className="flex items-center border border-[#F5F5DC] text-[#F5F5DC] py-3 px-6 rounded-full hover:bg-[#F5F5DC] hover:text-[#2D3047] transition-colors duration-300 font-medium">
    Try a Sim, Thank Us Later
    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>

          <div 
            ref={imageContainerRef} 
            className="w-[180vh] h-full overflow-hidden"
          >
            <img 
              ref={imageRef} 
              className='h-screen object-cover w-full origin-center'
              src='https://readdy.ai/api/search-image?query=modern%2520tech%2520workspace%2520with%2520gradient%2520blue%2520to%2520purple%2520background%2C%2520minimalist%2520design%2C%2520showing%2520abstract%2520code%2520elements%2520and%2520UI%2520components%2520floating%2520on%2520the%2520right%2520side%2C%2520left%2520side%2520is%2520clean%2520with%2520smooth%2520gradient%2520for%2520text%2520placement%2C%2520professional%2520lighting%2C%2520high%2520quality%2520render&width=1600&height=800&seq=hero123&orientation=landscape' 
              alt=""
              style={{ 
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />
          </div>
          
          <div className="w-[65vw] flex-shrink-0 h-full flex items-start bg-yellow-200 relative">
            <div className="h-full w-full flex justify-center items-center">

              <div className='absolute right-32 flex flex-col space-y-0' style={{ zIndex: 1 }}>
                <div className='h-[40vh] w-[40vh]'>
                  <img className='object-cover h-full w-full' src="https://i.pinimg.com/736x/af/e6/9b/afe69bdb7911e1d4abd8d27a192cec6b.jpg" alt="" />
                </div>
                <div className='h-[40vh] w-[40vh]'>
                  <img className='object-cover h-full w-full' src="https://i.pinimg.com/1200x/61/54/4c/61544cdb7afd8c7f7962c07ad426762a.jpg" alt="" />
                </div>
              </div>
              
              <div className='w-[60%] relative' style={{ zIndex: 2 }}>
                <img className='object-cover h-full' src="/65ca923128cc8156377f855f_Group 57.jpg" alt="" />
              </div>
            </div>
          </div>
          
          <div className="w-[120vw] flex-shrink-0 h-full flex bg-white relative">
            <div className="w-4/5 h-full flex items-center justify-center p-12 overflow-hidden">

              <div className="w-[20%] h-[50%] mb-8">
                <img 
                  className="h-full w-full object-cover" 
                  src="/agadni image.jpg" 
                  alt="Agadni" 
                />
              </div>
              
              <div className="w-2/3 m-12">
                <h1 className="text-6xl text-center font-serif mb-2">Raghukul</h1>
                <h2 className="text-5xl text-center font-serif italic mb-6">oyy kok lakhsu</h2>
                <h2 className="text-5xl text-center font-serif mb-8">biju kok lakhsu oyy</h2>
                <p className="text-lg m-8">
                  bau badhu bau badhu bau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhu bau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhu
                  bau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhubau badhu bau badhu
                  biju kok lakhsu
                </p>
                <a href="#" className="text-lg m-8 flex items-center">
                  About the mansion
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex-grow"></div>
            </div>
            
            <div className="w-1/5 h-full flex items-center justify-center bg-[#EAEAEA]">
              <img 
                className="h-full w-full object-cover" 
                src="/65df8b1fd5e69c7cf961c88c_Texture (2)-p-500.jpg" 
                alt="Texture" 
              />
            </div>

            <div className="absolute bottom-5/20 right-55 w-.1/3 h-1/3">
              <img 
                className="h-full w-full object-cover" 
                src="/bedivvaccheniimage.jpg" 
                alt="Bed" 
              />
            </div>
          </div>
          
          <div className="w-[120vw] flex-shrink-0 h-full flex bg-green-100">
            <div className="w-4/5 h-full flex items-center justify-center bg-white">
              <h2 className="text-4xl">HomePage 3</h2>
            </div>
            <div className="w-1/5 h-full flex items-center justify-center">
              <img 
                className="h-full w-full object-cover" 
                src="/65df8b1fd5e69c7cf961c88c_Texture (2)-p-500.jpg" 
                alt="Texture" 
              />
            </div>
          </div>
          
          <div className="w-screen flex-shrink-0 h-full flex items-center justify-center bg-yellow-100">
            <h2 className="text-4xl">HomePage 4</h2>
          </div>
          
          <div className="w-[70vw] flex-shrink-0 h-full flex items-center justify-center bg-purple-100">
            <h2 className="text-4xl">HomePage 5</h2>
          </div>
          <div className='panel'></div>
        </div>
      </div>
        </div>
    );
};

export default Homepage;
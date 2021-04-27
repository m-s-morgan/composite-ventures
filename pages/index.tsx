import Head from 'next/head';
import Swal from 'sweetalert2';
import marked from 'marked';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';
import 'isomorphic-fetch';
import 'animate.css/animate.min.css';

const slides = [
  'Building Smarter Companies Faster',
  'Strategic Capital, High Conviction',
  'Relationship Driven, Robust Network'
];
const sectionContainer = 's-contain h-full max-w-screen-xl mx-auto px-5 z-10 sm:px-6 lg:px-8';
const advisors = [
  {
    name: 'Jim Armstrong',
    pic: '/advisors/jimarmstrong.png',
    bio: 'A successful and experienced venture investor across a variety of enterprise and consumer facing technology companies, Jim has established himself as a leading venture capitalist based in California. Jim focuses on investments with particular interest in SaaS delivered marketplaces and processes, consumer mobile technology and devices. On several occasions Forbes Magazine has recognized Jim on its "Midas List" as one of the top Venture Capitalists in the United States. Jim co-founded March Capital in 2014 and has been at Clearstone Venture Partners since 1998. Jim was a partner with idealab Capital Partners in the late 1990s and started his career at Austin Ventures in 1995. Jim led venture investments in PayPal, United Online, Internet Brands, Integrien, Branch and SpyCloud. Jim is involved in  the early formation of two successful Silicon Valley studios: The Hive (big data and machine learning) and The Fabric (cloud networking).\n\nJim is a former software programmer and financial expert, and holds a BA in Economics from the University of California at Los Angeles and an MBA from the McCombs School at the University of Texas at Austin.'
  }, {
    name: 'Jeff McCormick',
    pic: '/advisors/jeffmccormick.png',
    bio: 'Jeff founded Saturn in 1994 to finance early-stage growth companies. He spearheads Saturn\'s investigation into new areas of investment and is active in managing the firm\'s portfolio companies. Working closely with entrepreneurs, he helps forge strategic relationships, builds management teams and develops marketing and distribution strategies to enable significant growth. At Saturn, Jeff\'s areas of focus include advanced materials and healthcare technology. Some of his notable investments include Knopp Biosciences, Third Pole Therapeutics, BiOWiSH Technologies and Omaze.\n\nJeff\'s experience as an investment banker, entrepreneur and venture capitalist dates back to the early \'90s. Prior to founding Saturn, he worked as an analyst and investment banker with Bariston Associates, a Boston firm that originates and manages private investments for individual and institutional clients. Jeff earned his BS in Biology as well as his MBA in Finance from Syracuse University.'
  }, {
    name: 'Jeff Parker',
    pic: '/advisors/jeffparker.png',
    bio: 'Mr. Parker has an extensive history of success as a serial entrepreneur, CEO and active investor in financial services companies over the past 40 years. He was named 2003 New England Entrepreneur of the Year by Ernst & Young in the Financial Services category. He currently serves as a board member or advisor to more than a dozen companies in New York, Boston and Salt Lake City. In 2010, Jeff was named to Inside Market Data\'s Hall of Fame. In 1980, Mr. Parker founded Technical Data Corporation, a provider of financial analytic services for the institutional investor community. In 1983, he founded First Call Corporation. In 1986, he sold both these businesses to the Canadian publishing giant International Thomson, now Thomson Reuters, and became Chairman and CEO of Thomson Financial, its financial services subsidiary.\n\nAfter serving as CEO of Thomson Financial, Mr. Parker co-founded 38 Newbury Ventures, a venture capital firm which focused on start-up and early stage companies. In 1997, Mr. Parker co-founded CCBN.com (Corporate Communications Broadcast Network), a leader in enabling direct on-line communications between public companies and the investment community. He served as CCBN\'s Chairman and CEO until the sale of the company to The Thomson Corporation in March 2004.\n\nMr. Parker is a Trustee Emeritus and a Presidential Counsellor at Cornell University where he founded the Parker Center for Investment Research at the Johnson School. Mr. Parker holds a Bachelor of Engineering, a Master of Engineering and an MBA all from Cornell University.'
  }
];

export default function Home() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    loading: false,
    error: false,
    success: false,
  });
  const [hero, setHero] = useState('/backgrounds/earthsmall.jpg');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const heroImg = new Image();
    heroImg.onload = () => {
      setHero(heroImg.src);
    };
    heroImg.src = '/backgrounds/earth.jpg';

    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  const onAdvisor = (index: number) => {
    const advisor = advisors[index];

    if (!advisor) {
      return;
    }

    Swal.fire({
      width: '50em',
      title: advisor.name,
      html: marked(advisor.bio),
      imageUrl: advisor.pic,
      imageHeight: 300,
      imageAlt: advisor.name,
      confirmButtonText: 'Done',
      showClass: {
        popup: 'animate__animated animate__fadeIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut animate__faster'
      },
    });
  };

  const contactChanged = (ev?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = ev.target;
    const name = target.name;

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: target.value
      };
    });
  };

  const formSubmit = async (ev?: FormEvent) => {
    ev.preventDefault();

    setContact((prevState) => {
      return {
        ...prevState,
        loading: true,
        error: false,
        success: false,
      };
    });

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        message: contact.message,
      }),
    });

    if (res.ok) {
      setContact({
        name: '',
        email: '',
        company: '',
        message: '',
        loading: false,
        error: false,
        success: true,
      });
    } else {
      setContact((prevState) => {
        return {
          ...prevState,
          loading: false,
          error: true,
        };
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Starpath Ventures</title>
        <link rel="preload" href="/backgrounds/earth.jpg" as="image" type="image/jpeg"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Navbar></Navbar>
      <main>
        <section id="top" className="bg-cover bg-black transition-all" style={{ backgroundImage: `url(${hero})` }}>
          <div className="shroud shroud-light"></div>
          <div className={`${sectionContainer} ${loaded ? 'transition-opacity duration-500' : 'opacity-0'}`}>
            <Slider slides={slides} auto={true}></Slider>
            <a className="next-section" href="#about">
              <img src="/misc/downarrow_light.png" alt="About" />
            </a>
          </div>
        </section>
        <section id="about">
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-around">
              <div className="w-150 max-w-full md:pr-14">
                <img className="w-full" src="/backgrounds/launch.jpg" alt="Launch" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 md:mt-0">We are a venture growth firm focused on early stage investments across the United States</h2>
                <p className="text-gray-500">Our mission is to foster a hands on, value-add approach, working side-by-side with our entrepreneurs every step of the way.</p>
              </div>
            </div>
            <a className="next-section" href="#thesis">
              <img src="/misc/downarrow.png" alt="Thesis" />
            </a>
          </div>
          <div className="v-block bg-gray-100"></div>
          <div className="h-block bg-gray-100"></div>
        </section>
        <section id="thesis" className={`${styles.thesis} auto-section bg-cover bg-black text-center text-white`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full flex flex-col items-center justify-center py-24 md:py-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">Our strategy is to take an active role in the formation and management of early stage companies</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-5">We look for companies with potential for significant growth, primarily in SaaS technology as well as in consumer and retail technology</h3>
              <p className="text-gray-300 mb-5">When we discover new opportunities outside our areas of expertise, we tap into our strong network of key advisors and relationships. Our external network allows us to expand our investment universe, giving us a significant competitive advantage in selecting the right investments.</p>
              <p className="italic mb-5">Investment Criteria</p>
              <div className="grid md:grid-cols-6 gap-4 px-5">
                <div className="border border-white p-10 md:col-span-2">An innovative solution that offers a novel approach in addressing an unmet and critical market need</div>
                <div className="border border-white p-10 md:col-span-2 md:pt-16">Seed investment to Series D</div>
                <div className="border border-white p-10 md:col-span-2">A disruptive technology that is difficult to replicate or is patent-protected</div>
                <div className="border border-white p-10 md:col-span-3">A substantial market size and the potential for recurring revenues</div>
                <div className="border border-white p-10 md:col-span-3">Achievable business plan with a clear and carefully planned path to profitability and liquidity</div>
              </div>
            </div>
            <a className="next-section" href="#portfolio">
              <img src="/misc/downarrow_light.png" alt="Portfolio" />
            </a>
          </div>
        </section>
        <section id="portfolio" className={`${styles.portfolio} auto-section bg-cover text-center`}>
          <div className="shroud shroud-white"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center py-24 md:py-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-9">Portfolio</h2>
              <div className="grid md:grid-cols-3 px-5">
                <a href="http://www.vyng.me/" target="_blank" className="block relative h-80 w-80 max-w-100 border border-gray-500 bg-white md:border-r-0">
                  <div className={`${styles.vyng} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">Vyng</h3>
                    <p className="text-sm">A next-generation Caller ID platform that visualizes every call to start better conversations between friends, families, and businesses. Their app replaces your old-school dialer and visualizes unknown calls with videos, animation, stickers and more.</p>
                  </div>
                </a>
                <a href="https://spycloud.com/" target="_blank" className="block relative h-80 w-80 max-w-100 border border-gray-500 bg-white border-t-0 md:border-t">
                  <div className={`${styles.spycloud} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">SpyCloud</h3>
                    <p className="text-sm">A leader in account takeover (ATO) prevention, protecting billions of consumer and employee accounts either directly or through product integrations. The Company's award winning solutions proactively defeat fraud attempts and disrupt the criminals' ability to profit from stolen information.</p>
                  </div>
                </a>
                <a href="https://www.sensorindustries.com/" target="_blank" className="block relative h-80 w-80 max-w-100 border border-gray-500 bg-white border-t-0 md:border-t md:border-l-0">
                  <div className={`${styles.sensorind} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">Sensor Industries</h3>
                    <p className="text-sm">Leverages its proprietary and patented technology harnessing data that utilizes the Internet of Things (IoT) to identify and eliminate water waste on a massive scale, saving multi-unit property owners thousands in utility costs each month.</p>
                  </div>
                </a>
                <a href="https://covalence.io/" target="_blank" className="bg-contain block relative h-80 w-80 max-w-100 border border-gray-500 bg-white border-t-0 md:border-r-0">
                  <div className={`${styles.covalence} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">Covalence</h3>
                    <p className="text-sm">A 21st century, fully online, fully remote trade school that trains skilled software developers for 22nd century careers by teaching them to learn the one thing they'll actually be doing day-in and day-out: reading, writing, and understanding software.</p>
                  </div>
                </a>
                <a href="https://www.knoppbio.com/" target="_blank" className="block relative h-80 w-80 max-w-100 border border-gray-500 bg-white border-t-0">
                  <div className={`${styles.knoppbio} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">Knopp Biosciences</h3>
                    <p className="text-sm">A privately held drug discovery and development company focused on delivering breakthrough treatments for immunological and neurological diseases of high unmet need.</p>
                  </div>
                </a>
                <a href="https://www.pole3.com/" target="_blank" className="block relative h-80 w-80 max-w-100 border border-gray-500 bg-white border-t-0 md:border-l-0">
                  <div className={`${styles.pole3} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">Third Pole</h3>
                    <p className="text-sm">A US-based company developing next generation life-saving cardiopulmonary therapies. The Company is building on their team's legacy in inhaled nitric oxide (NO), the current standard of care, to develop next generation life-saving heart and lung therapies.</p>
                  </div>
                </a>
              </div>
            </div>
            <a className="next-section" href="#team">
              <img src="/misc/downarrow.png" alt="Team" />
            </a>
          </div>
        </section>
        <section id="team" className={`${styles.team} auto-section bg-cover bg-black text-white text-center`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center py-24 md:flex-row md:justify-around md:py-40">
              <div className="w-150 max-w-full md:pr-14">
                <img className={`${styles.teamPic} transition-all duration-500 w-full rounded-full`} src="/team/mikemarsh.jpg" alt="Mike Marsh" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-3 md:mt-0">Mike Marsh</h2>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-5">Managing Partner</h3>
                <div className="text-gray-300 text-left text-sm md:text-base">
                  <p className="my-3">Mr. Marsh is an experienced investor, fundraiser and former investment banker. At Starpath, he develops and maintains a strong network of key industry players in the venture capital industry. His passion is working with select early stage companies and entrepreneurs helping them to achieve a clear and carefully planned path to profitability. Mike has assisted his portfolio companies with over $100M of fundraising for various financing rounds, both in equity and convertible debt.</p>
                  <p className="my-3">Mike first entered the venture ecosystem when he raised the seed round for Covalence, a reputable online coding and training platform, with three former Microsoft developers in 2012. He currently sits on the Company’s board and helps manage subsequent financing rounds. Mr. Marsh is also an advisor to Vyng, a next generation phone platform that visualizes every call. In addition to his role at Starpath, Mike is a principal and minority partner at Composite Ventures, an early stage venture firm focused on retail technology investing. At Composite, he works alongside his mentor and advisor, Jim Armstrong, who is the firm's founder and is one of the most notable venture investors in the United States, having been selected to the Forbes Midas list on several occasions.</p>
                  <p className="my-3">Mr. Marsh earned a BS in Finance from the University of Central Florida and obtained his MBA from the Johnson School of Management at Cornell University, with a concentration in investment banking and private equity. At Cornell, he was very active in BR Ventures (BRV), an early stage venture capital fund operated entirely by MBA students at the University. Notably, Mike was selected in the Top 50 globally for the 2020 VC Unlocked cohort led by Stanford University and 500 Startups. The program is designed to represent the next generation of leaders in the venture capital industry.</p>
                </div>
              </div>
            </div>
            <a className="next-section" href="#advisors">
              <img src="/misc/downarrow_light.png" alt="Advisors" />
            </a>
          </div>
        </section>
        <section id="advisors" className={`${styles.advisors} auto-section bg-cover text-center`}>
          <div className="shroud shroud-white"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center py-24 md:py-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-9">Advisors</h2>
              <div className="grid md:grid-cols-3 gap-2 px-5">
                {
                  advisors.map((a, i) => {
                    return (
                      <div key={i} className={`${styles.advisor} mb-5 md:mb-0`} onClick={() => onAdvisor(i)}>
                        <div className={`${styles.advisorPic} h-96 w-80 max-w-100 bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${a.pic})` }}></div>
                        <h4 className="text-xl sm:text-2xl mt-3">{a.name}</h4>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <a className="next-section" href="#contact">
              <img src="/misc/downarrow.png" alt="Contact Us" />
            </a>
          </div>
        </section>
        <section id="contact" className={`${styles.contact} bg-cover bg-black text-center text-white`}>
          <div className="shroud shroud-light"></div>
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center pb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-9">Contact Us</h2>
              <form className={`${styles.form} max-w-full px-3`} onSubmit={formSubmit}>
                <div className="mt-4">
                  <input type="text" className="focus:ring-gray-200 focus:border-gray-200 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 bg-black" name="name" placeholder="Name" value={contact.name} onChange={contactChanged} />
                </div>
                <div className="md:grid md:grid-cols-2 gap-4">
                  <div className="mt-4">
                    <input type="email" className="focus:ring-gray-200 focus:border-gray-200 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 bg-black" name="email" placeholder="Email" value={contact.email} onChange={contactChanged} required />
                  </div>
                  <div className="mt-4">
                    <input type="text" className="focus:ring-gray-200 focus:border-gray-200 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 bg-black" name="company" placeholder="Company" value={contact.company} onChange={contactChanged} />
                  </div>
                </div>
                <div className="mt-4">
                  <textarea rows={5} className="max-h-40 no-resize shadow-sm focus:ring-gray-200 focus:border-gray-200 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-black" name="message" placeholder="Message" value={contact.message} onChange={contactChanged}></textarea>
                </div>
                <div className="mt-4">
                  <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 text-black">{contact.loading ? 'Sending...' : 'Send'}</button>
                </div>
                <div className={`text-sm mt-3 text-green-400${contact.success ? '' : ' hidden'}`}>Thanks for reaching out! We'll be in touch soon.</div>
                <div className={`text-sm mt-3 text-red-400${contact.error ? '' : ' hidden'}`}>There was an error submitting your information</div>
                <div className={contact.error || contact.success ? 'hidden' : ''}>&nbsp;</div>
              </form>
            </div>
          </div>
          <footer className="absolute bg-black left-0 bottom-0 w-full z-10">
            <div className="max-w-screen-xl mx-auto h-16 px-2 sm:px-6 lg:px-8 flex items-center justify-between text-center text-white">
              <img className="block lg:hidden h-12 w-auto" src="/logos/star.png" alt="Starpath Ventures" />
              <img className="hidden lg:block h-12 w-auto" src="/logos/logo_light.png" alt="Starpath Ventures" />
              <div className="text-xs">Copyright © 2021 Starpath Ventures<br />All rights reserved</div>
              <a className="block" href="#top">
                <img className="h-6" src="/misc/uparrow_light.png" alt="Top" />
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

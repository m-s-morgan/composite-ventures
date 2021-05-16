import Head from 'next/head';
import Swal from 'sweetalert2';
import marked from 'marked';
import { FormEvent, ChangeEvent, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';
import 'isomorphic-fetch';
import 'animate.css/animate.min.css';

const slides = [
  {
    hero: '/backgrounds/background-1.jpg',
    thumbnail: '/thumbnails/background-1.jpg',
    header: 'Defining the Next-Generation of Retail Technology',
  },
  {
    hero: '/backgrounds/background-2.jpg',
    thumbnail: '/thumbnails/background-2.jpg',
    header: 'Defining the Next-Generation of Retail Technology',
  },
  {
    hero: '/backgrounds/background-5.jpg',
    thumbnail: '/thumbnails/background-5.jpg',
    header: 'Defining the Next-Generation of Retail Technology',
  }
];
const sectionContainer = 's-contain h-full max-w-screen-xl mx-auto px-5 z-40 sm:px-6 lg:px-8';
const team = [
  {
    name: 'Jim Armstrong',
    pic: '/team/jimarmstrong2.png',
    title: 'Managing Director',
    bio: 'A successful and experienced venture investor across a variety of enterprise and consumer facing technology companies, Jim has established himself as a leading venture capitalist based in California.\n\nJim focuses on investments with particular interest in SaaS delivered marketplaces and processes, consumer mobile technology and devices. On several occasions Forbes Magazine has recognized Jim on its "Midas List" as one of the top Venture Capitalists in the United States.\n\nJim co-founded March Capital in 2014 and has been at Clearstone Venture Partners since 1998. Jim was a partner with idealab Capital Partners in the late 1990s and started his career at Austin Ventures in 1995.\n\nJim led venture investments in PayPal, United Online, Internet Brands, Integrien, Branch and SpyCloud. Jim is involved in  the early formation of two successful Silicon Valley studios: The Hive (big data and machine learning) and The Fabric (cloud networking).\n\nJim is a former software programmer and financial expert, and holds a B.A. in Economics from the University of California at Los Angeles and an MBA from the McCombs School at the University of Texas at Austin.',
    short: 'Venture Capitalist',
    linkedin: 'https://www.linkedin.com/in/jim-armstrong-2a7702/',
  }, {
    name: 'Blaine Hurst',
    pic: '/team/blainehurst.jpg',
    title: 'Managing Director',
    bio: 'Blaine Hurst is an entrepreneur, businessman, and restaurateur. Hurst served as  President and Chief Executive Officer of Panera following the chain\'s acquisition by JAB Holdings in July 2017 for roughly $7.5 billion, and served as its President since December 2016.\n\nBlain has nearly 25 years of restaurant experience from operating individual restaurants to leading two of the largest restaurants in the U.S.\n\nHurst previously served as President, Restaurant Technology Solutions LLC, a division of eMac Digital. eMac Digital was a joint venture of McDonald\'s Corporation, Accel Partners and KKR, and was chartered with building and deploying a new technology model for the restaurant industry.[10]\n\nBefore eMac, Hurst was Vice Chairman and President of Papa John\'s International Inc., one of the largest pizza chains in the world, after having held a series of executive roles including Executive Vice President, Chief Administrative Officer and Vice President, Information Services. He also helped lead the development and implementation of the first nationwide online food ordering system in 1998, as well as an in-store management and delivery system.  Earlier in his career, before joining Boston Chicken, now known as Boston Market, as its Vice President, Information Services, Hurst was a consulting division Partner with Ernst & Young, founding the firm\'s Center for Information Technology Planning and Development.',
    short: 'Vice Chairman at Panera Bread; Board Member and Advisor',
    linkedin: 'https://www.linkedin.com/in/blainehurst/',
  }, {
    name: 'Brandon Levine',
    pic: '/team/brandonlevine.jpg',
    title: 'Managing Director',
    bio: 'Brandon brings 20 years of expertise launching new products and business models in the areas of supply chain, fintech, cloud strategy, logistics, AI, customer service and marketing technology to Composite Ventures.\n\nHis prior roles include Head of Innovation, Financial Services and Payments Strategy at Dollar General, a Co-founder of Openbucks (acquired by Paysafe Group) and  a Co-founder of Transaction-Labs (acquired by A&M Capital, Juna Capital).\n\nBrandon earned a BS in Microbiology and Chemistry from University of Miami and University of Westminster in London.\n\n',
    short: 'Former Head of Innovation, Payments, Financial Services at Dollar General',
    linkedin: 'https://www.linkedin.com/in/brandonlevine/',
  }
];
const advisors = [
  {
    name: 'Don Kingsborough',
    pic: '/team/donkingsborough.jpg',
    bio: 'Kingsborough\'s 40-year career spans important executive and operating roles at the intersection of retail, stored value and technology. As the former founder and CEO of Blackhawk Network, he is commonly credited with pioneering the retail gift card market. Most recently, he is a member of the Board of Directors and the former CEO of OneMarket, an integrated retail platform for connecting offline and online shopping. He has also held important positions at PayPal, Westfield Corp. and is the former president of Atari\'s consumer business.',
    linkedin: 'https://www.linkedin.com/in/donkingsborough/',
  }, {
    name: 'Matthew Schweickert',
    pic: '/team/matthewschweickert.jpg',
    bio: 'As former Head of the Strategic Business Development group, Matt Sckweickert managed The Home Depot\'s corporate strategy ranging from organic and inorganic strategic initiatives to M&A and ventures. In addition to being a member of Home Depot\'s Finance Executive Leadership Team, Matt also oversaw the I.T. Finance group and lead the strategic planning, financial reporting, and analysis for the company\'s enterprise I.T. spend. Before working with Home Depot on critical planning and execution, Matt had previous roles with Experian, JP Morgan Chase, Bank of America Securities, and the Harvard Center for International Development.',
    linkedin: 'https://www.linkedin.com/in/mattschweickert/',
  }, {
    name: 'Neil Golden',
    pic: '/team/neilgolden.jpg',
    bio: 'Neil enjoyed a 24-year career with McDonald\'s; including his most recent position as Chief Marketing Officer (CMO) for McDonald\'s USA. In his six years as CMO, he played an active role on the leadership team resulting in record visitation, sales, profits, market-share, and stock valuation. Before his role at McDonald\'s, Golden held positions at Burger King and RC Cola. He also competed on the Men\'s International Professional Tennis Tour. He has served as a member of several boards including the Association of National Advertisers (ANA) -- including Chair of the ANA Government Relations Committee, the National Ad Council, and the Thurgood Marshall College Fund.  Neil is currently an active member of the faculty at Northwestern University\'s Medill School of Integrated Marketing Communications. He also serves as a director on boards for other public and private companies.',
    linkedin: 'https://www.linkedin.com/in/neilbgolden/',
  }, {
    name: 'Jason Reiser',
    pic: '/team/jasonreiser.jpg',
    bio: 'With more than 30 years of retailing experience, Jason came to Dollar General as chief merchant in 2017 from The Vitamin Shoppe, where he was executive VP and COO. Before that, he served as chief merchandising officer of Family Dollar (now part of Dollar Tree) from 2013 to 2016. A trained pharmacist, Reiser began his retail career as a pharmacy manager at Walmart and then rose through the ranks at the company, serving as vice president of merchandising, health and family care for Sam\'s Club from 2010 to 2013.',
    linkedin: 'https://www.linkedin.com/in/jason-reiser-6859837/',
  }
];

export default function Home() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    reason: 'Founders looking for funding and advice',
    loading: false,
    error: false,
    success: false,
  });
  const onAdvisor = (index: number, secondary?: boolean) => {
    const advisor = secondary === true ? advisors[index] : team[index];

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
      confirmButtonColor: '#000',
      showClass: {
        popup: 'animate__animated animate__fadeIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut animate__faster'
      },
    });
  };

  const contactChanged = (ev?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        reason: '',
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
        <title>Composite Ventures</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Navbar></Navbar>
      <main>
        <section id="top" className="bg-cover bg-black transition-all">
          <Slider slides={slides}></Slider>
          <div className={styles.heroMask}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.38 33.3"><g><polygon points="0 0 0 33.3 86.38 33.3 86.38 0 42.2 33.3 0 0"></polygon></g></svg></div>
        </section>
        <section id="thesis" className="half-section text-center">
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center pt-20 pb-24 md:pt-36 md:pb-40">
              <div className={styles.imgShroud}></div>
              <div className="relative z-50">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-5">Our Mission</h2>
                <div className={`${styles.underline} mb-6`}></div>
                <h3 className="text-lg sm:text-xl md:text-2xl px-4 md:px-10 lg:px-20">To partner with market leaders for insight and access, connecting the world of disruptive companies by leveraging our extensive network and ecosystem.</h3>
              </div>
            </div>
          </div>
          <div className={`${styles.thesisBorder} ${styles.thesisBorderLeft} w-6 md:w-12 lg:w-36 xl:w-52 2xl:w-80 bg-cover`}></div>
          <div className={`${styles.thesisBorder} ${styles.thesisBorderRight} w-6 md:w-12 lg:w-36 xl:w-52 2xl:w-80 bg-cover`}></div>
        </section>
        <section id="about">
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-around">
              <div className="w-205 max-w-full md:pr-14">
                <img className="w-full" src="/backgrounds/background-9.jpg" alt="About Us" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-5 md:mt-0">A unique type of venture fund</h2>
                <p className="text-gray-500">With an exclusive focus on retail, restaurants and next-generation commerce technologies, we initiate investments into a pre-configured portfolio that includes indications of pre-money valuations and types of securities. The principals of the Fund, proven experts in their field, have done the hard work to assemble a group of private, growing and sector leading companies that will represent the future of retail technology.</p>
              </div>
            </div>
          </div>
          <div className="v-block bg-gray-100"></div>
          <div className="h-block bg-gray-100"></div>
          <div className="t-block bg-gray-100"></div>
        </section>
        <section id="portfolio" className="auto-height text-center">
          <div className="s-contain">
            <div className="pt-24 md:pt-32">
              <h2 className="text-4xl md:text-5xl mb-24">Our Portfolio</h2>
              <div className="grid md:grid-cols-2 w-full">
                <a href="http://bridg.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-l-0 border-r-0">
                  <div className={`${styles.bridg} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">BRIDG</h3>
                    <p className="text-sm">A leading, innovative, data informed CDP</p>
                  </div>
                </a>
                <a href="http://branchapp.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-r-0 border-l-0 border-t-0 md:border-t md:border-l">
                  <div className={`${styles.branch} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">BRANCH</h3>
                    <p className="text-sm">Changing the way employees get paid, and the way they think about banking</p>
                  </div>
                </a>
                <a href="https://handiq.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 md:border-b-0">
                  <div className={`${styles.handiq} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">HANDIQ</h3>
                    <p className="text-sm">Verified hygiene at every location</p>
                  </div>
                </a>
                <a href="https://www.privacydynamics.io/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 border-b-0 md:border-l">
                  <div className={`${styles.pdynamics} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">PRIVACY DYNAMICS</h3>
                    <p className="text-sm">Making sure the companies you work with keep your data private</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className={`${styles.team} auto-height bg-cover bg-black text-white text-center`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} py-24`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-5 md:mt-0">Our Team</h2>
            <p className="text-gray-300">With an exclusive focus on retail, restaurants and next-generation commerce technologies, we initiate investments into a pre-configured portfolio that includes indications of pre-money valuations and types of securities. The principals of the Fund, proven experts in their field, have done the hard work to assemble a group of private, growing and sector leading companies that will represent the future of retail technology.</p>
          </div>
        </section>
        <section id="advisors" className={`${styles.advisors} auto-section text-center`}>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center pt-16 pb-24 md:pt-28 md:pb-40">
              <div className="grid md:grid-cols-3 gap-2 px-5">
                {
                  team.map((t, i) => {
                    return (
                      <div key={i} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0`} onClick={() => onAdvisor(i)}>
                        <div className={`${styles.advisorPic} h-96 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${t.pic})` }}></div>
                        <h4 className="text-xl sm:text-2xl mt-3">{t.name}</h4>
                        <h5 className="mt-1 text-gray-500">{t.title}</h5>
                        <p className="mt-2 text-sm px-6">{t.short}... <span className="text-xs text-gray-500">Read more</span></p>
                        <div className="mt-2 text-xs">
                          <a className="linkedin" href={t.linkedin} title="LinkedIn" target="_blank" onClick={(e) => e.stopPropagation()}><img src="/misc/linkedin.svg" alt="LinkedIn" /></a>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 mb-9">Strategic Advisors</h2>
              <div className="grid md:grid-cols-2 gap-2 px-5">
                {
                  advisors.map((a, i) => {
                    return (
                      <div key={i} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0 w-80 max-w-100`} onClick={() => onAdvisor(i, true)}>
                        <div className={`${styles.advisorPic} h-96 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${a.pic})` }}></div>
                        <h4 className="text-lg sm:text-xl mt-2">{a.name}</h4>
                        <p className="text-xs text-left mt-1">{a.bio.slice(0, 190)}... <span className="text-xs text-gray-500">Read more</span></p>
                        <div className="mt-1 text-xs text-left">
                          <a className="linkedin l-small" href={a.linkedin} title="LinkedIn" target="_blank" onClick={(e) => e.stopPropagation()}><img src="/misc/linkedin.svg" alt="LinkedIn" /></a>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={`${styles.contact} bg-cover bg-black text-center text-white`}>
          <div className="shroud shroud-xheavy"></div>
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center pb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-9">Contact Us</h2>
              <form className={`${styles.form} max-w-full px-3`} onSubmit={formSubmit}>
                <div className="mt-4">
                  <select className="focus:ring-gray-200 focus:border-gray-200 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 bg-black text-xs md:text-base" name="reason" onChange={contactChanged}>
                    <option value="Founders looking for funding and advice">Founders looking for funding and advice</option>
                    <option value="Founders from under-represented backgrounds">Founders from under-represented backgrounds</option>
                    <option value="Corporate partners looking to connect">Corporate partners looking to connect</option>
                  </select>
                </div>
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
          <footer className="absolute bg-black left-0 bottom-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto h-16 px-2 sm:px-6 lg:px-8 flex items-center justify-between text-center text-white">
              <img className="block lg:hidden h-12 w-auto" src="/logos/mark-dark-2.png" alt="Composite Ventures" />
              <img className="hidden lg:block h-12 w-auto" src="/logos/logo-dark-2.png" alt="Composite Ventures" />
              <div className="text-xs">Copyright © 2021 Composite Ventures<br />All rights reserved</div>
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

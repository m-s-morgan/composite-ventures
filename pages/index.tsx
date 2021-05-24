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
const team = {
  main: [
    {
      name: 'Jim Armstrong',
      pic: '/team/jimarmstrong.png',
      title: 'Managing Director',
      bio: 'A successful and experienced venture investor across a variety of enterprise and consumer facing technology companies, Jim has established himself as a leading venture capitalist based in California.\n\nJim focuses on investments with particular interest in SaaS delivered marketplaces and processes, consumer mobile technology and devices. On several occasions Forbes Magazine has recognized Jim on its "Midas List" as one of the top Venture Capitalists in the United States.\n\nJim co-founded March Capital in 2014 and has been at Clearstone Venture Partners since 1998. Jim was a partner with idealab Capital Partners in the late 1990s and started his career at Austin Ventures in 1995.\n\nJim led venture investments in PayPal, United Online, Internet Brands, Integrien, Branch and SpyCloud. Jim is involved in  the early formation of two successful Silicon Valley studios: The Hive (big data and machine learning) and The Fabric (cloud networking).\n\nJim is a former software programmer and financial expert, and holds a B.A. in Economics from the University of California at Los Angeles and an MBA from the McCombs School at the University of Texas at Austin.',
      short: '25+ Year Venture Capitalist',
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
      pic: '/team/brandonlevine.png',
      title: 'Managing Director',
      bio: 'Brandon brings 20 years of expertise launching new products and business models in the areas of supply chain, fintech, cloud strategy, logistics, AI, customer service and marketing technology to Composite Ventures.\n\nHis prior roles include Head of Innovation, Financial Services and Payments Strategy at Dollar General, a Co-founder of Openbucks (acquired by Paysafe Group) and  a Co-founder of Transaction-Labs (acquired by A&M Capital, Juna Capital).\n\nBrandon earned a BS in Microbiology and Chemistry from University of Miami and University of Westminster in London.\n\n',
      short: 'Former Head of Innovation, Payments, Financial Services at Dollar General',
      linkedin: 'https://www.linkedin.com/in/brandonlevine/',
    }, {
      name: 'Mike Marsh',
      pic: '/team/mikemarsh.jpg',
      title: 'Vice President',
      bio: 'An experienced capital markets professional, Mr. Marsh is responsible for the fundraising and investor relations activities at Composite. Mike\'s background comprises of 10+ years in investor relations focused positions, and he has spent the last 5 years fundraising and managing limited partner relationships for select companies in the venture capital industry.\n\nMike was previously an investment banker at Guggenheim Partners, where he was a Senior Associate in the Technology, Media and Telecommunications coverage group. He worked on several multi-billion dollar M&A transactions including buy-side and sell-side advisory as well as various financing initiatives.\n\nMr. Marsh received his BS in Finance from the University of Central Florida and an MBA, with a distinction in Investment Banking and Private Equity, from the S.C. Johnson School of Management at Cornell University. Notably, he was selected in the Top 50 globally for the 2020 VC Unlocked cohort led by Stanford University and 500 Startups, a program designed to represent the next generation of leaders in the venture capital industry.',
      short: 'Investor Relations',
      linkedin: 'https://www.linkedin.com/in/mike-marsh-74a27236/',
    }
  ],
  advisors: [
    {
      name: 'Neil Golden',
      pic: '/team/neilgolden.jpg',
      title: 'Former SVP, CMO at McDonalds',
      bio: 'Neil enjoyed a 24-year career with McDonald\'s; including his most recent position as Chief Marketing Officer (CMO) for McDonald\'s USA. In his six years as CMO, he played an active role on the leadership team resulting in record visitation, sales, profits, market-share, and stock valuation. Before his role at McDonald\'s, Golden held positions at Burger King and RC Cola. He also competed on the Men\'s International Professional Tennis Tour. He has served as a member of several boards including the Association of National Advertisers (ANA) -- including Chair of the ANA Government Relations Committee, the National Ad Council, and the Thurgood Marshall College Fund.  Neil is currently an active member of the faculty at Northwestern University\'s Medill School of Integrated Marketing Communications. He also serves as a director on boards for other public and private companies.',
      linkedin: 'https://www.linkedin.com/in/neilbgolden/',
    }, {
      name: 'Jason Reiser',
      pic: '/team/jasonreiser.jpg',
      title: 'Former EVP, CMO at Dollar General',
      bio: 'With more than 30 years of retailing experience, Jason came to Dollar General as chief merchant in 2017 from The Vitamin Shoppe, where he was executive VP and COO. Before that, he served as chief merchandising officer of Family Dollar (now part of Dollar Tree) from 2013 to 2016. A trained pharmacist, Reiser began his retail career as a pharmacy manager at Walmart and then rose through the ranks at the company, serving as vice president of merchandising, health and family care for Sam\'s Club from 2010 to 2013.',
      linkedin: 'https://www.linkedin.com/in/jason-reiser-6859837/',
    }, {
      name: 'Don Kingsborough',
      pic: '/team/donkingsborough.jpg',
      title: 'Founder and CEO of Blackhawk Network',
      bio: 'Kingsborough\'s 40-year career spans important executive and operating roles at the intersection of retail, stored value and technology. As the former founder and CEO of Blackhawk Network, he is commonly credited with pioneering the retail gift card market. Most recently, he is a member of the Board of Directors and the former CEO of OneMarket, an integrated retail platform for connecting offline and online shopping. He has also held important positions at PayPal, Westfield Corp. and is the former president of Atari\'s consumer business.',
      linkedin: 'https://www.linkedin.com/in/donkingsborough/',
    }, {
      name: 'Matthew Schweickert',
      pic: '/team/matthewschweickert.jpg',
      title: 'Former Chief Strategy Officer at Home Depot',
      bio: 'As former Head of the Strategic Business Development group, Matt Sckweickert managed The Home Depot\'s corporate strategy ranging from organic and inorganic strategic initiatives to M&A and ventures. In addition to being a member of Home Depot\'s Finance Executive Leadership Team, Matt also oversaw the I.T. Finance group and lead the strategic planning, financial reporting, and analysis for the company\'s enterprise I.T. spend. Before working with Home Depot on critical planning and execution, Matt had previous roles with Experian, JP Morgan Chase, Bank of America Securities, and the Harvard Center for International Development.',
      linkedin: 'https://www.linkedin.com/in/mattschweickert/',
    }, {
      name: 'Amit Jain',
      pic: '/team/amitjain.png',
      title: 'Founder and CEO of Bridg',
      bio: 'Amit is the Founder and CEO of Bridg. He started Bridg with a vision to empower offline businesses to become customer-centric like Amazon and Google. The Bridg journey began when Amit left Google in 2012 where he founded their vertical search product and authored multiple patents. Prior to Google, Amit co-founded and served as Head of Business for Terra Matrix Media and Savings.com. Amit also created the vision for YouMail.com and their initial launch in 2007 as part of his MBA program at UCLA Anderson School of Management. He has received the UCLA Chancellor\'s Excellence in Leadership Award and was recently named one of the 50 Most Influential People in the Restaurant Industry.',
      linkedin: 'https://www.linkedin.com/in/amitjain/',
    }, {
      name: 'Tom Fischer',
      pic: '/team/tomfischer.png',
      title: 'Former CTO at Ebay, Former CIO at Qualcomm',
      bio: 'Tom Fisher joined Oracle in June, 2011 as the CIO for Oracle\'s Cloud Services organization. Tom is responsible for Oracle\'s Cloud Services delivery worldwide. Responsibilities include global Cloud Delivery of Oracle\'s Private Cloud, CRM OnDemand and eCommerce services as part of the Engineering organization. Prior to joining Oracle, Tom was Vice President of Cloud Computing and Chief Information Officer (CIO) at SuccessFactors acquired by SAP. Responsibilities in this role included service delivery, infrastructure management, Security and Corporate IT. Tom was widely published and a popular speaker on the technology and the business of the Cloud and as well as a frequent representative for SuccessFactors in the Financial community. Tom joined SuccessFactors from DriveCam the global leader in driver risk behavior and an early Software as a Service (SaaS) business. He served as both CIO and Senior Vice President of Engineering responsible for all software, firmware and hardware development as well as the company\'s business systems. Tom was recognized as the San Diego Technology Executive of the Year in 2008. Tom was Vice President of IT for QUALCOMM and CIO for QUALCOMM\'s CDMA Technologies (QCT) Group – the largest fabless semi-conductor in the world. Responsibilities included business and engineering systems. Tom was also active in business development activities including working with Amazon during the creation of the Kindle. Prior to joining QUALCOMM, Tom was Vice President and acting Chief Technology Officer (CTO) at eBay. Responsibilities included the redesign, development and delivery of the Web site after several significant outages. He was also responsible for establishing the firm\'s technology strategy to support the massive scale and shifting business requirements. Tom was responsible for developing and implementing business development strategies at eBay including the creation and establishment of eBay\'s Developers Program, eBay\'s StoreFront initiative and eBay\'s internationalization as the company expanded globally.  Prior to eBay, Tom served as the chief architect and vice president of global architecture, security and vendor management for Gateway Computers. At Gateway, he managed the firm\'s major e-commerce initiatives, deployed the company\'s financing, ERP, CRM, and SFA applications, and led the technical due diligence for the firm\'s venture and strategic activities.\n\nTom has also worked as a senior executive in technology strategy, business development, and M&A for a variety of software and technology companies including IBM, KnowledgeWare, Exactium and Seer Technologies.',
      linkedin: 'https://www.linkedin.com/in/fisher-tom/',
    }
  ]
};

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
  const onAdvisor = (index: number, arr: any[]) => {
    const advisor = arr[index];

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
          <div className={`${styles.thesisBorder} ${styles.borderLeft} w-6 md:w-12 lg:w-36 xl:w-52 2xl:w-80 bg-cover`}></div>
          <div className={`${styles.thesisBorder} ${styles.borderRight} w-6 md:w-12 lg:w-36 xl:w-52 2xl:w-80 bg-cover`}></div>
        </section>
        <section id="about">
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-around">
              <div className="w-205 max-w-full md:pr-14">
                <img className="w-full" src="/backgrounds/background-9.jpg" alt="About Us" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-5 md:mt-0">Defined Investment Venture Fund (DIVF)</h2>
                <p className="text-gray-500">With an exclusive focus on retail, restaurants and next-generation commerce technologies, we initiate investments into a pre-configured portfolio that includes indications of pre-money valuations and types of securities. The principals of the Fund, proven experts in their field, have done the hard work to assemble a group of private, growing and sector leading companies that will represent the future of retail technology.</p>
              </div>
            </div>
          </div>
          <div className="v-block bg-gray-100"></div>
          <div className="h-block bg-gray-100"></div>
          <div className="t-block bg-gray-100"></div>
        </section>
        <section id="approach">

        </section>
        <section id="portfolio" className="auto-height text-center">
          <div className="s-contain">
            <div>
              <div className="h-64 md:h-72 relative">
                <div className={`${styles.portfolio} bg-cover`}></div>
                <div className={`${sectionContainer} relative pt-24 md:pt-32 z-10 text-white`}>
                  <h2 className="text-4xl md:text-5xl relative z-10">Our Portfolio</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full">
                <a href="http://bridg.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-l-0 border-r-0">
                  <div className={`${styles.bridg} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">BRIDG</h3>
                    <p className="text-sm">Enterprise SaaS data infrastructure company on a mission to make customer data accessible and actionable for brick and mortar retailers and CPG brands</p>
                  </div>
                  <div className="acq">ACQ</div>
                </a>
                <a href="http://branchapp.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-r-0 border-l-0 border-t-0 md:border-t md:border-l">
                  <div className={`${styles.branch} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">BRANCH</h3>
                    <p className="text-sm">The only challenger bank that partners with employers to help working Americans grow financially</p>
                  </div>
                </a>
                <a href="https://www.placer.ai/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 md:border-b-0">
                  <div className={`${styles.placerai} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">PLACER.AI</h3>
                    <p className="text-sm">Providing retailers with actionable insights and location analytics into their audience and competition</p>
                  </div>
                </a>
                <a href="https://www.privacydynamics.io/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 border-b-0 md:border-l">
                  <div className={`${styles.pdynamics} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">PRIVACY DYNAMICS</h3>
                    <p className="text-sm">Protecting the future of personal data by providing no-code data privacy tools built for today's analytics engineers</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className={`${styles.team} auto-height bg-cover bg-black text-white text-center`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} py-24`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-3 md:mt-0">Industry-Focused Team</h2>
            <h3 className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">Operations, Innovation, and Venture Capital</h3>
            <p className="text-gray-300">The Composite team consists of highly recognized venture professionals, retail industry executives known for their innovative successes as well as a group of highly incentivized advisors pulled from leaders in retail. We are able to intelligently fathom market leaders in our focus sector, gain access to those investments and help our portfolio companies with our deep industry network.</p>
          </div>
        </section>
        <section id="advisors" className={`${styles.advisors} auto-section text-center`}>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center pt-16 pb-24 md:pt-28 md:pb-40">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-5">
                {
                  team.main.map((t, i) => {
                    return (
                      <div key={i} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0`} onClick={() => onAdvisor(i, team.main)}>
                        <div className={`${styles.advisorPic} h-96 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${t.pic})` }}></div>
                        <h4 className="text-xl sm:text-2xl mt-3">{t.name}</h4>
                        <h5 className="mt-1 text-gray-500">{t.title}</h5>
                        <p className="mt-1 text-sm px-6">{t.short}</p>
                        <div className="text-xs text-gray-500">Read more</div>
                        <div className="mt-2 text-xs">
                          <a className="linkedin" href={t.linkedin} title="LinkedIn" target="_blank" onClick={(e) => e.stopPropagation()}><img src="/misc/linkedin.svg" alt="LinkedIn" /></a>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 mb-3">Strategic Advisors</h2>
              <h3 className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-9">Recognized Leaders in the Field</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-5">
                {
                  team.advisors.map((a, i) => {
                    return (
                      <div key={i} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0 w-80 max-w-100`} onClick={() => onAdvisor(i, team.advisors)}>
                        <div className={`${styles.advisorPic} h-96 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${a.pic})` }}></div>
                        <h4 className="text-lg sm:text-xl mt-2">{a.name}</h4>
                        <h5 className="mt-1 text-sm text-gray-500">{a.title}</h5>
                        <div className="text-xs text-gray-500">Read more</div>
                        <div className="mt-1 text-sm">
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
              <div className="text-xs mr-4 lg:mr-40">Copyright © 2021 Composite Ventures<br />All rights reserved</div>
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

import Head from 'next/head';
import Swal from 'sweetalert2';
import marked from 'marked';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';
import 'isomorphic-fetch';
import 'animate.css/animate.min.css';

const slides = [
  {
    hero: '/backgrounds/background-1.jpg',
    thumbnail: '/thumbnails/background-1.jpg',
    header: 'Defining the Future of Retail Technology',
  },
  {
    hero: '/backgrounds/background-2.jpg',
    thumbnail: '/thumbnails/background-2.jpg',
    header: 'Defining the Future of Retail Technology',
  },
  {
    hero: '/backgrounds/background-5.jpg',
    thumbnail: '/thumbnails/background-5.jpg',
    header: 'Defining the Future of Retail Technology',
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
      short: '25+ Year Venture Capitalist; Board Member and Advisor',
      linkedin: 'https://www.linkedin.com/in/jim-armstrong-2a7702/',
    }, {
      name: 'Blaine Hurst',
      pic: '/team/blainehurst.jpg',
      title: 'Managing Director',
      bio: 'Blaine Hurst is an entrepreneur, businessman, and restaurateur. Hurst served as  President and Chief Executive Officer of Panera following the chain\'s acquisition by JAB Holdings in July 2017 for roughly $7.5 billion, and served as its President since December 2016.\n\nBlain has nearly 25 years of restaurant experience from operating individual restaurants to leading two of the largest restaurants in the U.S.\n\nHurst previously served as President, Restaurant Technology Solutions LLC, a division of eMac Digital. eMac Digital was a joint venture of McDonald\'s Corporation, Accel Partners and KKR, and was chartered with building and deploying a new technology model for the restaurant industry.\n\nBefore eMac, Hurst was Vice Chairman and President of Papa John\'s International Inc., one of the largest pizza chains in the world, after having held a series of executive roles including Executive Vice President, Chief Administrative Officer and Vice President, Information Services. He also helped lead the development and implementation of the first nationwide online food ordering system in 1998, as well as an in-store management and delivery system.  Earlier in his career, before joining Boston Chicken, now known as Boston Market, as its Vice President, Information Services, Hurst was a consulting division Partner with Ernst & Young, founding the firm\'s Center for Information Technology Planning and Development.',
      short: 'Vice Chairman and former CEO at Panera Bread; Board Member and Advisor',
      linkedin: 'https://www.linkedin.com/in/blainehurst/',
    }, {
      name: 'Brandon Levine',
      pic: '/team/brandonlevine2.jpg',
      title: 'Managing Director',
      bio: 'Brandon brings 20 years of expertise launching new products and business models in the areas of supply chain, fintech, cloud strategy, logistics, AI, customer service, and marketing technology to Composite Ventures.\n\nHis prior roles include Head of Innovation, Financial Services and Payments Strategy at Dollar General, a Co-founder of Openbucks (acquired by Paysafe Group) and  a Co-founder of Transaction-Labs (acquired by A&M Capital, Juna Capital).\n\nBrandon earned a BS in Microbiology and Chemistry from University of Miami and University of Westminster in London.',
      short: 'Former Head of Innovation, Payments, and Financial Services at Dollar General',
      linkedin: 'https://www.linkedin.com/in/brandonlevine/',
    }, {
      name: 'Mike Marsh',
      pic: '/team/mikemarsh.jpg',
      title: 'Managing Director',
      bio: 'An experienced capital markets professional, Mr. Marsh is responsible for the fundraising and investor relations activities at Composite. Mike\'s background comprises of 10+ years in investor relations focused positions, and he has spent the last 5+ years fundraising for select companies in the venture capital industry.\n\nMike was previously the Vice President of capital markets at a boutique private equity firm, where he spearheaded both fundraising efforts and investor relations, managing over 100 limited partner relationships. Prior to that, he was an investment banker at Guggenheim Partners, where he was a Senior Associate in the technology, media and telecommunications / industrials coverage groups. He worked on several notable transactions including buy-side and sell-side advisory as well as various financing initiatives.\n\nMr. Marsh received his BS in Finance from the University of Central Florida and an MBA, with a distinction in Investment Banking and Private Equity, from the S.C. Johnson School of Management at Cornell University. Notably, he was selected in the Top 40 globally for the 2020 VC Unlocked cohort led by Stanford University and 500 Startups, a program designed to represent the next generation of leaders in the venture capital industry.',
      short: 'Investor Relations and Capital Markets; Board Member and Advisor',
      linkedin: 'https://www.linkedin.com/in/mike-marsh-74a27236/',
    }
  ],
  advisors: [
    {
      name: 'Neil Golden',
      pic: '/team/neilgolden.jpg',
      title: 'Board Member at RBI; Former SVP, CMO at McDonalds',
      bio: 'Neil is a Fortune 500 consumer products retail leader with 15+ years of C-level and national leadership as well as a long history of board engagement. He currently serves as an independent board director for Restaurant Brands International, Learners Edge and Data Source. Golden also serves as an advisory board member for Home Partners of America, Cooler Screens, and executive consultant with Revenue Management Solutions.\n\nNeil enjoyed a 24-year career with McDonald\'s; including his most recent position as Chief Marketing Officer (CMO) for McDonald\'s USA. In his six years as CMO, he played an active role on the leadership team resulting in record visitation, sales, profits, market-share, and stock valuation. Before his role at McDonald\'s, Golden held positions at Burger King and RC Cola. He also competed on the Men\'s International Professional Tennis Tour. He has served as a member of several boards including the Association of National Advertisers (ANA) -- including Chair of the ANA Government Relations Committee, the National Ad Council, and the Thurgood Marshall College Fund.  Neil is currently an active member of the faculty at Northwestern University\'s Medill School of Integrated Marketing Communications.',
      linkedin: 'https://www.linkedin.com/in/neilbgolden/',
    }, {
      name: 'Jason Reiser',
      pic: '/team/jasonreiser.jpg',
      title: 'Former EVP, CMO at Dollar General; Former COO at Vitamin Shoppe; Former VP at Walmart',
      bio: 'With more than 30 years of retailing experience, Jason came to Dollar General as chief merchant in 2017 from The Vitamin Shoppe, where he was executive VP and COO. Before that, he served as chief merchandising officer of Family Dollar (now part of Dollar Tree) from 2013 to 2016. A trained pharmacist, Reiser began his retail career as a pharmacy manager at Walmart and then rose through the ranks at the company, serving as Vice President of merchandising, health and family care for Sam\'s Club from 2010 to 2013.\n\nCurrently, Jason serves as the President of sales, strategy, and services at Market Performance Group.',
      linkedin: 'https://www.linkedin.com/in/jason-reiser-6859837/',
    }, {
      name: 'Don Kingsborough',
      pic: '/team/donkingsborough.jpg',
      title: 'Founder and CEO of Blackhawk Network; Former VP of PayPal; Former President of Westfield',
      bio: 'Kingsborough\'s 40-year career spans important executive and operating roles at the intersection of retail, stored value and technology. As the former founder and CEO of Blackhawk Network, he is commonly credited with pioneering the retail gift card market. Most recently, he is a member of the Board of Directors and the former CEO of OneMarket, an integrated retail platform for connecting offline and online shopping. He has also held important positions at PayPal, Westfield Corp. and is the former President of Atari\'s consumer business.',
      linkedin: 'https://www.linkedin.com/in/donkingsborough/',
    }, {
      name: 'Matthew Schweickert',
      pic: '/team/matthewschweickert.jpg',
      title: 'Former Chief Strategy Officer at Home Depot; Former SVP at Experian',
      bio: 'As former Head of the Strategic Business Development group, Matt Sckweickert managed The Home Depot\'s corporate strategy ranging from organic and inorganic strategic initiatives to M&A and ventures. In addition to being a member of Home Depot\'s Finance Executive Leadership Team, Matt also oversaw the I.T. Finance group and lead the strategic planning, financial reporting, and analysis for the company\'s enterprise I.T. spend. Before working with Home Depot on critical planning and execution, Matt had previous roles with Experian, JP Morgan Chase, Bank of America Securities, and the Harvard Center for International Development.',
      linkedin: 'https://www.linkedin.com/in/mattschweickert/',
    }, {
      name: 'Amit Jain',
      pic: '/team/amitjain.png',
      title: 'Founder and CEO of Bridg; Founder of Savings.com',
      bio: 'Amit is the Founder and CEO of Bridg (acquired by Cardlytics in May 2021). He started Bridg with a vision to empower offline businesses to become customer-centric like Amazon and Google. The Bridg journey began when Amit left Google in 2012 where he founded their vertical search product and authored multiple patents. Prior to Google, Amit co-founded and served as Head of Business for Terra Matrix Media and Savings.com. Amit also created the vision for YouMail.com and their initial launch in 2007 as part of his MBA program at UCLA Anderson School of Management. He has received the UCLA Chancellor\'s Excellence in Leadership Award and was recently named one of the 50 Most Influential People in the Restaurant Industry.',
      linkedin: 'https://www.linkedin.com/in/amitjain/',
    }, {
      name: 'Tom Fisher',
      pic: '/team/tomfisher.jpg',
      title: 'Former CTO at Ebay; Former CIO at Oracle; Former CIO at SAP',
      bio: 'Tom Fisher joined Oracle in June, 2011 as the CIO for Oracle\'s Cloud Services organization. Tom is responsible for Oracle\'s Cloud Services delivery worldwide. Responsibilities include global Cloud Delivery of Oracle\'s Private Cloud, CRM OnDemand and eCommerce services as part of the Engineering organization. Prior to joining Oracle, Tom was Vice President of Cloud Computing and Chief Information Officer (CIO) at SuccessFactors acquired by SAP. Responsibilities in this role included service delivery, infrastructure management, Security and Corporate IT. Tom was widely published and a popular speaker on the technology and the business of the Cloud and as well as a frequent representative for SuccessFactors in the Financial community. Tom joined SuccessFactors from DriveCam the global leader in driver risk behavior and an early Software as a Service (SaaS) business. He served as both CIO and Senior Vice President of Engineering responsible for all software, firmware and hardware development as well as the company\'s business systems. Tom was recognized as the San Diego Technology Executive of the Year in 2008. Tom was Vice President of IT for QUALCOMM and CIO for QUALCOMM\'s CDMA Technologies (QCT) Group – the largest fabless semi-conductor in the world. Responsibilities included business and engineering systems. Tom was also active in business development activities including working with Amazon during the creation of the Kindle. Prior to joining QUALCOMM, Tom was Vice President and acting Chief Technology Officer (CTO) at eBay. Responsibilities included the redesign, development and delivery of the Web site after several significant outages. He was also responsible for establishing the firm\'s technology strategy to support the massive scale and shifting business requirements. Tom was responsible for developing and implementing business development strategies at eBay including the creation and establishment of eBay\'s Developers Program, eBay\'s StoreFront initiative and eBay\'s internationalization as the company expanded globally.  Prior to eBay, Tom served as the chief architect and Vice President of global architecture, security and vendor management for Gateway Computers. At Gateway, he managed the firm\'s major e-commerce initiatives, deployed the company\'s financing, ERP, CRM, and SFA applications, and led the technical due diligence for the firm\'s venture and strategic activities.\n\nTom has also worked as a senior executive in technology strategy, business development, and M&A for a variety of software and technology companies including IBM, KnowledgeWare, Exactium and Seer Technologies.',
      linkedin: 'https://www.linkedin.com/in/fisher-tom/',
    }, {
      name: 'Kat Cole',
      pic: '/team/katcole.jpg',
      title: 'President & COO of Athletic Greens; Former President and COO at Focus Brands',
      bio: 'Kat Cole is an operator, investor, and advisor to high-growth businesses, funds, and brands with a focus on food and beverage, wellness, franchises, SMB tech, and web3. Kat is President, COO and Board member of Athletic Greens, one of the fastest growing wellness brands and subscription businesses. AG has ignited the Essentialist Nutrition Movement providing comprehensive and convenient daily nutrition, made simple, for everyone from busy moms and every day folks, to athletes, whether they are Paleo, Vegan, Keto, or gracefully aging just looking to level up their nutrition. Athletic Greens helps people around the world implement a strong foundation of their wellness with AG1, their all-in-one nutrition drink that replaces multivitamins and other supplements with the most bioavailable combination of 75 highest quality vitamins and minerals.\n\nIn January of 2021, she wrapped up a 10-year career leading Focus Brands as COO and President  (2016-2021) of the owner, franchisor and operator of global limited-service food brands, with billions in product sales in over 50 countries. As COO, she led the company\'s 8 brands: Cinnabon, Auntie Anne\'s, Moe\'s, Schlotzsky\'s, McAllister\'s, Carvel, Seattle\'s Best Coffee International, and Jamba with over 7000 operations globally as well as the multi-brand licensing and CPG business with over $1Billion in annual sales. In other roles at Focus Brands, before becoming COO, she was president of Cinnabon (2010-2014) and Group President of the multi-channel licensing division at Focus (2014-2016). Prior to Focus Brands, Kat was Vice President at Hooters, starting as a waitress, becoming a corporate employee by 20, VP by 26, and leading the company\'s global growth through franchising, training, and operations as a member of the global executive team culminating in the sale of the company into private equity in 2010.\n\nIn Kat\'s tenure at Focus Brands, she famously led the turnaround of Cinnabon out of the recession by strengthening the base franchise business, reinvigorating the brand, and launching what is now one of the largest restaurant brand CPG businesses in the world. She and her team doubled the EBITDA of that company in a few years, brought sustained growth to the franchisees, and led innovation in delivery, product development, licensing and partnerships that became core capabilities for the parent company that she would so move up to lead as President and COO. She is now investing and advising at the intersection of consumer, NFTs, web3 and the broader move to decentralization and the ownership economy.\n\nKat also helped lead the acquisition and integration of brands, led the restructuring of Focus Brands to prepare it for its next chapter as a growing house of global brands, and is known as a change agent for omni-channel brands, complex portfolio companies, and teams across private equity and venture backed ecosystems.\n\nKat is a Young Global Leader of the World Economic Forum,  in addition to Athletic Greens is a member of the Board of Directors of growth stage VC and PE backed companies Slice and Milk Bar, as well as on the Board of HumanCo SPAC. Her investment and advisory portfolio include over 60 early-stage companies, with a focus on omni-channel consumer product businesses. Kat is a past member of the United Nations Global Entrepreneurs Council, was featured on CBS\'s "Undercover Boss", and was named one of Fortune\'s 40 under 40. She is a college dropout, yet has her MBA in International Business from Georgia State University and an Honorary Doctorate from Johnson and Wales University.  She is past chair of the board of the Women\'s Foodservice Forum, and has led women\'s development initiatives in the US and Rwanda.\n\nKat is an outspoken advocate for women\'s issues and for the broader role of business in democratizing access to education and opportunity.',
      linkedin: 'https://www.linkedin.com/in/katcole',
    }, {
      name: 'Andy Murray',
      pic: '/team/andymurray.jpg',
      title: 'Former SVP/Chief Customer Officer Walmart Asda U.K.; Former SVP/Marketing Walmart U.S.',
      bio: 'Former SVP/Chief Customer Officer Walmart Asda U.K.;\nFormer SVP/Marketing Walmart U.S.;\nRet Founder & CEO Saatchi & Saatchi X;\nFounder and Exec Chair, Customer-Centric Leadership Initiative University of Arkansas\'s Walton College of Business;\nFounder, CEO of bigQuest Advisory, Inc.;\n\n\nRecently repatriated from Asda, Andy Murray is currently engaged in a portfolio of initiatives including Founder & Executive Chair, Customer-Centric Leadership Initiative, Walton College of Business, University of Arkansas as well as launching bigQuest Advisory, a consultancy focused on transforming complex big objectives into game changing movements that drive growth in the retail and CPG space.\n\nAndy was appointed to the role of Chief Customer Officer for Asda in February 2016. Previously Walmart\'s Senior Vice President of Creative and Customer Experience, Andy joined Asda and the Executive leadership to bring a new dimension to the strategy; merchandising and the customer voice to the Board. During his tenure, Asda returned to growth and while improving the overall NPS.\n\nWhile at Walmart, as SVP/Marketing, Andy led the design of the new Walmart super centre prototypes and delivered a new advertising approach to bring an emotional connection back to the Walmart brand.\n\nPrior to joining Walmart, Andy previously held a variety of senior marketing and technology roles with Hallmark and Procter & Gamble, as well as founding his own pioneering international shopper marketing agency, Saatchi & Saatchi X, taking it from kitchen table start-up to a successful exit that fueled global expansion.\n\nAndy is a retail marketing expert with a strong understanding of global trends, creative marketing and customer shopping habits. Andy also serves as a mentor and strategic advisor to founders and their leadership teams in the connected commerce and community spaces, helping them navigate the challenges of growth.',
      linkedin: 'https://www.linkedin.com/in/andrewlmurray',
    }
  ]
};

const news = [{
  title: 'Placer.ai Raises $100M Series C At A $1B Valuation To Accelerate Growth and Product Development',
  body: 'Placer.ai, the leader in location analytics and foot traffic data, announced today the closing of a $100M Series C funding round at a $1B valuation...',
  date: 'January 2022',
  link: 'https://www.placer.ai/blog/placer-ai-raises-100m-series-c-at-a-1b-valuation-to-accelerate-growth-and-product-development/'
}, {
  title: 'GrubMarket raises $200m in Series E funding round, eyes IPO',
  body: 'GrubMarket, a San Francisco-based food supply chain e-commerce company, has raised $200m in a Series E funding round, bringing its total valuation to over $1.2bn...',
  date: 'November 2021',
  link: 'https://www.foodnavigator-usa.com/Article/2021/11/16/GrubMarket-raises-200m-in-Series-E-funding-round-eyes-IPO/'
}, {
  title: 'Branch raises $48M from Lee Fixel\'s Addition, Indeed to provide accelerated payments to workers',
  body: 'Branch, which has built a flexible workforce payments platform, announced today it has raised $48 million in Series B funding and closed on a $500 million credit facility...',
  date: 'August 2021',
  link: 'https://techcrunch.com/2021/08/17/branch-raises-48m/'
}, {
  title: 'Drive-thru voice AI startup to double its team with $6.8M',
  body: 'OpenCity, a Boston startup that provides an AI-powered voice assistant for drive-thru ordering, is raising new funds to double the size of its current team...',
  date: 'August 2021',
  link: 'https://www.bizjournals.com/boston/news/2021/08/04/ai-startup-opencity-raises-millions.html'
}, {
  title: 'Cardlytics Completes Acquisition of Bridg',
  body: 'Cardlytics (NASDAQ: CDLX), one of the largest digital advertising platforms, announced today the completion of its acquisition of Bridg, a customer data platform...',
  date: 'May 2021',
  link: 'https://ir.cardlytics.com/news-releases/news-release-details/cardlytics-completes-acquisition-bridg'
}, {
  title: 'Placer.ai Raises $50M Series B',
  body: 'Placer.ai, a leader in location analytics and foot traffic data, announced on Tuesday the close of a $50 million series B funding round...',
  date: 'April 2021',
  link: 'https://www.calcalistech.com/ctech/articles/0,7340,L-3906403,00.html'
}, {
  title: 'Market Performance Group Taps Jason Reiser for New Role',
  body: 'Market Performance Group (MPG) has named Jason Reiser, former chief merchandising officer of Dollar General...',
  date: 'March 2021',
  link: 'https://www.chaindrugreview.com/market-performance-group-taps-jason-reiser-for-new-role/'
}, {
  title: 'Blaine Hurst Talks Restaurant Experience in a Tech-forward Future',
  body: 'In this talk, Hurst shares his vision for the future of restaurants, noting that experience and hospitality still comes first...',
  date: 'March 2021',
  link: 'https://www.paytronix.com/blog/px-think-beyond-paneras-blaine-hurst-talks-restaurant-experience-in-a-tech-forward-future/'
}, {
  title: 'Branch Launches Employer Payments Platform for Businesses to Accelerate Payments',
  body: 'Branch today announced the launch of its Employer Payments Platform (EPP) to help businesses accelerate payments...',
  date: 'January 2021',
  link: 'https://www.businesswire.com/news/home/20210126005995/en/Branch-Launches-Employer-Payments-Platform-for-Businesses-to-Accelerate-Payments'
}];
// OLD ARTICLES
// , {
//   title: 'Technology and Real Estate Must Blend Together',
//   body: 'Technology and real estate must blend together better today in order to support an evolving retail market...',
//   date: 'March 2018',
//   link: 'https://www.cnbc.com/2018/03/19/technology-and-real-estate-must-blend-together-mega-mall-owner-says.html'
// }

export default function Home() {
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
      imageHeight: 'auto',
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
                <h3 className="text-lg sm:text-xl md:text-2xl px-4 md:px-10 lg:px-20">To identify, invest in, and support the next generation of companies that will lead innovation in retail technology.</h3>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-5 md:mt-0">Industry Focused Venture Fund</h2>
                <p className="text-gray-500">With an exclusive focus on retail, restaurants, and next-generation commerce technologies, we initiate investments into a pre-configured portfolio that includes indications of pre-money valuations and types of securities. The principals of the Fund are proven experts in their field and have done the hard work to assemble a group of private, growing, and sector-leading companies that will represent the changing landscape of retail technology.</p>
              </div>
            </div>
          </div>
          <div className="v-block bg-gray-100"></div>
          <div className="h-block bg-gray-100"></div>
          <div className="t-block bg-gray-100"></div>
        </section>
        <section id="approach" className="auto-section">
          <div className="s-contain">
              <div className="h-96 relative">
                <div className={`${styles.approach} bg-cover`}></div>
                <div className={`${sectionContainer} relative pt-20 md:pt-32 z-10 text-white text-center`}>
                  <h2 className="text-4xl md:text-5xl relative z-10">Our Approach</h2>
                  <p className="text-gray-300 mt-7 md:px-12 lg:text-xl">We are redefining the venture model of the past. By taking an investor centric approach with a focus on retail technology, our unique business model allows our investments to be placed into a known, pre-configured portfolio.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full">
                <div className={`${styles.process} bg-cover`}></div>
                <div className="pt-8 pb-14 px-12 md:pt-20 md:pb-20">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 md:mt-0 font-semibold">The Process</h2>
                  <p className="text-gray-500 text-sm">We believe our format is the future of private venture investing; a model designed for attentive portfolio assembly alongside sector experts, with no focus on "empire" building. Instead, we have directed our efforts to portfolio construction and companies led by exceptional entrepreneurs with strong advisory boards and post product-market fitness.</p>
                  <p className="mt-5 text-sm md:text-lg">By combining industry experience and knowledge, we work hands-on with our advisors to identify:</p>
                  <ul className={styles.list}>
                    <li className={`${styles.listItem} leading-none py-6`}>
                      <div className={`${styles.iconContain} top-2`}>
                        <img className={styles.listIcon} src="/icons/rocket.svg" alt="" />
                      </div>
                      <span className="text-base leading-3">The most important trends</span>
                    </li>
                    <li className={`${styles.listItem} leading-none pt-4 pb-5`}>
                      <div className={`${styles.iconContain} top-5 md:top-2`}>
                        <img className={styles.listIcon} src="/icons/company.svg" alt="" />
                      </div>
                      <span className="text-base leading-3">The emerging private companies that will be next-generation leaders in retail technology</span>
                    </li>
                    <li className={`${styles.listItem} leading-none py-6`}>
                      <div className={`${styles.iconContain} top-4 md:top-2`}>
                        <img className={styles.listIcon} src="/icons/user.svg" alt="" />
                      </div>
                      <span className="text-base leading-3">The most thoughtful and dynamic entrepreneurs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full">
                <div className={`${styles.iStrategy} bg-cover md:col-start-2`}></div>
                <div className="pt-8 pb-14 px-12 md:pt-20 md:pb-20 md:row-start-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mt-5 mb-1 md:mt-0 font-semibold">Investment Strategy</h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">We build relationships for future investment</h2>
                  <p className="text-gray-500 text-sm">The portfolio and strategy of our retail technology fund stands out and entrepreneurs in this sector want us on their capitalization table. We have gathered a winning team that can be aggressive on terms and structure, including taking control of positions for added value.</p>
                  <div className="grid lg:grid-cols-2 text-center mt-7">
                    <div className="text-sm p-8 border-gray-500 border-2">Our leading industry connections allow us to elevate and enhance scaling portfolio companies within our sector</div>
                    <div className="text-sm p-8 border-gray-500 border-2 border-t-0 lg:border-t-2 lg:border-l-0">Our focus on investment return and fast liquidity lets entrepreneurs and legacy boards know that we can add value without dictating a "one size fits all" exit</div>
                    <div className="text-sm p-8 border-gray-500 border-2 border-t-0">We identify the next generation of market leaders through our unique access and industry visbility</div>
                    <div className="text-sm p-8 border-gray-500 border-2 lg:border-l-0 border-t-0">We invest in dynamic entrepreneurs building "on theme" companies</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full">
                <div className={`${styles.keyThemes} bg-cover`}></div>
                <div className="pt-8 pb-14 px-12 md:pt-20 md:pb-20">
                  <h2 className="text-2p5xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-1 md:mt-0 font-semibold">Key Themes in Retail</h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 md:mb-9">For decades retail did not view technology as critical to winning markets... this has changed.</h2>
                  <ul className={styles.list}>
                    <li className={`${styles.listItem} leading-none py-6`}>
                      <div className={`${styles.iconContain} top-4`}>
                        <img className={styles.listIcon} src="/icons/analytics.svg" alt="" />
                      </div>
                      <div className="text-base leading-3 font-semibold mb-1">Next-Generation Analytics</div>
                      <div className="text-xs leading-3">Extreme personalization</div>
                      <div className="text-xs leading-3">Context targeted marketing</div>
                    </li>
                    <li className={`${styles.listItem} leading-none pt-4 pb-5`}>
                      <div className={`${styles.iconContain} top-4`}>
                        <img className={styles.listIcon} src="/icons/wifi.svg" alt="" />
                      </div>
                      <div className="text-base leading-3 font-semibold mb-1">Automation of Retail</div>
                      <div className="text-xs leading-3">No-friction commerce at the edge</div>
                      <div className="text-xs leading-3">Alternate checkout</div>
                      <div className="text-xs leading-3">New store formats</div>
                    </li>
                    <li className={`${styles.listItem} leading-none py-6`}>
                      <div className={`${styles.iconContain} top-4`}>
                        <img className={styles.listIcon} src="/icons/payments.svg" alt="" />
                      </div>
                      <div className="text-base leading-3 font-semibold mb-1">Payments</div>
                      <div className="text-xs leading-3">Employee financial wellness</div>
                      <div className="text-xs leading-3">Frictionless payments</div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </section>
        <section id="team" className={`${styles.team} auto-height bg-cover bg-black text-white text-center`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} py-24`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-3 md:mt-0">Industry-Focused Team</h2>
            <h3 className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">Operations, Innovation, and Venture Capital</h3>
            <p className="text-gray-300">The Composite team consists of highly recognized venture professionals, retail industry executives known for their innovative successes, as well as a group of highly incentivized advisors from industry leading retailers. We are able to intelligently fathom market leaders in our focus sector, gain access to those investments, and help our portfolio companies with our deep industry network.</p>
          </div>
        </section>
        <section id="advisors" className={`${styles.advisors} auto-section text-center`}>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center pt-16 pb-24 md:pt-28 md:pb-40">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-5">
                {
                  team.main.map((t, i) => {
                    return (
                      <div key={`team-${i}`} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0 w-64 max-w-100`} onClick={() => onAdvisor(i, team.main)}>
                        <div className={`${styles.advisorPic} h-72 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${t.pic})` }}></div>
                        <h4 className="text-xl sm:text-2xl mt-3">{t.name}</h4>
                        <h5 className="mt-1 text-gray-500">{t.title}</h5>
                        <p className="mt-1 text-sm px-6 min-h-5">{t.short}</p>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-5">
                {
                  team.advisors.map((a, i) => {
                    return (
                      <div key={`advisor-${i}`} className={`${styles.advisor} ${styles.clickable} mb-5 md:mb-0 w-64 max-w-100`} onClick={() => onAdvisor(i, team.advisors)}>
                        <div className={`${styles.advisorPic} h-72 w-full bg-cover transition-all duration-500`} style={{ backgroundImage: `url(${a.pic})` }}></div>
                        <h4 className="text-lg sm:text-xl mt-2">{a.name}</h4>
                        <h5 className="mt-1 text-sm text-gray-500 min-h-4">{a.title}</h5>
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
                <a href="https://branchapp.com/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-l-0 border-r-0">
                  <div className={`${styles.branch} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">BRANCH</h3>
                    <p className="text-sm">The only challenger bank that partners with employers to help working Americans grow financially</p>
                  </div>
                </a>
                <a href="https://hero.co/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-r-0 border-l-0 border-t-0 md:border-t md:border-l">
                  <div className={`${styles.herotm} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">HERO</h3>
                    <p className="text-sm">Makes all your favorite foods without the carbs</p>
                  </div>
                </a>
                <a href="https://www.placer.ai/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0">
                  <div className={`${styles.placerai} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">PLACER.AI</h3>
                    <p className="text-sm">Providing retailers with actionable insights and location analytics into their audience and competition</p>
                  </div>
                </a>
                <a href="https://www.grubmarket.com/welcome/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 md:border-l">
                  <div className={`${styles.grubmarket} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">GRUBMARKET</h3>
                    <p className="text-sm">The most affordable farm-to-table food delivery service offering a variety of organic and locally-sourced food and produce</p>
                  </div>
                </a>
                <a href="https://www.opencity.co/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 md:border-b-0 md:border-l">
                  <div className={`${styles.opencity} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">OPENCITY</h3>
                    <p className="text-sm">Introducing an AI-powered voice assistant for drive-thru ordering</p>
                  </div>
                </a>
                <a href="https://www.productscience.ai/" target="_blank" className="block relative h-80 w-full border border-gray-500 bg-white border-t-0 border-r-0 border-l-0 border-b-0 md:border-l">
                  <div className={`${styles.productscience} bg-center h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-5">PRODUCT SCIENCE</h3>
                    <p className="text-sm">Increases product metrics for mobile applications and helps apps work faster</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="news" className={`${styles.news} auto-section bg-cover bg-black text-white`}>
          <div className="shroud shroud-xheavy"></div>
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center pt-16 pb-24 md:pt-28 md:pb-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16">Composite News</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-5">
                {
                  news.map((n, i) => {
                    return (
                      <a key={`news-${i}`} href={n.link} className={`${styles.newsItem} block mb-5 md:mb-0 lg:w-80 xl:w-96 max-w-100 pl-12 pr-12 pt-12 pb-20 relative`} target="_blank">
                        <div className="absolute top-0 left-0 w-full h-full transition-opacity opacity-50 duration-500 bg-black z-10"></div>
                        <div className="relative z-20">
                          <div className="text-xs text-gray-500">{n.date}</div>
                          <h5 className="mt-9 text-white">{n.title}</h5>
                          <p className="mt-5 text-sm text-gray-500">{n.body}</p>
                        </div>
                        <div className="text-xs text-white z-20 absolute bottom-5">Read more &rarr;</div>
                      </a>
                    );
                  })
                }
              </div>
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

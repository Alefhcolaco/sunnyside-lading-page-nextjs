import Image from 'next/image'
import Logo from '/public/logo.svg'
import Arrow from '/public/icon-arrow-down.svg'
import Avatar1 from '/public/image-emily.jpg'
import Avatar2 from '/public/image-thomas.jpg'
import Avatar3 from '/public/image-jennie.jpg'
import LogoFooter from '/public/logo-footer.svg'
import Link from 'next/link'
import Facebook from '/public/icon-facebook.svg'
import Instagram from '/public/icon-instagram.svg'
import Twitter from '/public/icon-twitter.svg'
import Pinterest from '/public/icon-pinterest.svg'


export default function Home() {
  return (
    <div>
      <section className='bg-background w-full h-1100 bg-center bg-cover'>
        <header>
          <nav className='pr-13 pl-10 h-height-header flex justify-between items-center'>
            <Image src={Logo} width={234} height={46} />
            <ul className='flex gap-14 text-white items-center'>
              <li><a href="#section1">About</a></li>
              <li><a href="#section2">Services</a></li>
              <li><a href="#section3">Projects</a></li>
              <li className="uppercase pt-[18px] rounded-[31px] bg-white text-black cursor-pointer text-center w-width-button h-height-button hover:bg-light-blue hover:text-white transition duration-150 ease-in-out hover:ease-in" id="link-hover"><a href="#footer">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className='m-0 m-auto block w-full h-16 relative top-[100px]'>
          <h1 className="tracking-[.16em] text-white text-[100px] text-center">WE ARE CREATIVES</h1>
        </div>
        <div className='block m-0 m-auto w-[50px] relative top-[290px]'>
          <Image src={Arrow} width={50} height={158} />
        </div>
      </section>
      <section>
        {/*SECTION TRANSFORM */}
        <div id="section1" className='flex'>
          <div className='w-width-cards h-height-cards grow flex flex-col justify-center pl-[50px]'>
            <h2 className='text-[50px] leading-[58px] pb-[15px] w-[400px]'>Transform your brand</h2>
            <p className='text-gray-dark pb-[40px] w-[483px] leading-[30px]'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className='w-[150px]'>LEARN MORE</button>
          </div>
          <div className='bg-transform w-width-cards h-height-cards bg-cover grow'>
          </div>
        </div>
        {/*SECTION STAND */}
        <div className='flex flex-row-reverse'>
          <div className='w-width-cards h-height-cards grow flex flex-col justify-center pl-[50px]'>
            <h2 className='text-[50px] w-[510px] leading-[58px] pb-[15px]'>Stand out to the right audience</h2>
            <p className='text-gray-dark pb-[40px] w-[483px] leading-[30px]'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places.</p>
            <button className='w-[150px]'>LEARN MORE</button>
          </div>
          <div className='bg-stand w-width-cards h-height-cards bg-cover grow'>
          </div>
        </div>
        {/*SERVICES */}
        <div id="section2" className='flex'>
          <div className='bg-graphic w-width-cards h-height-cards bg-cover grow'>
            <div className='block m-0 m-auto text-center w-96 mt-443 text-[#223322] text-green-dark'>
              <div className='m-0 m-auto block w-[320px] mb-[25px]'>
                <h2 className='w-[320px] text-center text-[40px]'>Graphic Design</h2>
              </div>
              <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
            </div>
          </div>
          <div className='bg-photography w-width-cards h-height-cards bg-cover grow'>
            <div className='block m-0 m-auto text-center w-96 mt-443 text-blue-dark'>
              <div className='m-0 m-auto block w-[260px] mb-[25px]'>
                <h2 className='w-[260px] text-center text-[40px]'>Photography</h2>
              </div>
              <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </div>
      </section>
      {/*CLIENT TESTIMONIALS */}
      <section className='h-[870px]'>
        <div className='flex w-width-clients block m-0 m-auto'>
          <h2 className='tracking-[0.24em] text-gray w-[500px] mb-24 mt-173 text-xl whitespace-nowrap'>CLIENT TESTIMONIALS</h2>
        </div>
        <div className='flex block m-0 m-auto w-1200 gap-10'>
          <div className='text-center w-width-clients h-height-clients'>
            <div className='mb-[45px] h-[80px] '>
              <Image className='rounded-full' src={Avatar1} width={80} height={80} />
            </div>
            <p className='mb-[65px] text-[19px] leading-7 text-[#616264]'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hiy.</p>
            <span className='text-dark-blue'>Emily R.</span>
            <h3 className='relative top-[5px] text-gray'>Marketing Director</h3>
          </div>
          <div className='text-center w-width-clients h-height-clients '>
          <div className=' mb-[45px] h-[80px]'>
              <Image className='rounded-full' src={Avatar2} width={80} height={80} />
            </div>
            <p className=' mb-[65px] text-[19px] leading-7 text-[#616264]'>Sunnyside s enthusiasm coupled with their keen interest in our brand s success made it a satisfying and enjoyable experience.</p>
            <span className='text-dark-blue'>Thomas S.</span>
            <h3 className='relative top-[5px] text-gray'>Chief Operating Officer</h3>
          </div>
          <div className='text-center w-width-clients h-height-clients'>
          <div className=' mb-[45px] h-[80px]'>
              <Image className='rounded-full' src={Avatar3} width={80} height={80} />
            </div>
            <p className=' mb-[65px] text-[19px] leading-7 text-[#616264]'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <span className='text-dark-blue'>Jennie F.</span>
            <h3 className='relative top-[5px] text-gray'>Business Owner</h3>
          </div>
        </div>
      </section>
      <section>
        <div id="section3" className='flex'>
          <div className='bg-milk w-width-project h-height-project grow bg-cover'></div>
          <div className='bg-orange w-width-project h-height-project grow bg-cover'></div>
          <div className='bg-cone w-width-project h-height-project grow bg-cover'></div>
          <div className='bg-sugarcubes w-width-project h-height-project grow bg-cover'></div>
        </div>
      </section>
      <footer id="footer" className='bg-green-light h-385'>
        <div className='w-187 mb-12 block m-0 m-auto pt-20 relative left-[-15px] hover:scale-105 cursor-pointer transition duration-150 ease hover:ease-in'>
          <Image src={LogoFooter} width={188} height={37} />
        </div>
        <div className='w-80 block m-0 m-auto mb-24 text-19'>
          <ul className='flex gap-16 text-[#297060]'>
            <li className='transition duration-150 ease-out hover:ease-in hover:text-white'><Link href="#section1">About</Link></li>
            <li className='transition duration-150 ease-out hover:ease-in hover:text-white'><Link href="#section2">Services</Link></li>
            <li className='transition duration-150 ease-out hover:ease-in hover:text-white'><Link href="#section3">Projects</Link></li>
          </ul>
        </div>
        <div className='flex gap-7 w-44 block m-0 m-auto relative top-[-20px] left-[-16.5px]'>
          <Image className="cursor-pointer" src={Facebook} width={23} height={23} />
          <Image className="cursor-pointer" src={Instagram} width={23} height={23} />
          <Image className="cursor-pointer" src={Twitter} width={23} height={23} />
          <Image className="cursor-pointer" src={Pinterest} width={23} height={23} />
        </div>
      </footer>
    </div>
  );
}

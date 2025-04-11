"use client"
import './App.css';
import Header from './commonfile/Header';
import tom from '../src/commonfile/img/tomy.jpg'
import ca from '../src/commonfile/img/cap.jpg'
import shoe from '../src/commonfile/img/shoes-Levis.jpg'
import uc from '../src/commonfile/img/40-70.jpg'
import nk from '../src/commonfile/img/nike.jpg'
import pu from '../src/commonfile/img/puma.jpg'
import sk from '../src/commonfile/img/skechers.jpg'
import cr from '../src/commonfile/img/Crocs.jpg'
import st from '../src/commonfile/img/shirts.jpg'
import ts from '../src/commonfile/img/t-shirts.jpg'
import je from '../src/commonfile/img/jeans.jpg'
import stouser from '../src/commonfile/img/Shorts-Trousers.jpg'
import cal from '../src/commonfile/img/casualshoe.jpg'
import kid from '../src/commonfile/img/kids.jpg'
import fit from '../src/commonfile/img/fitness.jpg'
import fa from '../src/commonfile/img/flat.jpg'
import ro from '../src/commonfile/img/road.jpg'
import jo from '../src/commonfile/img/jones.jpg'
import rdx from '../src/commonfile/img/hrx.jpg'
import lu from '../src/commonfile/img/lux.jpg'
import li from '../src/commonfile/img/life.jpg'
import cas from '../src/commonfile/img/classic.jpg'
import wa from '../src/commonfile/img/watch.jpg'
import hu from '../src/commonfile/img/hugo.jpg'
import du from '../src/commonfile/img/ducati.jpg'
import sa from '../src/commonfile/img/saif.jpg'
import eth from '../src/commonfile/img/ethnic.jpg'
import kurs from '../src/commonfile/img/kurtset.jpg'
import kur from '../src/commonfile/img/kurta.jpg'
import tre from '../src/commonfile/img/trendy.jpg'
import nks from '../src/commonfile/img/nkstyle.jpeg'
import pro from '../src/commonfile/img/proline.jpeg'
import run from '../src/commonfile/img/running.jpeg'
import bol from '../src/commonfile/img/bumrah.jpeg'
import wear from '../src/commonfile/img/foot.jpeg'
import net from '../src/commonfile/img/neutral.jpg'
import dancer from '../src/commonfile/img/dance.jpg'
import pshoe from '../src/commonfile/img/print.jpg'
import door from '../src/commonfile/img/out.jpeg'
import slip from '../src/commonfile/img/slipers.jpg'
import dops from '../src/commonfile/img/air.jpg'
import sp from '../src/commonfile/img/sportwatch.jpg'
import ww from '../src/commonfile/img/white.jpeg'
import track from '../src/commonfile/img/fast.jpeg'
import mw from '../src/commonfile/img/min.jpeg'
import whtbg from '../src/commonfile/img/whtbag.jpg'
import work from '../src/commonfile/img/workwear.jpg'
import luxe from '../src/commonfile/img/luxe.jpg'
import hrxc from '../src/commonfile/img/hrxc.jpg'
import us from '../src/commonfile/img/u-s.jpg'
import Footer from './footer';



function App() {

  return (
    <div className="App">
      <Header />

      <div className="border-5 border-red-600 max-w-full max-h-full ">


        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {[hrxc, work, us, whtbg, luxe].map((image, index) => (
              <div
                key={index}
                className={`${index === 0 ? "block" : "hidden"
                  } duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={image}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[0, 1, 2, 3, 4].map((i) => (
              <button
                key={i}
                type="button"
                className="w-3 h-3 rounded-full bg-transparent"
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
                data-carousel-slide-to={i}
              ></button>
            ))}
          </div>

          {/* Prev button */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Next button */}
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>





        <div className=' py-[20px] pl-[20px] '>

          <h1 className='text-[28px] font-bold text-left text-[#313238] mb-[50px] '>BIGGEST DEALS ON TOP BRANDS</h1>

          <div className='flex justify-evenly '>
            <div className='w-[280px] '> <img src={ca} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={shoe} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={tom} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={uc} alt="" width={300} height={400} /> </div>
          </div>
          {/* //////////////////////////////////// */}
          <div className='flex justify-evenly '>
            <div className='w-[280px] '> <img src={nk} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={pu} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={sk} alt="" width={300} height={400} /> </div>
            <div className='w-[280px] '> <img src={cr} alt="" width={300} height={400} /> </div>
          </div>
        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>CATEGORIES TO BAG</h1>
          <div className='flex justify-evenly '>
            <div className='w-[200px] '> <img src={st} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={ts} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={je} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={stouser} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={cal} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={kid} alt="" width={200} /> </div>

          </div>

        </div>

        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>EXPLORE TOP BRANDS</h1>
          <div className='flex justify-evenly'>
            <div className='w-[200px] '> <img src={fit} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={fa} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={ro} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={jo} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={rdx} alt="" width={200} /> </div>

          </div>

        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>MYNTRA LUXE</h1>
          <div className='flex justify-evenly '>
            <div className='w-[200px] '> <img src={lu} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={li} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={cas} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={wa} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={hu} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={du} alt="" width={200} /> </div>

          </div>

        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>TRENDING IN INDIAN WEAR</h1>
          <div className='flex justify-evenly'>
            <div className='w-[200px] '> <img src={sa} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={eth} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={kurs} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={kur} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={tre} alt="" width={200} /> </div>

          </div>

        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>TRENDING IN SPORTS WEAR</h1>
          <div className='flex justify-evenly'>
            <div className='w-[200px] '> <img src={nks} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={pro} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={run} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={bol} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={wear} alt="" width={200} /> </div>

          </div>

        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>TRENDING IN FOOTWEAR</h1>
          <div className='flex justify-evenly'>
            <div className='w-[200px] '> <img src={net} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={dancer} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={pshoe} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={door} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={slip} alt="" width={200} /> </div>

          </div>

        </div>


        <div className=' pl-[20px]'>
          <h1 className='text-[28px] font-bold text-left text-[#313238] my-[50px] '>TRENDING IN ACCESSORIES</h1>
          <div className='flex justify-evenly'>
            <div className='w-[200px] '> <img src={dops} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={sp} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={ww} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={track} alt="" width={200} /> </div>
            <div className='w-[200px] '> <img src={mw} alt="" width={200} /> </div>

          </div>

        </div>

      </div>
      <Footer />
    </div>


  );
}

export default App;

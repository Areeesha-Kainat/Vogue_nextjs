import Nav from '../components/front-end/Nav'
import Footer from '../components/front-end/Footer'

export default function PhotoVogue() {
  return (
    <div>
    <Nav />
    <br />
    <div className="container mx-auto p-8">
      {/* Main Heading */}
      <h1 className="text-center font-bold text-4xl mb-4 font-serif">PhotoVogue</h1>

      {/* Paragraph */}
      <p className="text-center mb-8 mr-9 ml-9">
        Connecting artists, community, and commerce through Condé Nast's global
        creative networks, we champion talent and influence visual literacy to
        help foster a more just, ethical, and inclusive world.
      </p>
       <br />
      {/* Horizontal Rule */}
      <hr className="my-6" />

      {/* Pic of the Day Heading */}
      <h2 className="text-center text-3xl font-bold mb-4 font-serif">PIC OF THE DAY</h2>

      {/* Horizontal Rule */}
      <hr className="my-6" />

      {/* Centered Div with Image */}
      <div className="text-center mb-8">
        <img
          src="/photovogue1.jpg" 
          alt="Pic of the Day"
          className="mx-auto"
        />
        <h3 className="font-bold text-xl mt-4">By Fee-Gloria Grönemeyer</h3>
      </div>
      <br />
      {/* Horizontal Rule */}
      <hr className="my-6" />

      {/* Best of Photovogue Heading */}
      <h2 className="text-center text-3xl font-bold mb-4 font-serif">Best of PhotoVogue</h2>
         
            {/* Horizontal Rule */}
      <hr className="my-6" />
      <br />
      {/* Row of Images with Titles */}
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Image 1 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue2.jpg"
      alt="Best Pic 1"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Strutting the Trends</p>
    <p className="mt-2">Discover the hottest styles straight from the Vogue runway</p>
  </div>

  {/* Image 2 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue3.jpg"
      alt="Best Pic 2"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Elevated Elegance</p>
    <p className="mt-2">A showcase of high-fashion moments from Vogue's runway.</p>
  </div>

  {/* Image 3 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue4.jpg"
      alt="Best Pic 3"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Runway to Reality</p>
    <p className="mt-2">Bringing Vogue's fashion-forward designs to life</p>
  </div>

  {/* Image 4 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue5.jpg"
      alt="Best Pic 4"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Couture in Motion</p>
    <p className="mt-2">Capturing the finest looks from the Vogue runway.</p>
  </div>

  {/* Image 5 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue6.jpg"
      alt="Best Pic 5"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">By Gigi Hadid</p>
    <p className="mt-2">Explore the cutting-edge styles from the Vogue runway.</p>
  </div>

  {/* Image 6 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue7.jpg"
      alt="Best Pic 6"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Runway Chronicles</p>
    <p className="mt-2">A visual journey through Vogue's most stunning runway looks.</p>
  </div>

  {/* Image 7 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue0.jpg"
      alt="Best Pic 7"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Vogue Catwalk Highlights</p>
    <p className="mt-2">Featuring iconic looks from the Vogue runway.</p>
  </div>

  {/* Image 8 */}
  <div className="text-center h-80 flex flex-col justify-between">
    <img
      src="/photovogue9.jpg"
      alt="Best Pic 8"
      className="h-64 w-full object-cover"
    />
    <p className="font-semibold mt-1">Runway Reverie</p>
    <p className="mt-2">A dreamy showcase of the latest Vogue runway moments.</p>
  </div>
</div>


    </div>
     <br />
     <Footer />
     </div>
  );
}


import Footer from "../components/front-end/Footer";
import Nav from "../components/front-end/Nav";

export default function FashionLayout() {
  return (
    <div>
      <Nav />
      <br />
       {/* Heading */}
        <h1 className="text-black font-bold text-4xl text-center my-8 font-serif">
        The Best Behind-the-Scenes Photos at the <br /> Paris Spring 2025 Shows
        </h1>
             <br />
             <h4 className="text-black text-xl text-center my-8">Highlights</h4>
            <h3  className="text-black font-bold text-2xl text-center my-8"> Spring 2025 Ready-to-Wear</h3>
      <div className="container mx-auto p-4">
        {/* Three large divs with images */}
        <div className="flex space-x-4">
          {["/runway1.jpg", "/runway3.jpg", "/runway2.jpg"].map((img, index) => (
            <div
              key={index}
              className="flex-1 h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* You can add content over the image if needed */}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-black font-bold text-3xl text-center my-8 font-serif">
          Fashion Trends You Should Know
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
          {/* Left side: one div with image and paragraph */}
          <div className="space-y-4">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: `url('/runway4.jpg')` }}
            ></div>
            <p className="text-gray-700">
            Explore the latest fashion trends of the season, 
            from chic runway styles to effortless streetwear.
             Stay ahead with the most popular looks, perfect for every occasion!
            </p>
          </div>

          {/* Right side: three small divs in a column */}
          <div className="space-y-4">
            {[
              {
                img: "/runway5.jpg",
                title: "Denim Styles",
                desc: "Classic and bold, denim remains a timeless choice.",
              },
              {
                img: "/runway7.jpg",
                title: "Winter Collection",
                desc: "Stay warm and stylish with cozy essentials",
              },
              {
                img: "/runway6.jpg",
                title: "Fashion Week Picks",
                desc: "Highlights from the runway showcasing the stunning trends.",
              },
            ].map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div
                  className="w-24 h-24 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

import Header from "./Header";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <Header />
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Products
          id="1234567"
          title="title"
          price={11.98}
          rating={3}
          image="https://images.cdn3.buscalibre.com/fit-in/360x360/c1/fa/c1fa8375462b2287988d59a19f5a523e.jpg"
        />
        <Products
          id="1234567"
          title="title"
          price={11.98}
          rating={3}
          image="https://m.media-amazon.com/images/I/61wzXuHCb1L._AC_SX522_.jpg"
        />
      </div>
      <div className="home_row">
        <Products
          id="1234567"
          title="title"
          price={11.98}
          rating={3}
          image=" https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Products
          id="1234567"
          title="title"
          price={11.98}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Products
          id="1234567"
          title="title"
          price={11.98}
          rating={3}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIm7gVgbtYygT02FIur42Si8wPc3bK5GkyXw&usqp=CAU"
        />
      </div>
    </div>
  );
}
export default Home;

import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-[100%] bg-[#0CC985] mt-[80px] justify-between">
      <div className="flex h-full mb-auto">
        <div className="flex w-[50%] text-center justify-items-center items-center justify-center align-middle">
          <div className="m-12">
            <p className="font-[60px] text-[50px] text-left font-light leading-tight">
              Empowering every conversation with intelligent AI, helping you
              <b className="font-bold border-b-[8px]"> achieve more.</b>
            </p>
          </div>
        </div>
        <div className="w-[50%] m-10">
          <img className="translate-y-12" src="hero.jpeg" />
        </div>
      </div>
      <div className="flex w-full h-full justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

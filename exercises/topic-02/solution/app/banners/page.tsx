import Banner from "@/components/banner";
import H1 from "@/components/h1";

function Banners() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4'>
      <H1>Banners</H1>
      <Banner />
    </section>
  );
}

export default Banners;

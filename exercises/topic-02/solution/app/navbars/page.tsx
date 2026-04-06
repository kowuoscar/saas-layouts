import H1 from "@/components/h1";
import NavBar from "@/components/nav-bar";

function NavBars() {
  return (
    <section className='min-h-screen bg-gray-50'>
      <div className='max-w-2xl mx-auto text-center py-4'>
        <H1>Navigation Bars</H1>
      </div>
      <NavBar />
    </section>
  );
}

export default NavBars;

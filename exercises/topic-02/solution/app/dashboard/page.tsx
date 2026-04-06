import StatCard from "@/components/cards/stat-card";
import H1 from "@/components/h1";

function Dashboard() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <section className='max-w-7xl mx-auto px-6 py-8'>
        <H1>Dashboard</H1>
        <h2 className='text-2xl font-semibold text-gray-800'>
          A sample dashboard page to demonstrate the use of core Tailwind
          utilities
        </h2>
        <div className='flex gap-6'>
          <StatCard title='Total Revenue' value='$120,000' change='+15%' />
          <StatCard title='New Users' value='1,200' change='+8%' />
          <StatCard title='Churn Rate' value='5%' change='-2%' />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

import PricingCard from "@/components/cards/pricing-card";
import StatCard from "@/components/cards/stat-card";

function Cards() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h2 className='font-bold text-3xl tracking-tight leading-tight text-gray-900'>
        Stat Cards
      </h2>
      <div className='flex gap-6'>
        <StatCard title='Total Revenue' value='$120,000' change='+15%' />
        <StatCard title='New Users' value='1,200' change='+8%' />
        <StatCard title='Churn Rate' value='5%' change='-2%' />
      </div>
      <h2 className='font-bold text-3xl tracking-tight leading-tight text-gray-900'>
        Pricing Cards
      </h2>
      <div className='flex gap-6'>
        <PricingCard
          plan='Starter'
          price='19'
          description='Perfect for individuals getting started'
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
        />
        <PricingCard
          plan='Pro'
          price='49'
          description='Ideal for growing teams and businesses'
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          type='highlighted'
        />
        <PricingCard
          plan='Enterprise'
          price='99'
          description='Best for large organizations with advanced needs'
          features={[
            "Feature 1",
            "Feature 2",
            "Feature 3",
            "Feature 4",
            "Feature 5",
          ]}
        />
      </div>
    </section>
  );
}

export default Cards;

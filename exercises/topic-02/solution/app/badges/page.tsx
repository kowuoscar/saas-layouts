import H1 from "@/components/h1";
import Badge from "@/components/badge";

function Badges() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4'>
      <H1>Badges</H1>
      <div className='flex gap-4'>
        <Badge status='Active' />
        <Badge type='error' status='Inactive' />
        <Badge type='warning' status='Pending' />
      </div>
    </section>
  );
}

export default Badges;

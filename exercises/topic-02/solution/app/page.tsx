import H1 from "@/components/h1";

export default function Home() {
  return (
    // I am using min-h-screen to make the main section take the full height of the screen
    <main className='min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-50'>
      <H1>Saas Layouts - Fundamentals components of Saas UI</H1>
      <p className='text-lg text-gray-600 leading-relaxed max-w-2xl text-center'>
        A series of exercises to get familiar with core Tailwind spacing, color,
        typography, and sizing utilities that form the visual vocabulary of
        every SaaS interface.
      </p>
    </main>
  );
}

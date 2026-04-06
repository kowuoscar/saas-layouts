import H1 from "@/components/h1";

function Typography() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4 text-center'>
      <H1>Typography and Line Height</H1>
      <h2 className='text-3xl font-bold tracking-tight leading-tight text-blue-800'>
        Learning about the basics of typography and line height in Tailwind CSS
      </h2>
      <span className='text-sm font-semibold uppercase tracking-widest text-gray-700'>
        This is a label
      </span>
      <p className='text-lg text-gray-600 leading-relaxed'>
        This is a dummy paragraph that shows the effect of leading relaxed for
        reading.
      </p>
      <div className='max-w-2xl'>
        <p className='text-lg text-gray-600 leading-relaxed line-clamp-3'>
          This is long paragraph that shows the effect of truncating and line
          clamping. This is long paragraph that shows the effect of truncating
          and line clamping. This is long paragraph that shows the effect of
          truncating and line clamping. This is long paragraph that shows the
          effect of truncating and line clamping.
        </p>
      </div>
    </section>
  );
}

export default Typography;

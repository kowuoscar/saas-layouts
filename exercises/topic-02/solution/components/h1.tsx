function H1({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <h1 className='text-4xl font-bold tracking-tight leading-tight text-gray-900'>
      {children}
    </h1>
  );
}

export default H1;

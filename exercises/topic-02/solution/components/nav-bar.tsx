function NavBar() {
  return (
    <header className='flex items-center px-6 py-4 border-b border-gray-200 bg-white'>
      <div className='flex items-center gap-2 shrink-0'>
        <div className='h-8 w-8 rounded-md bg-blue-600' />
        <span className='font-semibold text-gray-900'>Acme</span>
      </div>
      <nav className='flex flex-1 justify-center items-center gap-6'>
        <a href='#' className='text-sm text-gray-600 hover:text-gray-900'>
          Features
        </a>
        <a href='#' className='text-sm text-gray-600 hover:text-gray-900'>
          Showcase
        </a>
        <a href='#' className='text-sm text-gray-600 hover:text-gray-900'>
          Pricing
        </a>
        <a href='#' className='text-sm text-gray-600 hover:text-gray-900'>
          Docs
        </a>
      </nav>
      <div className='flex items-center gap-3 shrink-0'>
        <a href='#' className='text-sm text-gray-600'>
          Sign in
        </a>
        <button className='text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md'>
          Get started
        </button>
      </div>
    </header>
  );
}

export default NavBar;

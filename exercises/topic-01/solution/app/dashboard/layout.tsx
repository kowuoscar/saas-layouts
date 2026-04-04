function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <div className='flex min-h-screen'>
      <aside className='w-64'>
        Sidebar placeholder {new Date().toLocaleTimeString()}
      </aside>
      <main className='flex-1'>{children}</main>
    </div>
  );
}

export default DashboardLayout;

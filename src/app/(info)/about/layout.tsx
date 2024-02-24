export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <span>about layout</span>
      {children}
    </div>
  );
}

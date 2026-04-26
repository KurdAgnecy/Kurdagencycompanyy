export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ku" dir="rtl">
      <head>
        <title>Kurd Agency</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

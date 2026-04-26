import './globals.css'

export const metadata = {
  title: 'Kurd Agency',
  description: 'کورد ئەجێنسی بۆ سپۆنسەرکردن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ku" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

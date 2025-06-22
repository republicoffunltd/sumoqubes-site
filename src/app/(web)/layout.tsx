import Header from '@/components/header'
import Footer from '@/components/footer'
// import { BuiltWithOutstatic } from '@/components/built-with-outstatic'

export default function WebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main id="top">{children}</main>
      <Footer />
      {/* <BuiltWithOutstatic fixed={true} /> */}
    </>
  )
}

import FooterNavbar from './FooterNavbar'
import HeaderNavbar from './HeaderNavbar'




export default function Layout({ children }) {
  return (
    <>
      <HeaderNavbar />

      <main>{children}</main>
  
      <FooterNavbar />
    </>
  )
}
import Link from 'next/link'

export default function Header() {
  return (
    <header>
    <nav>
      <Link href='/'>anasayfa</Link>
      <Link href='/aboutus'>hakkımızda</Link>
      <Link href='/contact'>iletişim</Link>
      <Link href='/blog'>blog</Link>
    </nav>
  </header> 
  )
}

import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'
export default function Market(){
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/Market-Place">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/Market-Place">
          <Image src="/img/MP.jpg" alt="Market-Place" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/market-place">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/market-place">
          <Image src="/img/marketplace-vercel.jpg" alt="Market-Place" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

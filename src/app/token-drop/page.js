import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'
export default function Token(){
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/token-drop">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/token-drop">
          <Image src="/img/gittoken-drop.jpg" alt="token-drop" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/token-drop">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/token-drop">
          <Image src="/img/token-drop.jpg" alt="token-drop" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

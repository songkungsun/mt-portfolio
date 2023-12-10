import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'
export default function Clerkauth(){
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/clerk-web">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/clerk-web">
          <Image src="/img/gitclerk-auth.jpg" alt="clerk-auth" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/clerk-web">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/clerk-web">
          <Image src="/img/clerk.jpg" alt="clerk-auth" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

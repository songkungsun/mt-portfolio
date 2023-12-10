import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'

export default function Counter(){
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/counter">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/counter">
          <Image src="/img/gitcounter.jpg" alt="counter" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/counter">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/counter">
          <Image src="/img/counter.jpg" alt="counter" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

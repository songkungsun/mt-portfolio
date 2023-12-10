import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'
export default function Opencontact() {
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/opencontactBook">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/opencontactBook">
          <Image src="/img/gitopen-book.jpg" alt="opencontactBook" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/opencontact-book">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/opencontact-book">
          <Image src="/img/openbook.jpg" alt="opencontactBook" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import styles from '../styles.module.css'
export default function Erc(){
  return(
    <div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://github.com/songkungsun/erc721-nft-drop">깃허브 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://github.com/songkungsun/erc721-nft-drop">
          <Image src="/img/gitERC.jpg" alt="erc721-nft-drop" width={500} height={500}/>
      </Link>
      </div>
      <h4 style={{fontSize: '50px'}}><span className={styles.link}><Link href="https://vercel.com/songkungsun/erc721-nft-drop">버셀 페이지 주소</Link></span></h4>
      <div>
      <Link href="https://vercel.com/songkungsun/erc721-nft-drop">
          <Image src="/img/erc721-nft-drop.jpg" alt="erc721-nft-drop" width={500} height={500}/>
      </Link>
      </div>
    </div>
  )
}

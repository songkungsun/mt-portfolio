import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="header">
      <div style={{ display: 'flex', alignItems: 'center', color: '#c6b8e5' ,backgroundColor:"#4869d7" }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <div className="text-lg text-white font-bold" style={{ display: 'flex', alignItems: 'center' ,padding:"20px"}}><h4 style={{flex: 1, textAlign: 'center', fontSize: '30px', color: '#cccdd1'}}>91812531 송경선 개인페이지</h4></div>
          </Link>
        </div>

        <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ul>
            <li>
              <Link href="https://melodious-suede-012.notion.site/14965f2b938d43d9931116bea0aadde5?pvs=4">
                <div className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px',fontSize: '20px', color: '#cccdd1' }}>포트폴리오 노션 바로가기</div>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/songkungsun/">
                <div className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px',fontSize: '20px', color: '#cccdd1' }}>개인 깃허브 페이지</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

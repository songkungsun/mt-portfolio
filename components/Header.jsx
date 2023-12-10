import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="header">
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <div className="text-lg text-white font-bold" style={{ display: 'flex', alignItems: 'center' }}><img src='/img/jb.png' style={{ width: '300px', height: '100px' }} alt="logo" /></div>
          </Link>
        </div>
        <h4 style={{flex: 1, textAlign: 'center', fontSize: '30px', color: 'white'}}>91812531 송경선 개인페이지</h4>
        <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ul>
            <li>
              <Link href="https://www.notion.so/14965f2b938d43d9931116bea0aadde5?pvs=4">
                <div className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px',fontSize: '20px', color: 'white' }}>포트폴리오 노션 바로가기</div>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/songkungsun/">
                <div className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px',fontSize: '20px', color: 'white' }}>개인 깃허브 페이지</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

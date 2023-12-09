// components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your top bar content */}
      <div style={{ background: '#333111', color: '#fff', padding: '10px', display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', paddingRight: '20px' }}>
          Home
        </Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
      </div>
      
      {/* Main content */}
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

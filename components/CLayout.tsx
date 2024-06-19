// components/CLayout.tsx

import CSideNav from '@/components/CSideNav';
import CEditorConsole from '@/components/CEditorConsole';

interface CLayoutProps {
  children: React.ReactNode;
}

const CLayout: React.FC<CLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <CSideNav />

      {/* Main Content */}
      <div className="flex flex-1">
        <main className="flex-1 p-10">{children}</main>

        {/* Editor and Console */}
        <CEditorConsole isVisible={true} />
      </div>
    </div>
  );
};

export default CLayout;

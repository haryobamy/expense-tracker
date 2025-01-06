import AppSidebar from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React, { PropsWithChildren } from 'react';

type Props = {};

function DashboardLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div className=''>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default DashboardLayout;

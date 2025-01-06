'use client';
import {
  Folder,
  MoreHorizontal,
  Share,
  Trash2,
  type LucideIcon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  works: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
  title: string;
};

type LinkProps = {
  item: {
    name: string;
    url: string;
    icon: LucideIcon;
  };
  isMobile?: boolean;
};

function SidebarLink({ item, isMobile }: LinkProps) {
  const pathname = usePathname();

  const isActive = useMemo(
    () =>
      (pathname.toLowerCase().includes(item.url.toLowerCase()) &&
        item.url.length > 1) ||
      pathname.toLowerCase() === item.url.toLowerCase(),
    [pathname, item.url]
  );

  return (
    <SidebarMenuItem
      key={item.name}
      className={cn(
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-indigo-500  rounded text-white '
          : '',
        'py-2'
      )}
    >
      <SidebarMenuButton
        isActive={isActive}
        className={cn(
          isActive
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500  rounded !text-white '
            : '',
          'py-2'
        )}
        asChild
      >
        <a href={item.url}>
          <item.icon className='text-2xl' size={40} />
          <span className='text-lg font-[500]'>{item.name}</span>
        </a>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction showOnHover>
            <MoreHorizontal />
            <span className='sr-only'>More</span>
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-48'
          side={isMobile ? 'bottom' : 'right'}
          align={isMobile ? 'end' : 'start'}
        >
          <DropdownMenuItem>
            <Folder className='text-muted-foreground' />
            <span>View Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share className='text-muted-foreground' />
            <span>Share Project</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2 className='text-muted-foreground' />
            <span>Delete Project</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

export default function MyWorkNav({ works, title }: Props) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      <SidebarGroupLabel className='font-[700] text-black text-sm'>
        {title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {works.map((item) => (
          <SidebarLink item={item} key={item.name} isMobile={isMobile} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

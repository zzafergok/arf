'use client';

import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';
import { Link } from '@/components/core/link';
import { getCategoryTheme } from '@/features/calculators/registry';
import { cn } from '@/lib/utils';
import { getCategoryIcon } from './constants';
import type { NavCategoryGroup } from './types';

interface DesktopNavProps {
  groups: NavCategoryGroup[];
}

export function DesktopNav({ groups }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Ana Gezinim"
      className="hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto xl:flex"
    >
      {groups.map((group) => {
        const Icon = getCategoryIcon(group.id);
        const theme = getCategoryTheme(group.id);
        const isActive =
          pathname === group.href || pathname.startsWith(`${group.href}/`);

        return (
          <div
            key={group.id}
            className={cn(
              'inline-flex shrink-0 items-center rounded-lg border transition-all',
              isActive
                ? cn(theme.border, theme.bgSoft, 'shadow-sm')
                : 'border-transparent hover:bg-gunmetal/25',
            )}
          >
            <Link
              href={group.href}
              className={cn(
                'inline-flex items-center gap-1.5 whitespace-nowrap py-1.5 pl-2 pr-0.5 font-sans text-2xs font-semibold transition-colors',
                isActive ? theme.text : 'text-ash hover:text-titanium',
              )}
            >
              <Icon className={cn('h-3.5 w-3.5 shrink-0', theme.text)} />
              <span>{group.shortTitle}</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label={`${group.shortTitle} alt menüsü`}
                className={cn(
                  'inline-flex items-center justify-center rounded-r-lg py-1.5 pl-0.5 pr-1.5 text-ash transition-colors hover:text-titanium focus:outline-none',
                  isActive && theme.text,
                )}
              >
                <ChevronDown className="h-3.5 w-3.5 opacity-75" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-64 border-gunmetal/80 bg-obsidian/95 p-1.5 shadow-xl backdrop-blur-md"
              >
                <DropdownMenuLabel className="px-2 py-1.5">
                  <Link
                    href={group.href}
                    className={cn(
                      'flex items-center gap-1.5 font-display text-caption font-bold hover:underline',
                      theme.text,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{group.shortTitle} (Tümü)</span>
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gunmetal/50" />
                {group.calculators.map((calc) => {
                  const isSubActive = pathname === calc.href;
                  return (
                    <DropdownMenuItem
                      key={calc.id}
                      asChild
                      className={cn(
                        'cursor-pointer rounded-md px-2.5 py-1.5 font-sans text-compact',
                        isSubActive
                          ? cn(theme.bgSoft, theme.text, 'font-semibold')
                          : 'text-titanium',
                      )}
                    >
                      <Link href={calc.href}>{calc.shortTitle}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}
    </nav>
  );
}

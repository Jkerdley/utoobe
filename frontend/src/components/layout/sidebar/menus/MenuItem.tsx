import cn from 'clsx'
import Link from 'next/link'

import type { SidebarItem } from '../sidebar.types'

interface Props {
	item: SidebarItem
	isActive: boolean
}
export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className={cn('group flex py-3 items-center gap-4 hover:text-primary transition-colors ')}
			>
				<item.icon className='min-w-6 transition group-hover:scale-90 group-hover:rotate-6' />
				<span className={cn('border-b', { 'border-primary': isActive, 'border-transparent': !isActive })}>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block'></span>}
		</li>
	)
}

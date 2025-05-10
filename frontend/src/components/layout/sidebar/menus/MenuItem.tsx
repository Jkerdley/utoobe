import Link from 'next/link'

import type { SidebarItem } from '../sidebar.types'

interface Props {
	item: SidebarItem
}
export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link href={item.link}>
				<item.icon />
				<span>{item.label}</span>
			</Link>
		</li>
	)
}

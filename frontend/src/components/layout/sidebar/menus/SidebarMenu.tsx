import type { SidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: SidebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	return (
		<nav>
			{title && <div className='opacity-30 uppercase text-xs mb-2'>{title}</div>}
			<ul>
				{menu.map(item => (
					<MenuItem
						key={item.label}
						item={item}
					/>
				))}
			</ul>
		</nav>
	)
}

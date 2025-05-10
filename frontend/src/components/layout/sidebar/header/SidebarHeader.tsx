import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex gap-6 items-center mb-12'>
			<button
				onClick={toggleSidebar}
				className='opacity-100 hover:opacity-60  transition-opacity cursor-pointer'
			>
				<Menu />
			</button>

			<Link
				href={PUBLIC_PAGE.HOME}
				className='flex gap- items-center'
			>
				<SquarePlay
					color={COLORS.primary}
					size={30}
				/>
				<span className='font-semibold text-xl'>UTOOBE</span>
			</Link>
		</div>
	)
}

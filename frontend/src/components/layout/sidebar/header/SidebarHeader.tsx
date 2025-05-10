import { Menu, SquarePlay } from 'lucide-react'

export function SidebarHeader() {
	return (
		<div className='flex gap-4'>
			<button>
				<Menu />
			</button>
			<span>
				<SquarePlay />
				<span>Red video</span>
			</span>
		</div>
	)
}

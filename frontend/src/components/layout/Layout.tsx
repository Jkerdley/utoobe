import type { PropsWithChildren } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Sidebar />
			<Content>{children}</Content>
		</div>
	)
}

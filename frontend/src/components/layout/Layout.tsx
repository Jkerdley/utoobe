'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

import styles from '../layout/styles/Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(prev => !prev)
	}
	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}

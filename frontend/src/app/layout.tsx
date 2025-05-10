import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Layout } from '@/components/layout/Layout'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['cyrillic']
})

export const metadata: Metadata = {
	title: 'uToobe media center',
	description: 'Center of all worlds media'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.variable} ${notoSans.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}

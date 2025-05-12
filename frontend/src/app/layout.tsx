import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Layout } from '@/components/layout/Layout'

import { Providers } from '@/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['cyrillic']
})

export const metadata: Metadata = {
	title: {
		absolute: 'uToobe media center',
		template: `%s | uToobe`
	},
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
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}

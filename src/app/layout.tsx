import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
  title: 'Gustavo Rocha Aureliano',
  description: 'Este é um site sobre mim e qualquer coisa que eu quiser postar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<html lang="pt-br">
		<body className={roboto.className}>
			{children}
		</body>
	</html>
  )
}

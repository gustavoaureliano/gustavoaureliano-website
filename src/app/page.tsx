import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
		<h1>Seja bem vindo ao meu site</h1>
		<section className={styles.projects}>
			<h2>Meus projetos</h2>
			<Link href="https://onepiecefamily.gustavoaureliano.com.br" className={styles.project}>
				<h3>OnePieceFamily</h3>
			</Link>
			<Link href="/lampadas" className={styles.project}>
				<h3>Lâmpadas</h3>
			</Link>
			<Link href="https://lotodata.tk" className={styles.project}>
				<h3>LotoData</h3>
			</Link>
			<Link href="https://github.com/gustavoaureliano/iPET" className={styles.project}>
				<h3>iPET</h3>
			</Link>
		</section>
    </main>
  )
}

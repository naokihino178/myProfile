import Head from 'next/head'
import styles from './layout.module.css' // stylesという名前でlayout.module.cssからインポート
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'ここはsiteTitle、コンポーネントごとに変えれるよ'

export default function Layout({ children }) {// childrenはラップ要素、homeはトップページを表示？？
  return (
    <div className={styles.bg}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description" // 検索した際にタイトルの下に説明文として表示
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image" // SNS上でシェアされた際に表示する画像、WebページのURL同様に絶対パスで指定
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title" // ページのタイトル
          content={siteTitle}
        />
        <meta
          name="twitter:card" // Twitter上での表示タイプを指定するタグ
          content="summary_large_image"
        />
      </Head>
      <header className={`${styles.header} ${utilStyles.headingLg}`}>
        <div>
          <Link href="/"><a>Profile</a></Link>
        </div>
        <div>
          <Link href="/Skill"><a className={styles.nav}>Skill</a></Link>
          <Link href="/Portfolio"><a className={styles.nav}>Portfolio</a></Link>
          <Link href="/Form"><a className={styles.nav}>Contact</a></Link>
        </div>
      </header>
      <div className={styles.container}>
        <div>
          {/* ここでやっとindex.jsのLayoutで囲まれた部分が表示 */}
          <main>{children}</main>{/*Layoutコンポーネントがラッピングしている中身を表示*/}
        </div>
      </div>
    </div>
  )
}

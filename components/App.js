import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default (props) =>
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
    <style global jsx>{`
      body {
        color: hotpink;
        font-family: monospace;
        text-align: center;
        font-size: 16px;
      }
      a {
        color: inherit;
        margin-right: 1em;
      }
      ul {
        padding-left: 0;
      }
      li {
        list-style: none;
        margin-bottom: .5em;
      }
    `}</style>
    <nav>
      <Link href="/appointments">
        <a>Appointments</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
    <main>
      <section>
        <h1>Graphcool SSR</h1>
        {props.children}
      </section>
    </main>
    <style jsx>{`
      main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}</style>
  </div>
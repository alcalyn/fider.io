import { MainLayout } from '@app/components'
import Head from 'next/head'
import Link from 'next/link'

export default function PageNotFound(): JSX.Element {
  return (
    <MainLayout>
      <Head>
        <title>Page not found - fider.io</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section>
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2>404: Page Not Found</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Oops, we cound&apos;t find the page you were looking for.</p>
          </div>
          <div className="flex mt-6">
            <Link href="/" className="mx-auto text-blue-500 text-sm uppercase hover:text-blue-800">
              ← Back to home page
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

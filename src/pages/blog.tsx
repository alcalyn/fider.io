import Link from 'next/link'
import posts, { PostMetadata } from '@content/blog/all-posts'
import { formatDate } from '@app/fns/date'
import { MainLayout, SEO } from '@app/components'

export function Post(props: PostMetadata): JSX.Element {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700 uppercase">{props.category}</span>
        <span className="mt-1 text-gray-500 text-sm">{formatDate(props.publishedOn)}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{props.title}</h2>
        <p className="leading-relaxed">{props.excerpt}</p>
        <Link href={`/blog/${props.slug}`} className="text-blue-500 inline-flex items-center mt-4">
          Read More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default function Blog(): JSX.Element {
  return (
    <MainLayout>
      <SEO
        title="Blog · Fider"
        description="Our vision, news, ideas and whatever feels important, directly from Fider developers"
        imageUrl="/images/cover/blog.jpg"
      />

      <section>
        <div className="text-center mt-20 mb-10">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Voice of Fider Developers</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Our vision, news, ideas and whatever feels important.</p>
        </div>

        <div className="max-w-4xl container mx-auto text-gray-600 overflow-hidden">
          <div className="container px-5 py-12 md:py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {Object.values(posts)
                .sort((a, b) => b.publishedOn.getTime() - a.publishedOn.getTime())
                .map((p) => (
                  <Post key={p.slug} {...p} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

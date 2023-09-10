import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row px-14 gap-8">
        <div className=''>
          <h1 className=" font-bold uppercase   text-7xl  ">best online store in the world!</h1>
          <p className="py-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi  Provident cupiditate voluptatem et in.  Provident cupiditate voluptatem et in.Provident cupiditate voluptatem et in.Provident cupiditate voluptatem et in.exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link className="btn btn-success" href={'/products'}>Shop Now !</Link>
        </div>
        <Image
          src="/images/hero2.svg"
          className="max-w-sm rounded-lg "
          alt='hero section'
          width={400}
          height={400} />
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row px-14 gap-8">
        <div className=''>
          <h1 className=" font-bold uppercase  text-transparent text-7xl bg-clip-text bg-gradient-to-b from-success to-white ">best online store in the world!</h1>
          <p className="py-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi  Provident cupiditate voluptatem et in.  Provident cupiditate voluptatem et in.Provident cupiditate voluptatem et in.Provident cupiditate voluptatem et in.exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-success" >Shop Now !</button>
        </div>
        <Image
          src="/images/hero.svg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt='hero section'
          width={400}
          height={400} />
      </div>
    </div>
  )
}

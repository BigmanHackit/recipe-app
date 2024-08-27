import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='grid items-center place-items-center min-h-screen'>
        <h1 className='font-extrabold text-3xl text-center'>Error! Page not found!!!</h1>
        <Link href='/'>Go to Home</Link>
    </div>
  )
}


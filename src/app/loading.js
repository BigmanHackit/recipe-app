import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full bg-black grid items-center place-items-center min-h-screen'>
        <Skeleton className="w-full h-[100vh] rounded-full" />

    </div>
  )
}

export default Loading
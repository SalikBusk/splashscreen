import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <Link href={"/"} className="text-xl p-3 rounded-md bg-rose-400">
              Back to home 
      </Link>
    </div>
  )
}

export default page

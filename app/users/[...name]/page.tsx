'use client'
// console log is now on client side

// ... creates a catchAll
// [] creates dynamic routing with params
// () is ignored and is not apart of the url
// [[]] would catch /users, essentially the index page if /users/page.tsx doesnt exist, otherwise it gets confused

import { FC } from 'react'

interface pageProps {
  params : { name: string }
  searchParams: any
}

const page: FC<pageProps> = ({ params, searchParams }) => {
  console.log(searchParams)
  return <div>other names: {params.name}</div>
}

export default page
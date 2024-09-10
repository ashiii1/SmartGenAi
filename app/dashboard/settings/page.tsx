import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Page() {
  return (
    <div className="relative z-10 flex items-center justify-center h-full my-5">
      <div>
        <UserProfile />
      </div>
    </div>
  );
}

export default Page;
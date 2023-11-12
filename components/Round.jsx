import { Progress } from '@nextui-org/react'
import React from 'react'

function Round(params) {
    //console.log("in graph", params);

  return (
    <div className=' mt-5 space-y-5'>
      <div>
      <Progress
      value={params.sgpa}
      size='lg'
      classNames={{
        indicator: "bg-gradient-to-r from-green-600 to-green-500",
        
      }}
    />
    </div>
    <div className='text-center font-sans font-semibold text-xl'>
      <p>SGPA: {(params.sgpa/10).toFixed(2)}</p>
      <p>Congratulations!</p>
    </div>
    </div>
  )
}

export default Round
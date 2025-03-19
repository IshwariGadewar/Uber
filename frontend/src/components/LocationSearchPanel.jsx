import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "24B, Near kapoors cafe, Shreyians Coding School, Bhopal",
        "PICT,Near BVP, Katraj, Dhankawdi, Trimurti Chowk, Pune",
        "Patang Plaza Phase 6, Opp PICT , Katraj, Dhankawdi, Trimurti Chowk, Pune",
        "22B, Near Durga cafe, PICT, Katraj, Dhankawdi, Trimurti Chowk, Pune",
    ]

  return (
    <div>

        {
            locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true) 
                        props.setPanelOpen(false)
                        }} className='flex items-center gap-4 border-2 border-gray-100 active:border-black p-3 rounded-xl justify-start my-2'>
                            <h2 className='bg-[#eee] h-8 w-8 text-xl flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
                            <h4 className='text-md font-medium'>{elem}</h4>
                        </div>
            })
        }

    </div>
  )
}

export default LocationSearchPanel
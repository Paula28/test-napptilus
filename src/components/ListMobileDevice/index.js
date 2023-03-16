import { useSelector } from "react-redux"
import CardMobileDevice from "../CardMobileDevice"

export default function ListMobileDevices({search = ''}) {
    const mobileDevices = useSelector((state) => state.mobileDevices.mobileDevices)
    let filteredMobileDevices = []
    if (mobileDevices?.length > 0) {
      filteredMobileDevices = mobileDevices.filter((mobileDevice) => mobileDevice.brand.toLowerCase().indexOf(search.toLowerCase()) !== -1 || mobileDevice.model.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }
    console.log({mobileDevices, filteredMobileDevices, search})
  return (
    <div className="container">  
        {
           filteredMobileDevices?.length > 0 && filteredMobileDevices.map((mobileDevice) => <CardMobileDevice mobileDevice={mobileDevice}/>)
        }
    </div>
  )
}


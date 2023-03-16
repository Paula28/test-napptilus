import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from '../../components/InputSearch';
import ListMobileDevices from '../../components/ListMobileDevice';
import DetailMobile from '../../components/DetailMobile';
import {setMobileDevices} from '../../redux/actions/mobileDevicesActions'
import { getListMobileDevices } from '../../services';
import Header from '../../components/Header';
import BreadCrumbs from '../../components/BreadCrumbs';


export default function Main() {
  const [ loading, setLoading ] = useState(false)
  const [ search, setSearch ] = useState("")
  const detailId = useSelector((state) => state.mobileDevices.detailId)
  const dispatch = useDispatch();
  const mobileDevices = useSelector((state) => state.mobileDevices.mobileDevices)

  const init = async() => {
    setLoading(true)
    const mobileDevices = await getListMobileDevices()
    dispatch(setMobileDevices(mobileDevices?.data))
    setLoading(false);
  }

  useEffect(() => {
    if (!mobileDevices || mobileDevices.length === 0)
      init()
  }, []) 

  if (loading) {
    return <div>Loading baby</div>
  }
  if (detailId?.length > 0) {
    return <DetailMobile/>
  }
  return (
    <div>
      <div className='container-header-main'>
        <Header onSearch={setSearch} />
      </div>
      <BreadCrumbs onSearch={setSearch}  />
      <div>
        <ListMobileDevices search={search}/>
      </div>
    </div>
  )
}


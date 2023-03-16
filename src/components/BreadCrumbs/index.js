import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDetailId } from '../../redux/actions/mobileDevicesActions';

function BreadCrumbs({ onSearch }) {
  const dispatch = useDispatch();
  const detailId = useSelector((state) => state.mobileDevices.detailId)
  const handleClick = () => {
    if (detailId) {
      dispatch(setDetailId(null))
      onSearch("")
    }
  }
  return (
    <div className='breadcrumbs'>
      <span className='list-link' onClick={handleClick}>List</span>
      {
        detailId?.length > 0 && <span> / Detail</span>
      }
    </div>
  )
}

export default BreadCrumbs
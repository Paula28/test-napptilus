import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDetailId } from '../../redux/actions/mobileDevicesActions';
import InputSearch from '../InputSearch'
function Header({ onSearch }) {
  const detailId = useSelector((state) => state.mobileDevices.detailId)
  const countProduct = useSelector((state) => state.mobileDevices.countProduct)
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (detailId) {
      dispatch(setDetailId(null))
      onSearch("")
    }
  }

  return (
    <div className='container-header'>
      <img src='img/icon2.png' onClick={clickHandler} />
      {
        (detailId?.length === 0 || !detailId) &&
        <InputSearch onChange={(evt) => onSearch(evt.target.value)} />
      }
      <div className='container-count-product'>
        <img className='icon-buy-cart' src='img/pngwing.com.png' />
        <span>{countProduct}</span>
      </div>
    </div>
  )
}

export default Header
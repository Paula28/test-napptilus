import React from 'react'
import { useDispatch } from 'react-redux';
import { setDetailId } from '../../redux/actions/mobileDevicesActions';

function CardMobileDevice({mobileDevice}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (mobileDevice?.price)
            dispatch(setDetailId(mobileDevice.id))
    }
  return (
    <div className='container-card'>
        <div className='card' onClick={handleClick}> 
            <div className='imagen-card'>
                <img src= {`${mobileDevice?.imgUrl}`}/>
            </div>
            <div className='content'>
                {
                    !mobileDevice?.price && (
                        <span>
                            <b>Precio no disponible </b>
                        </span>
                    )
                }
                <span>
                    <b>Brand: </b>{mobileDevice?.brand}
                </span>
                <span>
                    <b>Model: </b>{mobileDevice?.model}
                </span>
                {
                    mobileDevice?.price && (
                        <span>
                            <b>Price: </b> {mobileDevice?.price} €
                        </span>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default CardMobileDevice
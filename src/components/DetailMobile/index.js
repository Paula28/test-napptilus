import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductInTheCart } from '../../redux/actions/mobileDevicesActions';
// import { setDetailId } from '../../redux/actions/mobileDevicesActions';
import { getDetailMobileDevice, setMobileInTheCart } from '../../services';
import BreadCrumbs from '../BreadCrumbs';
import Button from '../Button';
import Header from '../Header';

function DetailMobileDevice() {
    const [loading, setLoading] = useState(false)
    const [dataMobile, setDataMobile] = useState(null)
    const [colorCode, setColorCode] = useState(null)
    const [storageCode, setStorageCode] = useState(null)
    const detailId = useSelector((state) => state.mobileDevices.detailId)
    const dispatch = useDispatch();

    const init = async () => {
        setLoading(true)
        const dataMobileDevice = await getDetailMobileDevice(detailId)
        setDataMobile(dataMobileDevice?.data)
        setColorCode(dataMobileDevice?.data?.options?.colors[0].code)
        setStorageCode(dataMobileDevice?.data?.options?.storages[0].code)
        setLoading(false);
    }
    const handleClick = async () => {
        setLoading(true)
        const resCount = await setMobileInTheCart(detailId, colorCode, storageCode)
        const countProduct = resCount?.data?.count
        dispatch(setProductInTheCart(countProduct))
        setLoading(false);
    }

    useEffect(() => {
        if (!dataMobile) {
            init()
        }
        // eslint-disable-next-line
    }, [detailId])

    if (loading) {
        return <div>Loading detail baby</div>
    }
    return (
        <div className='container-page-detail'>
            <Header />
            <BreadCrumbs />
            <div>
                <div className='container-data-mobile'>
                    <div className='img-detail'>
                        <img src={`${dataMobile?.imgUrl}`} />
                    </div>
                    <div className='container-info-action'>
                        <div className='container-info'>
                            <div>
                                <label className='label-title'>Brand </label> <span>{dataMobile?.brand}</span>
                            </div>
                            <div>
                                <label className='label-title'>Model </label> <span>{dataMobile?.model}</span>
                            </div>
                            <div>
                                <label className='label-title'>Price </label> <span>{dataMobile?.price} €</span>
                            </div>
                            <div>
                                <label className='label-title'>CPU </label> <span>{dataMobile?.cpu}</span>
                            </div>
                            <div>
                                <label className='label-title'>RAM </label> <span>{dataMobile?.ram}</span>
                            </div>
                            <div>
                                <label className='label-title'>OS </label> <span>{dataMobile?.os}</span>
                            </div>
                            <div>
                                <label className='label-title'>Display Resolution </label> <span>{dataMobile?.displayResolution}</span>
                            </div>
                            <div>
                                <label className='label-title'>Battery </label> <span>{dataMobile?.battery}</span>
                            </div>
                            <div>
                                <label className='label-title'>Primary Camera  </label> <span>{dataMobile?.primaryCamera}</span>
                            </div>
                            <div>
                                <label className='label-title'>Secondary Camera </label> <span>{dataMobile?.secondaryCmera}</span>
                            </div>
                            <div>
                                <label className='label-title'> Dimentions  </label> <span>{dataMobile?.dimentions}</span>
                            </div>
                            <div>
                                <label className='label-title'>Weight </label> <span>{dataMobile?.weight}</span>
                            </div>
                            {
                                dataMobile?.options?.colors?.length > 0 && (
                                    <div>
                                        <label className='label-title'>Color</label>
                                        <select className='select-data' name="colorCode" onChange={(evt) => setColorCode(evt.target.value)}>
                                            {dataMobile?.options?.colors.map((color) => (

                                                <option key={color.code} value={color.code}>
                                                    {color.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )
                            }
                            {
                                dataMobile?.options?.storages?.length > 0 && (
                                    <div>
                                        <label className='label-title'>Storage</label>
                                        <select className='select-data' name="storageCode" onChange={(evt) => setStorageCode(evt.target.value)}>
                                            {dataMobile?.options?.storages.map((storage) => (
                                                <option key={storage.code} value={storage.code}>
                                                    {storage.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )
                            }
                            <Button onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMobileDevice
import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { BECO } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const cakePriceUsd = (priceData && priceData.data) ? parseFloat(priceData.data[BECO.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `BecoSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice

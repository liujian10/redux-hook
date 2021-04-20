import { useContext } from 'react'
import { DispatchContext } from './Provider'

const useDispatch = () => useContext(DispatchContext)

export default useDispatch

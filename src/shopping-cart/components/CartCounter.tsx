'use client'
import { addOne, initContentState, removeOne } from '@/store/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

interface props {
    value?: number
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const response = await fetch('/api/counter')
    const data = await response.json()
    return await data
}

export const CartCounter = ({ value = 10 }: props) => {
    const number = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()
    //const [number, setNumber] = useState<number>(value)
    /* useEffect(() => {
        return () => {
            dispatch(initContentState(value))
        }
    }, [])*/

    useEffect(() => {
        getApiCounter().then(({ count }) => dispatch(initContentState(count)))
    }, [dispatch])


    return (
        <>
            <span className='text-9xl' > {number}</span >
            <div className='flex'>
                <button
                    onClick={() => dispatch(removeOne())}
                    className='flex items-center justify-center p-2 rounded-xl
					 bg-gray-900 text-white hover:bg-gray-600 transition-all
					  w-[100px] mr-2'>
                    -1
                </button>
                <button
                    onClick={() => dispatch(addOne())}
                    className='flex items-center justify-center p-2 rounded-xl
					 bg-gray-900 text-white hover:bg-gray-600 transition-all 
					 w-[100px] mr-2'>
                    +1
                </button>
            </div>
        </>
    )
}

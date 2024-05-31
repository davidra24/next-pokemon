'use client'
import { useAppSelector } from '@/store/hooks';
import { IoCafeOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
export const WidgetsGrid = () => {
    const counter = useAppSelector(state => state.counter.count)
    return (
        <div className="flex fle-wrap p-2 item-center justify-center">
            <SimpleWidget title={`${counter}`} subTitle='lo que sea' label='contador' icon={<IoCafeOutline size={40} className='text-blue-600' />} href='/dashboard/counter' />
        </div>
    );
}
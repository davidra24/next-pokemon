import { WidgetsGrid } from '../../../components/widgets/WidgetsGrid';

export default function MainPage() {
    return (
        <div className='text-black flex flex-col items-center'>
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Información general</span>
            <div className="flex flex-wrap p-2">
                <WidgetsGrid />
            </div>
        </div>
    )
}

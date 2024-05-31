import { Sidebar } from '../../components/Sidebar';
interface props {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: props) {
    return (
        <div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>

            <div className='flex'>

                <Sidebar />

                <div className="p-2 w-full text-slate-900">
                    <div className='flex flex-col items-center justify-center w-full h-full'>
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
}

import Image from 'next/image';
import DashboardLayout from './dashboard/layout';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { redirect }  from 'next/navigation';


export default function Home() {
    redirect('/dashboard');
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
           
        </>
    );
}

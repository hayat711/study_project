'use client';
import Image from 'next/image';
import DashboardLayout from './dashboard/layout';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className='flex min-h-screen flex-col items-center justify-between cursor-pointer btn-accent'>
                <div className='font-bold  p-2 rounded-lg' onClick={() => router.push('/dashboard')}>
                    환영합니다
                </div>
            </main>
        </>
    );
}

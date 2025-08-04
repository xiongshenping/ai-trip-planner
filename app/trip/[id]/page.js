'use client'

import React, { useEffect,useState } from 'react'
// import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import { Skeleton } from 'antd';

// import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';


const App = () => {
    const params = useParams();
    const tripId = params.id;
    const [loading, setLoading] = useState(true);
    // const tripId = searchParams.get('tripId')
    const [error, setError] = useState(null);
    const [trip, setTrip] = useState(null);

    // const idToken = auth.user?.id_token; // 替换为真实 token

    // const searchParams = useSearchParams();
    // const queryObject = Object.fromEntries(searchParams.entries());

    // console.log('收到的数据:', queryObject);




    useEffect(() => {
        if (!tripId) return;

        const fetchTrip = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `https://7ev82t52nc.execute-api.ca-central-1.amazonaws.com/getTrip?tripId=${tripId}`
                );

                if (!res.ok) {
                    const errData = await res.json();
                    throw new Error(errData.error || 'Fetch failed');
                }

                const data = await res.json();
                setTrip(data.itinerary);
            } catch (err) {
                setError(err.message);
                setTrip(null);
            } finally {
                setLoading(false);
            }
        };

        fetchTrip();
    }, [tripId]);

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '60vh' }} className='markdown-body'>
            <Markdown>{trip}</Markdown>
            {loading && <Skeleton active />}
        </div>
    )
}


export default App;
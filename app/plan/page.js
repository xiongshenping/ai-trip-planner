
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Markdown from 'react-markdown'
import { Skeleton } from 'antd';
import { useAuth } from "react-oidc-context";



const App = () => {
    const auth = useAuth();
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const queryObject = Object.fromEntries(searchParams.entries());
    const idToken = auth.user?.id_token;
    useEffect(() => {

        if (!idToken) {
            return;
        }
        const handleGenerate = async () => {
            const res = await fetch('https://wlmytdmhtuextdfm5r2oqeffxy0fcouk.lambda-url.ca-central-1.on.aws/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(queryObject),
            });

            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                console.log('chunk:', chunk)
                setResponse((prev) => prev + chunk);
            }

            setLoading(false);
        };
        handleGenerate();


    }, [idToken]);
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '60vh' }} className='markdown-body'>
            <Markdown>{response}</Markdown>
            {loading && <Skeleton active />}
        </div>
    )

};
export default App;
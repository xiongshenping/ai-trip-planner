"use client";

import React, { useEffect, useState } from 'react'

import {
  List,
  Avatar
} from "antd";
import { Empty } from 'antd';
import styles from "./page.module.css";
import Link from "next/link";
import { Skeleton } from 'antd';

import { useParams } from 'next/navigation';

import { extractTitleAndDescription } from '@/app/utils/markdownUtils';
import { formatDate } from '@/app/utils/formatDate';
function enrichItemsWithTitleAndDescription(data) {
  if (!data || !Array.isArray(data.items)) return data;

  const enrichedItems = data.items.map(item => {
    const { title, description } = extractTitleAndDescription(item.itinerary || '');
    return {
      ...item,
      title,
      description
    };
  });

  return {
    ...data,
    items: enrichedItems
  };
}

export default function User() {
  // const auth = useAuth();
  // console.log('auth', auth.user);
  const params = useParams();
  const userId = params.id;
  console.log('userId:', userId)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trips, setTrips] = useState(null);


  useEffect(() => {
    if (!userId) return;

    const fetchTrip = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://2u8ybchwv9.execute-api.ca-central-1.amazonaws.com/getTrips?userId=${userId}`
        );

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || 'Fetch failed');
        }

        const data = await res.json();
        console.log('data:', data)

        const newTrips=enrichItemsWithTitleAndDescription(data)
        
        setTrips(newTrips); // {count:;item:[]}
      } catch (err) {
        setError(err.message);
        setTrips(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [userId]);


  return (
    <div className={styles.main} style={{ maxWidth: '900px', margin: '0 auto', minHeight: '60vh' }}>

      <div style={{ textAlign: 'left', margin: '24px 0 12px 8px', color: '#6366f1', fontWeight: 600, fontSize: 20, letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 22 }}>🧳</span> My Travel History {`(Total: ${trips?.count || 0})`}
      </div>
      <div style={{ color: '#64748b', fontSize: 15, margin: '0 0 18px 8px' }}>
        Review every wonderful journey, and revisit your past trips and inspirations anytime.
      </div>

      {trips && <>
        {
          trips.count ? (
            <List
              itemLayout="horizontal"
              dataSource={trips.items}
              renderItem={(item, index) => (
                <List.Item key={item.tripId}>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<Link href={`/trip/${item.tripId}`}>{item.title}</Link>}
                    description={formatDate(item.createTime)}
                  />
                  {item.description || item.itinerary}
                </List.Item>
              )}
            />

          ) : (
            <div style={{marginTop:'150px'}}>
            <Empty description='No Data' />
            </div>

          )
        }

      </>}
      {loading && <Skeleton active />}


    </div>
  );
}

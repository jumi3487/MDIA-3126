"use client";

import { useState } from "react";

export default function EventsPage() {
    const API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;
    const API_URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=7KpfwE4ixtW5VfaJCEN4epq6GdFWUYwu&countryCode=US`;

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch data from Ticketmaster API
    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    // Function to display events, including promoters and images
    const DisplayEvents = () => {
        if (data && data._embedded && data._embedded.events) {
            return (
                <ul>
                    {data._embedded.events.map((event, index) => (
                        <li 
                          key={index}
                          style={{
                                border: '1px solid #ddd',
                                padding: '20px',
                                marginBottom: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333'}}>{event.name}</h2>
                            <p> 💙 Date: {event.dates.start.localDate}</p>
                            <p> 🧡 Venue: {event._embedded.venues[0].name}</p>

                            {event.promoter && (
                                <p style={{fontSize: '15px', color:'gray'}}> 💜 Promoter: {event.promoter.name}</p>
                            )}

                            {event.images && event.images.length > 0 && (
                                <div>
                                    <img 
                                        src={event.images[0].url} 
                                        alt={`${event.name} image`} 
                                        width="300"
                                        style={{
                                          marginTop: '20px'
                                      }}
                                    />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <div>No Events Available</div>;
        }
    };

    return (
        <>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign:'center' }} className="main">
                <header>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>Ticketmaster Events 🏟</h1>
                    <button 
                      onClick={fetchData}
                      style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: '3px solid #fff',
                        backgroundColor: '#D81E5B',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '26px',
                        margin: '50px'
                    }}>
                        Fetch Events 👻
                    </button>
                </header>

                {isLoading && <p>Loading events...</p>}
                {error && <p>{error}</p>}

                <DisplayEvents />
            </div>
        </>
    );
}

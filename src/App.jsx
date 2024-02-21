import React, {useEffect} from 'react';

const App = () => {

    const [isGeolocation, setIsGeolocation] = React.useState(false);
    const [location, setLocation] = React.useState(null);

    useEffect(() => {
        const isAvailable = navigator.geolocation;
        setIsGeolocation(isAvailable);
    }, []);

    const handleGeolocation = () => {
        if (isGeolocation) {
            navigator.geolocation.getCurrentPosition((position)=> {
                const {latitude, longitude} = position.coords;
                setLocation({latitude, longitude});
            },
                (error)=> {
                    console.error("Error : ", error);
                })
        } else {
            alert("Access is denied or not supported")
        }
    }

    return (
        <div>
            {isGeolocation ? (
                <button onClick={handleGeolocation}>Get my Location</button>
            ) : (
                <span>Location not supported by your device</span>
            )}
            {location && (
                <>
                    <div>Latitude : {location.latitude}</div>
                    <div>Longitude : {location.longitude}</div>
                </>
            )}
        </div>
    );
};

export default App;
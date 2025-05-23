import { useEffect,useState } from "react"
const DEFAULT_LOCATION = {
  lat: 28.6139,
  lng: 77.209,
};

const useLocation = () => {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoaded(true);
      },
      () => setIsLoaded(true)
    );
  }, []);

  return { location, isLoaded };
};

export default useLocation;
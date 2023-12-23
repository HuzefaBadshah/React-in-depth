import { useEffect, useState } from "react";

function useOnlineHook() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        addEventListener('online', function () {
            setIsOnline(true);
        })
        addEventListener('offline', function () {
            setIsOnline(false);
        });

        return () => console.log('unmout called');
    }, []);

    return isOnline;
};

export default useOnlineHook;
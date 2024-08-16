import React, { useEffect, useRef } from 'react'

const useEffectAfterMount = (fn, deps) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        fn()

    }, deps)
}

export default useEffectAfterMount
import { useEffect, useRef, useState } from "react";

export const useOutsideClick = (callback) => {
    const [open, setOpen] = useState(false);

    const ref = useRef(null);

    const handleOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutside);

        return () => {
            document.addEventListener("mousedown", handleOutside);
        };
    }, [callback]);

    return ref;
};

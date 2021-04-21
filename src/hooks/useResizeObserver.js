import React from "react";

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = React.useState(null);
    React.useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
        });
        console.log(observeTarget, resizeObserver);

        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);
    return dimensions;
};

export default useResizeObserver;
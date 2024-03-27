import { useEffect } from 'react';

const useClickOutside = (
    callback: () => void,
    refs: React.RefObject<HTMLElement>[],
    deps?: React.DependencyList | undefined
): void => {
    const handleClickOutside = (event: MouseEvent): void => {
        const outsideElements = refs.every(
            (ref) => !ref?.current?.contains(event.target as Node)
        );

        if (outsideElements) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, deps);
};

export default useClickOutside;

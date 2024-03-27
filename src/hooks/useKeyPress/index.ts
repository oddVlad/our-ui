import { useEffect } from 'react';

const useKeyPerss = (
    callback: () => void,
    key: string,
    deps?: React.DependencyList | undefined
): void => {
    const handleKeyPress = (event: KeyboardEvent): void => {
        if (event.key === key) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, deps);
};

export default useKeyPerss;

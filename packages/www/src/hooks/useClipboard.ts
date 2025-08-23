import { useState, useCallback, useEffect } from 'react';

export function useAstroClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback((text: string) => {
        const input = document.createElement('input');
        input.value = text;

        document.body.appendChild(input);
        input.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(input);

        if (successful) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, []);

    useEffect(() => {
        const handlePaste = (event: ClipboardEvent) => {
            event.preventDefault();
            event.stopPropagation();
        };

        document.addEventListener('paste', handlePaste);

        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, []);

    return {
        isCopied,
        handleCopy,
    };
}

export function useClipboard() {
    const { handleCopy, isCopied } = useAstroClipboard();
    return {
        handleCopy,
        isCopied,
    };
}
declare global {
    interface Window {
        _translations?: Record<string, any>;
    }
}

export function __(key: string, replace: Record<string, string> = {}): string {
    if (!window._translations) {
        console.warn('Translations not loaded');
        return key;
    }

    // Get the translation by following the path
    const parts = key.split('.');
    let current: any = window._translations;

    for (const part of parts) {
        if (current === undefined || current === null) {
            console.warn(`Translation path not found for key: ${key}`);
            return key;
        }
        current = current[part];
    }

    // If we didn't find a string translation, return the key
    if (typeof current !== 'string') {
        console.warn(`Translation not found for key: ${key}`);
        return key;
    }

    // Replace any placeholders
    let message = current;
    for (const [placeholder, value] of Object.entries(replace)) {
        message = message.replace(`:${placeholder}`, value);
    }

    return message;
}

export default __;

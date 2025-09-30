import { useRouter } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const [locale, setLocale] = useState('it'); // Default to Italian

    const switchLanguage = async (newLocale: string) => {
        try {
            await axios.post('/set-locale', { locale: newLocale });
            // Reload the page to apply the new locale
            window.location.reload();
        } catch (error) {
            console.error('Failed to switch language:', error);
        }
    };

    return (
        <select
            value={locale}
            onChange={(e) => switchLanguage(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white"
        >
            <option value="it">Italiano</option>
            <option value="en">English</option>
        </select>
    );
}

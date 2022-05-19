import { useDebounce } from '@/hooks/useDebounce';
import { useState } from 'react';

export const useSearch = () => {
	const [searchTerm, setsearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);
};

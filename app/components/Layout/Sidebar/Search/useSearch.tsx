import { useDebounce } from '@/hooks/useDebounce';
import { MovieService } from '@/services/movie.service';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

export const useSearch = () => {
	const [searchTerm, setsearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getAllMovies(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setsearchTerm(e.target.value);
	};

	return { isSuccess, handleSearch, data };
};

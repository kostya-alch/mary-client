import { usePopularGenres } from '@/hooks/usePopularGenres';
import { FC } from 'react';

export const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();
	return <div>GenreMenu</div>;
};

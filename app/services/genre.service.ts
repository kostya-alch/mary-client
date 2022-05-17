import { getGenresUrl } from '@/config/api.config';
import { iGenre } from '@/shared/types/movie.types';
import { instanceAxios } from 'api/interceptors';

export const GenreService = {
	async getAllGenres(searchTerm?: string) {
		return instanceAxios.get<iGenre[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
};

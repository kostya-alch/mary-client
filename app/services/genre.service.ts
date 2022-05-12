import { getGenresUrl } from '@/config/api.config';
import { iGenre } from '@/shared/types/movie.types';
import { instanceAxios } from 'api/interceptors';

export const GenreService = {
	async getPopularGenres() {
		return instanceAxios.get<iGenre[]>(getGenresUrl('/popular'), {});
	},
};

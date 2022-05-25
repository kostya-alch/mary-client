import { IMovie } from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

import { instanceAxios } from './../api/interceptors';

export const MovieService = {
	async getAllMovies(searchTerm?: string) {
		return instanceAxios.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
};

import { getGenresUrl } from '../config/api.config';

import { IMenuItem } from '@/components/Layout/Navigation/MenuContainer/Menu.interface';

import { GenreService } from '@/services/genre.service';

import { useQuery } from 'react-query';

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAllGenres(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenresUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	);

	return queryData;
};

import { TypeMaterialIconName } from './icon.types';

export interface iGenre {
	_id: string;
	name: string;
	description: string;
	slug: string;
	icon: TypeMaterialIconName;
}

export interface IParametrs {
	year: number;
	duration: number;
	country: string;
}

export interface IActor {
	_id: string;
	photo: string;
	name: string;
	countMovies: number;
	slug: string;
}
export interface IMovie {
	_id: string;
	poster: string;
	bigPoster: string;
	title: string;
	parametrs: IParametrs;
	genres: iGenre[];
	actors: IActor[];
	countOpened: number;
	videoUrl: string;
	rating: number;
	slug: string;
}

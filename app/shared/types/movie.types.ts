import { TypeMaterialIconName } from './icon.types';

export interface iGenre {
	_id: string;
	name: string;
	description: string;
	slug: string;
	icon: TypeMaterialIconName;
}

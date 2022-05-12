import { FC } from 'react';
import { Menu } from './Menu';
import { firstMenu, userMenu } from './Menu.data';

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* Здесь будут еще меню жанров, но их нужно брать с бэка */}
			<Menu menu={userMenu} />
		</div>
	);
};

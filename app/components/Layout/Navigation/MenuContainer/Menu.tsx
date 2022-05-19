import { FC } from 'react';

import { AuthItems } from './auth/AuthItems';

import { IMenu } from './Menu.interface';

import { MenuItem } from './MenuItem';

import styles from './Menu.module.scss';

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.header}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};

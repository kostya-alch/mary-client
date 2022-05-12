import { FC } from 'react';
import { AuthItems } from './auth/AuthItems';
import { IMenu } from './Menu.interface';

import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';

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

import { useRouter } from 'next/router';
import { FC } from 'react';
import classNames from 'classnames';
import { IMenuItem } from './Menu.interface';

import Link from 'next/link';

import { MaterialIcon } from '@/components/ui/MaterialIcon';

import styles from './Menu.module.scss';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter();

	return (
		<li
			className={classNames({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	);
};

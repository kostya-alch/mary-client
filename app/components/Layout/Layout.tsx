import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Layout.module.scss';

import { Navigation } from './Navigation/Navigation';

import { Sidebar } from './Sidebar/Sidebar';

interface HeaderProps {
	children: ReactNode;
}

export const Layout: FC<PropsWithChildren<HeaderProps>> = ({
	children,
}: HeaderProps) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	);
};

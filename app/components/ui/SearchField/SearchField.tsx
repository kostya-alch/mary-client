import { FC } from 'react';
import { MaterialIcon } from '../MaterialIcon';
import { ISearchField } from './SearchField.interface';

import styles from './SearchField.module.scss';

export const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				type="text"
				value={searchTerm}
				placeholder="Search"
				onChange={handleSearch}
			/>
		</div>
	);
};

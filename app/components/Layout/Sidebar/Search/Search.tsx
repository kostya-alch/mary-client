import { SearchField } from '@/components/ui/SearchField/SearchField';
import { FC } from 'react';

import styles from './Search.module.scss';
import { SearchList } from './SearchList/SearchList';
import { useSearch } from './useSearch';

export const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch();
	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

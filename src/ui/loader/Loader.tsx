import { Spinner } from '@vkontakte/vkui'
import styles from './index.module.css'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<Spinner size='large' className={styles.spinner} />
		</div>
	)
}

export default Loader

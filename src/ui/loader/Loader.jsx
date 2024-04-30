import { Spinner } from '@vkontakte/vkui'
import styles from './index.module.css'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<Spinner size='large' className={styles.spinner} />
		</div>
	)
}

export default Loader

import { Spinner } from '@vkontakte/vkui'

const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				width: '100%'
			}}
		>
			<Spinner size='large' style={{ margin: '20px 0' }} />
		</div>
	)
}

export default Loader

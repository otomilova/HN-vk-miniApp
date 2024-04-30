import { useComments } from '../../hooks/useComments.js'
import React, { useState } from 'react'
import Loader from '../../ui/loader/Loader.jsx'
import { Button, RichCell, Separator, Spacing, Text } from '@vkontakte/vkui'
import parse from 'html-react-parser'
import styles from './index.module.css'

const Comments = ({ ids, shift }) => {
	const {
		data: comments,
		isSuccess: isCommentsSuccess,
		isLoading,
		isPending
	} = useComments(ids)
	let initialMap = new Map()
	ids?.map(id => {
		initialMap.set(id, false)
	})

	const [expandedMap, setExpandedMap] = useState(initialMap)
	return (
		<>
			{(isLoading || isPending) && <Loader />}
			{ids &&
				isCommentsSuccess &&
				comments?.map((comment, index) => {
					return (
						<React.Fragment key={comment.data.id}>
							{!comment.data.deleted && (
								<>
									<RichCell
										style={{ marginLeft: `${shift * 75}px` }}
										caption={comment.time}
										bottom={
											<Text className={styles.wrapText}>
												{parse(comment.data.text)}
											</Text>
										}
										actions={
											comment.data.kids && comment.data.kids.length > 0 ? (
												<Button
													mode='primary'
													size='s'
													appearance='neutral'
													onClick={() => {
														const newExpandedMap = new Map(expandedMap)
														newExpandedMap.set(
															comment.data.id,
															!newExpandedMap.get(comment.data.id)
														)
														setExpandedMap(newExpandedMap)
													}}
												>
													{expandedMap.get(comment.data.id)
														? 'Collapse'
														: `${comment.data?.kids?.length} more`}
												</Button>
											) : (
												<></>
											)
										}
									>
										{`By ${comment.data.by} `}
									</RichCell>
									{expandedMap.get(comment.data.id) && (
										<Comments ids={comment.data.kids} shift={shift + 1} />
									)}
								</>
							)}
							{index !== comments.length - 1 && (
								<Spacing size={24}>
									<Separator />
								</Spacing>
							)}
						</React.Fragment>
					)
				})}
		</>
	)
}

export default Comments

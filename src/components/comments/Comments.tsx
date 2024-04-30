import { useComments } from '../../hooks/useComments'
import React, { FC, useState } from 'react'
import Loader from '../../ui/loader/Loader.tsx'
import { Button, RichCell, Separator, Spacing, Text } from '@vkontakte/vkui'
import parse from 'html-react-parser'
import styles from './index.module.css'
import { IComment } from '../../types/types'

interface ICommentsProps {
	ids: number[] | undefined
	shift: number
}

const Comments: FC<ICommentsProps> = ({ ids, shift }) => {
	const {
		data: allComments,
		isSuccess: isCommentsSuccess,
		isLoading,
		isPending
	}: {
		data: { data: IComment; time: string }[]
		isSuccess: boolean
		isLoading: boolean
		isPending: boolean
	} = useComments(ids)

	const comments = allComments?.filter(
		({ data }: { data: IComment }) => !data?.deleted
	)

	const initialMap: Map<number, boolean> = new Map()
	ids?.map(id => {
		initialMap.set(id, false)
	})

	const [expandedMap, setExpandedMap] =
		useState<Map<number, boolean>>(initialMap)
	return (
		<>
			{(isLoading || isPending) && <Loader />}
			{ids &&
				isCommentsSuccess &&
				comments.map((comment, index) => {
					return (
						<React.Fragment key={comment.data.id}>
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

							<Spacing size={24}>
								{index !== comments.length - 1 && <Separator />}
							</Spacing>
						</React.Fragment>
					)
				})}
		</>
	)
}

export default Comments

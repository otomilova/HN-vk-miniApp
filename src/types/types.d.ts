export interface IStory {
	id: number
	score: number
	title: string
	time: string | number
	text: string
	by: string
	kids?: number[]
	descendants: number
	url: string
}

export interface IComment {
	id: number
	time: string | number
	text: string
	by: string
	kids?: number[]
	parent: number
	type: string
	deleted?: boolean
}

export type TItem = IStory | IComment

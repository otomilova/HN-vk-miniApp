export function makeDate(time: number) {
	return time ? new Date(time * 1000) : new Date()
}

export enum IStatus {
  READY = 'READY',
  PLAYING = 'PLAYING',
  PASSED = 'PASSED'
}

export const ALL_CARD_NAMES = [
  'brami',
  'gigachad',
  'winnerkid',
  'tuxedopooh',
  'madara',
  'eren',
  'goku',
  'vegeta'
] as const

export type ICardName = typeof ALL_CARD_NAMES[number]

export interface ICard {
  id: string
  flipped: boolean
  name: ICardName
}

export interface IState {
  nonMatchedPairs: number
  highestRecord: number
  status: IStatus
  cards: ICard[]
  timeCost: number
}

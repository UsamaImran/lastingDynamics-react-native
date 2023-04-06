import { ReactNode } from 'react'

export interface ISvg {
    color: string
}
export interface IDashboradCard {
    id: number
    title: JSX.Element | ReactNode
    icon: JSX.Element | ReactNode
    subtitle: string
}

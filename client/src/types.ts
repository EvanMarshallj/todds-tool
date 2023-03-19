export enum Role {
    Host,
    Player
}

export interface Player {
    id: number,
    name: string,
    tokenId?: number,
}

export interface GridCoord {
    row: number,
    col: number
}
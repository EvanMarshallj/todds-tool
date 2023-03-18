import { ReactElement } from "react";

export enum Role {
    Host,
    Player
}

export interface Player {
    id: number,
    name: string,
    token?: ReactElement,
}
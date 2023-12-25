export type TCardSmall = {
    title: string,
}

export type TCardBig = TCardSmall & {
    artist?: string,
}

export type TLibraryCard = TCardSmall & {
    author?: string,
    songsTotal?: string,
}

export type TSearchPageCard = TCardSmall & {

}
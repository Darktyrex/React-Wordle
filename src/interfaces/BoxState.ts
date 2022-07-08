export interface BoxState{
    letter?: string,
    status: "correct-spot"|"wrong-spot"|"any-spot"|"unchecked",
}
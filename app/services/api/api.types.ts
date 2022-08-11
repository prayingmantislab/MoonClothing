import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { QuestionSnapshotIn } from "../../models/question/question"

export interface User {
  id: number
  name: string
}

export type GetQuestionsResult =
  | { kind: "ok"; questions: QuestionSnapshotIn[] }
  | GeneralApiProblem
  | { kind: "bad-data" }
  | GeneralApiProblem
export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

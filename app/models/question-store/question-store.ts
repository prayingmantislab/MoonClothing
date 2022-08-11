import { withEnvironment } from "../extensions/with-environment"
import { Instance, SnapshotOut, SnapshotIn, types, flow } from "mobx-state-tree"
import { QuestionModel, QuestionSnapshotIn, Question } from "../question/question"
import { GetQuestionsResult } from "../../services/api/api.types"
/**
 * Model description here for TypeScript hints.
 */
export const QuestionStoreModel = types
  .model("QuestionStore")
  .props({
    questions: types.optional(types.array(QuestionModel), []),
  })
  .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveQuestions: (questionSnapshots: QuestionSnapshotIn[]) => {
      const questionModels: Question[] = questionSnapshots.map((c) => QuestionModel.create(c))
      self.questions.replace(questionModels)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getQuestions: flow(function* () {
      const result: GetQuestionsResult = yield self.environment.api.getQuestions()
      if (result.kind === "ok") {
        self.saveQuestions(result.questions)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
  }))
export interface QuestionStore extends Instance<typeof QuestionStoreModel> {}
export interface QuestionStoreSnapshotOut extends SnapshotOut<typeof QuestionStoreModel> {}
export interface QuestionStoreSnapshotIn extends SnapshotIn<typeof QuestionStoreModel> {}
export const createQuestionStoreDefaultModel = () => types.optional(QuestionStoreModel, {})

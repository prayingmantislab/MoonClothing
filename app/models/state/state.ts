import { Instance, SnapshotOut, types, SnapshotIn } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const StateModel = types
  .model("State")
  .props({
    id: types.identifier,
    state: types.string,
    population: types.number,
    counties: types.number,
    detail: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface State extends Instance<typeof StateModel> {}
export interface StateSnapshotOut extends SnapshotOut<typeof StateModel> {}
export interface StateSnapshotIn extends SnapshotIn<typeof StateModel> {}
export const createStateDefaultModel = () => types.optional(StateModel, {})

import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const StateStoreModel = types
  .model("StateStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface StateStore extends Instance<typeof StateStoreModel> {}
export interface StateStoreSnapshotOut extends SnapshotOut<typeof StateStoreModel> {}
export interface StateStoreSnapshotIn extends SnapshotIn<typeof StateStoreModel> {}
export const createStateStoreDefaultModel = () => types.optional(StateStoreModel, {})

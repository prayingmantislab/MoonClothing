import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PantsModel = types
  .model("Pants")
  .props({
    id: types.identifier,
    type: types.string,
    color: types.string,
    size: types.number,
    brand: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Pants extends Instance<typeof PantsModel> {}
export interface PantsSnapshotOut extends SnapshotOut<typeof PantsModel> {}
export interface PantsSnapshotIn extends SnapshotIn<typeof PantsModel> {}
export const createPantsDefaultModel = () => types.optional(PantsModel, {})

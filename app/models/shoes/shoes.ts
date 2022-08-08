import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ShoesModel = types
  .model("Shoes")
  .props({
    id: types.identifier,
    type: types.string,
    color: types.string,
    size: types.number,
    brand: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Shoes extends Instance<typeof ShoesModel> {}
export interface ShoesSnapshotOut extends SnapshotOut<typeof ShoesModel> {}
export interface ShoesSnapshotIn extends SnapshotIn<typeof ShoesModel> {}
export const createShoesDefaultModel = () => types.optional(ShoesModel, {})

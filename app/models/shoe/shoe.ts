import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ShoeModel = types
  .model("Shoe")
  .props({
    id: types.identifier,
    type: types.string,
    color: types.string,
    size: types.number,
    brand: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Shoe extends Instance<typeof ShoeModel> {}
export interface ShoeSnapshotOut extends SnapshotOut<typeof ShoeModel> {}
export interface ShoeSnapshotIn extends SnapshotIn<typeof ShoeModel> {}
export const createShoeDefaultModel = () => types.optional(ShoeModel, {})

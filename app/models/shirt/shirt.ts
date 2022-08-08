import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ShirtModel = types
  .model("Shirt")
  .props({
    id: types.identifier,
    type: types.string,
    color: types.string,
    size: types.number,
    brand: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Shirt extends Instance<typeof ShirtModel> {}
export interface ShirtSnapshotOut extends SnapshotOut<typeof ShirtModel> {}
export interface ShirtSnapshotIn extends SnapshotIn<typeof ShirtModel> {}
export const createShirtDefaultModel = () => types.optional(ShirtModel, {})

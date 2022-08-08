import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ClothesStoreModel = types
  .model("ClothesStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ClothesStore extends Instance<typeof ClothesStoreModel> {}
export interface ClothesStoreSnapshotOut extends SnapshotOut<typeof ClothesStoreModel> {}
export interface ClothesStoreSnapshotIn extends SnapshotIn<typeof ClothesStoreModel> {}
export const createClothesStoreDefaultModel = () => types.optional(ClothesStoreModel, {})

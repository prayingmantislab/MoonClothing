// import { ShoesModel } from "./../shoes/shoes"
// import { PantsModel } from "./../pants/pants"
// import { ShirtModel } from "./../shirt/shirt"
// import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

// /**
//  * Model description here for TypeScript hints.
//  */
// //create a new model array with the pants object, the shoes object, and the shirt object
// export const SetModel = types
//   .model("Set")
//   .props({
//     id: types.identifier,
//     pants: types.optional(PantsModel, {}),
//     shoes: types.optional(ShoesModel, {}),
//     shirt: types.optional(ShirtModel, {}),
//   })
//   .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
//   .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

// export interface Set extends Instance<typeof SetModel> {}
// export interface SetSnapshotOut extends SnapshotOut<typeof SetModel> {}
// export interface SetSnapshotIn extends SnapshotIn<typeof SetModel> {}
// export const createSetDefaultModel = () => types.optional(SetModel, {})

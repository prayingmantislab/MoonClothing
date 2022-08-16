import { StateStoreModel } from "./state-store"

test("can be created", () => {
  const instance = StateStoreModel.create({})

  expect(instance).toBeTruthy()
})

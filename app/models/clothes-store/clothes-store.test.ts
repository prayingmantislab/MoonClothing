import { ClothesStoreModel } from "./clothes-store"

test("can be created", () => {
  const instance = ClothesStoreModel.create({})

  expect(instance).toBeTruthy()
})

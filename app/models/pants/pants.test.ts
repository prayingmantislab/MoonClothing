import { PantsModel } from "./pants"

test("can be created", () => {
  const instance = PantsModel.create({})

  expect(instance).toBeTruthy()
})

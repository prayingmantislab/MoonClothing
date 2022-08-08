import { ShoeModel } from "./shoe"

test("can be created", () => {
  const instance = ShoeModel.create({})

  expect(instance).toBeTruthy()
})

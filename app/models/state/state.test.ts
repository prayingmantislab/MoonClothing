import { StateModel } from "./state"

test("can be created", () => {
  const instance = StateModel.create({})

  expect(instance).toBeTruthy()
})

import { ShirtModel } from "./shirt"

test("can be created", () => {
  const instance = ShirtModel.create({})

  expect(instance).toBeTruthy()
})

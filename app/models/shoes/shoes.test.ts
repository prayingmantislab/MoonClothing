import { ShoesModel } from "./shoes"

test("can be created", () => {
  const instance = ShoesModel.create({})

  expect(instance).toBeTruthy()
})

import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import OrderModel from 'src/models/order.model'
connectDB()

export const getOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const orders = await OrderModel.find({ IdClient: id })
    return res.status(200).send(orders)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: error })
  }
}

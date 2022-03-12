import mongoose from "mongoose"

const Product = mongoose.model('Product', { name: String });


export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không thêm được sản phẩm" }
        )
    }
}

export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}

export const getOne = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}

export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không update được sản phẩm" }
        )
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}
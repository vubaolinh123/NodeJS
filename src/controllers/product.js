const data = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
];


export const list = (req, res) => {
    res.json(data)
}

export const getOne = (req, res) => {
    res.json(data.filter(item => item.id == req.params.id))
}

export const create = (req, res) => {
    data.push(req.body);
    res.json(data)
}

export const update = (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result)
}

export const deleteOne = (req, res) => {
    res.json(data.filter(item => item.id != req.params.id))
}
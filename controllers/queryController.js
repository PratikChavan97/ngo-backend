import Query from "../model/queryModel.js";

const getAllQuery = async (req, res) => {
  try {
    const queries = await Query.find();
    res.status(200).json({
      message: "All Queries",
      data: {
        queries,
      },
    });
  } catch (err) {
    if (err) console.log("No queries found");
  }
};

const createQuery = async (req, res) => {
  try {
    await Query.create(req.body);
    res.status(201).json({
      message: "Query created Successfully",
    });
  } catch (err) {
    if (err) console.log("Unable to create a new query");
  }
};

export { getAllQuery, createQuery };

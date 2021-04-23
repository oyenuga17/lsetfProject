const {
	getAllEntry,
	getSingleEntry,
	deleteSingleEntry,
	createEntry,
	updateSingleEntry,
} = require("./view");

const express = require("express");
const router = express.Router();

router.route("/").get(getAllEntry)
            	.post(createEntry);

router
	.route("/:id")
	.get(getSingleEntry)
	.patch(updateSingleEntry)
	.delete(deleteSingleEntry);

module.exports = router;

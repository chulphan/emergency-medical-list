const { Schema, model } = require("mongoose");

const emergencySchema = new Schema(
  {
    _id: String,
    hospital_name: String,
    hospital_call: String,
    hospital_emergency_call: String,
    hospital_address: String,
    hospital_id: String,
    list_of_treat: String
  },
  { collection: "emergency_list" }
);

const Emergency = model("emergency", emergencySchema);

module.exports = Emergency;

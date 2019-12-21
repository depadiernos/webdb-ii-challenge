exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { vin: "", make: "Toyota", model: "Yaris", mileage: "100000" },
    { vin: "", make: "Hyundai", model: "Elantra", mileage: "35000" },
    { vin: "", make: "Ford", model: "Escape", mileage: "45000" },
    { vin: "", make: "Honda", model: "Accord", mileage: "90000" }
  ])
}

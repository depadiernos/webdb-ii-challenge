exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { vin: "3US2UKAX01AUT6JSR", make: "Toyota", model: "Yaris", mileage: "100000" },
    { vin: "JHN409FLBNJ5BLYLP", make: "Hyundai", model: "Elantra", mileage: "35000" },
    { vin: "CWER07QQH08EXCNY1", make: "Ford", model: "Escape", mileage: "45000" },
    { vin: "NWW5YZ5YIW31Z7FNX", make: "Honda", model: "Accord", mileage: "90000" }
  ])
}

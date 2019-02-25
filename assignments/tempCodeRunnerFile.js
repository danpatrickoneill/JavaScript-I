for (let i = 0; i < carYears.length; i++) {
  if (carYears[i].car_year < 2000) {
    oldCars.push(inventory[i]);
  }
}
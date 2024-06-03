function cakes(recipe, available) {
    for (let key in recipe) {
        for (let ingredients in available) {
            if (!available[key]) return 0
            if (key === ingredients) {
                if (available[key] < recipe[key]) { return 0 } else
                    return Math.floor(available[key] / recipe[key])
            }
        }
    }
}
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))


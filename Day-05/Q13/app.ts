//
let favourites_bikes : string[]=["Yamaha", "Honda", "Kawasaki"]
for (let i=0; i < Object.keys(favourites_bikes).length; i++){
    console.log("This all my favourites bike " + Object.keys(favourites_bikes)[i], " is "+ favourites_bikes[Object.keys(favourites_bikes)[i]] )
}
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation : string []= ["Yamaha", "Honda", "Kawasaki"]
transportation .forEach(transportation => {
    console.log(`i Would like it this bikes ${transportation}`)
});
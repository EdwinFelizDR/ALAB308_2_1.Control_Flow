
// Calculate the current number of plants after the specified number of weeks
const plantweek1 = 20;
const plantweek2 = 40;
const plantweek3 = 80;


// Calculate the maximum number of plants that can fit in the garden (capacity)
const maxPlants = (area / plantArea);
console.log(`The maximun number of plants that can fit in the garden: ${maxPlants}`);

function plantsGrow(plants){
   if (plants > 78){
      console.log("Pruned, stop them from exceeding the capacity of the garden");
   }

   if (plants > 44){
      console.log("Monitored,they are growing at an acceptable rate. ");
   }

   if (plants < 44){
      console.log("Planted, there is room to plant more plants.");
   }
}

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

   // The amount of additional space that would be required if the scientists were to start 
   // with 100 plants, and did not prune them for 10 weeks. 
   
   console.log("the additional space required starting 100 plants");
   console.log(`and did not prune them for 10 weeks: 40,960`);

   try{
      if (100 < 98) {
         console.log("the amount of space can hold the provided number of plants")
      }
      else{
         throw error;
      }
   }
   catch (error){
      console.log("number of plants exceeds the amount of space available")
   }

}
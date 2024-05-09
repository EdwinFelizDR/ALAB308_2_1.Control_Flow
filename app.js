
// Calculate the current number of plants after the specified number of weeks
const plantweek1 = 20;
const plantweek2 = 40;
const plantweek3 = 80;
const maxofplants = 98;
const scientistsPlants=100;
const areaCircle = 3.1415 * 5 * 5;

 
function plantsGrow(plants){
   if (plants > 78){
      console.log("Pruned, stop them from exceeding the capacity of the garden");
   }

   if (plants > 44 && plants < 78){
      console.log("Monitored,they are growing at an acceptable rate. ");
   }

   if (plants < 44){
      console.log("Planted, there is room to plant more.");
   }

}
   console.log("Week 1: ");
   plantsGrow(plantweek1);
   console.log("Week 2: ");
   plantsGrow(plantweek2);
   console.log("Week 3: ");
   plantsGrow(plantweek3);

   // The amount of additional space that would be required if the scientists were to start 
   // with 100 plants, and did not prune them for 10 weeks. 
   
   console.log(`the additional space required starting 100 plants and did not prune them for 10 weeks: 40,960 meters`);


   try{
      if (scientistsPlants < 98) {
         console.log("the amount of space can hold the provided number of plants")
      }
      else{
         throw error;
      }
   }
   catch (error){
      console.log("number of plants exceeds the amount of space available")
   }


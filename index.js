function bumpCounter(){
  let counter=0;
  // return (()=>{
    const addBump = ()=>counter++;
    const getBumps = ()=>counter;
    return {addBump,getBumps};
  // })();
}

function createAnimal(animalType){
  return(deadlyDevice)=>(
    {
      'animalType': animalType,
      'deadlyDevice': deadlyDevice
    }
  );
}

const sharkCreator = createAnimal("Shark");
const sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
const sharkWithFrickinCannon = sharkCreator("Cannon");

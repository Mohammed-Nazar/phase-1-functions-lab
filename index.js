function distanceFromHqInBlocks(pickUpLocation){
    const ScuberHeadquartersPlace = 42;
    return pickUpLocation > ScuberHeadquartersPlace? pickUpLocation - ScuberHeadquartersPlace : ScuberHeadquartersPlace - pickUpLocation;
}

function distanceFromHqInFeet(pickUpLocation){
    const numOfBlocks = distanceFromHqInBlocks(pickUpLocation);
    return numOfBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    return start > destination? (start - destination) * 264: (destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet < 400) return 0;
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) return (distanceInFeet - 400)* 0.02;
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) return 25;
    else if (distanceInFeet > 2500) return 'cannot travel that far';
  }
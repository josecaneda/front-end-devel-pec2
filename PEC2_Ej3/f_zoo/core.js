const data = require('./data');
const prices = data.prices;
const hours = data.hours;
const animals = data.animals;
const employees = data.employees;

function entryCalculator(entrants) {
  // your code here
  if (!entrants) return 0;
  
  const initialValue = 0;
  return Object.entries(entrants).reduce(
    (previousValue, [type, amount]) => previousValue + data.prices[type] * amount,
    initialValue
  );
  
}

function schedule(dayName) {
  // your code here

  const convert24HourToAmPM = (hour) => {
    return hour < 12 ? `${hour}am` : `${hour - 12}pm`;
  };

  let resultArray = Object.entries(hours).map( ([weekday, schedule]) => {
    if (schedule.open === schedule.close) return [weekday, `CLOSED`];
    return [weekday, `Open from ${convert24HourToAmPM(schedule.open)} until ${convert24HourToAmPM(schedule.close)}`];
  });
  
  if (dayName) resultArray = resultArray.filter( ([weekday, schedule]) => weekday === dayName);

  return Object.fromEntries(resultArray);
}

function animalCount(species) {
  // your code here
  const animalCountResult = animals.reduce( (totalAnimals, {name, residents}) => {
      totalAnimals[name] = residents.length;
      return totalAnimals;
    }
    , {});

    return species ? animalCountResult[species] : animalCountResult;

}

function animalMap(options) {
  // your code here
  const initialValue = { NE: [], NW: [], SE: [], SW: [] };
  return animals.reduce( (totalLocations, {name, location}) => {
    totalLocations[location] = [...totalLocations[location], name];
    return totalLocations;
  }, initialValue);

}

function animalPopularity(rating) {
  // your code here
  const animalPopularityResult = animals.reduce( (acc, {name, popularity}) => {
    try {
      acc[popularity] = [...acc[popularity], name];
    } catch (error) {
      acc[popularity] = [name];
    }
    return acc;
  }, {});

  return rating ? animalPopularityResult[rating] : animalPopularityResult;
}

function animalsByIds(ids) {
  // your code here
  return animals.filter( ({id}) => {
    if (ids) return ids.includes(id);
  });
}

function animalByName(animalName) {
  // your code here
  if (!animalName) return {};
  return animals.reduce( (searchedAnimal, {name, residents}) => {
    const animalData = residents.filter( resident => animalName === resident.name )[0];
    if (animalData) {
      const animalSpecie = { species: name};
      return Object.assign(animalData, animalSpecie);
    }
  }, {});
}

function employeesByIds(ids) {
  // your code here
  return employees.filter( ({id}) => {
    if (ids) return ids.includes(id);
  });
}

function employeeByName(employeeName) {
  // your code here
  if (!employeeName) return {};
  return employees.filter( ({firstName, lastName}) => firstName === employeeName || lastName === employeeName )[0];
}

function managersForEmployee(idOrName) {
  // your code here

  function employeesByIds(ids) {
    // your code here
    return employees.filter( ({id}) => {
      if (ids) return ids.includes(id);
    });
  }

  let employee = employees.filter( ({id, firstName, lastName}) => [id, firstName, lastName].includes(idOrName) )[0];
  const managers = employee.managers.map( (id) =>  {
    manager = employeesByIds(id)[0];
    return `${manager.firstName} ${manager.lastName}`;
  });
  employee.managers = managers;
  return employee;
}

function employeeCoverage(idOrName) {
  // your code here

  function animalsByIds(ids) {
    // your code here
    return animals.filter( ({id}) => {
      if (ids) return ids.includes(id);
    });
  }

  function employeeByNameOrId(employeeNameOrId) {
    // your code here
    if (!employeeNameOrId) return {};
    const employee = employees.filter( ({firstName, lastName, id}) => firstName === employeeNameOrId || lastName === employeeNameOrId || id === employeeNameOrId)[0];
    return `${employee.firstName} ${employee.lastName}`;
  }

  const employeeCoverageResult =  employees.reduce( (acc, {firstName, lastName, responsibleFor}) => {
    acc[`${firstName} ${lastName}`] = animalsByIds(responsibleFor).map( ({id, name}) => name);
    return acc;
  }, {});
    if (idOrName) {
      let obj = {};
      obj[employeeByNameOrId(idOrName)] = employeeCoverageResult[employeeByNameOrId(idOrName)];
      return obj;
    }
    return employeeCoverageResult
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};

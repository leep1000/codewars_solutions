const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightsConverter = function (data) {
  const separateFlights = data.toLowerCase().split("+");
  console.log(separateFlights);
  for (let i = 0; i < separateFlights.length; i++) {
    let [status, fromLocation, toLocation, time] =
      separateFlights[i].split(";");
    if (status.includes("delayed") && status.includes("departure")) {
      console.log(
        `🔴 Delayed Departure from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(":", "h")})`
      );
    } else if (status.includes("delayed") && status.includes("arrival")) {
      console.log(
        `🔴 Delayed arrival from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(":", "h")})`
      );
    } else if (status.includes("arrival")) {
      console.log(
        `Arrival from ${fromLocation.slice(0, 3).toUpperCase()} to ${toLocation
          .slice(0, 3)
          .toUpperCase()} (${time.slice(0, 5).replace(":", "h")})`
      );
    } else if (status.includes("departure")) {
      console.log(
        `Departure from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(":", "h")})`
      );
    }
  }
};
flightsConverter(flights);

// Better solution
const flightsConverter2 = function (data) {
  const separateFlights = data.toLowerCase().split("+");
  for (const flight of separateFlights) {
    const [status, fromLocation, toLocation, time] = flight.split(";");
    const output = `${status.includes("delayed") ? `🔴 Delayed ` : ``}${
      status.includes("arrival") ? `Arrival` : `Departure`
    } from ${location3Letters(fromLocation)} to ${location3Letters(
      toLocation
    )} (${timeConverter(time)})`;
    console.log(output);
  }
};
flightsConverter2(flights);

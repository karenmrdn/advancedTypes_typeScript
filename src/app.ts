type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// We could make the same using interfaces
// interface ElevatedEmployee extends Admin, Employee {};

type ElevatedEmployee = Admin & Employee; // combination of types

const e1: ElevatedEmployee = {
  name: "Lara",
  privileges: ["priv1"],
  startDate: new Date(),
};
console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type that both of them have

const u1: Universal = 2;
console.log(u1);

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
  console.log("_________________________________");
}

printEmployeeInfo({ name: "Alex", privileges: ["anotherPriv"] });
printEmployeeInfo({ name: "Andrew", startDate: new Date() });

/* Example with classes */
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

/* Discriminated unions */
console.log("_________________________________");

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
  }
  console.log("Moving speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

/* Type casting */
console.log("_________________________________");

// const inputElement = document.querySelector("input"); // type: HTMLInputElement
// const inputElement = document.getElementById("userInput"); // type: HTMLElement

// const inputElement = <HTMLInputElement>document.getElementById("userInput")!;
// OR
const inputElement = document.getElementById("userInput")! as HTMLInputElement;

inputElement.value = "Hello World";

/* Index properties */
interface ErrorContainer {
  id: string; // we can only add some properties with the same type
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  id: "1",
  title: "Error occurred",
  message: "Something went wrong",
};
console.log(errorBag);
 
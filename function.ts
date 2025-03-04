/**
 * Typed Parameters
 * Type Return Values
 * Optional Parameters
 * Default Parameters Value
 * Rest Parameters
 * */

/**
 * Returns the sum of two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The sum of a and b.
 */
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, message: string = "Hi"): void {
  console.log(`Hello ${name}, ${message}`);
}

greet("Rahim");
greet("Rahim", "Where are you?");

enum Role {
  ADMIN,
  MANAGER,
  USER,
  GUEST,
}
const employees: {
  id: number;
  name: string;
  salary: number;
  isActive: boolean;
  role: Role;
}[] = [];

employees.push({
  id: 1,
  name: "Rahim",
  salary: 1000,
  isActive: true,
  role: Role.ADMIN,
});

employees.push({
  id: 2,
  name: "Karim",
  salary: 2000,
  isActive: true,
  role: Role.MANAGER,
});

function findById(id: number): {
  id: number;
  name: string;
  salary: number;
  isActive: boolean;
  role: Role;
} {
  const user = employees.find((employee) => employee.id === id);
  if (!user) {
    throw new Error("User not found");
  } else {
    return user;
  }
}

console.log(findById(1));

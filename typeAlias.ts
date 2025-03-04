// type Name = string;
type ID = string | number;

// function printId(id: ID) {
//   console.log(id);
// }

type User = {
  id: ID;
  firstName: string;
  lastName?: string;
  skills: [];
  address: {
    street: string;
    city: string;
    position: {
      x: number;
      y: number;
    };
  };
};

function createUser(firstName: string, lastName: string): User {
  //   return {
  //     id: crypto.randomUUID(),
  //     firstName,
  //     lastName,
  //     skills: [],
  //   };
  const user = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    skills: [],
  } as User;

  return user;
}

const user1 = createUser("Rahim", "Karim");

type Position = User["address"]["position"];
type Address = User["address"];

function printAddress(address: User["address"]) {}

const helloMessage = "Hello World";
console.log(message);

const user = {
  name: "Rahim",
  age: 25,
  isActive: true,
};

/**
 * Prints the given user object to the console.
 * @param inputUser The user object to be printed
 */
function printUser(inputUser: typeof user) {
  console.log(inputUser);
}

function validateForm(formData: {
  name: string;
  email: string;
  password: string;
  age: number;
}) {
  const { name, email, password, age } = formData;

  console.log(name, email, password, age);
}

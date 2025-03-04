function functionName<T>(arg: T): T {
  return arg;
}

// functionName<string>("Hello, world!"); // OK
// functionName<number>(42); // OK
// functionName<boolean>(true); // OK

// functionName<string>(42); // Error
// functionName<number>('Hello, world!'); // Error

function mergeObjects<T, U>(object1: T, object2: U): T & U {
  return { ...object1, ...object2 };
}

const mergedObject = mergeObjects({ id: 1, name: "John" }, { age: 25 });
// console.log(mergedObject); // { id: 1, name: 'John', age: 25 }

console.log(mergedObject);

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mappedArray = newArray.map<string>((item) => item.toString());
console.log(mappedArray);
// output: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

type MysteryBox<T> = {
  value: T;
};

const mysteryBox: MysteryBox<string> = {
  value: "Hello, world!",
};

type ApiResponse<T> = {
  status: number;
  message: string;
  data: T;
};

// async function fetchUser(): Promise<ApiResponse<User>> {
//   const response = fetch("https://api.example.com/users");
//   return await response.json();
// }

const fetchData = async (url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

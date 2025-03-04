type ID = string | number;

type Admin = {
  id: ID;
  role: "admin";
  fullAccess: boolean;
};

type Manager = {
  id: ID;
  role: "user";
};

type NewUser = Admin | Manager;

function doSomething(user: NewUser) {
  if (user.role === "admin") {
    console.log(`I Have full control `, user.fullAccess);
  }
}

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toLowerCase();
  } else {
    return value.toFixed(2);
  }
}

type ErrorResponse = {
  status: number;
  error: true;
  message: string;
};

type SuccessResponse = {
  error: false;
  data: string;
};

type APIResponse = ErrorResponse | SuccessResponse;

function handleAPIResponse(response: APIResponse) {
  if (response.error) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}

// Intersection
type Person = {
  id: ID;
  name: string;
  age: number;
};

type Employee = Person & {
  companyId: string;
  department: string;
};

type Customer = Person & {
  customerId: string;
  orderValue: number;
};

const newUser: Customer = {
  id: "1",
  name: "John",
  age: 30,
  customerId: "123",
  orderValue: 1000,
};

type BaseProps = {
  id: string;
  className: string;
};

type ButtonProps = BaseProps & {
  label: string;
  onClick: () => void;
};

type InputProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

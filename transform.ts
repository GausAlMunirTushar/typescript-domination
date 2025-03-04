type CustomUser = {
  id: string;
  firstName: string;
  lastName?: string;
  age: number;
  score?: number;
};

type CustomUserKeys = keyof CustomUser;

type FilterCriteria = {
  [K in CustomUserKeys]?: CustomUser[K];
};

const criteria: FilterCriteria = {
  id: "1",
};

type FieldsToAggregate = CustomUserKeys[];

function processUsers(
  users: CustomUser[],
  criteria: FilterCriteria,
  FieldsToAggregate: FieldsToAggregate
) {}

const users = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    score: 100,
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    score: 200,
  },
];

const filteredUser = users.filter((user) => {
  return Object.entries(criteria).every(([key, value]) => {
    user[key as CustomUserKeys] === value;
  });
});

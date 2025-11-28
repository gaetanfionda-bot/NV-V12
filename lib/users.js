let users = [
  {
    id: "u1",
    email: "test@test.com",
    password: "1234",
    lastSpin: null // roulette future
  }
];

export function loginUser(email, password) {
  return users.find(u => u.email === email && u.password === password);
}

export function registerUser(user) {
  users.push(user);
}

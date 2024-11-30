const menuItems = [
  { href: "index.html", text: "Головна", meta: { requireAuth: false } },
  {
    href: "products/list.html",
    text: "Продукти",
    meta: { requireAuth: false },
  },
  {
    href: "users/list.html",
    text: "Користувачі",
    id: "users-link",
    meta: { requireAuth: true },
  },
  {
    href: "auth/login.html",
    text: "Вхід",
    id: "auth-link",
    meta: { requireAuth: false },
  },
  {
    href: "auth/signup.html",
    text: "Зареєструватися",
    id: "signup-link",
    meta: { requireAuth: false },
  },
];

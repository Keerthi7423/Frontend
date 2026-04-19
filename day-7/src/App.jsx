import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  const users = [
    { id: 1, name: "Keerthi", email: "keerthi@gmail.com" },
    { id: 2, name: "John", email: "john@gmail.com" },
    { id: 3, name: "Alice", email: "alice@gmail.com" }
  ];

  return (
    <div>
      <Header />

      <UserList users={users} />

      <Footer />
    </div>
  );
}

export default App;
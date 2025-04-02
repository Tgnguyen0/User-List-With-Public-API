/*import PostList from "./components/PostList";
function App() {0
return (
<div>
<h1>Ứng dụng Fetch API</h1>
<PostList />
</div>
);
}

export default App;*/

import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserProvider>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-4" style={{backgroundColor: "#34E0A1", color: "white"}}>
        Danh sách người dùng
        </h1>
        <UserList />
      </div>
    </UserProvider>
  );
}
export default App;
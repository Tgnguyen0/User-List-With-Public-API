import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import UserDetails from "./UserDetails";

const UserList = () => {
    const { users, loading } = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 3;
    
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser,indexOfLastUser);

    return (
        <div className="p-4" style={{width: "1000px"}}>
            <div>
                <input
                    type="text"
                    placeholder="Tìm kiếm ..."
                    className="border p-2 w-full mb-4 rounded-3 bg-white text-dark"
                    style={{width: "100%"}}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
            ) : (
                <div>
                    <ul className="d-flex justify-content-start" style={{listStyle: "none", margin: "0", padding:"2px"}}>
                        {currentUsers.map((user) => (
                            <motion.li
                                key={user.id}
                                className="card p-3 border rounded shadow cursor-pointer hover:bg-gray-100"
                                style={{backgroundColor: "#fef2cf", width: "33.3%", height: "250px", marginRight: "4px", marginLeft: "4px"}}
                                onClick={() => setSelectedUser(user)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div class="card-body">
                                    <h4 className="font-bold">{user.name}</h4>
                                    <p class="card-text">Email: {user.email}</p>
                                    <p class="card-text">City: {user.address.city}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Phân trang */}
                    <div className="d-flex justify-content-center m-4 space-x-2">
                        {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
                            (_, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-primary text-white" : ""}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        
            {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
    );
};

export default UserList;
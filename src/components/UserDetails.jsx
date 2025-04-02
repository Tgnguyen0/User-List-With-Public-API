import { motion } from "framer-motion";

const UserDetails = ({ user, onClose }) => {
    return (
    <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="bg-white p-6 rounded shadow-lg max-w-sm w-full p-4 d-flex justify-content-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
        >
            <div>
                <h2 className="text-lg font-bold text-blue-600">{user.name}</h2>

                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
                    Đóng
                </button>
            </div>

            <div style={{marginLeft: "auto"}}>
                <img src={`src/assets/${user.id}.jpg`} alt="Title" style={{width: "100%", height: "100%"}} />
            </div>
            
        </motion.div>
    </motion.div>
    );
};
export default UserDetails;
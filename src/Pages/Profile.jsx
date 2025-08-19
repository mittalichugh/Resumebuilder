import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const { uid } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // user details (name, email, uid, photoURL)
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">
        {user ? `Welcome, ${user.displayName || user.email}!` : "Loading..."}
      </h1>

      <button
        onClick={() => navigate("/Home")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Create Resume
      </button>
    </div>
  );
};

export default Profile;

import { Navigate } from "react-router-dom";

export default function ProtectRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ConfirmEmail() {
  const navigator = useNavigate();
  const { emailtoken } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Send a GET request to your server to verify the email token
    fetch(`http://localhost:5050/api/auth/confirm-email/${emailtoken}`)
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          setTimeout(() => {
            navigator("/api/auth/login");
          }, 3000);
        } else {
          setErrorMessage("Failed to verify email");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while verifying your email");
        setIsLoading(false);
      });
  }, [emailtoken]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      <h1>Email verified!</h1>
      <p>Your email has been successfully verified.</p>
      <p>You can now log in to your account.</p>
    </div>
  );
}
export default ConfirmEmail;

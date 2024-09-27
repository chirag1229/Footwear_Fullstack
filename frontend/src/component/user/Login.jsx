import React from 'react'
import { useNavigate } from 'react-router';


function Login() {
    const navigation = useNavigate();

    const gotoRegistration = () => { 
        navigation('/Registration'); 
    }

  return (
 
      <>
         <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                <h2 className="text-center mb-4">Login</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                    />
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                    Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                    Don't have an account? <span onClick={gotoRegistration}>Sign up</span>
                    </p>
                </div>
                </div>
            </div>
         </div>

      </>
  )
}

export default Login

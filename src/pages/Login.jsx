import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-base-300 p-5">
        <div className="card w-full max-w-md glass shadow-xl -mt-24">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered input"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered input"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-8">
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </div>

              <p className="mt-4">
                No account yet?{" "}
                <Link to="/signup" className="link link-info">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

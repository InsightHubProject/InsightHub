import React from 'react';
import Layout from '../components/Layout';

export default function Signup() {

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-base-300 p-5">
        <div className="card w-full max-w-md bg-base-100 shadow-xl -mt-24">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-6">New Account</h1>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="input input-bordered input"
                  required
                />
              </div>

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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  className="input input-bordered input"
                  required
                />
              </div>

              <div className="form-control mt-8">
                <button type="submit" className="btn btn-warning">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

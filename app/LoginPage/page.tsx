import React from 'react'

const LoginPage = () => {
  return (
    <div className="container m-auto">
      <div className="container flex flex-col p-20 shadow rounded-xl">
        <h1 className="text-4xl mb-5">Log in</h1>
        <div className="flex flex-col mb-5">
          <h3>Email address</h3>
          <input
            type="text"
            className="border focus:outline-none focus:border focus:border-emerald-600 p-2"
          />
        </div>
        <div className="flex flex-col mb-5">
          <h3>Password</h3>
          <input
            type="password"
            className="border focus:outline-none focus:border focus:border-emerald-600 p-2"
          />
        </div>
        <button className="m-auto bg-emerald-600 w-full rounded-md p-3 text-white font-semibold shadow-sm shadow-slate-500 hover:shadow-none mb-5">Log in</button>
        <p className="text-emerald-600 m-auto font-semibold mb-10">Forgot your password?</p>
      </div>
    </div>
  )
}

export default LoginPage
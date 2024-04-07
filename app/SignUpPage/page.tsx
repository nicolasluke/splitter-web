import React from 'react'

const SignUpPage = () => {
  return (
    <div className="container flex m-auto justify-around max-w-screen-sm h-64">
      <div className="flex-1/3 text-6xl">IMAGE</div>
      <div className="flex-2/3">
        <h5 className="text-md text-gray-400 font-semibold mb-4">INTRODUCE YOURSELF</h5>
        <h2 className="text-2xl">Hi there! My name is</h2>
        <input
          type="text"
          className="w-full border border-gray-400 rounded-md h-12 text-2xl outline-none focus:border-blue-300 p-2 mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <button className="p-3 bg-orange-500 rounded-md text-white hover:bg-orange-600">Sign me up!</button>
          <span className="mx-2 text-xs text-gray-400">or</span>
          <button className="text-sm border border-gray-200 rounded-md p-1">Sign up with Google</button>
        </div>
        <div>
          <p className="text-xs">By signing up, you accept the Splitter Terms of Service.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
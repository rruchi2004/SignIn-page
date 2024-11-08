<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Create Account
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet"/>
  <style>
   body {
            font-family: 'Roboto', sans-serif;
            background-color: #f9f871;
        }
  </style>
 </head>
 <body class="flex items-center justify-center min-h-screen">
  <div id="root"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script type="text/babel">
    const App = () => (
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden" style={{ width: '900px', height: '500px' }}>
        <div className="flex-1 bg-yellow-200 flex items-center justify-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/KNeaeTNrairM2kz5gnfEjS8R6gxEAYcyVfQaFXvzDTLeejv7E.jpg"
            alt="Illustration of a person working on a laptop at a desk with a plant and clock in the background"
            width="400"
            height="500"
          />
        </div>
        <div className="flex-1 p-10">
          <div className="flex items-center mb-6">
            <img
              src="https://storage.googleapis.com/a1aa/image/sd158auQ7w7zG1orM7dmwpcqDtke7fGOUwTQm9VnC0tgUednA.jpg"
              alt="Edumeet logo"
              width="30"
              height="30"
              className="mr-2"
            />
            <span className="text-2xl font-bold text-yellow-600">Edumeet</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Create account</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-3 rounded-lg font-bold hover:bg-yellow-600"
            >
              Create account
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">or sign up with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              <i className="fab fa-google text-xl text-yellow-500"></i>
            </button>
            <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              <i className="fab fa-facebook-f text-xl text-yellow-500"></i>
            </button>
            <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              <i className="fab fa-linkedin-in text-xl text-yellow-500"></i>
            </button>
            <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              <i className="fab fa-firefox text-xl text-yellow-500"></i>
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            By creating an account you agree to Edumeet's
            <a href="#" className="text-yellow-500"> Terms of Services </a>
            and
            <a href="#" className="text-yellow-500"> Privacy Policy </a>.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Have an account?
            <a href="#" className="text-yellow-500"> Log in </a>
          </p>
        </div>
      </div>
    );

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
 </body>
</html>

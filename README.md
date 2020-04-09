# todoFrontend

# Setup instructions
  Run the following commands to setup the project

  * `yarn install`

  * Create a file named `.env` on root directory and append it with the following
    * TODO_API_BASEURL=http://localhost:3000/api/v1/

  * `cd ios`
  * `pod install`

# To run the project, `cd` to in root directory, run
  # start metro bundler
    * react-native start

  # For ios, open simulator say Iphone X and run
    * react-native run ios --simulator="IPhone X"

  # For android, open emaulator and run
    * react-native run-android

# To run tests run
  * `yarn test`
    # Test is written using jest, for main the most top app component to check whether this component renders correctly or not. Wrote test for this component because all other components are being rendered inside this component

# General flow
  # Make sure api is running on localhost:3000
  # The project fetches the todos on start, api return last three todos.

  # Creation of a todo
    * Clicking the + button opens up a form, on clicking the save button todo is saved.

  # Deleting a todo
    * Long pressing a todo deletes the todo

  # Completing a todo
    * Click on check box completes the todo


# Assumptions
  # As it was written in the requirements to keep it simple no error handling or activity indicators are used.
  # Only the fetch and create actions are written assuming the other actions could be written in same way

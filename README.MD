### React Native Project Example

This repository contains a sample React Native project utilizing the Propaga SDK. Follow these steps to get started:

#### Setup

1. **Clone the Repository:** 
   ```
   git clone <repository-url>
   ```

2. **Environment Setup:**
   - Copy `.env.example` to `.env`.
   - Add your Propaga token and user ID in the `.env` file.

3. **Install Dependencies:**
   - For the first-time setup, install dependencies in the `ios` and `android` folders.
     ```
     cd ios && pod install && cd ..
     cd android && ./gradlew clean && cd ..
     ```

#### Running the Project

Once the setup is complete, run the project using the following commands:

- For iOS:
  ```
  yarn ios
  ```

- For Android:
  ```
  yarn android
  ```

### Notes
- Ensure you have the necessary tools and packages installed to run a React Native project.
- For any issues or additional information about the Propaga SDK, refer to their official documentation.

Feel free to contribute, report issues, or suggest improvements by creating a pull request or raising an issue in this repository. Your contributions are welcomed and appreciated!


Happy coding :rocket: 
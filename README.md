# Password Generator

A simple and customizable password generator implemented with HTML, CSS, and JavaScript. Users can specify the types of characters to include and the length of the generated password.

## Features

- **Character Types**: Choose from uppercase letters, lowercase letters, numbers, and symbols.
- **Password Length**: Set the length of the generated password (between 4 and 10 characters).
- **Copy to Clipboard**: Easily copy the generated password to your clipboard.

## Demo

You can view a live demo of the Password Generator [here](#).

## Getting Started

To run the Password Generator locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ravelSilva/PasswordGenerated.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd password-generator
    ```

3. **Open `index.html` in your preferred web browser.**

## File Structure

- `index.html`: The HTML file that structures the web page.
- `style.css`: The CSS file for styling the Password Generator.
- `script.js`: The JavaScript file that contains the logic for generating passwords.

## Usage

1. **Select Character Types**:
   - Check the boxes for the types of characters you want to include (uppercase, lowercase, numbers, symbols).

2. **Set Password Length**:
   - Enter a number between 4 and 10 in the input field for password length.

3. **Generate Password**:
   - Click the "Generate" button to create a password based on your selected options.

4. **Copy Password**:
   - Click the "Copy" button to copy the generated password to your clipboard.

## JavaScript Functions

- `getCharTypes()`: Returns an array of character types based on selected checkboxes.
- `randomCharTypes(charTypes)`: Returns a random character from the given `charTypes` array.
- `getPasswordSize()`: Returns the password length from the input field, or shows an alert if the input is invalid.
- `generatePassword(size, charTypes)`: Generates a password of the specified size using the provided character types.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests to improve this project. Contributions are welcome!

## Contact

For any questions or feedback, please reach out to [contatoravelsilva@gmail.com](mailto:contatoravelsilva@gmail.com).


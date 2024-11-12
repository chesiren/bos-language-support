# BOS Language Support Extension

The **BOS Language Support Extension** provides syntax highlighting, validation, and diagnostics for `.bos` files used in **Beyond All Reason**.

## Features

- **Syntax Highlighting**: Highlights `.bos` syntax to improve code readability.
- **Real-Time Validation**: Automatically checks for syntax errors and provides detailed feedback while you type.
- **Workspace File Watcher**: Monitors all `.bos` files within your workspace and validates them on-the-fly.
- **File icons**: Adds custom file icons for `.bos` and `.cob` files to make them prettier in your sidebar.

## Installation

1. Install the extension from the VSCode Marketplace (or manually install it from a `.vsix` file).
2. Open any folder containing `.bos` files, and the extension will automatically start validating them.
3. Errors will be displayed in the **Problems** panel, and tooltips will appear when you hover over problematic code.

## Usage

- Open any `.bos` file in your project, and the extension will automatically provide:
  - **Syntax highlighting**
  - **Real-time diagnostics**
- Check the **Problems** panel in VSCode to view any parsing or lexer errors with detailed descriptions and locations.
- Fix errors by following the suggestions provided by the extension.

## Roadmap

- Load files that are included in the `.bos` by `#include`.
- Improve the grammar file to handle multiline `#define`.
- Add support for auto-completion of `.bos` keywords and functions.
- Implement refactoring tools for `.bos` files.
- Add more custom error messages that are more meaningful than the default ones.
- Add syntax highlighting for constant throughout the file.

## Contributing

If you encounter bugs or want to contribute to the extension, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/chesiren/bos-language-support).
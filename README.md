# VS Code Accessibility Assistant

> Assist developers in authoring accessible UI by surfacing ARIA patterns, POUR principles, and accessibility checks.

## Features

- Insert ARIA pattern snippets with guidance
- Commands for accessible button, dialog, form field, menu, and disclosure
- Quick fixes for common accessibility mistakes (coming soon)
- Auditor to scan code for accessibility issues (coming soon)

## Getting Started

1. Install Node LTS
2. Clone this repo
3. Run `npm install`
4. Press F5 in VS Code to launch the extension in a dev window

## Available Commands & Snippets

Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:

- **Insert ARIA Button Snippet**
  - `<button aria-pressed="false" aria-label="Toggle">Toggle</button>`
  - Accessible toggle button with ARIA attributes

- **Insert ARIA Dialog Snippet**
  - Accessible modal dialog pattern with ARIA roles, labels, and description linkage

- **Insert ARIA Form Field Snippet**
  - `<label for="username" id="usernameLabel">Username</label>`
  - `<input id="username" aria-labelledby="usernameLabel" aria-describedby="usernameDesc" />`
  - `<div id="usernameDesc">Enter your username.</div>`
  - Accessible form field with label and description linkage

- **Insert ARIA Menu Snippet**
  - Accessible menu pattern with ARIA roles and labels

- **Insert ARIA Disclosure Snippet**
  - Accessible disclosure (accordion) pattern with ARIA attributes

## Accessibility Principles

This extension helps you follow ARIA and POUR (Perceivable, Operable, Understandable, Robust) principles for accessible web UI.

## Documentation

- See `docs/` for design decisions, roadmap, and ADRs
- See `CHANGELOG.md` for release history
- See `CONTRIBUTING.md` for contribution guidelines

## License

MIT

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

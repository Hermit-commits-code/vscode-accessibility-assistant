# VS Code Accessibility Assistant

> Personal resume project focused on accessibility best practices (ARIA + POUR), built as a Visual Studio Code extension.

## Features (MVP)

- Hover/help docs for common components (buttons, dialogs, menus, form fields)
- Quick fixes for common mistakes (e.g., missing aria-label on icons, incorrect role)
- Auditor: scans active editor text and highlights likely accessibility issues

## Getting Started

1. Install Node LTS
2. Clone this repo
3. Run `npm install`
4. Press F5 in VS Code to launch the extension in a dev window

## Available Commands & Snippets

Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:

- **Insert ARIA Button Snippet**
  - Accessible toggle button with ARIA attributes
- **Insert ARIA Dialog Snippet**
  - Accessible modal dialog pattern with ARIA roles, labels, and description linkage
- **Insert ARIA Form Field Snippet**
  - `<label for="username" id="usernameLabel">Username</label>`
  - `<input id="username" aria-labelledby="usernameLabel" aria-describedby="usernameDesc" />`
  - Accessible form field with label and description linkage
- **Insert ARIA Menu Snippet**
  - Accessible menu pattern with ARIA roles and labels
- **Insert ARIA Disclosure Snippet**
  - Accessible disclosure (accordion) pattern with ARIA attributes
- **Quick Fixes**
  - Detects and suggests fixes for missing aria-labels, incorrect roles, and other common accessibility mistakes
- **Auditor**
  - Scans the active editor for accessibility issues and highlights likely problems

## Accessibility Principles

This extension helps you follow ARIA and POUR (Perceivable, Operable, Understandable, Robust) principles for accessible web UI.

## Documentation

- See `docs/` for design decisions, roadmap, and ADRs
- See `CHANGELOG.md` for release history
- See `CONTRIBUTING.md` for contribution guidelines

## License

MIT

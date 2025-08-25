# Contributing Guide

Thank you for your interest! This project follows these conventions:

- **Branching:**
  - `main` is protected.
  - Feature branches: `feat/<topic>`
  - Fix branches: `fix/<topic>`
  - Docs/Chore/Test: `docs/<topic>`, `chore/<topic>`, `test/<topic>`

- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/).
  - Example: `feat(snippets): add button aria-pressed example`

- **Pull Requests:**
  - One logical change per PR
  - Title must follow Conventional Commit format
  - Include docs/tests if applicable
  - Use PR checklist

- **Snippets & Commands:**
  - Add new ARIA patterns as both snippets and commands
  - Update documentation and tests for new features

- **Documentation:**
  - Major decisions are recorded as ADRs in `docs/adr/`
  - Follow semantic versioning and Keep a Changelog style

- **Code Style:** TypeScript + ESLint + Prettier

## Development Setup

- Node LTS required
- Clone repo
- Run `npm install`

## Questions?

Open an issue!

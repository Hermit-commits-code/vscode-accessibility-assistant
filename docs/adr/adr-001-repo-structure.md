# ADR-001: Initial Repository Structure

- Date: 2025-08-25
- Status: Accepted

## Context

We need a clear, maintainable structure for the VS Code Accessibility Assistant extension, supporting documentation, tests, and future features.

## Decision

Adopt the planned repo structure:

- `src/` for extension code
- `test/` for tests
- `docs/` for documentation
- `.github/` for templates and workflows
- Root files for config and metadata

## Consequences

- Easier onboarding and navigation
- Supports best practices for open source projects

## Alternatives Considered

- Keeping Yeoman-generated subfolder (rejected for clarity)
- Flat structure without subfolders (rejected for scalability)

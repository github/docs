# Contributing to gh-secure

Thank you for your interest in contributing to this project! We welcome contributions of all kinds: bug reports, feature requests, documentation improvements, and code changes.

## Getting Started

1. Fork the repository and clone your fork locally.
2. Ensure you have the [GitHub CLI](https://cli.github.com) (`gh`) installed and authenticated.
3. The extension is a single Bash script (`gh-secure`), so no build step is required.

## Making Changes

1. Create a new branch for your changes: `git checkout -b my-feature`
2. Make your changes and test them locally by running `./gh-secure` from the repo root.
3. Ensure your changes work with both `--yes` and interactive (step-by-step) modes.
4. Test with `--dry-run` to verify no unintended side effects.
5. Commit your changes with clear, descriptive commit messages.
6. Push to your fork and open a Pull Request against the `main` branch.

## Coding Conventions

- Follow [Google Shell Style Guide](https://google.github.io/styleguide/shellguide.html) conventions.
- Use meaningful variable names and add comments for non-obvious logic.
- Keep functions focused and well-named.
- Test edge cases (missing permissions, private repos, already-enabled features).

## Reporting Bugs

**Please do NOT open a public GitHub issue for security vulnerabilities.** Instead, please follow the instructions in [SECURITY.md](./SECURITY.md).

For all other bugs, please open an issue on GitHub with:
- A clear description of the problem.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Environment details (OS, `gh` version, shell).

## Suggesting Features

Open an issue describing:
- The use case or problem you'd like to solve.
- Your proposed approach (if you have one).
- Any alternatives you've considered.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

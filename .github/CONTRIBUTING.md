# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:.

**📖 For comprehensive contribution guidance, please visit our official documentation at [docs.github.com/en/contributing](https://docs.github.com/en/contributing). This is our canonical source for all contribution processes and policies.**

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

This guide provides repository-specific information to supplement the official contribution documentation. For detailed processes, policies, and best practices, always refer to [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

Use the table of contents icon <img alt="Table of contents icon" src="/contributing/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

**Start here:** Visit [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for complete contributor onboarding and guidelines.

For repository-specific setup, read the [README](../README.md) file. The official docs site also provides these helpful resources:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/git-basics/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

📚 **Primary resource:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing) contains our complete contribution workflow and policies.

For repository-specific information:
- See [the introduction to working in the docs repository](/contributing/README.md) :confetti_ball:
- Check our [types of contributions](/contributing/types-of-contributions.md) we accept
- Review our markdown style guidelines in the `/contributing` directory

### Issues

**For detailed issue guidelines, see [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific notes:
- Search [existing issues](https://github.com/github/docs/issues) before creating new ones
- Use our [label reference](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference) to categorize appropriately
- Follow the issue templates provided in this repository

### Make Changes

**Complete change guidelines are available at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific options:

**Make changes in the UI:** Click **Make a contribution** at the bottom of any docs page for small changes like typos or broken links.

<img src="/contributing/images/contribution_cta.png" />

**Make changes in a codespace:** See "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)" for documentation-specific setup.

**Make changes locally:** 
1. Fork the repository (see [official forking guide](https://docs.github.com/en/contributing))
2. Install Node.js at the version specified in `.node-version` (see [development guide](../contributing/development.md))
3. Create a working branch and start with your changes

### Commit your update

Follow the guidelines at [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for commit best practices. 

Use our "[Self review checklist](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist)" before committing.

### Pull Request

**Complete PR guidelines:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing)

**Repository-specific notes:**
- Fill the "Ready for review" template
- [Link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if applicable
- Enable [maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)

A Docs team member will review following our [standard review process](https://docs.github.com/en/contributing).

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:.

Once merged, your contributions will be visible on [GitHub docs](https://docs.github.com/en). 

Continue contributing using our [types of contributions guide](/contributing/types-of-contributions.md) or explore more opportunities at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows

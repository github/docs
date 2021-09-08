## Welcome to GitHub docs contributing guide

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Coduct](https://github.com/github/docs-internal/blob/main/CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of the this document to get to a specific section of this guide quickly.

## New contributor guide

  See [README.md](README.md) to get an overview of the project. Here are some helpful resources to get you comfortable with open source contribution. 

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
  

## Getting started

See [working in docs repository](/contributing/working-in-docs-repository.md) to navigate our codebase with confidence :confetti_ball:. See [GitHub Markdown](contributing/content-markup-reference.md) for information on how we write our markdown files.

Before making changes, see what [types contributions](/contributing/types-of-contributions.md) we accept. Some of them don't require writing even a single line of code :sparkles:. 

### Issues
#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information.

#### Create a new issue

If you spot a problem with the docs and a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose).

### Make Changes

#### Make changes in the UI

You can make simple changes such as a typo, sentence fix, broken link in the UI. Use **Make a contribution**
 at the bottom of any docs page to navigate directly to the `.md` file. Make your changes and [create a PR](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes locally

[Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

Forking repository
- GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

- GitHub Codespaces:
  - [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

Install/Update your to **Node.js v16**. For more information, see "[contributing/development.md](contributing/development.md)."

Create a working branch and start with your changes!

### Commit your update:

Commit the changes once you are happy with them. Here are some commonly used short and fun commit messages.

  - :pencil2: `:pencil2:` fix typos
  - :memo: `:memo:` add or update documentation
  - :chains: `:chains:` for fixing links
  - :bug: `:bug:` for bug fix
 (Cant think of more, any ideas?)

Once you are ready with your changes, don't forget to [self review](/contributing/self-review.md), to quicken the review process :zap:.

### Pull Request

- When you're done making the changes, open a PR (pull request). 
- Fill out the "Ready for review" template so we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
  <!-- (This will change with the new workflow https://github.com/github/docs-team/issues/813 ) -->
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
- Once you submit your PR, one of the writers would review your proposal. Keep an eye for any questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The whole GitHub community thanks you :sparkles:. 

Once your PR is merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/github/docs/graphs/contributors). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
1. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
1. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
1. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
    - Shorten the path by cloning this repo directly into `C:\`
    - Use a different Git client on Windows
    - Update Git configuration: `git config --system core.longpaths true`

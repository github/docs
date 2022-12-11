## Contributing

[fork]: https://github.com/actions/download-artifact/fork
[pr]: https://github.com/actions/download-artifact/compare
[style]: https://github.com/styleguide/js
[code-of-conduct]: CODE_OF_CONDUCT.md

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.

## Found a bug?

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/actions/download-artifact/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/actions/download-artifact/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or a **reproducable test case** demonstrating the expected behavior that is not occurring.
- If possible, use the relevant bug report templates to create the issue.

## What should I know before submitting a pull request or issue

The code related to `download-artifact` is split between this repository and [actions/toolkit](https://github.com/actions/toolkit) where the `@actions/artifact` npm package is housed. The npm package contains the core functionality to interact with artifacts. Any extra functionality on top of interacting with the apis such as search is inside this repository.
Artifact related issues will be tracked in this repository so please do not open duplicate issues in `actions/toolkit`.

## Submitting a pull request

1. [Fork][fork] and clone the repository
2. Configure and install the dependencies: `npm install`
3. Make sure the tests pass on your machine: `npm run test`
4. Create a new branch: `git checkout -b my-branch-name`
5. Make your change, add tests, and make sure the tests still pass
6. Make sure your code is correctly formatted: `npm run format`
7. Make sure your code passes linting: `npm run lint`
8. Update `dist/index.js` using `npm run release`. This creates a single javascript file that is used as an entry-point for the action
7. Push to your fork and [submit a pull request][pr]
8. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Write tests.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

Thanks! :heart: :heart: :heart:

GitHub Actions Team :octocat:

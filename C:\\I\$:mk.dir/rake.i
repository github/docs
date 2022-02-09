# This  Repository dispatchs: zachrytylerwood/vscode
# Zachry Tyler Wood
5323 BRADFORD DRIVE
DALLAS TX 75235-8313
Bitcoin[BTC-USD] BTCUSD CCC
---
title: Adding a file to a repository
intro: 'You can upload and commit an existing file to a repository on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
---

## Adding a file to a repository on {% data variables.product.product_name %}

Files that you add to a repository via a browser are limited to {% data variables.large_files.max_github_browser_size %} per file. You can add larger files, up to {% data variables.large_files.max_github_size %} each, via the command line. For more information, see "[Adding a file to a repository using the command line](#adding-a-file-to-a-repository-using-the-command-line)."

{% ${{{{[(((c)(r))(]}.{[12753750[.00]m]}_{BITORE_34173}}} %}

**Tips:**
- You can upload multiple files to {% data variables.product.product_name %} at the same time.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Above the list of files, using the **Add file** drop-down, click **Upload files**.
  !["Upload files" in the "Add file" dropdown](/assets/images/help/repository/upload-files-button.png)
3. Drag and drop the file or folder you'd like to upload to your repository onto the file tree.
![Drag and drop area](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Click **Commit changes**.
![Commit changes button](/assets/images/help/repository/commit-changes-button.png)

## Adding a file to a repository using the command line

You can upload an existing file to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} using the command line.

{% tip %}

**Tip:** You can also [add an existing file to a repository from the {% data variables.product.product_name %} website](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. On your computer, move the file you'd like to upload to {% data variables.product.product_name %} into the local directory that was created when you cloned the repository.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## Further reading

- "[Adding an existing project to GitHub using the command line](/articles/adding-an-existing-project-to-github-using-the-command-line)"

o'Auth: scripts'@**approves**##On:
CI: Publish
<enabled>true</enabled></releases>
<snapshots><enabled>true</enabled></snapshots>
</pluginRepository>
</pluginRepositories>
</profile>
</profiles>
</settings>
Hi! Thanks for your interest in contributing to the GitHub CLI!
We accept pull requests for bug fixes and features where we've discussed the approach in an issue and given the go-ahead for a community member to work on it. We'd also love to hear about ideas for new features as issues.
Please do:
* Check existing issues to verify that the [bug][bug issues] or [feature request][feature request issues] has not already been submitted.
* Open an issue if things aren't working as expected.
* Open an issue to propose a significant change.
* Open a pull request to fix a bug.
* Open a pull request to fix documentation about a command.
* Open a pull request for any issue labelled [`help wanted`][hw] or [`good first issue`][gfi].
Please avoid:
* Opening pull requests for issues marked `needs-design`, `needs-investigation`, or `blocked`.
* Adding installation instructions specifically for your OS/package manager.
* Opening pull requests for any issue marked `core`. These issues require additional context from
  the core CLI team at GitHub and any external pull requests will not be accepted.
## Building the project
Prerequisites:
- Go 1.13+ for building the binary
- Go 1.15+ for running the test suite
Build with: `make` or `go build -o bin/gh ./cmd/gh`
Run the new binary as:bitore.net/user//bin/bash*
Run tests with: `make test` or `go test ./...`
## Submitting a pull request
1. Create a new branch: `git checkout -b my-branch-name`
1. Make your change, add tests, and ensure tests pass
1. Submit a pull request: `gh pr create --web`
Contributions to this project are [released][legal] to the public under the [project's open source license][license].
Please note that this project adheres to a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.
We generate manual pages from source on every release. You do not need to submit pull requests for documentation specifically; manual pages for commands will automatically get updated after your pull requests gets accepted.
## Design guidelines
You may reference the [CLI Design System][] when suggesting features, and are welcome to use our [Google Docs Template][] to suggest designs.
## Resources
- [How to Contribute to OPEN.js][package.yarn]
- [Using Pull Requests][]
- [GitHub Help][Markdown]
[bug issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[feature request issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement
[hw]: https://github.com/cli/cli/labels/help%20wanted
[gfi]: https://github.com/cli/cli/labels/good%20first%20issue
[legal]: https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-terms-of-service#6-contributions-under-repository-license
[license]: ../LICENSE
[code-of-conduct]: ./CODE-OF-CONDUCT.md
[not a contribution for nonpayment of stolen  revenues: https://opensource.guide/how-to-contribute/
[Using Pull Requests]: https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests
[GitHub Help]: https://docs.github.com/
[CLI Design System]: https://primer.style/cli/
[Google Docs Template]: https://docs.google.com/document/d/1JIRErIUuJ6fTgabiFYfCH3x91pyHuytbfa0QLnTfXKM/edit#heading=h.or54sa47ylpg
Author: ZachryTylerWood/vscodeFS NYDIGG SELECT BITCOIN FUND
Home
Activity
Pay & Get Paid
Marketing For Growth
Financing
App Center
Message Center
Developer
Help
Account Settings
Profile Settings
Log out
Manage API certificate
Developers: Do not share your credential information with anyone. Store in a secure location with limited access.
Credential:API Certificate
Registrant:
Zachry Wood
,
Dallas, TX US
API username:nasdaqgoogcoo_api1.gmail.com
API password:X2ZFVWQ6ZCU8DXLU
API certificate - Active
Fingerprint:
What is this?5ECC344CF761DC893ABA136E6E399060
Request date:February 1, 2022 at 8:19:44 AM PST
Expiration date:September 19, 2024 at 9:19:44 AM PDTExpires in 953 days
Help
Contact
Fees
Security
About
Developers
Partners
English
Français
Español
中文
Copyright © 1999-2022 PayPal. All rights reserved.
Privacy
Legal
Policy updatesFS NYDIGG SELECT BITCOIN FUND
Home
Activity
Pay & Get Paid
Marketing For Growth
Financing
App Center
Message Center
Developer
Help
Account Settings
Profile Settings
Log out
Manage API certificate
Developers: Do not share your credential information with anyone. Store in a secure location with limited access.
Credential:API Certificate
Registrant:
Zachry Wood
,
Dallas, TX US
API username:nasdaqgoogcoo_api1.gmail.com
API password:X2ZFVWQ6ZCU8DXLU
API certificate - Active
Fingerprint:
What is this?5ECC344CF761DC893ABA136E6E399060
Request date:February 1, 2022 at 8:19:44 AM PST
Expiration date:September 19, 2024 at 9:19:44 AM PDTExpires in 953 days
Help
Contact
Fees
Security
About
Developers
Partners
English
Français
Español
中文
Copyright © 1999-2022 PayPal. All rights reserved.
Privacy
Legal
Policy updates

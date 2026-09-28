# GitHub Docs

> GitHub is a developer platform for building, shipping, and maintaining software. It provides cloud-based Git repository hosting, CI/CD via GitHub Actions, project management with Issues and Projects, code review via pull requests, AI-powered development with GitHub Copilot, and APIs (REST and GraphQL) for automation and integration.

## How to use

To retrieve full article content, page lists, or search results programmatically, please use the APIs below. To find a specific article, use the **Search API** with a query. To browse all available pages, use the **Page List API** to get a list of paths, then fetch individual articles with the **Article API**. The `/api/article/body` endpoint returns markdown, ideal for LLM consumption. These APIs return structured markdown and JSON and are the preferred way for LLMs and automated tools to access GitHub documentation.

* [Versions API](https://docs.github.com/api/pagelist/versions): Lists all available documentation versions.
* [Languages API](https://docs.github.com/api/pagelist/languages): Lists all available languages.
* [Page List API](https://docs.github.com/api/pagelist/en/free-pro-team@latest): Returns every docs page path for a given language and version.
* [Article API](https://docs.github.com/api/article): Returns the full rendered content and context of any docs page as JSON. Example: `curl "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/what-is-github"`
* [Article Body API](https://docs.github.com/api/article/body): Returns the full rendered content of any docs page as markdown. Example: `curl "https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/what-is-github"`
* [Search API](https://docs.github.com/api/search/v1): Search across all docs content. Example: `curl "https://docs.github.com/api/search/v1?query=actions&language=en&version=free-pro-team@latest"`
* [GitHub MCP server](https://github.com/github/github-mcp-server): For agents that connect via Model Context Protocol, the GitHub MCP server provides tools for working with GitHub itself: repositories, issues, pull requests, workflows, and code. It does not currently include docs search.

## Building with GitHub, for coding agents and automation

* [Extend Copilot Chat with MCP](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp): Connect MCP servers to Copilot Chat to share context from other applications.
* [Use the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server): Learn how to use the GitHub Model Context Protocol (MCP) server to interact with repositories, issues, pull requests, and other GitHub features, directly from Copilot Chat in your IDE.
* [Set up the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server): Learn how to configure the GitHub Model Context Protocol (MCP) server.
* [About cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent): Copilot can research a repository, create an implementation plan, and make code changes on a branch. You can review the diff, iterate, and create a pull request when you're ready.
* [Create custom agents in your IDE](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents-in-your-ide): You can create specialized agents with tailored expertise for specific development tasks.
* [GitHub CLI](https://docs.github.com/en/github-cli/github-cli): GitHub CLI is an open source tool for using GitHub from your computer's command line. When you're working from the command line, you can use the GitHub CLI to save time and avoid switching context.
* [Quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart): Start using GitHub CLI to work with GitHub in the command line.
* [REST API](https://docs.github.com/en/rest): Create integrations, retrieve data, and automate your workflows with the GitHub REST API.
* [GraphQL API](https://docs.github.com/en/graphql): To create integrations, retrieve data, and automate your workflows, use the GitHub GraphQL API. The GitHub GraphQL API offers more precise and flexible queries than the GitHub REST API.
* [GitHub Actions](https://docs.github.com/en/actions): Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.

## GitHub Copilot

> You can use GitHub Copilot to enhance your productivity and assist as you work on code.

* [GitHub Copilot](https://docs.github.com/en/copilot): You can use GitHub Copilot to enhance your productivity and assist as you work on code.
* [Individual plans](https://docs.github.com/en/copilot/concepts/billing/individual-plans): GitHub offers several Copilot plans for individual developers, each with different features, model access, and usage limits to support a wide range of coding needs.
* [Billing for individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals): Your Copilot plan includes a monthly allowance of GitHub AI Credits. If you exhaust your AI credits, you can pay extra to keep working.
* [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection): Automatically select the best model for each task.
* [Best practices](https://docs.github.com/en/copilot/get-started/best-practices): Learn how to get the most out of Copilot.
* [Features](https://docs.github.com/en/copilot/get-started/features): GitHub Copilot offers a suite of features for users and administrators.
* [Plans](https://docs.github.com/en/copilot/get-started/plans): Learn about the available plans for Copilot.
* [Quickstart](https://docs.github.com/en/copilot/get-started/quickstart): Quickly learn how to use GitHub Copilot.
* [What is GitHub Copilot?](https://docs.github.com/en/copilot/get-started/what-is-github-copilot): Learn what Copilot is and what you can do with it.
* [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli): Learn how to install Copilot CLI so that you can use Copilot directly from the command line.
* [Overview](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview): Learn how to use GitHub Copilot from the command line.
* [Get IDE code suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions): Use GitHub Copilot to get code suggestions in your editor.
* [Manage policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies): Find out how to change your personal settings on GitHub to configure GitHub Copilot's behavior.
* [Install Copilot extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension): To use Copilot in your preferred coding environment, follow the steps for your chosen IDE.
* [Use code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review): Learn how to request a code review from GitHub Copilot.
* [Supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models): Learn about the supported AI models in GitHub Copilot.
* [Models and pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing): See per-token pricing for the models available in GitHub Copilot and reference rates for additional usage across plans.
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat): Learn how to use GitHub Copilot Chat responsibly by understanding its purposes, capabilities, and limitations.

## Get started

> Learn how to start building, shipping, and maintaining software with GitHub. Explore our products, sign up for an account, and connect with the world's largest development community.

* [Get started](https://docs.github.com/en/get-started): Learn how to start building, shipping, and maintaining software with GitHub. Explore our products, sign up for an account, and connect with the world's largest development community.
* [About remote repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories): GitHub's collaborative approach to development depends on publishing commits from your local repository to GitHub for other people to view, fetch, and update.
* [Handle line endings](https://docs.github.com/en/get-started/git-basics/configuring-git-to-handle-line-endings): To avoid problems in your diffs, you can configure Git to properly handle line endings.
* [Ignoring files](https://docs.github.com/en/get-started/git-basics/ignoring-files): You can configure Git to ignore files you don't want to check in to GitHub.
* [Manage remote repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories): Learn to work with your local repositories on your computer and remote repositories hosted on GitHub.
* [Set up Git](https://docs.github.com/en/get-started/git-basics/set-up-git): At the heart of GitHub is an open-source version control system (VCS) called Git. Git is responsible for everything GitHub-related that happens locally on your computer.
* [GitHub's plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans): An overview of GitHub's pricing plans.
* [Types of GitHub accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts): Accounts on GitHub allow you to organize and control access to code.
* [Start your journey](https://docs.github.com/en/get-started/start-your-journey): Brand new to GitHub? Learn the basics here.
* [Create an account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github): Create a personal account to get started with GitHub.
* [Download files](https://docs.github.com/en/get-started/start-your-journey/downloading-files-from-github): Learn how to download files from GitHub, and understand the difference between downloading, cloning, and forking.
* [Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world): Follow this Hello World exercise to learn GitHub's pull request workflow.
* [What is GitHub?](https://docs.github.com/en/get-started/start-your-journey/what-is-github): GitHub is a platform that supports your entire software development process, from planning work to deploying and operating software.
* [Docs versions](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs): You can read documentation that reflects the GitHub product you're currently using.
* [GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile): Triage, collaborate, and manage your work on GitHub from your mobile device.
* [Basic formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax): Create sophisticated formatting for your prose and code on GitHub with simple syntax.

## Authentication

> Authenticate securely to GitHub with passwords, tokens, SSH keys, and more—and keep your account protected.

* [Connect with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh): You can connect to GitHub using the Secure Shell Protocol (SSH), which provides a secure channel over an unsecured network.
* [Add a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account): To configure your account on GitHub.com to use your new (or existing) SSH key, you'll also need to add the key to your account.
* [Check for existing SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys): Before you generate an SSH key, you can check to see if you have any existing SSH keys.
* [Generate new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent): After you've checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.
* [Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys): Learn different ways to manage SSH keys on your servers when you automate deployment scripts and which way is best for you.
* [Test your SSH connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection): After you've set up your SSH key and added it to GitHub, you can test your connection.
* [Authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github): You can securely access your account's resources by authenticating to GitHub, using different credentials depending on where you authenticate.
* [Manage personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens): You can use a personal access token in place of a password when authenticating to GitHub in the command line or with the API.
* [Sudo mode](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/sudo-mode): To confirm access to your account before you perform a potentially sensitive action, GitHub.com prompts for authentication.
* [Displaying verification for all commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits): You can enable vigilant mode for commit signature verification to mark all of your commits and tags with a signature verification status.
* [Configure 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication): You can choose among multiple options to add a second source of authentication to your account.
* [Configure 2FA recovery](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods): You can set up a variety of recovery methods to access your account if you lose your two-factor authentication credentials.
* [Recover an account with 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials): If you lose access to your two-factor authentication credentials, you can use your recovery codes, or another recovery option, to regain access to your account.

## Account and profile

> Make GitHub work best for you by customizing your personal account settings and personalizing your profile page.

* [Account and profile](https://docs.github.com/en/account-and-profile): Make GitHub work best for you by customizing your personal account settings and personalizing your profile page.
* [Username changes](https://docs.github.com/en/account-and-profile/concepts/username-changes): You can change the username for your GitHub account.
* [Account](https://docs.github.com/en/account-and-profile/get-started/account): Get started with your GitHub account.
* [How-tos](https://docs.github.com/en/account-and-profile/how-tos): Learn how to accomplish specific tasks for your GitHub account and profile.
* [Manage cookie preferences](https://docs.github.com/en/account-and-profile/how-tos/account-settings/manage-cookie-preferences): You can control how GitHub uses information from non-essential tracking cookies for enterprise marketing pages.
* [Troubleshoot missing contributions](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions): Learn common reasons that contributions may be missing from your contributions graph.
* [Primary email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/changing-your-primary-email-address): To change your primary email address, you'll add a new email, then delete the old one.
* [Set commit email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address): You can set the email address that is used to author commits on GitHub and on your computer.
* [Verify your email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address): Verifying your primary email address ensures strengthened security, allows GitHub staff to better assist you if you forget your password, and gives you access to more features on GitHub.
* [Email addresses](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference): Find information about your email addresses on GitHub, including verification, privacy, and commit attribution.
* [Personalize your profile](https://docs.github.com/en/account-and-profile/tutorials/personalize-your-profile): You can share information about yourself with other users by setting a profile picture and adding a bio to your profile.

## GitHub Pages

> GitHub Pages turns any GitHub repository into a live website—no separate hosting required.

* [GitHub Pages](https://docs.github.com/en/pages): GitHub Pages turns any GitHub repository into a live website—no separate hosting required.
* [Configure a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site): You can customize the domain name of your GitHub Pages site.
* [Custom domains in GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages): GitHub Pages supports using custom domains, or changing the root of your site's URL from the default, like octocat.github.io, to any domain you own.
* [Manage a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site): You can set up or update certain DNS records and your repository settings to point the default domain for your GitHub Pages site to a custom domain.
* [Configure publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): You can configure your GitHub Pages site to publish when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site.
* [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site): You can create a GitHub Pages site in a new or existing repository.
* [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages): You can use GitHub Pages to host a website about yourself, your organization, or your project directly from a repository on GitHub.
* [Quickstart](https://docs.github.com/en/pages/quickstart): You can use GitHub Pages to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website.
* [Add theme to Pages site](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll): You can personalize your Jekyll site by adding and customizing a theme.

## GitHub Actions

> Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.

* [Quickstart](https://docs.github.com/en/actions/get-started/quickstart): Try out the core features of GitHub Actions in minutes.
* [Understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions): Learn the basics of core concepts and essential terminology in GitHub Actions.
* [GitHub-hosted runners](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners): You can use GitHub's runners to execute your GitHub Actions workflows.
* [Workflow commands](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands): You can use workflow commands when running shell commands in a workflow or in an action's code.
* [Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax): A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.
* [Migrate from CircleCI](https://docs.github.com/en/actions/tutorials/migrate-to-github-actions/manual-migrations/migrate-from-circleci): GitHub Actions and CircleCI share several similarities in configuration, which makes migration to GitHub Actions relatively straightforward.

## Repositories

> Learn to use and manage the repositories that allow you to store and collaborate on your project's code.

* [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets): Rulesets help you to control how people can interact with branches and tags in a repository.
* [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository): When you create a repository on GitHub, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.
* [Quickstart for repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories): Learn how to create a new repository and commit your first change in 5 minutes.
* [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes): You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.
* [Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository): Public repositories on GitHub are often used to share open source software. For your repository to truly be open source, you'll need to license it so that others are free to use, change, and distribute the software.
* [About releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases): You can create a release to package software, along with release notes and links to binary files, for other people to use.

## Apps

> Go deeper with GitHub by integrating with our APIs and webhooks, customizing your GitHub workflow, and building and sharing apps with the community.

* [About creating apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps): GitHub Apps let you build integrations to automate processes and extend GitHub's functionality.
* [Authorizing OAuth apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps): You can connect your GitHub identity to third-party applications using OAuth. When authorizing an OAuth app, you should ensure you trust the application, review who it's developed by, and review the kinds of information the application wants to access.
* [Authorize](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps): You can authorize a GitHub App to retrieve information about your GitHub account and to make changes on your behalf.

## Organizations

> You can use organizations to collaborate with a large number of people across many projects at once, while managing access to your data and customizing settings.

* [OAuth app restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions): Organizations can choose which OAuth apps have access to their repositories and other resources by enabling OAuth app access restrictions.
* [Restrict OAuth apps](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization): Organization owners can enable OAuth app access restrictions to prevent untrusted apps from accessing the organization's resources while allowing organization members to use OAuth apps for their personal accounts.
* [Verify or approve a domain](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization): You can verify your ownership of domains with GitHub to confirm your organization's identity.

## Pull requests

> Discover how to create, review, and merge pull requests, resolve merge conflicts, and collaborate effectively on GitHub projects.

* [Fork a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo): Fork a repository on GitHub to propose changes, collaborate on projects, and manage your own copy of the codebase.
* [Branches](https://docs.github.com/en/pull-requests/reference/branches): Use branches in GitHub to isolate development work, manage default branches, and collaborate effectively using pull requests and branch protections.
* [Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests): Propose, review, and merge code changes using pull requests to collaborate effectively and maintain code quality.

## REST API

> Create integrations, retrieve data, and automate your workflows with the GitHub REST API.

* [Marketplace](https://docs.github.com/en/rest/apps/marketplace): Use the REST API to interact with GitHub Marketplace
* [Authenticating](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api): You can authenticate to the REST API to access more endpoints and have a higher rate limit.
* [Permissions for fine-grained PATs](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens): For each permission granted to a fine-grained personal access token, these are the REST API endpoints that the app can use.

## More pages

* [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions): Learn how usage of GitHub Actions is measured against your free allowance and how to pay for additional use.
* [Manage payment info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info): Learn how to view, modify, and remove your payment information and billing contacts using the new billing platform.
* [Actions queries](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-queries/actions-built-in-queries): Explore the queries that CodeQL uses to analyze code written in GitHub Actions workflow files when you select the default or the security-extended query suite.
* [Codespaces](https://docs.github.com/en/codespaces): Create a codespace to start developing in a secure, configurable, and dedicated development environment that works how and where you want it to.
* [Installation](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop): You can install GitHub Desktop on supported Windows or macOS operating systems.
* [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects): Projects is an adaptable, flexible tool for planning and tracking work on GitHub.
* [About GitHub Importer](https://docs.github.com/en/migrations/importing-source-code/using-github-importer/about-github-importer): If your source code is stored on another Git-based hosting service, you can move the code to GitHub.com using GitHub Importer.
* [Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry): You can store and manage Docker and OCI images in the Container registry.
* [Code search syntax](https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax): You can build search queries for the results you want with specialized code qualifiers, regular expressions, and boolean operations.

<!-- This file is automatically generated. Do not edit manually. -->

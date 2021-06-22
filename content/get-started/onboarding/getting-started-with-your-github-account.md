---
title: Getting started with your GitHub account
intro: 'With an account on {% data variables.product.prodname_dotcom %}, you can import or create repositories, collaborate with others, and connect with the {% data variables.product.prodname_dotcom %} community.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
## Part 1: Configuring your {% data variables.product.prodname_dotcom %} account

As the first steps in starting with {% data variables.product.product_name %}, you'll need to create an account, choose a product that fits your needs best, verify your email, set up two-factor authentication, and view your profile. 

There are several types of accounts on {% data variables.product.prodname_dotcom %}. Every person who uses {% data variables.product.product_location %} has their own user account, which can be part of multiple organizations and teams. Your user account is your identity on {% data variables.product.product_location %} and represents you as an individual.

### Creating an account
To sign up for a {% data variables.product.prodname_dotcom %} account, navigate to https://github.com/ and follow the prompts. 

To keep your {% data variables.product.prodname_dotcom %} account secure you should generate a strong and unique password with more than 16 characters using a password manager.

{% if currentVersion == 'free-pro-team@latest' or enterpriseServerVersions contains currentVersion %}
{% note %}

**Note**: Changing your {% data variables.product.prodname_dotcom %} username in the future can have unintended consequences, like some contributions no longer being attributed to you. For more information, see “[Changing your {% data variables.product.prodname_dotcom %} username](/github/setting-up-and-managing-your-github-user-account/changing-your-github-username#changing-your-username)."

{% endnote %}
{% endif %}
### Choosing your {% data variables.product.prodname_dotcom %} product
You can choose {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %} to get access to different features for your personal account.

For more information on all of {% data variables.product.prodname_dotcom %}'s plans, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/learning-about-github/githubs-products)."

{% if currentVersion == 'free-pro-team@latest' %}
### Verifying your email address
To ensure you can use all of {% data variables.product.product_name %}'s features, verify your email address after signing up for a new account.

For more information, see "[Verifying your email address](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)."
{% endif %}

{% if currentVersion == 'free-pro-team@latest' or enterpriseServerVersions contains currentVersion %}
### Configuring two-factor authentication
Two-factor authentication, or 2FA, is an extra layer of security used when logging into websites or apps. We strongly urge you to configure 2FA for the safety of your account. 

{% note %}

**Note**: When you configure two-factor authentication, download and save your 2FA recovery codes with your password manager. If you lose access to your phone, you can authenticate to {% data variables.product.product_name %} using your recovery codes.

{% endnote %}

For more information, see "[About two-factor authentication](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)."
{% endif %}
### Viewing your {% data variables.product.product_name %} profile and contribution graph
Your {% data variables.product.product_name %} profile tells people the story of your work through the repositories and gists you've pinned, the organizations you're part of, the contributions you've made, and the projects you've created. For more information, see “[About your profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)" and “[Viewing contributions on your profile](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)."

## Part 2: Using {% data variables.product.product_name %}'s tools and processes
To best use {% data variables.product.product_name %}, you'll need to set up Git. Git is responsible for everything {% data variables.product.prodname_dotcom %}-related that happens locally on your computer. To effectively collaborate on {% data variables.product.prodname_dotcom_the_website %}, you'll write in issues and pull requests using {% data variables.product.prodname_dotcom %} Flavored Markdown. 

### Learning Git
{% data variables.product.prodname_dotcom %}'s collaborative approach to development depends on publishing commits from your local repository for other people to view, fetch, and update using Git. For more information about Git, see the “[Git Handbook](https://guides.github.com/introduction/git-handbook/)" guide. For more information about how Git is used on {% data variables.product.product_name %}, see “[{% data variables.product.prodname_dotcom %} flow](/github/getting-started-with-github/quickstart/github-flow)." 
### Setting up Git
If you plan to use Git locally on your computer, whether through the command line, {% data variables.product.prodname_desktop %}, an IDE or file editor, or the {% data variables.product.prodname_dotcom %} API, you will need to install and set up Git. For more information, see “[Set up Git](/github/getting-started-with-github/set-up-git)."

 Once you install Git, you can connect to {% data variables.product.product_name %} repositories from your local computer, whether your own repository or another user's fork. When you connect to a {% data variables.product.product_name %} repository from Git, you'll need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH. For more information, see "[About remote repositories](/github/getting-started-with-github/getting-started-with-git/about-remote-repositories)."

You can use a credential helper so Git will remember your {% data variables.product.prodname_dotcom %} credentials every time it talks to {% data variables.product.prodname_dotcom %}. For more information, see "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git)."

### Choosing how to interact with {% data variables.product.product_name %}
Everyone has their own unique workflow for interacting with {% data variables.product.prodname_dotcom %}; the interfaces and methods you use depend on your preference and what works best for your needs. 

For more information about how to authenticate to {% data variables.product.product_name %} with each of these methods, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)".
#### In browser on {% data variables.product.prodname_dotcom_the_website %}
If you don't need to work with files locally, {% data variables.product.product_name %} lets you complete most Git-related actions directly in the browser, from creating and forking repositories to editing files and opening pull requests. This method is useful if you want a visual interface and need to do quick, simple changes or workflows that don't require working locally.
#### {% data variables.product.prodname_desktop %}
{% data variables.product.prodname_desktop %} extends and simplifies your {% data variables.product.prodname_dotcom_the_website %} workflow, using a visual interface instead of text commands on the command line. It allows you to complete most Git commands from your desktop, with visual confirmation of changes you and others have made. This method is best if you need or want to work with files locally, but prefer using a visual interface to use Git and interact with {% data variables.product.product_name %}. For more information on getting started with {% data variables.product.prodname_desktop %}, see “[Getting started with {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)".
#### IDE or File Editor
You can set a default text editor, like [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) to open and edit your files with Git. This is convenient if you are working with more complex files and projects and want everything in one place, since text editors or IDEs often allow you to directly access the command line and complete Git commands in the editor. You can also use extensions and view or change the project structure. For more information, see "[Associating text editors with Git](/github/getting-started-with-github/getting-started-with-git/associating-text-editors-with-git)".

#### Command line, with or without {% data variables.product.prodname_cli %} 
For the most granular control and customization of how you use Git and interact with {% data variables.product.product_name %}, you can use the command line. This may be most convenient if you are already working from the command-line, allowing you to avoid switching context. As long as you have installed and configured Git on your computer, you can use Git on the command line. For more information on using Git commands, see "[Git cheatsheet](/github/getting-started-with-github/quickstart/git-cheatsheet)". 

{% data variables.product.prodname_cli %} is a separate command-line tool you can install that brings pull requests, issues, {% data variables.product.prodname_actions %}, and other {% data variables.product.prodname_dotcom %} features to your terminal, so you can do all your work in one place. For more information, see "[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)".

#### {% data variables.product.prodname_dotcom %} API
{% data variables.product.prodname_dotcom %} has a REST API and GraphQL API that you can use to interact with {% data variables.product.product_name %}. The {% data variables.product.prodname_dotcom %} API would be most helpful if you wanted to automate common tasks, back up your data, or create integrations that extend {% data variables.product.prodname_dotcom %}. For more information, see "[Getting started with the API](/github/extending-github/getting-started-with-the-api)".
### Writing on {% data variables.product.product_name %}
To make your communication clear and organized in issues and pull requests, you can use {% data variables.product.prodname_dotcom %} Flavored Markdown, which combines an easy-to-read, easy-to-write syntax with some custom functionality. For more information, see "[About writing and formatting on {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)."

You can learn {% data variables.product.prodname_dotcom %} Flavored Markdown with the "[Communicating using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)" course on {% data variables.product.prodname_learning %}.

### Searching on {% data variables.product.product_name %}
Our integrated search allows you to find what you are looking for among the many repositories, users and lines of code on {% data variables.product.product_name %}. You can search globally across all of {% data variables.product.product_name %} or limit your search to a particular repository or organization. For more information about the types of searches you can do on {% data variables.product.product_name %}, see "[About searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)".

Our search syntax allows you to construct queries using qualifiers to specify what you want to search for. For more information on the search syntax to use in search, see "[Searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github)".

### Managing files on {% data variables.product.product_name %}
With {% data variables.product.product_name %}, you can create, edit, move and delete files in your repository or any repository you have write access to. You can also track the history of changes in a file line by line. For more information, see "[Managing files on {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github)".

If you want to edit a file in another user's repository, we'll automatically fork the repository and open a pull request for you. For more information, see "[Editing files in another user's repository](/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository)".

## Part 3: Collaborating on {% data variables.product.product_name %}
Any number of people can work together in repositories across {% data variables.product.product_name %}. You can configure settings, create project boards, and manage your notifications to encourage effective collaboration.

### Working with repositories

#### Creating a repository
A repository is like a folder for your project. You can have any number of public and private repositories in your user account. Repositories can contain folders and files, images, videos, spreadsheets, and data sets, as well as the revision history for all files in the repository. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/about-repositories)."

When you create a new repository, you should initialize the repository with a README file to let people know about your project. For more information, see “[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)."

#### Cloning a repository
You can clone an existing repository from {% data variables.product.product_name %} to your local computer, making it easier to add or remove files, fix merge conflicts, or make complex commits. Cloning a repository pulls down a full copy of all the repository data that {% data variables.product.prodname_dotcom %} has at that point in time, including all versions of every file and folder for the project. 

You can clone your existing repository or clone another person's existing repository to contribute to a project. For more information, see "[Cloning a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)".

#### Forking a repository
A fork is a copy of a repository that you manage. Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. 

Any changes you make in your fork will not effect the upstream repository, unless you submit a pull request to the project owner. You can still fetch updates from the original repository. For more information, see "[Working with forks](/github/collaborating-with-pull-requests/working-with-forks)".
### Importing your projects
If you have existing projects you'd like to move over to {% data variables.product.product_name %} you can import projects using the {% data variables.product.prodname_dotcom %} Importer, the command line, or external migration tools. For more information, see “[Importing source code to {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)."

### Managing collaborators and permissions
You can collaborate on your project with others using your repository's issues, pull requests, and project boards. You can invite other people to your repository as collaborators from the **Collaborators** tab in the repository settings. For more information, see “[Inviting collaborators to a personal repository](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)."

You are the owner of any repository you create in your user account and have full control of the repository. Collaborators have write access to your repository, limiting what they have permission to do. For more information, see “[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)."

### Managing repository settings
As the owner of a repository you can configure several settings, including the repository's visibility, topics, and social media preview. For more information, see “[Managing repository settings](/github/administering-a-repository/managing-repository-settings)."

### Setting up your project for healthy contributions
{% if currentVersion == 'free-pro-team@latest' %}
To encourage collaborators in your repository, you need a community that encourages people to use, contribute to, and evangelize your project. For more information, see “[Building Welcoming Communities](https://opensource.guide/building-community/)" in the Open Source Guides.

By adding files like contributing guidelines, a code of conduct, and a license to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. For more information, see “[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

You can use the community profile for your public repository to ensure your project has all the recommended files to help people use and contribute to your project. For more information, see “[About community profiles for public repositories](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."
{% endif %}
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
By adding files like contributing guidelines, a code of conduct, and support resources to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. For more information, see “[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."
{% endif %}
{% if currentVersion == 'free-pro-team@latest' %}
### Managing security vulnerabilities
You can discover, discuss, fix, and disclose security vulnerabilities in your repositories with security policies and {% data variables.product.prodname_security_advisories %}. For more information, see “[Managing security advisories for vulnerabilities in your project](/code-security/security-advisories)."
{% endif %}

### Managing project boards
You can use project boards to organize your work with issues and pull requests and manage your workflow across repositories. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists. Project boards give you the flexibility to create customized workflows that suit your needs. For more information, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

### Managing notifications
Notifications provide updates about the activity on {% data variables.product.product_name %} you've subscribed to or participated in. If you're no longer interested in a conversation, you can unsubscribe, unwatch, or customize the types of notifications you'll receive in the future. For more information, see “[About notifications](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."

### Working with {% data variables.product.prodname_pages %}
You can use {% data variables.product.prodname_pages %} to create and host a website directly from a {% data variables.product.product_name %} repository. For more information, see “[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

{% if currentVersion == 'free-pro-team@latest' %}
### Using {% data variables.product.prodname_discussions %}
You can enable {% data variables.product.prodname_discussions %} for your repository to help build a community around your project. Maintainers, contributors and visitors can use discussions to share announcements, ask and answer questions, and participate in conversations around goals. For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".
{% endif %}
## Part 4: Customizing and automating your work on {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% if currentVersion == 'free-pro-team@latest' %}
### Using {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
{% endif %}
### Using the {% data variables.product.prodname_dotcom %} API
{% data reusables.getting-started.api %}

### Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### Publishing and managing {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Part 5: Building securely on {% data variables.product.product_name %}
{% data variables.product.product_name %} has a variety of security features that help keep code and secrets secure in repositories. Some features are available for all repositories, while others are only available for public repositories and repositories with a {% data variables.product.prodname_GH_advanced_security %} license. For an overview of {% data variables.product.product_name %} security features, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)".
### Securing your repository
As a repository administrator, you can secure your repositories by configuring repository security settings. These include managing access to your repository, setting a security policy, and managing dependencies. For public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled, you can also configure code and secret scanning to automatically identify vulnerabilities and ensure tokens and keys are not exposed. 

For more information on steps you can take to secure your repositories, see "[Securing your repository](/code-security/getting-started/securing-your-repository)".

{% if currentVersion == 'free-pro-team@latest' %}
### Managing your dependencies
A large part of building securely is maintaining your project's dependencies to ensure that all packages and applications you depend on are updated and secure. You can manage your repository's dependencies on {% data variables.product.product_name %} by exploring the dependency graph for your repository, using Dependabot to automatically raise pull requests to keep your dependencies up-to-date, and receiving Dependabot alerts and security updates for vulnerable dependencies. 

For more information, see "[Securing your software supply chain](/code-security/supply-chain-security)". 
{% endif %}
## Part 6: Participating in {% data variables.product.prodname_dotcom %}'s community

{% data reusables.getting-started.participating-in-community %}

### Contributing to open source projects
{% data reusables.getting-started.open-source-projects %}

### Interacting with the {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### Learning with {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab %}

{% if currentVersion == 'free-pro-team@latest' %}
### Supporting the open source community
{% data reusables.getting-started.sponsors %}

### Contacting {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

## Further reading
- "[Getting started with {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team)"
{% endif %}

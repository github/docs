---
title: Getting started with your GitHub account
intro: 'You can configure the different settings in your user account to best suit your needs.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Part 1: Configuring your {% data variables.product.product_name %} account

There are several types of accounts on {% data variables.product.product_name %}. Every person who uses {% data variables.product.product_location %} has their own user account, which can be part of many organizations and teams. Your user account is your identity on {% data variables.product.product_location %} and represents you as an individual.

#### Creating an account
To sign up for a {% data variables.product.product_name %} account, navigate to https://github.com/ and follow the prompts. 

To keep your {% data variables.product.product_name %} account secure you should generate a strong and unique password with more than 16 characters using a password manager, such as [LastPass](https://lastpass.com/) or [1Password](https://1password.com/).

{% note %}

**Note**: Changing your {% data variables.product.product_name %} username in the future can have unintended consequences, like some contributions no longer being attributed to you. For more information, see “[Changing your GitHub username](/github/setting-up-and-managing-your-github-user-account/changing-your-github-username#changing-your-username)."

{% endnote %}

{% if page.version == 'free-pro-team@latest' %}
#### Choosing your {% data variables.product.product_name %} product
{% data variables.product.prodname_dotcom %} offers both free and paid products, each with a different set of features. {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_pro %} offer features for individual users. {% data variables.product.prodname_team %} offers collaboration and management tools for teams. {% data variables.product.prodname_enterprise %} offers security, compliance, and deployment controls for organizations. 

For more information, see "[GitHub's products](/github/getting-started-with-github/githubs-products)."
{% endif %}

{% if page.version == 'free-pro-team@latest' %}
#### Verifying your email address
To ensure you can use all of {% data variables.product.product_name %}'s features, verify your email address after signing up for a new account.

For more information, see "[Verifying your email address](/github/getting-started-with-github/verifying-your-email-address)."
{% endif %}

#### Configuring two-factor authentication
Two-factor authentication, or 2FA, is an extra layer of security used when logging into websites or apps. We strongly urge you to configure 2FA for the safety of your account. 

{% note %}

**Note**: When you configure two-factor authentication, download and save your 2FA recovery codes with your password manager. If you lose access to your phone, you can authenticate to {% data variables.product.product_name %} using your recovery codes.

{% endnote %}

For more information, see "[About two-factor authentication](/github/authenticating-to-github/about-two-factor-authentication)."

#### Viewing your {% data variables.product.product_name %} profile and contribution graph
Your {% data variables.product.product_name %} profile tells people the story of your work through the repositories and gists you've pinned, the organizations you're part of, the contributions you've made, and the projects you've created. For more information, see “[About your profile](/github/setting-up-and-managing-your-github-profile/about-your-profile)."

Your profile also shows a graph of your public repository contributions over the past year. Additionally, you can choose to show anonymized activity from private repositories. For more information, see “[Viewing contributions on your profile](/github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile)."

### Part 2: Working with {% data variables.product.product_name %}
To best use {% data variables.product.product_name %}, you'll need to set up Git. Git is responsible for everything GitHub-related that happens locally on your computer. To effectively collaborate on {% data variables.product.prodname_dotcom_the_website %}, you'll write in issues and pull requests using {% data variables.product.product_name %} Flavored Markdown. 

#### Introduction to Git

##### Learning Git
{% data variables.product.product_name %}'s collaborative approach to development depends on publishing commits from your local repository for other people to view, fetch, and update using Git. For more information about Git, see the “[Git Handbook](https://guides.github.com/introduction/git-handbook/)" guide. For more information about how Git is used on {% data variables.product.product_name %}, see “[Understanding the GitHub flow](https://guides.github.com/introduction/flow/)."

##### Setting up and using Git with {% data variables.product.prodname_desktop %}
{% data variables.product.prodname_desktop %} extends and simplifies your GitHub.com workflow, using a visual interface instead of text commands on the command line.

After downloading {% data variables.product.prodname_desktop %} and signing into {% data variables.product.prodname_dotcom %}, you can create and clone a tutorial repository. The tutorial will introduce the basics of working with Git and {% data variables.product.prodname_dotcom %}, including installing an editor, creating a branch, making a commit, pushing to {% data variables.product.prodname_dotcom_the_website %}, and creating a pull request.

For more information, see “[Creating your first repository using GitHub Desktop](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)."

##### Setting up and using Git on the command line
To use Git on the command line, you'll need to download, install, and configure Git on your computer. For more information, see “[Set up Git](/github/getting-started-with-github/set-up-git)."

When you connect to a {% data variables.product.product_name %} repository from Git, you'll need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH. For more information, see "[About remote repositories](/github/using-git/about-remote-repositories)."

You can set a default text editor, like [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) to open and edit your files with Git. For more information, see "[Associating text editors with Git](https://help-docs-pr-11947.herokuapp.com/en/github/using-git/associating-text-editors-with-git)."

[INFO ON AUTHENTICATION?]

#### Ways of working with {% data variables.product.product_name %}

There are multiple ways you can interact with GitHub - which one you use all depends on your preference and what you need. 

- In browser on GitHub.com
- Desktop
- IDE or File Editor
- Command line with or without Github CLI
- GitHub API 


#### Writing on {% data variables.product.product_name %}
To make your communication clear and organized in issues and pull requests, you can use {% data variables.product.product_name %} Flavored Markdown, which combines an easy-to-read, easy-to-write syntax with some custom functionality. For more information, see "[About writing and formatting on {% data variables.product.product_name %}](/github/writing-on-github/about-writing-and-formatting-on-github)."

You can learn {% data variables.product.product_name %} Flavored Markdown with the "[Communicating using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)" course on {% data variables.product.prodname_learning %}.

#### Searching on {% data variables.product.product_name %}

#### Managing files on {% data variables.product.product_name %}


### Part 3: Collaborating on {% data variables.product.product_name %}
Any number of people can work together in repositories across {% data variables.product.product_name %}. You can configure settings, create project boards, and manage your notifications to encourage effective collaboration.

#### Working with repositories

##### Creating a repository
A repository is like a folder for your project. You can have any number of public and private repositories in your user account. Repositories can contain folders and files, images, videos, spreadsheets, and data sets, as well as the revision history for all files in the repository. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/about-repositories)."

When you create a new repository, you should initialize the repository with a README file to let people know about your project. For more information, see “[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."

##### Cloning a repository

##### Forking a repository

#### Importing your projects
If you have existing projects you'd like to move over to {% data variables.product.product_name %} you can import projects using the {% data variables.product.product_name %} Importer, the command line, or external migration tools. For more information, see “[Importing source code to GitHub](/github/importing-your-projects-to-github/importing-source-code-to-github)."

#### Managing collaborators and permissions
You can collaborate on your project with others using your repository's issues, pull requests, and project boards. You can invite other people to your repository as collaborators from the **Collaborators** tab in the repository settings. For more information, see “[Inviting collaborators to a personal repository](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)."

You are the owner of any repository you create in your user account and have full control of the repository. Collaborators have write access to your repository, limiting what they have permission to do. For more information, see “[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)."

#### Managing repository settings
As the owner of a repository you can configure several settings, including the repository's visibility, topics, and social media preview. For more information, see “[Managing repository settings](/github/administering-a-repository/managing-repository-settings)."

#### Setting up your project for healthy contributions
To encourage collaborators in your repository, you need a community that encourages people to use, contribute to, and evangelize your project. For more information, see “[Building Welcoming Communities](https://opensource.guide/building-community/)" in the Open Source Guides.

By adding files like contributing guidelines, a code of conduct, and a license to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. For more information, see “[Setting up your project for healthy contributions](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)."

You can use the community profile for your public repository to ensure your project has all the recommended files to help people use and contribute to your project. For more information, see “[About community profiles for public repositories](github/building-a-strong-community/about-community-profiles-for-public-repositories)."

{% if page.version == 'free-pro-team@latest' %}
#### Managing security vulnerabilities
You can discover, discuss, fix, and disclose security vulnerabilities in your repositories with security policies and CHECK WHAT THIS MEANS[site.data.variables.product.prodname_security_advisories]. For more information, see “[Managing security vulnerabilities in your project
](/github/managing-security-vulnerabilities/managing-security-vulnerabilities-in-your-project)."
{% endif %}

#### Managing project boards
You can use project boards to organize your work with issues and pull requests and manage your workflow across repositories. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists. Project boards give you the flexibility to create customized workflows that suit your needs. For more information, see "[About project boards](/github/managing-your-work-on-github/about-project-boards)."

#### Managing notifications
Notifications provide updates about the activity on {% data variables.product.product_name %} you've subscribed to or participated in. If you're no longer interested in a conversation, you can unsubscribe, unwatch, or customize the types of notifications you'll receive in the future. For more information, see “[About notifications](/github/receiving-notifications-about-activity-on-github/about-notifications)."

#### Working with {% data variables.product.prodname_pages %}
You can use {% data variables.product.prodname_pages %} to create and host a website directly from a {% data variables.product.product_name %} repository. For more information, see “[Working with {% data variables.product.prodname_pages %}](/github/working-with-github-pages)."

#### Working with {% data variables.product.prodname_discussions %}

### Part 4: Customizing and automating your work on {% data variables.product.product_name %}

<!--{% site.data.reusables.getting-started.customizing-and-automating %}

{% site.data.reusables.getting-started.marketplace %}

{% site.data.reusables.getting-started.api %}

{% site.data.reusables.getting-started.actions %}

{% if page.version == 'free-pro-team@latest' %}
{% site.data.reusables.getting-started.packages %}
{% endif %}-->

### Part 5: Building securely on {% data variables.product.product_name %}

#### Code scanning

#### Dependabot

### Part 6: Participating in {% data variables.product.prodname_dotcom %}'s community
<!--{% site.data.reusables.getting-started.participating-in-community %}

{% site.data.reusables.getting-started.open-source-projects %}

{% if page.version == 'free-pro-team@latest' %}
{% site.data.reusables.getting-started.sponsors %}

{% site.data.reusables.getting-started.contact-support %}
{% endif %}-->

#### Interacting with the {% data variables.product.prodname_gcf %}
<!--{% site.data.reusables.support.ask-and-answer-forum %}

{% site.data.reusables.getting-started.learning-lab %}-->

{% if currentVersion == 'free-pro-team@latest' %}
### Further reading
- "[Getting started with {% data variables.product.prodname_team %}](/github/getting-started-with-github/onboarding/getting-started-with-github-team)"
{% endif %}
---
title: Getting started with your GitHub account
intro: 'With a user account on {% data variables.product.prodname_dotcom %}, you can import or create repositories, collaborate with others, and connect with the {% data variables.product.prodname_dotcom %} community.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

This guide will walk you through setting up your {% data variables.product.prodname_dotcom %} account and getting started with {% data variables.product.prodname_dotcom %}'s features for collaboration and community.

## Part 1: Configuring your {% data variables.product.prodname_dotcom %} account

{% ifversion fpt %}
The first steps in starting with {% data variables.product.product_name %} are to create an account, choose a product that fits your needs best, verify your email, set up two-factor authentication, and view your profile.
{% elsif ghes %}
The first steps in starting with {% data variables.product.product_name %} are to access your account, set up two-factor authentication, and view your profile.
{% elsif ghae %}
The first steps in starting with {% data variables.product.product_name %} are to access your account and view your profile.
{% endif %}

{% ifversion fpt %}There are several types of accounts on {% data variables.product.prodname_dotcom %}. {% endif %} Every person who uses {% data variables.product.product_name %} has their own user account, which can be part of multiple organizations and teams. Your user account is your identity on {% data variables.product.product_location %} and represents you as an individual.

{% ifversion fpt %}
### 1. 创建帐户
To sign up for a {% data variables.product.prodname_dotcom %} account, navigate to https://github.com/ and follow the prompts.

To keep your {% data variables.product.prodname_dotcom %} account secure you should use a strong and unique password. 更多信息请参阅“[创建强式密码](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)”。

### 2. Choosing your {% data variables.product.prodname_dotcom %} product
You can choose {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %} to get access to different features for your personal account. You can upgrade at any time if you are unsure at first which product you want.

For more information on all of {% data variables.product.prodname_dotcom %}'s plans, see "[{% data variables.product.prodname_dotcom %}'s products](/get-started/learning-about-github/githubs-products)."

### 3. 验证电子邮件地址
To ensure you can use all the features in your {% data variables.product.product_name %} plan, verify your email address after signing up for a new account. 更多信息请参阅“[验证电子邮件地址](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)”。
{% endif %}

{% ifversion ghes %}
### 1. Accessing your account
The administrator of your {% data variables.product.product_name %} instance will notify you about how to authenticate and access your account. The process varies depending on the authentication mode they have configured for the instance.
{% endif %}

{% ifversion ghae %}
### 1. Accessing your account
You will receive an email notification once your enterprise owner for {% data variables.product.product_name %} has set up your account, allowing you to authenticate with SAML single sign-on (SSO) and access your account.
{% endif %}

{% ifversion fpt or ghes %}
### {% ifversion fpt %}4.{% else %}2.{% endif %} Configuring two-factor authentication
双重身份验证（或 2FA）是登录网站或应用时使用的额外保护层。 We strongly urge you to configure 2FA for the safety of your account. 更多信息请参阅“[关于双重身份验证](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)”。
{% endif %}
### {% ifversion fpt %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Viewing your {% data variables.product.product_name %} profile and contribution graph
Your {% data variables.product.product_name %} profile tells people the story of your work through the repositories and gists you've pinned, the organization memberships you've chosen to publicize, the contributions you've made, and the projects you've created. For more information, see "[About your profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)" and "[Viewing contributions on your profile](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)."

## Part 2: Using {% data variables.product.product_name %}'s tools and processes
To best use {% data variables.product.product_name %}, you'll need to set up Git. Git 负责在您计算机上本地发生的、与 {% data variables.product.prodname_dotcom %} 有关的所有内容。 To effectively collaborate on {% data variables.product.product_name %}, you'll write in issues and pull requests using {% data variables.product.prodname_dotcom %} Flavored Markdown.

### 1. Learning Git
{% data variables.product.prodname_dotcom %}'s collaborative approach to development depends on publishing commits from your local repository to {% data variables.product.product_name %} for other people to view, fetch, and update using Git. For more information about Git, see the "[Git Handbook](https://guides.github.com/introduction/git-handbook/)" guide. For more information about how Git is used on {% data variables.product.product_name %}, see "[{% data variables.product.prodname_dotcom %} flow](/get-started/quickstart/github-flow)."
### 2. 设置 Git
If you plan to use Git locally on your computer, whether through the command line, an IDE or text editor, you will need to install and set up Git. 更多信息请参阅“[设置 Git](/get-started/quickstart/set-up-git)”。

If you prefer to use a visual interface, you can download and use {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} comes packaged with Git, so there is no need to install Git separately. 更多信息请参阅“[开始使用 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)”。

Once you install Git, you can connect to {% data variables.product.product_name %} repositories from your local computer, whether your own repository or another user's fork. 从 Git 连接到 {% data variables.product.product_name %} 仓库时，您将需要使用 HTTPS 或 SSH 通过 {% data variables.product.product_name %} 进行身份验证。 更多信息请参阅“[关于远程仓库](/get-started/getting-started-with-git/about-remote-repositories)”。

### 3. Choosing how to interact with {% data variables.product.product_name %}
Everyone has their own unique workflow for interacting with {% data variables.product.prodname_dotcom %}; the interfaces and methods you use depend on your preference and what works best for your needs.

For more information about how to authenticate to {% data variables.product.product_name %} with each of these methods, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)."

| **方法**                                                                  | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Use cases**                                                                                                                                                                                                            |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Browse to {% data variables.product.prodname_dotcom_the_website %}    | If you don't need to work with files locally, {% data variables.product.product_name %} lets you complete most Git-related actions directly in the browser, from creating and forking repositories to editing files and opening pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | This method is useful if you want a visual interface and need to do quick, simple changes that don't require working locally.                                                                                            |
| {% data variables.product.prodname_desktop %}                           | {% data variables.product.prodname_desktop %} 可扩展并简化您的 {% data variables.product.prodname_dotcom_the_website %} 工作流程，它使用可视界面，而不是在命令行上使用命令文本。 For more information on getting started with {% data variables.product.prodname_desktop %}, see "[Getting started with {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)."                                                                                                                                                                                                                                                                                                                                              | This method is best if you need or want to work with files locally, but prefer using a visual interface to use Git and interact with {% data variables.product.product_name %}.                                          |
| IDE or text editor                                                      | You can set a default text editor, like [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) to open and edit your files with Git, use extensions, and view the project structure. For more information, see "[Associating text editors with Git](/github/using-git/associating-text-editors-with-git)."                                                                                                                                                                                                                                                                                                                                                                                                                                   | This is convenient if you are working with more complex files and projects and want everything in one place, since text editors or IDEs often allow you to directly access the command line in the editor.               |
| Command line, with or without {% data variables.product.prodname_cli %} | For the most granular control and customization of how you use Git and interact with {% data variables.product.product_name %}, you can use the command line. For more information on using Git commands, see "[Git cheatsheet](/github/getting-started-with-github/quickstart/git-cheatsheet)."<br/><br/> {% data variables.product.prodname_cli %} is a separate command-line tool you can install that brings pull requests, issues, {% data variables.product.prodname_actions %}, and other {% data variables.product.prodname_dotcom %} features to your terminal, so you can do all your work in one place. For more information, see "[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)." | This is most convenient if you are already working from the command line, allowing you to avoid switching context, or if you are more comfortable using the command line.                                                |
| {% data variables.product.prodname_dotcom %} API                        | {% data variables.product.prodname_dotcom %} has a REST API and GraphQL API that you can use to interact with {% data variables.product.product_name %}. For more information, see "[Getting started with the API](/github/extending-github/getting-started-with-the-api)."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | The {% data variables.product.prodname_dotcom %} API would be most helpful if you wanted to automate common tasks, back up your data, or create integrations that extend {% data variables.product.prodname_dotcom %}. |
### 4. Writing on {% data variables.product.product_name %}
To make your communication clear and organized in issues and pull requests, you can use {% data variables.product.prodname_dotcom %} Flavored Markdown for formatting, which combines an easy-to-read, easy-to-write syntax with some custom functionality. 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的书写和格式化](/github/writing-on-github/about-writing-and-formatting-on-github)”。

You can learn {% data variables.product.prodname_dotcom %} Flavored Markdown with the "[Communicating using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)" course on {% data variables.product.prodname_learning %}.

### 5. Searching on {% data variables.product.product_name %}
Our integrated search allows you to find what you are looking for among the many repositories, users and lines of code on {% data variables.product.product_name %}. You can search globally across all of {% data variables.product.product_name %} or limit your search to a particular repository or organization. For more information about the types of searches you can do on {% data variables.product.product_name %}, see "[About searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)."

Our search syntax allows you to construct queries using qualifiers to specify what you want to search for. For more information on the search syntax to use in search, see "[Searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github)."

### 6. Managing files on {% data variables.product.product_name %}
With {% data variables.product.product_name %}, you can create, edit, move and delete files in your repository or any repository you have write access to. You can also track the history of changes in a file line by line. For more information, see "[Managing files on {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github)."

## Part 3: Collaborating on {% data variables.product.product_name %}
Any number of people can work together in repositories across {% data variables.product.product_name %}. You can configure settings, create project boards, and manage your notifications to encourage effective collaboration.

### 1. Working with repositories

#### 创建仓库
仓库就像项目的文件夹。 You can have any number of public and private repositories in your user account. Repositories can contain folders and files, images, videos, spreadsheets, and data sets, as well as the revision history for all files in the repository. 更多信息请参阅“[关于仓库](/github/creating-cloning-and-archiving-repositories/about-repositories)”。

When you create a new repository, you should initialize the repository with a README file to let people know about your project. 更多信息请参阅“[创建新仓库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)”。

#### 克隆仓库
You can clone an existing repository from {% data variables.product.product_name %} to your local computer, making it easier to add or remove files, fix merge conflicts, or make complex commits. 克隆仓库将提取 {% data variables.product.prodname_dotcom %} 在当时拥有的所有仓库数据的完整副本，包括项目每个文件和文件夹的所有版本。 更多信息请参阅“[克隆仓库](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)”。

#### 复刻仓库
A fork is a copy of a repository that you manage, where any changes you make will not affect the original repository unless you submit a pull request to the project owner. 复刻最常见的用法是对其他人的项目提出更改或将其他人的项目用作自己创意的起点。 更多信息请参阅“[使用复刻](/github/collaborating-with-pull-requests/working-with-forks)”。
### 2. 导入项目
If you have existing projects you'd like to move over to {% data variables.product.product_name %} you can import projects using the {% data variables.product.prodname_dotcom %} Importer, the command line, or external migration tools. For more information, see "[Importing source code to {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)."

### 3. Managing collaborators and permissions
您可以使用仓库议题、拉取请求及项目板与其他人协作处理您的项目。 You can invite other people to your repository as collaborators from the **Collaborators** tab in the repository settings. 更多信息请参阅“[邀请协作者参加个人仓库](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)”。

You are the owner of any repository you create in your user account and have full control of the repository. Collaborators have write access to your repository, limiting what they have permission to do. 更多信息请参阅“[用户帐户仓库的权限级别](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)”。

### 4. 管理仓库设置
As the owner of a repository you can configure several settings, including the repository's visibility, topics, and social media preview. 更多信息请参阅“[管理仓库设置](/github/administering-a-repository/managing-repository-settings)”。

### 5. 设置项目的健康贡献
{% ifversion fpt %}
To encourage collaborators in your repository, you need a community that encourages people to use, contribute to, and evangelize your project. For more information, see "[Building Welcoming Communities](https://opensource.guide/building-community/)" in the Open Source Guides.

By adding files like contributing guidelines, a code of conduct, and a license to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. 更多信息请参阅“[设置健康参与的项目](/communities/setting-up-your-project-for-healthy-contributions)”。
{% endif %}
{% ifversion ghes or ghae %}
By adding files like contributing guidelines, a code of conduct, and support resources to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. 更多信息请参阅“[设置健康参与的项目](/communities/setting-up-your-project-for-healthy-contributions)”。
{% endif %}

### 6. Using GitHub Issues and project boards
You can use GitHub Issues to organize your work with issues and pull requests and manage your workflow with project boards. For more information, see "[About issues](/issues/tracking-your-work-with-issues/about-issues)" and "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

### 7. Managing notifications
Notifications provide updates about the activity on {% data variables.product.product_name %} you've subscribed to or participated in. 如果您的某项对话不再感兴趣，您可以取消订阅、取消关注或自定义以后接收的通知类型。 更多信息请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。

### 8. 使用 {% data variables.product.prodname_pages %}
You can use {% data variables.product.prodname_pages %} to create and host a website directly from a {% data variables.product.product_name %} repository. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

{% ifversion fpt %}
### 9. 使用 {% data variables.product.prodname_discussions %}
You can enable {% data variables.product.prodname_discussions %} for your repository to help build a community around your project. Maintainers, contributors and visitors can use discussions to share announcements, ask and answer questions, and participate in conversations around goals. 更多信息请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。
{% endif %}
## Part 4: Customizing and automating your work on {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt %}
### 1. Using {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
{% endif %}
### {% ifversion fpt %}2.{% else %}1.{% endif %} Using the {% data variables.product.prodname_dotcom %} API
{% data reusables.getting-started.api %}

### {% ifversion fpt %}3.{% else %}2.{% endif %} Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt %}4.{% else %}3.{% endif %} Publishing and managing {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

{% ifversion fpt or ghae or ghes > 2.22 %}
## Part 5: Building securely on {% data variables.product.product_name %}
{% data variables.product.product_name %} has a variety of security features that help keep code and secrets secure in repositories. Some features are available for all repositories, while others are only available for public repositories and repositories with a {% data variables.product.prodname_GH_advanced_security %} license. For an overview of {% data variables.product.product_name %} security features, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

### 1. 保护您的仓库
As a repository administrator, you can secure your repositories by configuring repository security settings. These include managing access to your repository, setting a security policy, and managing dependencies. For public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled, you can also configure code and secret scanning to automatically identify vulnerabilities and ensure tokens and keys are not exposed.

For more information on steps you can take to secure your repositories, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."
{% endif %}

{% ifversion fpt %}
### 2. Managing your dependencies
A large part of building securely is maintaining your project's dependencies to ensure that all packages and applications you depend on are updated and secure. You can manage your repository's dependencies on {% data variables.product.product_name %} by exploring the dependency graph for your repository, using Dependabot to automatically raise pull requests to keep your dependencies up-to-date, and receiving Dependabot alerts and security updates for vulnerable dependencies.

For more information, see "[Securing your software supply chain](/code-security/supply-chain-security)."
{% endif %}

## Part {% ifversion ghes < 3.0 %}5:{% else %}6:{% endif %} Participating in {% data variables.product.prodname_dotcom %}'s community

{% data reusables.getting-started.participating-in-community %}

### 1. Contributing to open source projects
{% data reusables.getting-started.open-source-projects %}

### 2. Interacting with {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Learning with {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab %}

{% ifversion fpt %}
### 4. Supporting the open source community
{% data reusables.getting-started.sponsors %}

### 5. 联系 {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

## 延伸阅读
- "[开始使用 {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team)"
{% endif %}

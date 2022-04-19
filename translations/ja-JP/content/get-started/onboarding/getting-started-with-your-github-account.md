---
title: Getting started with your GitHub account
intro: 'With a personal account on {% data variables.product.prodname_dotcom %}, you can import or create repositories, collaborate with others, and connect with the {% data variables.product.prodname_dotcom %} community.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

This guide will walk you through setting up your {% data variables.product.company_short %} account and getting started with {% data variables.product.product_name %}'s features for collaboration and community.

## Part 1: Configuring your {% data variables.product.prodname_dotcom %} account

{% ifversion fpt or ghec %}
The first steps in starting with {% data variables.product.product_name %} are to create an account, choose a product that fits your needs best, verify your email, set up two-factor authentication, and view your profile.
{% elsif ghes %}
The first steps in starting with {% data variables.product.product_name %} are to access your account, set up two-factor authentication, and view your profile.
{% elsif ghae %}
The first steps in starting with {% data variables.product.product_name %} are to access your account and view your profile.
{% endif %}

{% ifversion fpt or ghec %}There are several types of accounts on {% data variables.product.prodname_dotcom %}. {% endif %} Every person who uses {% data variables.product.product_name %} has their own personal account, which can be part of multiple organizations and teams. Your personal account is your identity on {% data variables.product.product_location %} and represents you as an individual.

{% ifversion fpt or ghec %}
### 1. アカウントを作成する
To sign up for an account on {% data variables.product.product_location %}, navigate to https://github.com/ and follow the prompts.

To keep your {% data variables.product.prodname_dotcom %} account secure you should use a strong and unique password. 詳しい情報については、「[強力なパスワードを作成する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)」を参照してください。

### 2. Choosing your {% data variables.product.prodname_dotcom %} product
You can choose {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %} to get access to different features for your personal account. You can upgrade at any time if you are unsure at first which product you want.

For more information on all of {% data variables.product.prodname_dotcom %}'s plans, see "[{% data variables.product.prodname_dotcom %}'s products](/get-started/learning-about-github/githubs-products)."

### 3. メールアドレスを検証する
To ensure you can use all the features in your {% data variables.product.product_name %} plan, verify your email address after signing up for a new account. 詳細は「[メールアドレスを検証する](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)」を参照してください。
{% endif %}

{% ifversion ghes %}
### 1. Accessing your account
The administrator of your {% data variables.product.product_name %} instance will notify you about how to authenticate and access your account. The process varies depending on the authentication mode they have configured for the instance.
{% endif %}

{% ifversion ghae %}
### 1. Accessing your account
You will receive an email notification once your enterprise owner for {% data variables.product.product_name %} has set up your account, allowing you to authenticate with SAML single sign-on (SSO) and access your account.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Configuring two-factor authentication
2 要素認証、あるいは 2FA は、Web サイトあるいはアプリケーションにログインする際に使われる追加のセキュリティレイヤーです。 We strongly urge you to configure 2FA for the safety of your account. 詳しい情報については「[2 要素認証について](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)」を参照してください。
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Viewing your {% data variables.product.prodname_dotcom %} profile and contribution graph
Your {% data variables.product.prodname_dotcom %} profile tells people the story of your work through the repositories and gists you've pinned, the organization memberships you've chosen to publicize, the contributions you've made, and the projects you've created. For more information, see "[About your profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)" and "[Viewing contributions on your profile](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)."

## Part 2: Using {% data variables.product.product_name %}'s tools and processes
To best use {% data variables.product.product_name %}, you'll need to set up Git. Git は、{% data variables.product.prodname_dotcom %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。 To effectively collaborate on {% data variables.product.product_name %}, you'll write in issues and pull requests using {% data variables.product.prodname_dotcom %} Flavored Markdown.

### 1. Learning Git
{% data variables.product.prodname_dotcom %}'s collaborative approach to development depends on publishing commits from your local repository to {% data variables.product.product_name %} for other people to view, fetch, and update using Git. For more information about Git, see the "[Git Handbook](https://guides.github.com/introduction/git-handbook/)" guide. For more information about how Git is used on {% data variables.product.product_name %}, see "[{% data variables.product.prodname_dotcom %} flow](/get-started/quickstart/github-flow)."
### 2. Git をセットアップする
If you plan to use Git locally on your computer, whether through the command line, an IDE or text editor, you will need to install and set up Git. 詳細は「[Git のセットアップ](/get-started/quickstart/set-up-git)」を参照してください。を参照してください。

If you prefer to use a visual interface, you can download and use {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} comes packaged with Git, so there is no need to install Git separately. 詳細は「[{% data variables.product.prodname_desktop %} を使ってみる](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)」を参照してください。

Once you install Git, you can connect to {% data variables.product.product_name %} repositories from your local computer, whether your own repository or another user's fork. When you connect to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} from Git, you'll need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH. For more information, see "[About remote repositories](/get-started/getting-started-with-git/about-remote-repositories)."

### 3. Choosing how to interact with {% data variables.product.product_name %}
Everyone has their own unique workflow for interacting with {% data variables.product.prodname_dotcom %}; the interfaces and methods you use depend on your preference and what works best for your needs.

For more information about how to authenticate to {% data variables.product.product_name %} with each of these methods, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)."

| **方法**                                                                                                                                      | **説明**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Use cases**                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Browse to {% data variables.product.prodname_dotcom_the_website %}                                                                        | If you don't need to work with files locally, {% data variables.product.product_name %} lets you complete most Git-related actions directly in the browser, from creating and forking repositories to editing files and opening pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | This method is useful if you want a visual interface and need to do quick, simple changes that don't require working locally.                                                                                                                                                                                     |
| {% data variables.product.prodname_desktop %}                                                                                               | {% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 For more information on getting started with {% data variables.product.prodname_desktop %}, see "[Getting started with {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)."                                                                                                                                                                                                                                                                                                               | This method is best if you need or want to work with files locally, but prefer using a visual interface to use Git and interact with {% data variables.product.product_name %}.                                                                                                                                   |
| IDE or text editor                                                                                                                          | You can set a default text editor, like [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) to open and edit your files with Git, use extensions, and view the project structure. For more information, see "[Associating text editors with Git](/github/using-git/associating-text-editors-with-git)."                                                                                                                                                                                                                                                                                                                                                                                                                                   | This is convenient if you are working with more complex files and projects and want everything in one place, since text editors or IDEs often allow you to directly access the command line in the editor.                                                                                                        |
| Command line, with or without {% data variables.product.prodname_cli %}                                                                     | For the most granular control and customization of how you use Git and interact with {% data variables.product.product_name %}, you can use the command line. For more information on using Git commands, see "[Git cheatsheet](/github/getting-started-with-github/quickstart/git-cheatsheet)."<br/><br/> {% data variables.product.prodname_cli %} is a separate command-line tool you can install that brings pull requests, issues, {% data variables.product.prodname_actions %}, and other {% data variables.product.prodname_dotcom %} features to your terminal, so you can do all your work in one place. For more information, see "[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)." | This is most convenient if you are already working from the command line, allowing you to avoid switching context, or if you are more comfortable using the command line.                                                                                                                                         |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} has a REST API and GraphQL API that you can use to interact with {% data variables.product.product_name %}. For more information, see "[Getting started with the API](/github/extending-github/getting-started-with-the-api)."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | The {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API would be most helpful if you wanted to automate common tasks, back up your data, or create integrations that extend {% data variables.product.prodname_dotcom %}. |
### 4. Writing on {% data variables.product.product_name %}
To make your communication clear and organized in issues and pull requests, you can use {% data variables.product.prodname_dotcom %} Flavored Markdown for formatting, which combines an easy-to-read, easy-to-write syntax with some custom functionality. 詳しい情報については、「[{% data variables.product.prodname_dotcom %}での執筆とフォーマットについて](/github/writing-on-github/about-writing-and-formatting-on-github)」を参照してください。

You can learn {% data variables.product.prodname_dotcom %} Flavored Markdown with the "[Communicating using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)" course on {% data variables.product.prodname_learning %}.

### 5. Searching on {% data variables.product.product_name %}
Our integrated search allows you to find what you are looking for among the many repositories, users and lines of code on {% data variables.product.product_name %}. You can search globally across all of {% data variables.product.product_name %} or limit your search to a particular repository or organization. For more information about the types of searches you can do on {% data variables.product.product_name %}, see "[About searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)."

Our search syntax allows you to construct queries using qualifiers to specify what you want to search for. For more information on the search syntax to use in search, see "[Searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github)."

### 6. Managing files on {% data variables.product.product_name %}
With {% data variables.product.product_name %}, you can create, edit, move and delete files in your repository or any repository you have write access to. You can also track the history of changes in a file line by line. For more information, see "[Managing files on {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github)."

## Part 3: Collaborating on {% data variables.product.product_name %}
Any number of people can work together in repositories across {% data variables.product.product_name %}. You can configure settings, create project boards, and manage your notifications to encourage effective collaboration.

### 1. Working with repositories

#### リポジトリを作成する
リポジトリは、プロジェクトのフォルダーのようなものです。 You can have any number of public and private repositories in your personal account. Repositories can contain folders and files, images, videos, spreadsheets, and data sets, as well as the revision history for all files in the repository. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/about-repositories)."

When you create a new repository, you should initialize the repository with a README file to let people know about your project. 詳しい情報については「[新しいリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)」を参照してください。

#### リポジトリをクローンする
You can clone an existing repository from {% data variables.product.product_name %} to your local computer, making it easier to add or remove files, fix merge conflicts, or make complex commits. リポジトリをクローンすると、その時点で {% data variables.product.prodname_dotcom %} にあるすべてのリポジトリデータの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダのすべてのバージョンも含まれます。 詳しい情報については[リポジトリのクローン](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)を参照してください。

#### リポジトリをフォークする
A fork is a copy of a repository that you manage, where any changes you make will not affect the original repository unless you submit a pull request to the project owner. 一般的にフォークは、他のユーザのプロジェクトへの変更を提案するため、あるいは他のユーザのプロジェクトを自分のアイディアの出発点として活用するために使用します。 For more information, see "[Working with forks](/github/collaborating-with-pull-requests/working-with-forks)."
### 2. プロジェクトのインポート
If you have existing projects you'd like to move over to {% data variables.product.product_name %} you can import projects using the {% data variables.product.prodname_dotcom %} Importer, the command line, or external migration tools. For more information, see "[Importing source code to {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)."

### 3. Managing collaborators and permissions
リポジトリの Issue、プルリクエスト、プロジェクトボードを使ってプロジェクトで他者とコラボレーションできます。 You can invite other people to your repository as collaborators from the **Collaborators** tab in the repository settings. 詳しい情報については、「[コラボレータを個人リポジトリに招待する](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)」を参照してください。

You are the owner of any repository you create in your personal account and have full control of the repository. Collaborators have write access to your repository, limiting what they have permission to do. For more information, see "[Permission levels for a personal account repository](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)."

### 4. リポジトリ設定を管理する
As the owner of a repository you can configure several settings, including the repository's visibility, topics, and social media preview. 詳しい情報については、「[リポジトリ設定を管理する](/github/administering-a-repository/managing-repository-settings)」を参照してください。

### 5. 健全なコントリビューションを促すプロジェクトをセットアップする
{% ifversion fpt or ghec %}
To encourage collaborators in your repository, you need a community that encourages people to use, contribute to, and evangelize your project. For more information, see "[Building Welcoming Communities](https://opensource.guide/building-community/)" in the Open Source Guides.

By adding files like contributing guidelines, a code of conduct, and a license to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. 詳しい情報については、「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。
{% endif %}
{% ifversion ghes or ghae %}
By adding files like contributing guidelines, a code of conduct, and support resources to your repository you can create an environment where it's easier for collaborators to make meaningful, useful contributions. 詳しい情報については、「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。
{% endif %}

### 6. Using GitHub Issues and project boards
You can use GitHub Issues to organize your work with issues and pull requests and manage your workflow with project boards. For more information, see "[About issues](/issues/tracking-your-work-with-issues/about-issues)" and "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

### 7. Managing notifications
Notifications provide updates about the activity on {% data variables.product.prodname_dotcom %} you've subscribed to or participated in. 会話に関心がなくなった場合は、今後受信する通知の種類を、サブスクライブ解除、Watch 解除、またはカスタマイズできます。 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。

### 8. {% data variables.product.prodname_pages %} の活用
You can use {% data variables.product.prodname_pages %} to create and host a website directly from a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. 詳しい情報については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」を参照してください。

{% ifversion fpt or ghec %}
### 9. {% data variables.product.prodname_discussions %}を使用する
You can enable {% data variables.product.prodname_discussions %} for your repository to help build a community around your project. Maintainers, contributors and visitors can use discussions to share announcements, ask and answer questions, and participate in conversations around goals. 詳しい情報については「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。
{% endif %}
## Part 4: Customizing and automating your work on {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. {% data variables.product.prodname_marketplace %}を使用する
{% data reusables.getting-started.marketplace %}
{% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Using the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Publishing and managing {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

## Part 5: Building securely on {% data variables.product.product_name %}
{% data variables.product.product_name %} has a variety of security features that help keep code and secrets secure in repositories. Some features are available for all repositories, while others are only available for public repositories and repositories with a {% data variables.product.prodname_GH_advanced_security %} license. For an overview of {% data variables.product.product_name %} security features, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

### 1. リポジトリを保護する
As a repository administrator, you can secure your repositories by configuring repository security settings. These include managing access to your repository, setting a security policy, and managing dependencies. For public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled, you can also configure code and secret scanning to automatically identify vulnerabilities and ensure tokens and keys are not exposed.

For more information on steps you can take to secure your repositories, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."

{% ifversion fpt or ghec %}
### 2. Managing your dependencies
A large part of building securely is maintaining your project's dependencies to ensure that all packages and applications you depend on are updated and secure. You can manage your repository's dependencies on {% data variables.product.product_name %} by exploring the dependency graph for your repository, using Dependabot to automatically raise pull requests to keep your dependencies up-to-date, and receiving Dependabot alerts and security updates for vulnerable dependencies.

For more information, see "[Securing your software supply chain](/code-security/supply-chain-security)."
{% endif %}

## Part 6: Participating in {% data variables.product.prodname_dotcom %}'s community

{% data reusables.getting-started.participating-in-community %}

### 1. Contributing to open source projects
{% data reusables.getting-started.open-source-projects %}

### 2. Interacting with {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Reading about {% data variables.product.product_name %} on {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Learning with {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab %}

{% ifversion fpt or ghec %}
### 5. Supporting the open source community
{% data reusables.getting-started.sponsors %}

### 6. {% data variables.contact.github_support %} への連絡
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## 参考リンク
- 「[{% data variables.product.prodname_team %} を使ってみる](/get-started/onboarding/getting-started-with-github-team)」
{% endif %}
{% endif %}

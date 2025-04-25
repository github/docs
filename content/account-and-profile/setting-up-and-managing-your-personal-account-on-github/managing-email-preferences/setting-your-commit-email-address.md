difficulty and availability and the available

Contributing to GitHub Docs documentation
Learn about how the GitHub Docs team creates documentation and how you can contribute.

Start here
Best practices for GitHub Docs
Follow these best practices to create documentation that's user-friendly and easy to understand.

Style guide
Follow this guide to make sure GitHub's documentation stays consistent and follows clear patterns that our readers can understand.

About the content model
The content model describes the structure and types of content that we publish.

About contributing to GitHub Docs
You can contribute to GitHub Docs content in several ways.

What's this
View all 
Contributing to GitHub Docs
October 02
Docs are being translated to French, German, Korean, and Russian
December 06
Webhook docs generated from the OpenAPI schema
November 16
All Contribute to GitHub Docs docs
Writing for GitHub Docs
Best practices for GitHub Docs
About GitHub's documentation philosophy
About GitHub's documentation fundamentals
Content design principles
Writing content to be translated
Making content findable in search
Versioning documentation
Using Markdown and Liquid in GitHub Docs
Using YAML frontmatter
Using videos in GitHub Docs
Creating reusable content
Creating screenshots
Creating diagrams for GitHub Docs
Creating tool switchers in articles
Configuring redirects
Changing an article's title
Annotating code examples
Templates
Style guide and content model
Style guide
About the content model
Contents of a GitHub Docs article
About topics
Conceptual content type
Referential content type
Procedural content type
Troubleshooting content type
Release note content type
Quickstart content type
Tutorial content type
About combining multiple content types
Collaborating on GitHub Docs
About contributing to GitHub Docs
Using Git on GitHub Docs
Using the TODOCS placeholder to leave notes
Using the content linter
Label reference
Setting up your environment to work on GitHub Docs
Working on GitHub Docs in a codespace
Creating a local environment
Troubleshooting your environment



---
title: Setting your commit email address
intro: 'You can set the email address that is used to author commits on {% data variables.product.github %} and on your computer.'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
---
## About commit email addresses

{% data variables.product.github %} uses your commit email address to associate commits with your account on {% data variables.product.github %}. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make.

For web-based Git operations, you can set your commit email address on {% data variables.product.github %}. For commits you push from the command line, you can set your commit email address in Git.

{% ifversion fpt or ghec %}Any commits you made prior to changing your commit email address are still associated with your previous email address.{% else %}After changing your commit email address on {% data variables.product.github %}, the new email address will be visible in all of your future web-based Git operations by default. Any commits you made prior to changing your commit email address are still associated with your previous email address.{% endif %}

{% ifversion fpt or ghec %}

> [!NOTE]
> {% data reusables.user-settings.no-verification-disposable-emails %}

{% endif %}

{% ifversion fpt or ghec %}To use your `noreply` email address for commits you push from the command line, use that email address when you set your commit email address in Git. To use your `noreply` address for web-based Git operations, set your commit email address on GitHub and choose to **Keep my email address private**.

You can also choose to block commits you push from the command line that expose your personal email address. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address).{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on {% data variables.product.github %}{% ifversion fpt or ghec %}, or the `noreply` email address provided to you in your email settings{% endif %}. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).

{% ifversion fpt or ghec %}

<a name="about-no-reply-email"></a>

> [!NOTE]
> If you created your account _after_ July 18, 2017, your `noreply` email address is an ID number and your username in the form of <code>ID+USERNAME@users.noreply.github.com</code>. If you created your account _prior to_ July 18, 2017, and enabled **Keep my email address private** prior to that date, your `noreply` email address is <code>USERNAME@users.noreply.github.com</code>. You can get an ID-based `noreply` email address by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

If you use your `noreply` email address for {% data variables.product.github %} to make commits and then change your username, those commits will not be associated with your account. This does not apply if you're using the ID-based `noreply` address from {% data variables.product.github %}. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username).{% endif %}

## Setting your commit email address on {% data variables.product.github %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to {% data variables.product.github %} from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

### Setting your email address for every repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}

1. {% data reusables.user-settings.set_your_email_address_in_git %}

   ```shell
   git config --global user.email "YOUR_EMAIL"
   ```

1. {% data reusables.user-settings.confirm_git_email_address_correct %}

   ```shell
   $ git config --global user.email
   email@example.com
   ```

1. {% data reusables.user-settings.link_email_with_your_account %}

### Setting your email address for a single repository

{% data variables.product.github %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on {% data variables.product.github %}.

You can change the email address associated with commits you make in a single repository. This will override your global Git configuration settings in this one repository, but will not affect any other repositories.

{% data reusables.command_line.open_the_multi_os_terminal %}

1. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
1. {% data reusables.user-settings.set_your_email_address_in_git %}

   ```shell
   git config user.email "YOUR_EMAIL"
   ```

1. {% data reusables.user-settings.confirm_git_email_address_correct %}

   ```shell
   $ git config user.email
   email@example.com
   ```

1. {% data reusables.user-settings.link_email_with_your_account %}

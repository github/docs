---
title: Creating a commit with multiple authors or on behalf of an organization
allowTitleToDifferFromFilename: true
intro: Attribute commits to multiple authors or organizations using trailers in commit messages for better collaboration and transparency.
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
  - /pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
  - /pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Create a commit with multiple authors
category:
  - Commit changes
contentType: how-tos
---

## Creating a commit with multiple authors

Add one or more `Co-authored-by` trailers to a commit message to attribute a commit to multiple authors.

### Required co-author information

Before adding a co-author, get the email address they want used in the trailer. For the commit to count as a contribution, use an email address associated with their account on {% data variables.location.product_location %}.

If a co-author keeps their email address private, use their {% data variables.product.github %}-provided `no-reply` email. See [AUTOTITLE](/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

### Creating co-authored commits using {% data variables.product.prodname_desktop %}

You can use {% data variables.product.prodname_desktop %} to create a commit with a co-author. See [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) and [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

### Creating co-authored commits on the command line

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Type your commit message and a short, meaningful description of your changes. After your commit description, add an empty line instead of a closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

1. Add one `Co-authored-by: name <name@example.com>` line for each co-author, then add the closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   > Co-authored-by: NAME <NAME@EXAMPLE.COM>
   > Co-authored-by: ANOTHER-NAME <ANOTHER-NAME@EXAMPLE.COM>"
   ```

The new commit and message appear on {% data variables.location.product_location %} after you push. See [AUTOTITLE](/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating co-authored commits on {% data variables.product.github %}

After you make changes in a file using the web editor on {% data variables.product.github %}, add co-author trailers before you commit.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add one `Co-authored-by: name <name@example.com>` line for each co-author.
1. Click **Commit changes** or **Propose changes**.

The new commit and message appear on {% data variables.location.product_location %}.

## Creating a commit on behalf of an organization

> [!NOTE]
> Creating a commit on behalf of an organization is not available on {% data variables.product.prodname_ghe_server %}.

Add an `on-behalf-of:` trailer to a signed commit to attribute it to an organization. To use the trailer, you must be a member of the organization, and both your commit email and the organization email must be in a domain verified by the organization.

### Creating commits with an `on-behalf-of` badge on the command line

1. Type your commit message and a short, meaningful description of your changes. After your commit description, add two empty lines instead of a closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

1. Add `on-behalf-of: @org <name@organization.com>`, then add the closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   on-behalf-of: @ORG NAME@ORGANIZATION.COM"
   ```

The new commit, message, and badge appear on {% data variables.product.prodname_dotcom %} after you push. See [AUTOTITLE](/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating commits with an `on-behalf-of` badge on {% data variables.product.github %}

After you make changes in a file using the web editor on {% data variables.product.github %}, add the organization trailer before you commit.

1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add `on-behalf-of: @org <name@organization.com>`.
1. Click **Commit changes** or **Propose changes**.

The new commit, message, and badge appear on {% data variables.product.prodname_dotcom %}.

## Further reading

* [AUTOTITLE](/account-and-profile/how-tos/contribution-settings/viewing-contributions-on-your-profile)
* [AUTOTITLE](/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions)
* [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors)
* [AUTOTITLE](/pull-requests/how-tos/commit-changes/changing-a-commit-message)
* [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) in the {% data variables.product.prodname_desktop %} documentation

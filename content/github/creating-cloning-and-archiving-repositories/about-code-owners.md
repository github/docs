---
title: About code owners
intro: You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

People with admin or owner permissions can set up a CODEOWNERS file in a repository.

The people you choose as code owners must have write permissions for the repository. When the code owner is a team, that team must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

### About code owners

Code owners are automatically requested for review when someone opens a pull request that modifies code that they own. Code owners are not automatically requested to review draft pull requests. For more information about draft pull requests, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)." When you mark a draft pull request as ready for review, code owners are automatically notified. If you convert a pull request to a draft, people who are already subscribed to notifications are not automatically unsubscribed. For more information, see "[Changing the stage of a pull request](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)."

When someone with admin or owner permissions has enabled required reviews, they also can optionally require approval from a code owner before the author can merge a pull request in the repository. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If a team has enabled code review assignments, the individual approvals won't satisfy the requirement for code owner approval in a protected branch. For more information, see "[Managing code review assignment for your team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
If a file has a code owner, you can see who the code owner is before you open a pull request. In the repository, you can browse to the file and hover over {% octicon "shield-lock" aria-label="The edit icon" %}.

![Code owner for a file in a repository](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

### CODEOWNERS file location

To use a CODEOWNERS file, create a new file called `CODEOWNERS` in the root, `docs/`, or `.github/` directory of the repository, in the branch where you'd like to add the code owners.

Each CODEOWNERS file assigns the code owners for a single branch in the repository. Thus, you can assign different code owners for different branches, such as `@octo-org/codeowners-team` for a code base on the default branch and `@octocat` for a {% data variables.product.prodname_pages %} site on the `gh-pages` branch.

For code owners to receive review requests, the CODEOWNERS file must be on the base branch of the pull request. For example, if you assign `@octocat` as the code owner for *.js* files on the `gh-pages` branch of your repository, `@octocat` will receive review requests when a pull request with changes to *.js* files is opened between the head branch and `gh-pages`.

### CODEOWNERS syntax

A CODEOWNERS file uses a pattern that follows most of the same rules used in [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) files, with [some exceptions](#syntax-exceptions). The pattern is followed by one or more {% data variables.product.prodname_dotcom %} usernames or team names using the standard `@username` or `@org/team-name` format. You can also refer to a user by an email address that has been added to their {% data variables.product.product_name %} account, for example `user@example.com`.

If any line in your CODEOWNERS file contains invalid syntax, the file will not be detected and will not be used to request reviews.
#### Example of a CODEOWNERS file
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat
```
#### Syntax exceptions
There are some syntax rules for gitignore files that do not work in CODEOWNERS files:
- Escaping a pattern starting with `#` using `\` so it is treated as a pattern and not a comment
- Using `!` to negate a pattern
- Using `[ ]` to define a character range



### Further reading

- "[Creating new files](/articles/creating-new-files)"
- "[Inviting collaborators to a personal repository](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Managing team access to an organization repository](/articles/managing-team-access-to-an-organization-repository)"
- "[Viewing a pull request review](/articles/viewing-a-pull-request-review)"

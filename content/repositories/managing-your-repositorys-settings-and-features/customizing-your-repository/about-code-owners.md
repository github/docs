---
title: About code owners
intro: You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.
permissions: 'People with write permissions for the repository can create or edit the CODEOWNERS file and be listed as code owners. People with admin or owner permissions can require that pull requests have to be approved by code owners before they can be merged.'
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
The people you choose as code owners must have write permissions for the repository. When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

## About code owners

Code owners are automatically requested for review when someone opens a pull request that modifies code that they own. Code owners are not automatically requested to review draft pull requests. For more information about draft pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)." When you mark a draft pull request as ready for review, code owners are automatically notified. If you convert a pull request to a draft, people who are already subscribed to notifications are not automatically unsubscribed. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."

When someone with admin or owner permissions has enabled required reviews, they also can optionally require approval from a code owner before the author can merge a pull request in the repository. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)."

If a file has a code owner, you can see who the code owner is before you open a pull request. In the repository, you can browse to the file and hover over {% octicon "shield-lock" aria-label="Owned by USER or TEAM (from CODEOWNERS line NUMBER)" %} to see a tool tip with codeownership details.

{% ifversion fpt or ghec %}
![Screenshot showing the header for a file. The cursor is hovering over the shield icon, which displays the tooltip "Owned by USER or TEAM (from CODEOWNERS line NUMBER)."](/assets/images/help/repository/code-owner-for-a-file.png)
{% else %}
![Screenshot showing the header for a file. The cursor is hovering over the shield icon, which displays the tooltip "Owned by USER or TEAM."](/assets/images/enterprise/repository/code-owner-for-a-file.png)
{% endif %}

## CODEOWNERS file location

To use a CODEOWNERS file, create a new file called `CODEOWNERS` in the `.github/`, root, or `docs/` directory of the repository, in the branch where you'd like to add the code owners. If `CODEOWNERS` files exist in more than one of those locations, {% data variables.product.prodname_dotcom %} will search for them in that order and use the first one it finds.

Each CODEOWNERS file assigns the code owners for a single branch in the repository. Thus, you can assign different code owners for different branches, such as `@octo-org/codeowners-team` for a code base on the default branch and `@octocat` for a {% data variables.product.prodname_pages %} site on the `gh-pages` branch.

For code owners to receive review requests, the CODEOWNERS file must be on the base branch of the pull request. For example, if you assign `@octocat` as the code owner for _.js_ files on the `gh-pages` branch of your repository, `@octocat` will receive review requests when a pull request with changes to _.js_ files is opened between the head branch and `gh-pages`.

## CODEOWNERS and forks

To trigger review requests, pull requests use the version of `CODEOWNERS` from the base branch of the pull request. The base branch is the branch that a pull request will modify if the pull request is merged.

If you create a pull request from a fork, and the base branch is in the upstream repository, then the pull request will use the `CODEOWNERS` file from that branch in the upstream repository. If the base branch is a branch within your fork, then the pull request will use the `CODEOWNERS` file from that branch in your fork, but this will only trigger review requests if the code owners are added to your fork specifically with `write` access.

When you view who is responsible for a file by hovering over {% octicon "shield-lock" aria-label="Owned by USER or TEAM (from CODEOWNERS line NUMBER)" %}, you will see information from the `CODEOWNERS` file for whichever branch in whichever repository you're looking at.

## CODEOWNERS file size

CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information is not shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.

## CODEOWNERS syntax

{% warning %}

**Warning:** There are some syntax rules for gitignore files that _do not work_ in CODEOWNERS files:
- Escaping a pattern starting with `#` using `\` so it is treated as a pattern and not a comment
- Using `!` to negate a pattern
- Using `[ ]` to define a character range

{% endwarning %}

A CODEOWNERS file uses a pattern that follows most of the same rules used in [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) files. The pattern is followed by one or more {% data variables.product.prodname_dotcom %} usernames or team names using the standard `@username` or `@org/team-name` format. Users and teams must have explicit `write` access to the repository, even if the team's members already have access.

If you want to match two or more code owners with the same pattern, all the code owners must be on the same line. If the code owners are not on the same line, the pattern matches only the last mentioned code owner.

{% ifversion fpt or ghec%}In most cases, you{% else %}You{% endif %} can also refer to a user by an email address that has been added to their account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, for example `user@example.com`. {% ifversion fpt or ghec %} You cannot use an email address to refer to a {% data variables.enterprise.prodname_managed_user %}. For more information about {% data variables.enterprise.prodname_managed_users %}, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

CODEOWNERS paths are case sensitive, because {% data variables.product.prodname_dotcom %} uses a case sensitive file system. Since CODEOWNERS are evaluated by {% data variables.product.prodname_dotcom %}, even systems that are case insensitive (for example, macOS) must use paths and files that are cased correctly in the CODEOWNERS file.

{% ifversion codeowners-errors %}
If any line in your CODEOWNERS file contains invalid syntax, that line will be skipped. When you navigate to the CODEOWNERS file in your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, you can see any errors highlighted. A list of errors in a repository's CODEOWNERS file is also accessible via the API. For more information, see "[AUTOTITLE](/rest/repos#list-codeowners-errors)" in the REST API documentation.
{% else %}
If any line in your CODEOWNERS file contains invalid syntax, the file will not be detected and will not be used to request reviews.
{% endif %}

### Example of a CODEOWNERS file

```text
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
*.js    @js-owner #This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

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

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in a `/logs` directory such as
# `/build/logs`, `/scripts/logs`, and `/deeply/nested/logs`. Any changes
# in a `/logs` directory will require approval from @octocat.
**/logs @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as this subdirectory has its own owner @doctocat
/apps/ @octocat
/apps/github @doctocat
```

## CODEOWNERS and branch protection

Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"

Codeowner Team---
title: Displaying verification statuses for all of your commits
shortTitle: Displaying verification for all commits
intro: You can enable vigilant mode for commit signature verification to mark all of your commits and tags with a signature verification status.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## About vigilant mode

When you work locally on your computer, Git allows you to set the author of your changes and the identity of the committer. This, potentially, makes it difficult for other people to be confident that commits and tags you create were actually created by you. To help solve this problem you can sign your commits and tags. For more information, see "[Signing commits](/github/authenticating-to-github/signing-commits)" and "[Signing tags](/github/authenticating-to-github/signing-tags)." {% data variables.product.prodname_dotcom %} marks signed commits and tags with a verification status. 

By default commits and tags are marked "Verified" if they are signed with a GPG or S/MIME key that was successfully verified. If a commit or tag has a signature that can't be verified by {% data variables.product.prodname_dotcom %}, we mark the commit or tag "Unverified." In all other cases no verification status is displayed.

However, you can give other users increased confidence in the identity attributed to your commits and tags by enabling vigilant mode in your {% data variables.product.prodname_dotcom %} settings. With vigilant mode enabled, all of your commits and tags are marked with one of three verification statuses.

![Signature verification statuses](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

You should only enable vigilant mode if you sign all of your commits and tags and use an email address that is verified for your account on {% data variables.product.product_name %} as your committer email address. After enabling this mode, any unsigned commits or tags that you generate locally and push to {% data variables.product.prodname_dotcom %} will be marked "Unverified."

{% data reusables.identity-and-permissions.verification-status-check %}

## Enabling vigilant mode

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. On the SSH Settings page, under "Vigilant mode," select **Flag unsigned commits as unverified**.

   ![Flag unsigned commits as unverified checkbox](/assets/images/help/commits/vigilant-mode-checkbox.png)
Skip to main content
GitHub Docs
About code owners
In this article
About code owners
CODEOWNERS file location
CODEOWNERS file size
CODEOWNERS syntax
CODEOWNERS and branch protection
Further reading
You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

You can define code owners in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server.

People with admin or owner permissions can set up a CODEOWNERS file in a repository.

The people you choose as code owners must have read permissions for the repository. When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

About code owners
Code owners are automatically requested for review when someone opens a pull request that modifies code that they own. Code owners are not automatically requested to review draft pull requests. For more information about draft pull requests, see "About pull requests." When you mark a draft pull request as ready for review, code owners are automatically notified. If you convert a pull request to a draft, people who are already subscribed to notifications are not automatically unsubscribed. For more information, see "Changing the stage of a pull request."

When someone with admin or owner permissions has enabled required reviews, they also can optionally require approval from a code owner before the author can merge a pull request in the repository. For more information, see "About protected branches."

If a file has a code owner, you can see who the code owner is before you open a pull request. In the repository, you can browse to the file and hover over .

Code owner for a file in a repository

CODEOWNERS file location
To use a CODEOWNERS file, create a new file called CODEOWNERS in the root, docs/, or .github/ directory of the repository, in the branch where you'd like to add the code owners.

Each CODEOWNERS file assigns the code owners for a single branch in the repository. Thus, you can assign different code owners for different branches, such as @octo-org/codeowners-team for a code base on the default branch and @octocat for a GitHub Pages site on the gh-pages branch.

For code owners to receive review requests, the CODEOWNERS file must be on the base branch of the pull request. For example, if you assign @octocat as the code owner for .js files on the gh-pages branch of your repository, @octocat will receive review requests when a pull request with changes to .js files is opened between the head branch and gh-pages.

CODEOWNERS file size
CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information is not shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.

CODEOWNERS syntax
A CODEOWNERS file uses a pattern that follows most of the same rules used in gitignore files, with some exceptions. The pattern is followed by one or more GitHub usernames or team names using the standard @username or @org/team-name format. Users must have read access to the repository and teams must have explicit write access, even if the team's members already have access. You can also refer to a user by an email address that has been added to their account on your GitHub Enterprise Server instance, for example user@example.com.

CODEOWNERS paths are case sensitive, because GitHub uses a case sensitive file system. Since CODEOWNERS are evaluated by GitHub, even systems that are case insensitive (for example, macOS) must use paths and files that are cased correctly in the CODEOWNERS file.

If any line in your CODEOWNERS file contains invalid syntax, the file will not be detected and will not be used to request reviews.

Example of a CODEOWNERS file
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

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
Syntax exceptions
There are some syntax rules for gitignore files that do not work in CODEOWNERS files:

Escaping a pattern starting with # using \ so it is treated as a pattern and not a comment
Using ! to negate a pattern
Using [ ] to define a character range
CODEOWNERS and branch protection
Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. For more information, see "About protected branches."

Further reading
"Creating new files"
"Inviting collaborators to a personal repository"
"Managing an individual's access to an organization repository"
"Managing team access to an organization repository"
"Viewing a pull request review"
Did this doc help you?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

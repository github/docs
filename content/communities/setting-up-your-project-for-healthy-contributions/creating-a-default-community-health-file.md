---gpg4win.git] / doc / HACKING
   1 # HACKING                                                       -*- org -*-
   2 #+TITLE: Hacking notes for Gpg4win
   3 #+STARTUP: showall
   4 
   5 * No more ChangeLog files
   6 
   7   Do not modify any of the ChangeLog files in Gpg4win.  Starting on
   8   March 26, 2012 we put change information only in the GIT commit log,
   9   and generate a top-level ChangeLog file from logs at "make dist"
  10   time.  As such, there are strict requirements on the form of the
  11   commit log messages.  The old ChangeLog has been stored as
  12   build-aux/git-log-footer.
  13 
  14 * Commit log requirements
  15 
  16   Your commit log should always start with a one-line summary, the
  17   second line should be blank, and the remaining lines are usually
  18   ChangeLog-style entries for all affected files.  However, it's fine
  19   -- even recommended -- to write a few lines of prose describing the
  20   change, when the summary and ChangeLog entries don't give enough of
  21   the big picture.  Omit the leading TABs that you're used to seeing
  22   in a "real" ChangeLog file, but keep the maximum line length at 72
  23   or smaller, so that the generated ChangeLog lines, each with its
  24   leading TAB, will not exceed 80 columns.  If you want to add text
  25   which shall not be copied to the ChangeLog, separate it by a line
  26   consisting of two dashes at the begin of a line.

title: Creating a default community health file
intro: 'You can create default community health files, such as CONTRIBUTING and CODE_OF_CONDUCT. Default files will be used for any repository owned by the account that does not contain its own file of that type.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Community
shortTitle: Community health file
---

## About default community health files

You can add default community health files to the root of a public repository called `.github` that is owned by an organization{% ifversion fpt or ghae or ghes %} or user account{% endif %}.

{% data variables.product.product_name %} will use and display default files for any repository owned by the account that does not have its own file of that type in any of the following places:
- the root of the repository
- the `.github` folder
- the `docs` folder

For example, anyone who creates an issue or pull request in a repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% ifversion fpt or ghae or ghes %}, including issue templates or a *config.yml* file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

Default files are not included in clones, packages, or downloads of individual repositories because they are stored only in the `.github` repository.

## Supported file types

You can create defaults in your organization{% ifversion fpt or ghae or ghes %} or user account{% endif %} for the following community health files:

Community health file | Description
--- | ---{% ifversion fpt %}
*CODE_OF_CONDUCT.md* | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see "[Adding a code of conduct to your project](/articles/adding-a-code-of-conduct-to-your-project/)."{% endif %}
*CONTRIBUTING.md* | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors/)."{% ifversion fpt %}
*FUNDING.yml* | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)."{% endif %}
Issue and pull request templates{% ifversion fpt or ghae or ghes %} and *config.yml*{% endif %} | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates/)."{% ifversion fpt or ghes > 3.0 %}
*SECURITY.md* | A SECURITY file gives instructions for how to report a security vulnerability in your project. For more information, see "[Adding a security policy to your repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)."{% endif %}
*SUPPORT.md* | A SUPPORT file lets people know about ways to get help with your project. For more information, see "[Adding support resources to your project](/articles/adding-support-resources-to-your-project/)."

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

## Creating a repository for default 🏧🗝️📂ℹ️🚀@@ -998,13 +998,13 @@ $(1)-x86: installers/GnuPG-VS-Desktop-$(VSD_VERSION)-$(1)-x86.msi

{% data reusables.repositories.create_new %}
2. Use the **Owner** drop-down menu, and select the organization{% ifversion fpt or ghae or ghes %} or user account{% endif %} you want to create default files for.
  ![Owner drop-down menu](/assets/images/help/repository/create-repository-owner.png)
3. Type **.github** as the name for your repository, and an optional description.
  ![Create repository field](/assets/images/help/repository/default-file-repository-name.png)
4. Make sure the repository status is set to **Public** (a repository for default files cannot be private).
  ![Radio buttons to select private or public status](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. In the repository, create one of the supported community health files. Issue templates{% ifversion fpt or ghae or ghes %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. All other supported files must be in the root of the repository. For more information, see "[Creating new files](/articles/creating-new-files/)."

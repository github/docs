# About Permissions for GitHub Packages

Learn how to manage permissions for your packages on GitHub.

## Package Scope Types

GitHub Packages supports two types of scopes for packages:

### 1. User/Organization-Scoped Packages (Granular Permissions)

These packages are **scoped to a personal user account or organization**, and their **access control and visibility can be managed independently** of any repository they are connected to.

**Registries that support granular permissions:**

* GitHub Container Registry (`ghcr.io`)
* npm registry (in newer versions)
* NuGet registry (in newer versions)
* RubyGems registry (in newer versions)

You can change the visibility and permissions of these packages via the **package settings page**, even if the repository changes.

### 2. Repository-Scoped Packages

These packages **inherit the permissions and visibility of the repository** they are published from. They are tightly linked to the repository and managed through its settings.

**Registries that only support repository-scoped packages:**

* Docker registry (`docker.pkg.github.com`)
* npm registry (in older versions)
* NuGet registry (in older versions)
* RubyGems registry (in older versions)
* Apache Maven registry
* Gradle registry

To find a repository-scoped package:

* Go to the main page of the repository.
* Click **Packages** on the right sidebar.

## Visibility and Access Permissions

To control who can see or use a package, GitHub provides visibility options such as:

* **Private**: Only users with explicit access can see or install the package.
* **Internal**: Available only within the same GitHub Enterprise.
* **Public**: Anyone can view or install the package.

Access permissions for performing actions on packages are granted based on token scopes and repo roles.

## Token Scopes and Required Permissions

To use or manage packages, you must authenticate using either a **Personal Access Token (PAT)** or `GITHUB_TOKEN` in workflows.

### Personal Access Token Scopes

| Scope             | Description                   | Required Repository Permission |
| ----------------- | ----------------------------- | ------------------------------ |
| `read:packages`   | Download and install packages | Read                           |
| `write:packages`  | Upload and publish packages   | Write                          |
| `delete:packages` | Delete packages               | Admin                          |

> Example: To delete a package, your token must have `delete:packages` **and** `read:packages`, and your user account must have **admin** rights on the repository.

For more info:

* [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Using `GITHUB_TOKEN` in GitHub Actions

You can use the automatically generated `GITHUB_TOKEN` in GitHub Actions workflows to:

* Publish
* Install
* Delete
* Restore

**Only for packages linked to the same repository where the workflow runs.**

If your workflow needs access to packages in **other repositories**, use a **PAT** instead.

More info:

* [Publishing and installing a package with GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)
* [Using the `GITHUB_TOKEN` in workflows](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)

## Ensuring Workflow Access for Granular Packages

For packages with granular permissions (user/org-scoped), you must **manually grant GitHub Actions access** to workflows. This is done in the **package’s settings page**.

Without this access:

* GitHub Actions won't be able to install or publish packages.
* You may see authentication errors in workflows.

## Repository Transfers and Packages

When transferring a repository to a different user or organization, package behavior depends on the package type:

### For User/Org-Scoped Packages:

* The **package remains owned** by the original user or org.
* If the package was **linked to the repo**, the link is **removed** after the transfer.
* Any GitHub Actions or Codespaces using the package **lose access**.
* If the package inherited repo permissions, access is lost.

### For Repository-Scoped Packages:

* The package is **transferred along with the repository**.
* Billing and ownership shift to the **new repository owner**.
* If the old owner is removed from the repo, they **lose package access**.

## Summary

| Package Scope     | Registry Support                                | Permissions Location | Transfer Behavior                 |
| ----------------- | ----------------------------------------------- | -------------------- | --------------------------------- |
| User/Org-Scoped   | Container, npm (v2), NuGet (v2), RubyGems (v2)  | Package Settings     | Package stays with original owner |
| Repository-Scoped | Docker, Maven, Gradle, older versions of others | Repository Settings  | Package moves with the repository |

---
title: Permission levels for user-owned project boards
intro: 'A project board owned by a user account has two permission levels: the project board owner and collaborators.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### Permissions overview

There is only one owner of a user-owned project board; this permission cannot be shared with another user account. In addition to the owner, other people can collaborate on project boards.

There are three levels of permissions for project board collaborators:

{% data reusables.project-management.project-board-permissions %}

### Owner and admin permissions for a user-owned project board

The project board owner and collaborators with admin access have full control of the project board. In addition to all the permissions allowed by project board collaborators, a project board owner and collaborator with admin access can:

- [Manage, view, and add collaborators](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configure a project board as {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private](/articles/changing-project-board-visibility)
- [Delete a project board](/articles/deleting-a-project-board/)
- [Close a project board](/articles/closing-a-project-board/)
- [Reopen a closed project board](/articles/reopening-a-closed-project-board)

### Read and write permissions for a user-owned project board

Collaborators with read access to a user-owned project board can:

- View a project board
- Copy a project board
- Filter cards on a project board

Collaborators with write access to a user-owned project board can:

- View a project board
- Copy a project board
- Filter cards on a project board
- Edit a project board
- Link a repository to a project board
- Configure automation for project boards
- Copy a project board
- Add issues and pull requests to a project board
- Add notes to a project board
- Track progress on your project board
- Archive cards on a project board

### Project board visibility

You can change the project board's visibility from private to {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and back again. By default, user-owned project boards are private. For more information, see "[Changing project board visibility](/articles/changing-project-board-visibility)."

### Дополнительная литература

  - "[Managing access to your user account's project boards](/articles/managing-access-to-your-user-account-s-project-boards)"

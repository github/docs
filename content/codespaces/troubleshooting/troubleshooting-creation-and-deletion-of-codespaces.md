---
title: Troubleshooting creation and deletion of Codespaces
intro: This article provides troubleshooting steps for common issues you may experience when creating or deleting a codespace, including storage and configuration issues.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
---

## Creating codespaces

{% data variables.product.prodname_codespaces %} are not available for all repositories. If the “Open with Codespaces” button is missing, {% data variables.product.prodname_codespaces %} may not be available for that repository. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)."

If you create a codespace and it does not open:

1. Try reloading the page in case there was a caching or reporting problem.
2. Go to your {% data variables.product.prodname_codespaces %} page: https://github.com/codespaces and check whether the new codespace is listed there. The process may have successfully created the codespace but failed to report back to your browser. If the new codespace is listed, you can open it directly from that page.
3. Retry creating the codespace for the repository to rule out a transient communication failure.

If you still cannot create a codespace for a repository where {% data variables.product.prodname_codespaces %} are available, {% data reusables.codespaces.contact-support %}

## Deleting codespaces

The owner of a codespace has full control over it and only they can delete their codespaces. You cannot delete a codespace created by another user.

## Container storage

When you create a codespace, it has a finite amount of storage and over time it may be necessary for you to free up space. Try running any of the following commands in the {% data variables.product.prodname_codespaces %} terminal to free up storage space.

- Remove packages that are no longer used by using `sudo apt autoremove`.
- Clean the apt cache by using `sudo apt clean`.
- See the top 10 largest files in the codespace with`sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Delete unneeded files, such as build artifacts and logs.

Some more destructive options:

- Remove unused Docker images, networks, and containers by using `docker system prune` (append `-a` if you want to remove all images, and `--volumes` if you want to remove all volumes).
- Remove untracked files from working tree: `git clean -i`.

## Configuration

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Review the creation logs, update the configuration as needed, and run **Codespaces: Rebuild Container** in the command palette to retry. For more information, see " [Codespaces logs](/codespaces/troubleshooting/codespaces-logs)" and "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

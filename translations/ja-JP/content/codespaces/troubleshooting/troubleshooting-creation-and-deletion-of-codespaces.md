---
title: Troubleshooting creation and deletion of Codespaces
intro: 'This article provides troubleshooting steps for common issues you may experience when creating or deleting a codespace, including storage and configuration issues.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
---

## Creating codespaces

### No access to create a codespace
{% data variables.product.prodname_codespaces %} are not available for all repositories. If the "Open with Codespaces" button is missing, {% data variables.product.prodname_codespaces %} may not be available for that repository. 詳しい情報については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)」を参照してください。

If you believe your organization has [enabled {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization), make sure that an organization owner or billing manager has set the spending limit for {% data variables.product.prodname_codespaces %}. 詳しい情報については「[{% data variables.product.prodname_codespaces %}の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

### Codespace does not open when created

If you create a codespace and it does not open:

1. Try reloading the page in case there was a caching or reporting problem.
2. Go to your {% data variables.product.prodname_codespaces %} page: https://github.com/codespaces and check whether the new codespace is listed there. The process may have successfully created the codespace but failed to report back to your browser. If the new codespace is listed, you can open it directly from that page.
3. Retry creating the codespace for the repository to rule out a transient communication failure.

If you still cannot create a codespace for a repository where {% data variables.product.prodname_codespaces %} are available, {% data reusables.codespaces.contact-support %}

## Deleting codespaces

The owner of a codespace has full control over it and only they can delete their codespaces. You cannot delete a codespace created by another user.

You can delete your codespaces in the browser, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. {% data variables.product.prodname_cli %} also allows you to bulk delete codespaces. For more information, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

## Container storage

codespace を作成すると、ストレージ容量に限りがあるため、時間の経過とともにスペースを解放する必要がある場合があります。 Try running any of the following commands in the {% data variables.product.prodname_codespaces %} terminal to free up storage space.

- Remove packages that are no longer used by using `sudo apt autoremove`.
- `sudo apt clean` を使用して apt キャッシュをクリーンアップする.
- See the top 10 largest files in the codespace with`sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Delete unneeded files, such as build artifacts and logs.

Some more destructive options:

- Remove unused Docker images, networks, and containers by using `docker system prune` (append `-a` if you want to remove all images, and `--volumes` if you want to remove all volumes).
- 追跡されていないファイルをワーキングツリーから削除する: `git clean -i`.

## Configuration

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Review the creation logs, update the dev container configuration as needed, and run **Codespaces: Rebuild Container** in the {% data variables.product.prodname_vscode_command_palette %} to retry. For more information, see " [Codespaces logs](/codespaces/troubleshooting/codespaces-logs)" and "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

---
title: 削除したリポジトリの復元
intro: You can restore deleted repositories to recover their contents.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
---

## リポジトリの復元について

通常は、誰かがリポジトリを削除するとそのリポジトリは90日間はディスク上にあり、サイト管理ダッシュボード経由でリストアできます。 詳しい情報については「[サイトアドミンのダッシュボード](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)」を参照してください。

Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

削除したリポジトリが復元できるようになるまでには、最大で1時間かかる場合があります。

リポジトリを復元しても、リリース添付ファイルやチーム権限は復元されません。 復元された Issue はラベル付けされません。

## 削除したリポジトリの復元

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## 参考リンク

- "[Placing a legal hold on a user or organization](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"

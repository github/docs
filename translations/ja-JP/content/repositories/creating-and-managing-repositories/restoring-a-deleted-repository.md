---
title: 削除したリポジトリの復元
intro: 削除したリポジトリの一部を復元して、内容を回復することができます。
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
---

{% ifversion fpt or ghec %}
Anyone can restore deleted repositories that were owned by their own personal account. Organizationのオーナーは、そのOrganizationが所有していて削除したリポジトリを復元できます。

## リポジトリの復元について

削除したリポジトリは、そのリポジトリが現在空ではないフォークネットワークの一部でない限り、90日以内であれば復元できます。 フォークネットワークは、親リポジトリ、リポジトリのフォーク、リポジトリのフォークのフォークで構成されます。 リポジトリがフォークネットワークの一部だった場合は、ネットワークの他のリポジトリすべてが削除されるか、ネットワークから切り離されていない限り、復元できません。 フォークに関する詳細は「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」を参照してください。

現在空ではないフォークネットワークの一部だったリポジトリを復元したい場合は、{% data variables.contact.contact_support %}にお問い合わせください。

削除したリポジトリが復元できるようになるまでには、最大で1時間かかる場合があります。

リポジトリを復元しても、リリース添付ファイルやチーム権限は復元されません。 復元された Issue はラベル付けされません。

## Restoring a deleted repository that was owned by a personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.repo-tab %}
{% data reusables.user-settings.deleted-repos %}
{% data reusables.user-settings.restore-repo %}
{% data reusables.user-settings.restore-confirmation %}

## Organizationが所有していて削除したリポジトリを復元する


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user-settings.restore-repo %}
{% data reusables.user-settings.restore-confirmation %}

## 参考リンク

- 「[リポジトリを削除する](/articles/deleting-a-repository)」

{% else %}
Usually, deleted repositories can be restored within 90 days by a {% data variables.product.prodname_enterprise %} site administrator. 詳しい情報については、「[削除されたリポジトリを復元する](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)」を参照してください。
{% endif %}

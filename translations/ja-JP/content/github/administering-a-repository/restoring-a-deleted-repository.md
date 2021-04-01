---
title: 削除したリポジトリの復元
intro: 削除したリポジトリの一部を復元して、内容を回復することができます。
redirect_from:
  - /articles/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
topics:
  - repositories
---

自分自身のアカウントで所有していて削除したリポジトリは、誰でも復元できます。 Organizationのオーナーは、そのOrganizationが所有していて削除したリポジトリを復元できます。

### リポジトリの復元について

削除したリポジトリは、そのリポジトリが現在空ではないフォークネットワークの一部でない限り、90日以内であれば復元できます。 フォークネットワークは、親リポジトリ、リポジトリのフォーク、リポジトリのフォークのフォークで構成されます。 リポジトリがフォークネットワークの一部だった場合は、ネットワークの他のリポジトリすべてが削除されるか、ネットワークから切り離されていない限り、復元できません。 フォークに関する詳細は「[フォークについて](/articles/about-forks)」を参照してください。

現在空ではないフォークネットワークの一部だったリポジトリを復元したい場合は、{% data variables.contact.contact_support %}にお問い合わせください。

削除したリポジトリが復元できるようになるまでには、最大で1時間かかる場合があります。

リポジトリを復元しても、リリース添付ファイルやチーム権限は復元されません。 Issues that are restored will not be labeled.

### ユーザアカウントが所有していて削除したリポジトリを復元する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
{% data reusables.user_settings.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Organizationが所有していて削除したリポジトリを復元する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### 参考リンク

- 「[リポジトリを削除する](/articles/deleting-a-repository)」

---
title: OrganizationでのPull Requestのレビューの管理
intro: OrganizationでPull Requestの承認や変更のリクエストを行えるユーザを制限できます。
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Pull Requestレビューの管理
---

## コードレビューの制限について

デフォルトでは、パブリックなリポジトリにおいてはどのユーザもPull Requestの承認や変更リクエストをするレビューをサブミットできます。

Organizationが所有するパブリックリポジトリでは、Pull Requestの承認や変更リクエストを行える人を制限できます。 コードレビューの制限を有効化すると、パブリックリポジトリでPull Requestに湖面度することは誰でもできますが、Pull Requestの承認や変更リクエストができるのは、リポジトリに明示的なアクセスを持っている人に限られます。

個々のリポジトリでコードレビューの制限を有効化することもできます。 Organizationで制限を有効化すると、そのOrganizationが所有する個々のリポジトリに対する制限は上書きされます。 詳しい情報については「[リポジトリにおけるPull Requestレビューの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)」を参照してください。

## コードレビューの制限の有効化

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. サイドバーの"Access"セクションで、**{% octicon "report" aria-label="The report icon" %} Moderation**をクリックしてください。
1. 「{% octicon "report" aria-label="The report icon" %} Moderation（モデレーション）」の下で、**Code review limits（コードレビューの制限）**をクリックしてください。 ![Organizationのコードレビュー制限のサイドバーアイテムのスクリーンショット](/assets/images/help/organizations/code-review-limits-organizations.png)
1. 画面上の情報をレビューしてください。 明示的なアクセスを持つ人にだけレビューを制限するには**Limit review on all repositories（すべてのリポジトリ上でレビューを制限）**を、あるいはOrganizationのすべてのパブリックリポジトリから制限を削除するには**Remove review limits from all repositories（すべてのリポジトリからレビューの制限を削除）**をクリックしてください。 ![Organizationのコードレビュー制限設定のスクリーンショット](/assets/images/help/organizations/code-review-limits-organizations-settings.png)

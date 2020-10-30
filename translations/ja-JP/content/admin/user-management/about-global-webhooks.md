---
title: グローバルwebhookについて
intro: グローバル webhook はイベントについてインスタンスレベルで通知してくれます。
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
versions:
  enterprise-server: '*'
---

グローバルwebhookは、インスタンス上のユーザおよびOrganizationの管理に対するルールの自動的なモニタリング、対応、強制に利用できます。 たとえば以下のような場合に動作するようにwebhookを設定できます:
- ユーザアカウントが作成または削除される
- Organizationが作成または削除される
- コラボレータがリポジトリに追加、またはリポジトリから削除される
- リポジトリがフォークされる

![グローバル webhook のリスト](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

webhook の構成に関する詳しい情報については「[グローバル webhook を管理する](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-global-webhooks)」を参照してください。

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

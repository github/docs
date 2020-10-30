---
title: セルフホストランナーへのアクセスの管理
intro: Organizationのセルフホストランナーへどのリポジトリがジョブを送れるかを制御できます。
versions:
  free-pro-team: '*'
---

Organizationレベルで追加されたセルフホストランナーは、そのOrganization内のすべてのリポジトリのジョブを処理できます。 セルフホストランナーへのアクセスを制限する必要があるなら、プライベートリポジトリのジョブだけを処理するようにポリシーを設定したり、許可されたリポジトリのリストを定義したりすることができます。

### Organizationのランナーへアクセスできるリポジトリの制御

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. "Self-hosted runners（セルフホストランナー）"の隣の**Manage repository permissions（リポジトリの権限の管理）**をクリックしてください。 ![リポジトリの権限の管理](/assets/images/help/settings/actions-runner-manage-permissions.png)

1. ドロップダウンメニューから、以下のいずれかを選択してください。

   * **All repositories（すべてのリポジトリ）** - Organization内のすべてのパブリック及びプライベートのリポジトリがOrganizationのセルフホストランナーにジョブを送信できます。
   * **Private repositories（プライベートリポジトリ）** - Organization内のプライベートリポジトリだけがOrganizationのセルフホストランナーにジョブを送信できます。
   * **Selected repositories（選択されたリポジトリ）** - リポジトリの選択メニューを使い、ジョブをOrganizationのセルフホストランナーに送信できるOrganization内のリポジトリを選択してください。

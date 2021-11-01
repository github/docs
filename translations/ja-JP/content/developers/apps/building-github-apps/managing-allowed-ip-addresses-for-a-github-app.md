---
title: GitHub App に対する許可 IP アドレスを管理する
intro: '{% data variables.product.prodname_github_app %} に IP 許可リストを追加して、アプリケーションが Organization 自身の許可リストによりブロックされるのを防ぐことができます。'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 許可 IPアドレスの管理
---

## {% data variables.product.prodname_github_apps %} に対する IPアドレス許可リストについて

Enterprise および Organization のオーナーは、IPアドレス許可リストを設定することで、アセットへのアクセスを制限できます。 このリストは、接続が許可される IPアドレスを指定するものです。 詳しい情報については、「[Enterprise にセキュリティ設定のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」以下を参照してください。

Organization に許可リストがある場合、{% data variables.product.prodname_github_app %} 経由で接続するサードパーティアプリケーションは、以下の両方が真でない限りアクセスを拒否されます。

* {% data variables.product.prodname_github_app %} の作成者が、そのアプリケーションに対し、アプリケーションが動作する IP アドレスを指定した許許可リストを設定していること。 その詳しい方法については後述します。
* Organizationのオーナーが {% data variables.product.prodname_github_app %}の許可リストにあるアドレスで、自らの許可リストを追加できるようにしていること。 詳細は「[ Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps)」を参照してください。

{% data reusables.apps.ip-allow-list-only-apps %}

## {% data variables.product.prodname_github_app %} に IPアドレス許可リストを追加する

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. [IP allow list] セクションまで下にスクロールします。 ![GitHub Appの基本情報セクション](/assets/images/github-apps/github-apps-allow-list-empty.png)
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
  この説明は参考用であり、{% data variables.product.prodname_github_app %} がインストールされた Organization の許可リストで使用するものではありません。 Organization の許可リストには、説明として [Managed by the NAME GitHub App] が含まれることになります。
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

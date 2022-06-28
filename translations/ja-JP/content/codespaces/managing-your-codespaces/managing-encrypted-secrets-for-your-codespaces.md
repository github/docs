---
title: Codespaces の暗号化されたシークレットを管理する
intro: 環境変数を介してコードスペースにアクセスする、トークンなどの機密情報を保存できます。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: 暗号化されたシークレット
---

 


## {% data variables.product.prodname_codespaces %} の暗号化されたシークレットについて

You can add encrypted secrets to your personal account that you want to use in your codespaces. たとえば、次のような機密情報を暗号化されたシークレットとして保存しアクセスするとよいでしょう。

- クラウドサービスへの個人アクセストークン
- サービスプリンシパル
- プラン識別子
- [Credentials for a private image registry](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

各シークレットにアクセスできるリポジトリを選択できます。 そして、シークレットへのアクセス権があるリポジトリ用に作成した任意のコードスペースでそのシークレットを使用できます。

{% data reusables.codespaces.secrets-on-start %}

### シークレットに名前を付ける

{% data reusables.codespaces.secrets-naming %} たとえば、リポジトリレベルで作成されたシークレットは、そのリポジトリ内で一意の名前である必要があります。

  {% data reusables.codespaces.secret-precedence %}

### シークレットの制限

{% data variables.product.prodname_codespaces %} には最大 100 個のシークレットを保存できます。

シークレットの容量は最大64 KBです。

## シークレットを追加する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. [Codespaces secrets] の右にある [**New secret**] をクリックします。 ![[New secret] ボタン](/assets/images/help/settings/codespaces-new-secret-button.png)
1. [Name] で、シークレットの名前を入力します。 ![[Name] テキストボックス](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. [**Add secret（シークレットの追加）**] をクリックします。

## シークレットを編集する

既存のシークレットの値を更新したり、シークレットがアクセスできるリポジトリを変更したりすることができます。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. [Codespaces secrets] で、編集するシークレットの右にある [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/settings/codespaces-secret-update-button.png)
1. [Value] にある [**enter a new value**] をクリックします。 ![[enter a new value] リンク](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. リポジトリへのシークレットのアクセス権を削除する場合は、リポジトリを選択解除します。 ![リポジトリへのアクセス権を削除するチェックボックス](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. [**Save changes**] をクリックします。

## シークレットを削除する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. [Codespaces secrets] で、削除するシークレットの右にある [**Delete**] をクリックします。 ![[Delete] ボタン](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 警告を読んで、**OK**をクリックしてください。 ![シークレットの削除の確認](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## 参考リンク

- "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)"

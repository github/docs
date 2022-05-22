---
title: Managing encrypted secrets for your codespaces
intro: 環境変数を介してコードスペースにアクセスする、トークンなどの機密情報を保存できます。
versions:
  free-pro-team: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
---

{% data reusables.codespaces.release-stage %}


### {% data variables.product.prodname_codespaces %} の暗号化されたシークレットについて

コードスペースで使用するユーザアカウントに、暗号化されたシークレットを追加できます。 たとえば、次のような機密情報を暗号化されたシークレットとして保存しアクセスするとよいでしょう。

- クラウドサービスへの個人アクセストークン
- サービスプリンシパル
- プラン識別子
- [Credentials for a private image registry](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

各シークレットにアクセスできるリポジトリを選択できます。 そして、シークレットへのアクセス権があるリポジトリ用に作成した任意のコードスペースでそのシークレットを使用できます。

{% data reusables.codespaces.secrets-on-start %}

#### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository.

  {% data reusables.codespaces.secret-precedence %}

#### シークレットの制限

You can store up to 100 secrets for {% data variables.product.prodname_codespaces %}.

シークレットの容量は最大64 KBです。

### シークレットを追加する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [Codespaces secrets] の右にある [**New secret**] をクリックします。 ![[New secret] ボタン](/assets/images/help/settings/codespaces-new-secret-button.png)
1. [Name] で、シークレットの名前を入力します。 ![[Name] テキストボックス](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. [**Add secret（シークレットの追加）**] をクリックします。

### シークレットを編集する

既存のシークレットの値を更新したり、シークレットがアクセスできるリポジトリを変更したりすることができます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [Codespaces secrets] で、編集するシークレットの右にある [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/settings/codespaces-secret-update-button.png)
1. [Value] にある [**enter a new value**] をクリックします。 ![[enter a new value] リンク](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. リポジトリへのシークレットのアクセス権を削除する場合は、リポジトリを選択解除します。 ![リポジトリへのアクセス権を削除するチェックボックス](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. [**Save changes**] をクリックします。

### シークレットを削除する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [Codespaces secrets] で、削除するシークレットの右にある [**Delete**] をクリックします。 ![[Delete] ボタン](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 警告を読んで、**OK**をクリックしてください。 ![シークレットの削除の確認](/assets/images/help/settings/codespaces-secret-delete-warning.png)

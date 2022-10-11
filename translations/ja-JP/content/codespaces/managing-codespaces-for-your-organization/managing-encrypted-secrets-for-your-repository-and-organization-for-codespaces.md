---
title: リポジトリの暗号化されたシークレットと Codespaces の Organization を管理する
shortTitle: 暗号化されたシークレット
intro: '暗号化されたシークレットを使用すると、機密情報を Organization、リポジトリ、または {% data variables.product.prodname_codespaces %} に保存できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
topics:
  - Codespaces
  - Secret store
  - Security
---

 

## シークレットについて

シークレットは、Organization またはリポジトリで作成する暗号化された環境変数です。 作成したシークレットは、{% data variables.product.prodname_codespaces %} で使用できます。 GitHub は [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) を使用して、シークレットが GitHub に到達する前に暗号化し、codespace で使用する場合にのみ復号化します。

Organization レベルのシークレットを使用すると、複数のリポジトリ間でシークレットを共有できるため、重複するシークレットを作成する必要が軽減されます。 アクセスポリシーを使用して、Organization のシークレットを使用できるリポジトリを制御できます。

{% data reusables.codespaces.secrets-on-start %}

### シークレットに名前を付ける

{% data reusables.codespaces.secrets-naming %} たとえば、リポジトリレベルで作成されたシークレットは、そのリポジトリ内で一意の名前である必要があり、Organization レベルで作成されたシークレットは、そのレベルで一意の名前である必要があります。

  {% data reusables.codespaces.secret-precedence %}

### シークレットの制限

Organization ごとに最大 100 個のシークレット、リポジトリごとに最大 100 個のシークレットを保存できます。

シークレットの容量は最大64 KBです。

## リポジトリにシークレットを追加する

Organization リポジトリのシークレットを作成するには、管理者アクセス権が必要です。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. ページを下にスクロールし、[**Secrets**] で [**Codespaces**] を選択します。 ![サイドバーの Codespaces オプション](/assets/images/help/codespaces/codespaces-option-secrets.png)
1. ページの上部にある [**New repository secret**] をクリックします。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. [**Add secret（シークレットの追加）**] をクリックします。

## Organization にシークレットを追加する

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. ページを下にスクロールし、[**Secrets**] で [**Codespaces**] を選択します。 ![サイドバーの Codespaces オプション](/assets/images/help/codespaces/codespaces-option-secrets-org.png)
1. ページの上部にある [**New organization secret**] をクリックします。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。 ![プライベートリポジトリが選択された [Repository Access] リスト](/assets/images/help/codespaces/secret-repository-access.png)
1. [**Add secret（シークレットの追加）**] をクリックします。

## Organizationレベルのシークレットへのアクセスの確認

Organization 内のシークレットに適用されているアクセスポリシーを確認できます。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. シークレットのリストには、設定済みのアクセス許可とポリシーが含まれます。 例: ![シークレットリスト](/assets/images/help/settings/actions-org-secrets-list.png)
1. 各シークレットに設定されているアクセス許可の詳細については、[**Update（更新）**] をクリックしてください。

## 参考リンク

- "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"

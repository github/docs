---
title: シークレットスキャンニングについて
intro: '{% data variables.product.product_name %} はリポジトリをスキャンして既知のシークレットのタイプを探し、誤ってコミットされたシークレットの不正使用を防止します。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
---

プロジェクトを外部サービスと通信させる場合、認証にトークンまたは秘密鍵を使用できます。 トークンや秘密鍵は、サービスプロバイダが発行できるシークレットです。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 シークレットは、プロジェクトのリポジトリの外の、安全な専用の場所に保存することをお勧めします。

誰かが {% data variables.product.company_short %} パートナーのシークレットをパブリックまたはプライベートリポジトリにチェックインすると、{% data variables.product.prodname_secret_scanning %} がシークレットを検出し、リークの影響を軽減することができます。

サービスプロバイダは {% data variables.product.company_short %} と提携して、スキャンのためのシークレットフォーマットを提供することができます。 詳しい情報については、「[シークレットスキャニング](/partnerships/secret-scanning)」を参照してください。

### パブリックリポジトリの {% data variables.product.prodname_secret_scanning %} について

パブリックリポジトリにプッシュすると、{% data variables.product.product_name %} がコミットの内容をスキャンしてシークレットを探します。 プライベートリポジトリをパブリックに切り替えると、{% data variables.product.product_name %} はリポジトリ全体をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} が認証情報一式を検出すると、弊社はそのシークレットを発行したサービスプロバイダに通知します。 サービスプロバイダは認証情報を検証し、シークレットを取り消すか、新しいシークレットを発行するか、または直接連絡する必要があるかを決定します。これは、ユーザまたはサービスプロバイダに関連するリスクに依存します。

現在 {% data variables.product.product_name %} は、パブリックリポジトリをスキャンして、次のサービスプロバイダが発行したシークレットを探します。

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Datadog
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- MessageBird
- npm
- NuGet
- Palantir
- Plivo
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

### プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} について

{% data reusables.secret-scanning.beta %}

{% data variables.product.prodname_secret_scanning %} が有効化されているプライベートリポジトリにコミットをプッシュすると、{% data variables.product.product_name %} はコミットの内容をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} がプライベートリポジトリでシークレットを検出すると、{% data variables.product.prodname_dotcom %} はアラートを送信します。

- {% data variables.product.prodname_dotcom %} は、リポジトリ管理者と Organizationのオーナーにメールアラートを送信します。

- {% data variables.product.prodname_dotcom %} は、リポジトリにアラートを表示します。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。

現在 {% data variables.product.product_name %} は、プライベートリポジトリをスキャンして、次のサービスプロバイダが発行したシークレットを探します。

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- npm
- NuGet
- Palantir
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

{% note %}

**注釈:** {% data variables.product.prodname_secret_scanning_caps %} では現在、シークレットを検出するための独自のパターンを定義することはできません。

{% endnote %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- [アカウントとデータをセキュアに保つ](/github/authenticating-to-github/keeping-your-account-and-data-secure)

---
title: 'フェーズ2: 大規模な有効化の準備'
intro: 'このフェーズでは、開発者を準備し、リポジトリに関するデータを収集して、チームの準備が整い、パイロットプログラムと{% data variables.product.prodname_code_scanning %}及び{% data variables.product.prodname_secret_scanning %}のロールアウトに必要なものがすべて揃っていることを確認します。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. 準備
miniTocMaxHeadingLevel: 3
---

{% note %}

この記事は、{% data variables.product.prodname_GH_advanced_security %}の大規模な採用に関するシリーズの一部です。 このシリーズの以前の記事としては「[フェーズ1: ロールアウトの戦略とゴールの調整](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)」を参照してください。

{% endnote %}

## {% data variables.product.prodname_code_scanning %}の有効化の準備

{% data reusables.code-scanning.about-code-scanning %} 詳しい情報については「[Code scanningについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

数百のリポジトリに対する{% data variables.product.prodname_code_scanning %}のロールアウトは、特に非効率的に行われた場合、難しくなることがあります。 以下のステップに従えば、確実にロールアウトは効率的に成功できます。 準備の一部として、チームと協力し、リポジトリに関するデータの収集を自動化し、{% data variables.product.prodname_code_scanning %}を有効化します。

### {% data variables.product.prodname_code_scanning %}に対するチームの準備

最初に、{% data variables.product.prodname_code_scanning %}を使う準備をチームに行ってください。 {% data variables.product.prodname_code_scanning %}を使うチームが多ければ多いほど、修復プランを推進し、ロールアウトの進捗をモニターするためのデータが得られることになります。 このフェーズの間は、APIの活用と内部的な有効化のイベントに集中してください。

中核的な焦点は、できるかぎり多くのチームが{% data variables.product.prodname_code_scanning %}を使うよう準備することにすべきです。 修復を適切に行うこともチームに推奨すべきですが、このフェーズでは問題の修復よりも{% data variables.product.prodname_code_scanning %}の有効化と利用を優先することをおすすめします。

### リポジトリに関する情報の収集

You can programmatically gather information about the different programming languages used in your repositories and use that data to enable {% data variables.product.prodname_code_scanning %} on all repositories that use the same language, using {% data variables.product.product_name %}'s GraphQL API.

{% note %}

**Note:** To gather this data without manually running the GraphQL queries described in this article, you can use our publicly available tool. For more information, see the "[ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)" repository.

{% endnote %}

If you want to gather information from repositories belonging to multiple organizations in your enterprise, you can use the query below to obtain the names of your organizations and then feed those into repository query. Replace OCTO-ENTERPRISE with your enterprise name.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

You can identify which repositories use which languages by collating repositories by language at the organization level. You can modify the sample GraphQL query below, replacing OCTO-ORG with the organization name.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

For more information about running GraphQL queries, see "[Forming calls with GraphQL](/graphql/guides/forming-calls-with-graphql)."

Then, convert the data from the GraphQL query into a readable format, such as a table.

| 言語                      | Number of Repos | Name of Repos                 |
| ----------------------- | --------------- | ----------------------------- |
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

You can filter out the languages that are currently not supported by {% data variables.product.prodname_GH_advanced_security %} from this table.

If you have repositories with multiple languages, you can format the GraphQL results as shown in the table below. Filter out languages that are not supported, but retain all repositories with at least one supported language. You can enable {% data variables.product.prodname_code_scanning %} on these repositories, and all supported languages will be scanned.

| Language(s)            | Number of Repos | Name of Repos                  |
| ---------------------- | --------------- | ------------------------------ |
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

An understanding of which repositories are using which languages will help you identify candidate repositories for pilot programs in phase 3, and prepares you to enable {% data variables.product.prodname_code_scanning %} across all repositories, one language at a time, in phase 5.

{% ifversion ghes %}

### Enabling {% data variables.product.prodname_code_scanning %} for your appliance

Before you can proceed with pilot programs and rolling out {% data variables.product.prodname_code_scanning %} across your enterprise, you must first enable {% data variables.product.prodname_code_scanning %} for your appliance. For more information, see "[Configuring code scanning for your appliance](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

{% endif %}

## Preparing to enable {% data variables.product.prodname_secret_scanning %}

If a project communicates with an external service, it might use a token or private key for authentication. リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 {% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.prodname_dotcom %} repositories for secrets and alert you{% ifversion secret-scanning-push-protection %} or block the push containing the secret{% endif %}. 詳しい情報については、「[シークレットスキャニングについて](/code-security/secret-scanning/about-secret-scanning)」を参照してください。

### Considerations when enabling {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %}’s {% data variables.product.prodname_secret_scanning %} capability is slightly different from {% data variables.product.prodname_code_scanning %} since it requires no specific configuration per programming language or per repository and less configuration overall to get started. This means enabling {% data variables.product.prodname_secret_scanning %} at the organizational level can be easy but clicking **Enable All** at the organization level and ticking the option **Automatically enable {% data variables.product.prodname_secret_scanning %} for every new repository** has some downstream effects that you should be aware of:

- **License consumption**  
  Enabling {% data variables.product.prodname_secret_scanning %} for all repositories will consume all your licenses, even if no one is using code scanning. This is fine unless you plan to increase the number of active developers in your organization. If the number of active developers is likely to increase in the coming months, you may exceed your license limit and then be unable to use {% data variables.product.prodname_GH_advanced_security %} on newly created repositories.
- **Initial high volume of detected secrets**  
  If you are enabling {% data variables.product.prodname_secret_scanning %} on a large organization, be prepared to see a high number of secrets found. Sometimes this comes as a shock to organizations and the alarm is raised. If you would like to turn on {% data variables.product.prodname_secret_scanning %} across all repositories at once, plan for how you will respond to multiple alerts across the organization.

{% data variables.product.prodname_secret_scanning_caps %} can be enabled for individual repositories. 詳しい情報については「[リポジトリでの{% data variables.product.prodname_secret_scanning %}の設定](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)」を参照してください。 {% data variables.product.prodname_secret_scanning_caps %} can also be enabled for all repositories in your organization, as described above. For more information on enabling for all repositories, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

### Custom patterns for {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %}
{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning %}のカスタムパターンは現在ベータであり、変更されることがあります。

{% endnote %}
{% endif %}

{% data variables.product.prodname_secret_scanning_caps %} detects a large number of default patterns but can also be configured to detect custom patterns, such as secret formats unique to your infrastructure or used by integrators that {% data variables.product.product_name %}'s {% data variables.product.prodname_secret_scanning %} does not currently detect. For more information about supported secrets for partner patterns, see "[Secret scanning patterns](/code-security/secret-scanning/secret-scanning-patterns)."

As you audit your repositories and speak to security and developer teams, build a list of the secret types that you will later use to configure custom patterns for {% data variables.product.prodname_secret_scanning %}. 詳しい情報については「[Secret scanningのカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)」を参照してください。


{% note %}

For the next article in this series, see "[Phase 3: Pilot programs](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)."

{% endnote %}

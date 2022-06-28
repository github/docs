---
title: Codespaces の支払いについて
shortTitle: 支払いについて
intro: '価格を見て、Organizationでの{% data variables.product.prodname_codespaces %}の支払いの管理方法を確認してください。'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
---

## {% data variables.product.prodname_codespaces %}の価格

{% data variables.product.prodname_codespaces %}の利用状況に対しては、{% data variables.product.prodname_team %}及び{% data variables.product.prodname_enterprise %}上のすべてのOrganization及びEnterpriseアカウントについて課金され、これには無料の分あるいはストレージは含まれません。 現在のところ、個人のアカウントは{% data variables.product.prodname_codespaces %}の利用に対して課金されません。

{% data variables.product.prodname_codespaces %}の利用については、以下の表に示す計測単位に従って課金されます。

| 製品                 | SKU   | 計測単位  | 価格    |
| ------------------ | ----- | ----- | ----- |
| Codespaces Compute | 2コア   | 1時間   | $0.18 |
|                    | 4コア   | 1時間   | $0.36 |
|                    | 8コア   | 1時間   | $0.72 |
|                    | 16コア  | 1時間   | $1.44 |
|                    | 32コア  | 1時間   | $2.88 |
| Codespaces Storage | ストレージ | 1GB-月 | $0.07 |

## {% data variables.product.prodname_codespaces %}の支払いについて

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_codespaces %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプションID をEnterpriseアカウントに接続して、 {% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### {% data variables.product.prodname_codespaces %}プレビルドに対する支払い


{% data reusables.codespaces.billing-for-prebuilds %}

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

{% data reusables.codespaces.exporting-changes %}

## マシンタイプの選択の制限

デフォルトでは、もっとも少ない有効リソースのマシンタイプがcodespace作成時に使われます。 しかし、ユーザはもっとリソースの多いマシンタイプを選択できます。 これはcodespaceの作成時に行えますが、既存のcodespaceのマシンタイプを変更することもできます。 詳しい情報については「[codespaceの作成](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」及び「[codespaceのマシンタイプの変更](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください。

もっとリソースの多いマシンタイプが選択されると、上に示したcodespaceの分あたりの料金に影響します。

Organizationオーナーは、ユーザが利用できるマシンタイプを制限するポリシーを作成できます。 詳しい情報については「[マシンタイプへのアクセス制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

## フォークされたリポジトリでの支払いの扱い

{% data variables.product.prodname_codespaces %}は、支払いできるオーナーが定義されたOrganizationでのみ利用できます。 Organizationに課金をするには、ユーザはメンバーもしくはコラボレータでなければなりません。そうでなければユーザはcodespaceを作成できません。

たとえば、プライベートなOrganizationのユーザは、そのOrganization内のリポジトリをフォークし、その後Organizationに課金されるcodespaceを使うことができます。これはそのOrganizationが、ユーザのアクセス、フォークされたリポジトリ、codespaceを削除できる親リポジトリのオーナーだからです。

## リポジトリが移譲されたときの支払いの扱い

使用量は1時間ごとに課金され、報告されます。 そのため、リポジトリがOrganization内にあれば、あらゆる使用に対して支払いをすることになります。 リポジトリがOrganization外に移譲されると、そのリポジトリ内のすべてのcodespaceは移譲のプロセスの一部として削除されます。

## ユーザが削除されたときに生じること

Organizationもしくはリポジトリからユーザが削除されると、そのユーザのcodespaceは自動的に削除されます。 

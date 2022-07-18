---
title: Organizationのコンプライアンスレポートへのアクセス
intro: '自分のOrganizationに関するSOCレポートやCloud Security Alliance CAIQセルフアセスメント（CSA CAIQ）などの、{% data variables.product.company_short %}のコンプライアンスレポートにアクセスできます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: コンプライアンスレポートへのアクセス
---

## {% data variables.product.company_short %}のコンプライアンスレポートについて

Organizationの設定から、{% data variables.product.company_short %}のコンプライアンスレポートにアクセスできます。

{% data reusables.security.compliance-report-list %}


{% note %}

**ノート:** コンプライアンスレポートを表示するには、Organizationは{% data variables.product.prodname_ghe_cloud %}を使っていなければなりません。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Organizationのコンプライアンスレポートへのアクセス

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. "Compliance reports（コンプライアンスレポート）"の下で、アクセスしたいレポートの右の{% octicon "download" aria-label="The Download icon" %} **Download（ダウンロード）**もしくは{% octicon "link-external" aria-label="The external link icon" %} **View（表示）**をクリックしてください。

   {% data reusables.security.compliance-report-screenshot %}

## 参考リンク

- 「[Enterpriseのコンプライアンスレポートへのアクセス](/admin/overview/accessing-compliance-reports-for-your-enterprise)」

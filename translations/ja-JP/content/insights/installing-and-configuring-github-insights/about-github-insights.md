---
title: GitHub Insightsについて
intro: '{% data variables.product.prodname_insights %}は、エンジニアリングチームがソフトウェアデリバリのプロセスを理解し、改善することを支援するメトリクスと分析レポートを提供します。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/about-github-insights
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_insights %} について

{% data variables.product.prodname_insights %}は、{% data variables.product.product_location %}からのデータに基づく分析レポートを提供するスタンドアローンアプリケーションで、ソフトウェアデリバリのプロセスを理解し、改善する手助けをします。 これらのメトリクスは、プロセス中のボトルネックの除去、コラボレーションの改善、プロジェクトのデリバリを高品質で高速に行うために利用できます。

{% data variables.product.prodname_insights %}はマシン上でホストされ、{% data variables.product.prodname_enterprise %}とインターフェースします。 詳しい情報については「[{% data variables.product.prodname_insights %}のシステム概要](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights)」を参照してください。

{% data variables.product.prodname_insights %}にアクセスできる人は、Teamやリポジトリによるフィルタリングを利用して、データにコンテキストを与えるためにメトリクスの表示や操作を行えます。 詳しい情報については「[{% data variables.product.prodname_enterprise %}の利用状況を調べる](/insights/exploring-your-usage-of-github-enterprise)」を参照してください。

{% data variables.product.prodname_insights %}の管理権限を持っている人は、表示するメトリクスを選択でき、それらのメトリクスにどのOrganization、リポジトリ、人が含まれるかを選択できます。 また、イベントを管理してメトリクスにコンテキストを追加することもできます。 詳しい情報については「[{% data variables.product.prodname_insights %}内のデータについて](/insights/installing-and-configuring-github-insights/about-data-in-github-insights)」を参照してください。

### サポートへの連絡

{% data variables.contact.github_support %}から{% data variables.product.prodname_insights %}に関するサポートを受けることができます。 For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Submitting a ticket](/github/working-with-github-support/submitting-a-ticket)."{% else %}"[Reaching {% data variables.contact.github_support %}](/enterprise/{{ currentVersion }}/admin/enterprise-support/reaching-github-support)."{% endif %}

### 参考リンク

- [{% data variables.product.prodname_insights %}のインストール](/insights/installing-and-configuring-github-insights/installing-github-insights)
- [{% data variables.product.prodname_insights %}の設定](/insights/installing-and-configuring-github-insights/configuring-github-insights)

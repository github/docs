---
title: GitHub Insightsについて
intro: '{{ site.data.variables.product.prodname_insights }}は、エンジニアリングチームがソフトウェアデリバリのプロセスを理解し、改善することを支援するメトリクスと分析レポートを提供します。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/about-github-insights
versions:
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_insights }}について

{{ site.data.variables.product.prodname_insights }}は、{{ site.data.variables.product.product_location }}からのデータに基づく分析レポートを提供するスタンドアローンアプリケーションで、ソフトウェアデリバリのプロセスを理解し、改善する手助けをします。 これらのメトリクスは、プロセス中のボトルネックの除去、コラボレーションの改善、プロジェクトのデリバリを高品質で高速に行うために利用できます。

{{ site.data.variables.product.prodname_insights }}はマシン上でホストされ、{{ site.data.variables.product.prodname_enterprise }}とインターフェースします。 詳しい情報については「[{{ site.data.variables.product.prodname_insights }}のシステム概要](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights)」を参照してください。

{{ site.data.variables.product.prodname_insights }}にアクセスできる人は、Teamやリポジトリによるフィルタリングを利用して、データにコンテキストを与えるためにメトリクスの表示や操作を行えます。 詳しい情報については「[{{ site.data.variables.product.prodname_enterprise }}の利用状況を調べる](/insights/exploring-your-usage-of-github-enterprise)」を参照してください。

{{ site.data.variables.product.prodname_insights }}の管理権限を持っている人は、表示するメトリクスを選択でき、それらのメトリクスにどのOrganization、リポジトリ、人が含まれるかを選択できます。 また、イベントを管理してメトリクスにコンテキストを追加することもできます。 詳しい情報については「[{{ site.data.variables.product.prodname_insights }}内のデータについて](/insights/installing-and-configuring-github-insights/about-data-in-github-insights)」を参照してください。

### サポートへの連絡

{{ site.data.variables.contact.github_support }}から{{ site.data.variables.product.prodname_insights }}に関するサポートを受けることができます。 詳しい情報については{% if currentVersion == "free-pro-team@latest" %}「[チケットのサブミット](/github/working-with-github-support/submitting-a-ticket)」{% else %}「[{{ site.data.variables.contact.github_support }}への連絡](/enterprise/{{ currentVersion }}/admin/enterprise-support/reaching-github-support)」{% endif %}を参照してください。

### 参考リンク

- [{{ site.data.variables.product.prodname_insights }}のインストール](/insights/installing-and-configuring-github-insights/installing-github-insights)
- [{{ site.data.variables.product.prodname_insights }}の設定](/insights/installing-and-configuring-github-insights/configuring-github-insights)

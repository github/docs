---
title: 主要なメトリクスとレポートの表示
intro: データを通じてソフトウェアのデリバリのプロセスを理解し、改善できるよう、主要なメトリクスとレポートの表示とフィルタリングができます。
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can view key metrics and reports.'
versions:
  enterprise-server: '*'
---

### メトリックとレポートについて

{% data reusables.github-insights.key-metrics-and-reports %} 利用できるメトリクスに関する詳しい情報については「[{% data variables.product.prodname_insights %}で利用できるメトリクス](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)」を参照してください。

それぞれの主要なメトリクスについて、目標と成功率を表示できます。 詳しい情報については「[目標の管理](/insights/installing-and-configuring-github-insights/managing-goals)」を参照してください。

アクセスできる{% data variables.product.prodname_insights %}のデータは、{% data variables.product.prodname_enterprise %}でもアクセスできるデータのみです。

Team、リポジトリ、データの範囲で、主要なメトリクスあるいはレポートに含まれるデータをフィルタリングできます。

### 主要なメトリクスの表示

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### レポートの表示

1. {% data variables.product.prodname_insights %}で、**{% octicon "file" aria-label="The file icon" %} Reports（レポート）**をクリックしてください。 ![レポートタブ](/assets/images/help/insights/reports-tab.png)
2. **{% octicon "file" aria-label="The file icon" %} Reports（レポート）**の下で、表示させたいレポートの名前をクリックしてください。 ![レポートのリスト](/assets/images/help/insights/reports-list.png)
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### 参考リンク

- [コントリビューターとTeamの管理](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)
- [リポジトリの管理](/insights/installing-and-configuring-github-insights/managing-repositories)
- [Organizationの管理](/insights/installing-and-configuring-github-insights/managing-organizations)
- [イベントの管理](/insights/installing-and-configuring-github-insights/managing-events)

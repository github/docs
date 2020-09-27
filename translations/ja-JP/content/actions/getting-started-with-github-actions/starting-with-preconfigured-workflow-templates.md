---
title: 事前設定されたワークフローテンプレートで始める
intro: '{{ site.data.variables.product.prodname_dotcom }}は、ワークフローを自動化したり、特定の言語やフレームワークのためのCIワークフローを作成するための、事前設定されたワークフローテンプレートを提供しています。'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.variables.product.prodname_actions }} の支払いを管理する
{{ site.data.variables.product.prodname_dotcom }}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフローテンプレートについて

{{ site.data.variables.product.product_name }}はコードを分析し、リポジトリに最も適したCIテンプレートを提示します。 たとえばリポジトリにNode.jsのコードが含まれているなら、Node.jsプロジェクトのためのサジェッションが提示されます。 ワークフローテンプレートは、カスタムワークフローの構築の出発点として利用することも、そのまま利用することもできます。

[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/master/ci)リポジトリで、CIテンプレートの完全なリストをブラウズできます。 また、ワークフローを自動化するテンプレートを見つけることもできます。 また、ワークフローを自動化するテンプレートを見つけることもできます。

### 最初のワークフローテンプレートの追加

まだリポジトリにワークフローを追加していないなら、ワークフローのテンプレートを見て選択できます。

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}

### 追加のワークフローテンプレートの追加

すでにワークフローを使っており、新しいテンプレートワークフローを追加したいなら、そのワークフローテンプレートにアクセスできます。

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-new-workflow }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}

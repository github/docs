---
title: Using actions in GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} includes most of the {% data variables.product.prodname_dotcom %}-authored actions.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% data variables.product.prodname_actions %} ワークフローは_アクション_を使用できます。アクションは、ジョブを作成してワークフローをカスタマイズするために組み合わせることができる個々のタスクです。 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。

### {% data variables.product.prodname_ghe_managed %} にバンドルされている公式アクション

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_managed %} にバンドルされ、{% data variables.product.prodname_marketplace %} からある時点でキャプチャされます。 {% data variables.product.prodname_ghe_managed %} インスタンスが更新されると、バンドルされている公式アクションも更新されます。

バンドルされている公式アクションには、`actions/checkout`, `actions/upload-artifact`、`actions/download-artifact`、`actions/labeler`、さまざまな `actions/setup-` などが含まれます。 To see which of the official actions are included, browse to the following organizations on your instance:
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Each action's files are kept in a repository in the `actions` and `github` organizations. Each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action.

---
title: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
---

{% data variables.product.prodname_marketplace %} の詳細については、「[GitHub Marketplace](/marketplace/)」を参照してください。

{% data variables.product.prodname_marketplace %} API では、価格プランを使用している顧客の確認、顧客の購入の確認、アカウントで有効になっているプランの有無を確認できます。

### スタブされたエンドポイントでテストする

この API には、[**スタブされたデータ**で {% data variables.product.prodname_github_app %} をテスト](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/)できるエンドポイントが含まれています。 スタブされたデータはハードコードされた偽のデータであり、実際のプランに基づいて変更されることはありません。

スタブされたデータでテストするには、対応する本番環境の代わりにスタブされたエンドポイントを使用します。 これにより、{% data variables.product.prodname_github_apps %} を {% data variables.product.prodname_marketplace %} にリストする前に、API ロジックが成功するかどうかをテストできます。

{% data variables.product.prodname_github_app %} をデプロイする前に、スタブされたエンドポイントを本番のエンドポイントに置き換えてください。

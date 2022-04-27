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

Para obter mais informações sobre {% data variables.product.prodname_marketplace %}, consulte "[GitHub Marketplace](/marketplace/)".

A API de {% data variables.product.prodname_marketplace %} permite que você veja quais clientes estão usando um plano de preços, as compras de um cliente e se uma conta tem uma assinatura ativa.

### Fazer testes com pontos de extremidades de amostra

Esta API inclui pontos de extremidade que permitem que você [teste o seu {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) com **dados de amostra**. Os dados do de amostra têm código rígido, dados falsos e não serão alterados com base em assinaturas reais.

Para fazer teste com dados de amostra, use um pontos de extremidade de amostra no lugar da sua contraparte de produção. Isso permite que você teste se a lógica da API é bem-sucedida antes de anunciar {% data variables.product.prodname_github_apps %} em {% data variables.product.prodname_marketplace %}.

Certifique-se de substituir pontos de extremidades de amostra pelos pontos de extremidades de produção antes de implantar seu {% data variables.product.prodname_github_app %}.

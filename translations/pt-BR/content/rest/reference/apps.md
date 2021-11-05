---
title: Aplicativos
redirect_from:
  - /v3/apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

A API dos aplicativos GitHub permite que você obtenha informações de alto nível sobre um aplicativo GitHub, bem como informações específicas sobre as instalações do aplicativo. Para saber mais sobre aplicativos GitHub, consulte "[Efetuar a autenticação como um aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)".

{% data reusables.apps.general-apps-restrictions %}

Esta página lista os pontos de extremidade que você pode acessar enquanto autenticado como um aplicativo GitHub. Consulte "[Efetuar a autenticação como um aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para saber mais.

Quando autenticado como um aplicativo GitHub, a API dos aplicativos GitHub permite que você obtenha informações de alto nível sobre um aplicativo GitHub, bem como informações específicas sobre instalações de um aplicativo.

Você pode acessar os pontos de extremidade da API v3 de REST enquanto autenticado como um aplicativo GitHub. Estes pontos de extremidade têm uma seção de "Observação" que contém um ponto que diz "Funciona com aplicativos GitHub". Você também pode acessar esses pontos de extremidade enquanto estiver autenticado como usuário.

Um subconjunto de pontos de extremidade da API v2 de REST exige autenticação como uma instalação do aplicativo GitHub. Consulte [Instalações](/rest/reference/apps#installations) para obter uma lista desses pontos de extremidade.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## API de aplicativos do OAuth

You can use this API to manage the OAuth tokens an OAuth application uses to access people's accounts on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'oauth-applications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Instalações

A API de instalações permite que você obtenha informações sobre as instalações do seu aplicativo GitHub e execute ações nessas instalações. Uma _instalação_ refere-se a qualquer usuário ou conta de organização que instalou o aplicativo. Para obter informações sobre como efetuar a autenticação como uma instalação e limitar o acesso a repositórios específicos, consulte "[Efetuar a autenticação como uma instalação](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

Para listar todas as instalações do aplicativo GitHub para uma organização, consulte "[Listar instalações de aplicativos para uma organização](/rest/reference/orgs#list-app-installations-for-an-organization)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'installations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghec %}
## Marketplace

Para obter mais informações sobre {% data variables.product.prodname_marketplace %}, consulte "[GitHub Marketplace](/marketplace/)".

A API de {% data variables.product.prodname_marketplace %} permite que você veja quais clientes estão usando um plano de preços, as compras de um cliente e se uma conta tem uma assinatura ativa.

### Fazer testes com pontos de extremidades de amostra

Esta API inclui pontos de extremidade que permitem que você [teste o seu {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) com **dados de amostra**. Os dados do de amostra têm código rígido, dados falsos e não serão alterados com base em assinaturas reais.

Para fazer teste com dados de amostra, use um pontos de extremidade de amostra no lugar da sua contraparte de produção. Isso permite que você teste se a lógica da API é bem-sucedida antes de anunciar {% data variables.product.prodname_github_apps %} em {% data variables.product.prodname_marketplace %}.

Certifique-se de substituir pontos de extremidades de amostra pelos pontos de extremidades de produção antes de implantar seu {% data variables.product.prodname_github_app %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'marketplace' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae or ghec %}
## Webhooks

O webhook de {% data variables.product.prodname_github_app %} permite que você receba cargas `POST` de HTTP sempre que certos eventos ocorrerem para um aplicativo. {% data reusables.webhooks.webhooks-rest-api-links %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

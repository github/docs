---
title: Sobre webhooks
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
intro: Webhooks permitem que notificações sejam entregues a um servidor web externo sempre que determinadas ações ocorrem em um repositório ou uma organização.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% tip %}

**Dica:** {% data reusables.organizations.owners-and-admins-can %} gerenciar webhooks para uma organização. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Os webhooks podem ser acionados sempre que uma variedade de ações for executada em um repositório ou uma organização. Por exemplo, você pode configurar um webhook para ser executado sempre que:

* É feito push de um repositório
* Uma pull request é aberta
* Um site do {% data variables.product.prodname_pages %} é construído
* Um novo integrante é adicionado a uma equipe

Ao usar a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, você pode fazer esses webhooks atualizarem um rastreador de problemas externo, acionar compilações de CI, atualizar um espelho de backup, ou até mesmo fazer a implantação no seu servidor de produção.

Para configurar um novo webhook, você deverá acessar um servidor externo e ter familiaridade com os procedimentos técnicos envolvidos. Para obter ajuda sobre como criar um webhook, incluindo uma lista completa de ações que podem ser associadas a ele, consulte "[Webhooks](/webhooks)."

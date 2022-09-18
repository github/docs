---
title: Console de Gerenciamento
intro: 'A API do Console de Gerenciamento ajuda você a gerenciar sua instalação do {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065535'
---
{% tip %}

Você deve definir explicitamente o número da porta ao fazer chamadas de API para o Console de Gerenciamento. Se o TLS estiver habilitado na sua empresa, o número da porta será `8443`; caso contrário, o número da porta será `8080`.

Se não quiser fornecer um número da porta, você precisará configurar sua ferramenta para seguir os redirecionamentos automaticamente.

Talvez você também precise adicionar o [`-k` sinalizador](http://curl.haxx.se/docs/manpage.html#-k) ao usar `curl`, já que {% data variables.product.product_name %} usa um certificado autoassinado antes de [adicionar seu próprio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Autenticação

Você precisa passar sua [senha do Console de Gerenciamento](/enterprise/admin/articles/accessing-the-management-console/) como um token de autenticação para todos os pontos de extremidade da API do Console de Gerenciamento, exceto [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use o parâmetro `api_key` para enviar este token com cada solicitação. Por exemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

Você também pode usar a autenticação HTTP padrão para enviar esse token. Por exemplo:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```

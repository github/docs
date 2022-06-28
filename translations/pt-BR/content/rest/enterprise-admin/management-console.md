---
title: Console de gerenciamento
intro: 'A API do Console de Gerenciamento ajuda você a gerenciar sua instalação do {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% tip %}

Você deve definir explicitamente o número da porta ao fazer chamadas de API para o Console de Gerenciamento. Se o TLS estiver habilitado na sua empresa, o número da porta será `8443`; caso contrário, o número da porta será `8080`.

Se não quiser fornecer um número da porta, você precisará configurar sua ferramenta para seguir os redirecionamentos automaticamente.

Talvez você também precise adicionar o [`sinalizador`-k](http://curl.haxx.se/docs/manpage.html#-k) quando estiver usando `cURL`, pois {% data variables.product.product_name %} usa um certificado autoassinado antes de você [adicionar seu próprio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Autenticação

Você precisa passar a sua [senha do Console de Gerenciamento](/enterprise/admin/articles/accessing-the-management-console/) como token de autenticação para cada endpoint de API do Console de Gerenciamento, exceto [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use o parâmetro `api_key` para enviar este token com cada solicitação. Por exemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

Você também pode usar a autenticação HTTP padrão para enviar esse token. Por exemplo:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```

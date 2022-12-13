---
title: Pacotes
intro: 'Com a API do {% data variables.product.prodname_registry %}, você pode gerenciar pacotes para seus repositórios e organizações de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: 5edb7e30b296626a53fdc41806bcfba88718e6b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147059919'
---
## Sobre a API {% data variables.product.prodname_registry %}

A API de {% data variables.product.prodname_registry %} permite gerenciar pacotes usando a API REST. Para saber mais sobre como restaurar ou excluir pacotes, confira "[Restaurar e excluir pacotes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para usar essa API, você deve efetuar a autenticação usando um token de acesso pessoal. 
  - Para acessar metadados do pacote, o token precisa incluir o escopo `read:packages`.
  - Para excluir pacotes e versões de pacote, o token precisa incluir os escopos `read:packages` e `delete:packages`.
  - Para restaurar pacotes e versões de pacote, o token precisa incluir os escopos `read:packages` e `write:packages`.

Se o `package_type` for `npm`, `maven`, `rubygems` ou `nuget`, o token também precisará incluir o escopo `repo`, pois o pacote herda permissões de um repositório do {% data variables.product.prodname_dotcom %}. Se o pacote estiver no {% data variables.product.prodname_container_registry %}, o `package_type` for `container` e o token não precisará do escopo `repo` para acessar ou gerenciar este `package_type`. pacotes de `container` oferecem permissões granulares separadas de um repositório. Para obter mais informações, confira "[Sobre as permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Se você quiser usar a API de {% data variables.product.prodname_registry %} para acessar os recursos em uma organização com SSO habilitado, então você deve habilitar o SSO para o seu token de acesso pessoal. Para obter mais informações, confira "[Como autorizar um token de acesso pessoal para uso com o logon único do SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

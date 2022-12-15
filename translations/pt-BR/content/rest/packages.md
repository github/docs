---
title: Pacotes
intro: 'Use a API REST para interagir com o {% data variables.product.prodname_registry %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192822'
---
## Sobre o {% data variables.product.prodname_registry %}

Você pode usar a API REST para gerenciar pacotes em seus repositórios e organizações do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como restaurar e excluir pacotes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para usar a API REST para gerenciar o {% data variables.product.prodname_registry %}, você deve autenticar usando um {% data variables.product.pat_v1 %}.
  - Para acessar metadados do pacote, o token precisa incluir o escopo `read:packages`.
  - Para excluir pacotes e versões de pacote, o token precisa incluir os escopos `read:packages` e `delete:packages`.
  - Para restaurar pacotes e versões de pacote, o token precisa incluir os escopos `read:packages` e `write:packages`.

Se o pacote estiver em um registro que dê suporte a permissões granulares, o token não precisará do escopon do `repo` para acessar ou gerenciar esse pacote. Se seu pacote estiver em um registro que suporta apenas permissões com escopo de repositório, seu token também deverá incluir o escopo `repo`, pois seu pacote herda permissões de um repositório {% data variables.product.prodname_dotcom %}. Para obter uma lista de registros que suportam apenas permissões com escopo de repositório, consulte "[Sobre permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

Para acessar recursos em uma organização com SSO habilitado, você deve habilitar o SSO para seu {% data variables.product.pat_v1 %}. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para uso com logon único SAML ](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

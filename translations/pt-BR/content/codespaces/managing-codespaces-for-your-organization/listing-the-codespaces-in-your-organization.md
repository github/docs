---
title: Listar os codespaces na sua organização
shortTitle: List organization codespaces
intro: Você pode listar todos os codespaces atualmente ativos ou interrompidos para sua organização.
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158626'
---
## Visão geral

Como proprietário de uma organização, você pode listar todos os codespaces atualmente ativos ou interrompidos para sua organização. Talvez você queira fazer isso para verificar quantos codespaces os usuários estão criando, para garantir que eles não estejam incorrendo em custos desnecessários. Para ver mais informações sobre preços, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

A maneira mais fácil de listar os codespaces para uma organização é usando {% data variables.product.prodname_cli %}. Você também pode usar a API REST, que fornece mais informações sobre cada codespace.

Para obter informações de como ver o uso total atual dos {% data variables.product.prodname_codespaces %} na organização ou empresa e gerar um relatório detalhado, confira "[Como ver o uso dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

### Usar {% data variables.product.prodname_cli %} para listar codespaces

Para listar todos os codespaces atuais de uma organização especificada, use o comando a seguir.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

Este comando retorna uma lista que inclui as seguintes informações para cada codespace: 
    - O nome e o nome de exibição 
    - O usuário que criou o codespace
    - O repositório e o branch
    - O estado atual do codespace

Para listar todos os codespaces atuais de uma organização que foram criados por um usuário específico, use o comando a seguir.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Observação**: nos comandos acima, substitua `ORGANIZATION` pelo nome da organização que você está consultando. Você precisa ser proprietário da organização.

{% endnote %}

### Usar a API REST para listar codespaces

Você pode usar o ponto de extremidade da API `/orgs/{org}/codespaces` como um método alternativo para listar os codespaces atuais de uma organização. Isso retorna mais informações que {% data variables.product.prodname_cli %}; por exemplo, os detalhes do tipo de computador.

Para obter mais informações sobre esse ponto de extremidade, confira "[Organizações de codespaces](/rest/codespaces/organizations#list-codespaces-for-the-organization)".

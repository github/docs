---
title: Publicando um pacote
intro: 'Você pode publicar um pacote no {% data variables.product.prodname_registry %} para disponibilizar o pacote para que outros façam download e reutilizem.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e13e33b6085fbdd736d77d7d8b4998595ea7ffcc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128272'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre os pacotes publicados

Você pode ajudar as pessoas a entender e usar seu pacote fornecendo uma descrição e outros detalhes como, por exemplo, a instalação e instruções de uso na página do pacote. O {% data variables.product.product_name %} fornece metadados para cada versão, como a data de publicação, a atividade de download e as versões recentes. Para ver um exemplo de página de pacote, confira [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Um repositório pode ser conectado a mais de um pacote. Para evitar confusão, certifique-se de que o README e a descrição fornecem informações claras sobre cada pacote.

{% ifversion fpt or ghec %} Se uma nova versão de um pacote corrigir uma vulnerabilidade de segurança, você deverá publicar uma consultoria de segurança no seu repositório. {% data variables.product.prodname_dotcom %} revisa a cada consultoria de segurança publicado e pode usá-lo para enviar {% data variables.product.prodname_dependabot_alerts %} para repositórios afetados. Para obter mais informações, confira "[Sobre os Avisos de Segurança do GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{% endif %}

## Publicando um pacote

Você pode publicar um pacote em {% data variables.product.prodname_registry %} usando qualquer {% ifversion fpt or ghae or ghec %}cliente do pacote compatível{% else %}pacote habilitado para sua instância{% endif %}, seguindo as mesmas diretrizes gerais.

1. Crie ou use um token de acesso existente com os escopos apropriados para a tarefa que você deseja realizar. Para obter mais informações, confira "[Sobre as permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".
2. Efetue a autenticação em {% data variables.product.prodname_registry %} usando seu token de acesso e as instruções para seu cliente do pacote.
3. Publique o pacote usando as instruções do seu cliente de pacote.

Para obter instruções específicas ao cliente do pacote, confira"[Como trabalhar com um registro de pacotes GitHub](/packages/working-with-a-github-packages-registry)".

Após publicar um pacote, você poderá visualizá-lo no {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como ver pacotes](/packages/learn-github-packages/viewing-packages)".

---
title: Sobre as versões
intro: 'Você pode criar uma versão de modo a empacotar software, com notas de versão e links para arquivos binários, para uso de outras pessoas.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881502'
---
## Sobre as versões

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![Uma visão geral das versões](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![Uma visão geral das versões](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![Uma visão geral das versões](/assets/images/help/releases/releases-overview.png) {% endif %}

Versões são iterações de software implementáveis que você pode empacotar e disponibilizar para um público mais amplo para baixar e usar.

As versões são baseadas em [tags do Git](https://git-scm.com/book/en/Git-Basics-Tagging), que marcam um ponto específico no histórico do repositório. Uma data de tag pode ser diferente de uma data de versão, já que elas podem ser criadas em momentos diferentes. Para obter mais informações sobre como ver as tags existentes, confira "[Como ver as versões e as tags do repositório](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)".

Você pode receber notificações quando novas versões são publicadas em um repositório sem receber notificações sobre outras atualizações para o repositório. Para obter mais informações, confira "[Como exibir suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

Qualquer pessoa com acesso de leitura a um repositório pode ver e comparar versões, mas somente pessoas com permissões de gravação a um repositório podem gerenciar versões. Para obter mais informações, confira "[Como gerenciar as versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} Você pode criar notas sobre a versão manualmente durante o gerenciamento de uma versão. Como alternativa, você pode gerar automaticamente notas de versão a partir de um modelo padrão, ou personalizar seu próprio modelo de notas de versão. Para obter mais informações, confira "[Notas sobre a versão geradas automaticamente](/repositories/releasing-projects-on-github/automatically-generated-release-notes)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} Ao exibir os detalhes de uma versão, a data de criação de cada ativo de versão será mostrada ao lado do ativo de versão.
{% endif %}

{% ifversion fpt or ghec %} Pessoas com permissões de administrador em um repositório podem escolher se os objetos do {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que o {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, confira "[Como gerenciar objetos do {% data variables.large_files.product_name_short %} nos arquivos do repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)".

Se uma versão consertar uma vulnerabilidade de segurança, você deverá publicar uma consultoria de segurança no seu repositório. {% data variables.product.prodname_dotcom %} revisa a cada consultoria de segurança publicado e pode usá-lo para enviar {% data variables.product.prodname_dependabot_alerts %} para repositórios afetados. Para obter mais informações, confira "[Sobre os Avisos de Segurança do GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".

Veja a guia **Dependentes** do grafo de dependência para saber quais repositórios e pacotes dependem do código no seu repositório e, que, portanto, podem ser afetados por uma nova versão. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

Você também pode usar a API de Releases para reunir informações, tais como o número de vezes que as pessoas baixam um ativo de versão. Para obter mais informações, confira "[Versões](/rest/reference/releases)".

{% ifversion fpt or ghec %}
## Cotas de armazenamento e banda

 Cada arquivo incluído em uma versão deve ser inferior a {% data variables.large_files.max_file_size %}. Não há limite para o tamanho total de uma versão, nem uso de largura de banda.

{% endif %}

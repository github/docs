---
title: Licenças
intro: A API de Licenças permite recuperar as licenças populares de código aberto e informações sobre o arquivo de licença do projeto em particular.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064863'
---
## Sobre a API de Licenças

A API de Licenças usa [o Ruby Gem Licensee de código aberto](https://github.com/benbalter/licensee) para tentar identificar a licença do projeto. O Licensee corresponde o conteúdo do arquivo `LICENSE` de um projeto (se houver) com uma pequena lista de licenças conhecidas. Como resultado, a API não leva em conta as licenças das dependências do projeto ou outros meios de documentar a licença de um projeto, como, por exemplo, referências ao nome da licença na documentação.

Se for encontrada a correspondência de uma licença, a chave de licença e o nome retornados estarão em conformidade com a [especificação SPDX](https://spdx.org/).

**Observação:** esses pontos de extremidade também retornarão as informações de licença de um repositório:

- [Obter um repositório](/rest/reference/repos#get-a-repository)
- [Listar os repositórios de um usuário](/rest/reference/repos#list-repositories-for-a-user)
- [Listar os repositórios da organização](/rest/reference/repos#list-organization-repositories)
- [Listar os forks](/rest/reference/repos#list-forks)
- [Listar os repositórios inspecionados por um usuário](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Listar os repositórios da equipe](/rest/reference/teams#list-team-repositories)

{% warning %}

O GitHub pode ser muitas coisas, mas não é um escritório de advocacia. Como tal, o GitHub não oferece aconselhamento jurídico. Usar a API de licenças ou enviar-nos um e-mail sobre a mesma não constitui aconselhamento jurídico, nem cria uma relação advogado e cliente. Em caso de dúvida sobre o que se pode e não se pode fazer com uma licença específica, antes de avançar, você deverá buscar orientação jurídica antes de seguir em frente. Na verdade, você deve sempre consultar o seu próprio advogado antes de tomar decisões que possam ter desdobramentos jurídicos ou que possam afetar seus direitos.

O GitHub criou a API da licença para ajudar os usuários a obter informações sobre licenças de código aberto e os projetos que as utilizam. Esperamos que ajude. No entanto, tenha em mente que não somos advogados (pelo menos a maioria de nós) e que cometemos erros como qualquer um. Por esse motivo, o GitHub fornece a API numa base "como se apresenta" e não faz garantias sobre quaisquer informações ou licenças fornecidas em ou através dela, além de eximir-se da responsabilidade por danos resultantes do uso da API.

{% endwarning %}

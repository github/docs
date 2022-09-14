---
title: Sobre discussões
intro: 'Use discussões para fazer e responder perguntas, compartilhar informações, fazer anúncios e conduzir ou participar de uma conversa sobre um projeto em {% data variables.product.product_name %}.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886947'
---
## Sobre o {% data variables.product.prodname_discussions %}

Com {% data variables.product.prodname_discussions %}, a comunidade do seu projeto pode criar e participar de conversas no repositório do projeto ou na organização. As discussões capacitam os mantenedores, contribuidores e visitantes para reunirem e atingirem os objetivos seguintes em um local central, sem ferramentas de terceiros.

- Compartilhar anúncios e informações, recolher feedback, planejar e tomar decisões
- Faça perguntas, discuta e responda às perguntas, e marque as discussões como respondidas
- Criar pesquisas para avaliar a opinião da comunidade
- Promova uma atmosfera convidativa para visitantes e contribuidores para discutir objetivos, desenvolvimento, administração e fluxos de trabalho

![Aba de discussões para um repositório](/assets/images/help/discussions/hero.png)

Você pode usar discussões de repositório para falar sobre tópicos específicos do repositório. Se o projeto abrange vários repositórios, você pode usar discussões de organização para conversar sobre tópicos que não são específicos de um único repositório em sua organização.

Você não precisa fechar uma discussão como você fecha um problema ou um pull request.

Se um administrador de repositório ou mantenedor do projeto habilitar {% data variables.product.prodname_discussions %} para um repositório, qualquer pessoa que tiver acesso ao repositório poderá criar e participar de discussões do repositório. Se um proprietário da organização habilitar {% data variables.product.prodname_discussions %} em uma organização, qualquer pessoa que possa exibir o repositório de origem poderá criar uma discussão da organização.

Os administradores de repositório e mantenedores de projetos podem gerenciar as discussões e categorias de discussão em um repositório e fixar discussões para aumentar a visibilidade da discussão. Os moderadores e colaboradores podem marcar comentários como respostas, travar discussões e converter problemas em discussões. Da mesma forma, para discussões de organização, a função de um usuário no repositório de origem determina como um usuário pode interagir com as discussões da organização. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Para obter mais informações sobre o gerenciamento de discussões, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions)".

## Sobre pesquisas

Você pode criar pesquisas na categoria de pesquisas para avaliar o interesse em novas ideias e na direção do projeto. Qualquer pessoa com acesso de leitura ao seu repositório pode criar pesquisas, votar em pesquisas e exibir os resultados delas. {% ifversion fpt or ghec %} Os usuários desconectados podem ver os resultados das pesquisas em repositórios públicos. {% endif %}

As pesquisas exigem uma pergunta e pelo menos duas opções. Você pode adicionar no máximo oito opções e as opções podem conter no máximo 128 caracteres. 

Os votantes não podem mudar o voto. A edição de uma pesquisa redefinirá todos os votos que já foram feitos.

Para obter mais informações sobre como criar pesquisas, veja "[Como criar uma pesquisa](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)".

## Sobre a organização de discussão

Você pode organizar discussões com categorias e etiquetas.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

Para discussões com um formato de pergunta/resposta, é possível marcar um comentário individual dentro da discussão como a resposta da discussão. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

Para obter mais informações, confira "[Gerenciar categorias para discussões](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Práticas recomendadas para {% data variables.product.prodname_discussions %}

Como integrante ou mantenedor da comunidade, inicie uma discussão para fazer uma pergunta ou discutir informações que afetem a comunidade. Para obter mais informações, confira "[Colaboração com mantenedores por meio de discussões](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)".

Participe de uma discussão para fazer e responder a perguntas, fornecer feedback e envolver-se com a comunidade do projeto. Para obter mais informações, confira "[Como participar de uma discussão](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)".

Você pode destacar discussões que contenham conversas importantes, úteis ou exemplares entre os integrantes da comunidade. Para obter mais informações, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".

{% data reusables.discussions.you-can-convert-an-issue %} Para obter mais informações, confira "[Como moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".

## Compartilhando feedback

Você pode compartilhar seus comentários sobre {% data variables.product.prodname_discussions %} com {% data variables.product.company_short %}. Para participar da conversa, confira as [discussões sobre {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/discussions).

## Leitura adicional

- "[Sobre a escrita e a formatação no {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)"
- "[Pesquisa de discussões](/search-github/searching-on-github/searching-discussions)"
- "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"
- "[Como moderar comentários e conversas](/communities/moderating-comments-and-conversations)"{% ifversion fpt or ghec %}
- "[Como manter a sua segurança em {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"{% endif %}

---
title: Exibir contribuições no perfil
intro: Your {% data variables.product.product_name %} profile shows off {% ifversion fpt or ghes or ghec %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.
redirect_from:
- /articles/viewing-contributions
- /articles/viewing-contributions-on-your-profile-page
- /articles/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: View contributions
ms.openlocfilehash: fccf691bc2fa865dd6ebcdebd112cbe6da02e0b5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145094617"
---
{% ifversion fpt or ghes or ghec %}Seu gráfico de contribuições mostra a atividade em repositórios públicos. {% endif %}Você pode optar por mostrar a atividade tanto de {% ifversion fpt or ghes or ghec %}repositórios públicos quanto {% endif %}de privados, com detalhes específicos da sua atividade em repositórios privados anônimos. Para obter mais informações, confira "[Como divulgar ou ocultar suas contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)".

{% note %}

**Observação:** os commits só serão exibidos no seu gráfico de contribuições se o endereço de email que você usou para criar os commits estiver conectado à sua conta do {% data variables.product.product_name %}. Para obter mais informações, confira "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

{% endnote %}

## <a name="what-counts-as-a-contribution"></a>O que conta como contribuição

Na sua página de perfil, determinadas ações contam como contribuições:

- Como fazer commit no branch `gh-pages` ou no branch padrão de um repositório
- Abrir um problema
- Abrir uma discussão
- Responder a uma discussão
- Propor uma pull request
- Como enviar uma revisão de solicitação de pull{% ifversion ghes or ghae %}
- Como cocriar commits no branch `gh-pages` ou no branch padrão de um repositório{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## <a name="popular-repositories"></a>Repositórios populares

Esta seção exibe os repositórios com a maioria dos inspetores. {% ifversion fpt or ghes or ghec %} Depois que você [fixar repositórios no seu perfil](/articles/pinning-repositories-to-your-profile), esta seção será alterada para "Repositórios fixados".{% endif %}

![Repositórios populares](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## <a name="pinned-repositories"></a>Repositórios fixos

Esta seção exibe até seis repositórios públicos e pode incluir tanto repositórios pertencentes a você como aqueles com os quais você contribuiu. Para ver detalhes importantes com facilidade sobre os repositórios que você escolheu colocar em destaque, cada repositório desta seção inclui um resumo do trabalho que está sendo feito, o número de [estrelas](/articles/saving-repositories-with-stars/) que ele recebeu e a principal linguagem de programação usada nele. Para obter mais informações, confira "[Como fixar repositórios no seu perfil](/articles/pinning-repositories-to-your-profile)".

![Repositórios fixos](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## <a name="contributions-calendar"></a>Calendário de contribuições

O calendário de contribuições mostra sua atividade de contribuição.

### <a name="viewing-contributions-from-specific-times"></a>Exibir contribuições de horários específicos

- Clique no quadrado de um dia para mostrar as contribuições feitas durante esse período de 24 horas.
- Pressione *SHIFT* e clique no quadrado de outro dia para mostrar as contribuições feitas durante esse intervalo de tempo.

{% note %}

**Observação:** só é possível selecionar um intervalo de até um mês no calendário de contribuições. Se você selecionar um período maior, será exibido apenas um mês de contribuições.

{% endnote %}

![Gráfico de contribuição](/assets/images/help/profile/contributions_graph.png)

### <a name="how-contribution-event-times-are-calculated"></a>Como são calculados os horários de evento de contribuição

Os registros de data e hora são calculados de forma diferente para commits e pull requests:
- Os **commits** usam as informações de fuso horário do carimbo de data/hora do commit. Para obter mais informações, confira "[Solução de problemas de commits na sua linha do tempo](/articles/troubleshooting-commits-on-your-timeline)".
- As **solicitações de pull** e os **problemas** em aberto no {% data variables.product.product_name %} usam o fuso horário do navegador. Aqueles abertos por meio da API usam o carimbo de data/hora ou o fuso horário [especificado na chamada à API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## <a name="activity-overview"></a>Visão geral de atividade

{% data reusables.profile.activity-overview-summary %} Para obter mais informações, confira "[Como mostrar uma visão geral da sua atividade no seu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)".

![Seção Visão geral de atividade no perfil](/assets/images/help/profile/activity-overview-section.png)

As organizações retratadas na visão geral da atividade são priorizadas de acordo com a forma como você está ativo na organização. Se você @mention uma organização na biografia do seu perfil e for membro dela, essa organização será priorizada na visão geral da atividade. Para obter mais informações, confira "[Como mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)" ou "[Como adicionar uma biografia ao seu perfil](/articles/adding-a-bio-to-your-profile/)".

## <a name="contribution-activity"></a>Atividade de contribuição

A seção de atividade de contribuição contém uma linha do tempo detalhada do seu trabalho, incluindo commits feitos exclusivamente por você ou em coautoria, solicitações de pull que você propôs e problemas que você abriu. Você pode ver suas contribuições ao longo do tempo clicando em **Mostrar mais atividade** na parte inferior da atividade de contribuição ou clicando no ano de interesse no lado direito da página. Momentos importantes, como a data em que você ingressou na organização, propôs sua primeira pull request ou abriu um problema relevante, são realçados na atividade de contribuição. Se você não conseguir ver determinados eventos na sua linha do tempo, verifique se ainda tem acesso à organização ou ao repositório em que o evento aconteceu

![Filtro de hora de atividade de contribuição](/assets/images/help/profile/contributions_activity_time_filter.png)

## <a name="viewing-contributions-from--data-variablesproductprodname_enterprise--on--data-variablesproductprodname_dotcom_the_website-"></a>Como ver as contribuições do {% data variables.product.prodname_enterprise %} no {% data variables.product.prodname_dotcom_the_website %}

Se você usar o {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} ou o {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} e o proprietário da sua empresa habilitar as {% data variables.product.prodname_unified_contributions %}, você poderá enviar contribuições corporativas por meio do seu perfil do {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como enviar contribuições corporativas para o seu perfil do {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)".


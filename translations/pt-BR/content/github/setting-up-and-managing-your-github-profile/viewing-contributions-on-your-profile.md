---
title: Exibir contribuições no perfil
intro: 'Seu perfil do {% data variables.product.product_name %} mostra os repositórios fixos e um gráfico de contribuições no seu repositório no último ano.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O gráfico de contribuição mostra a atividade em repositórios públicos. Você pode optar por mostrar a atividade de repositórios públicos e privados, com detalhes específicos da sua atividade em repositórios privados anônimos. Para obter mais informações, consulte "[Mostrar ou ocultar contribuições privadas no perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)".

{% note %}

**Observação:** os commits só serão exibidos no gráfico de contribuições se você tiver [adicionado o endereço de e-mail usado para sua configuração local do Git nas configurações de e-mail do {% data variables.product.product_name %}](/articles/adding-an-email-address-to-your-github-account). Para obter mais informações, consulte "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#you-havent-added-your-local-git-commit-email-to-your-profile)"

{% endnote %}

### O que conta como contribuição

Na sua página de perfil, determinadas ações contam como contribuições:

- Fazer commit no branch `gh-pages` ou no branch padrão de um repositório
- Abrir um problema
- Propor uma pull request
- Enviar uma revisão de pull request{% if enterpriseServerVersions contains currentVersion %}
- Fazer coautoria de commits no branch `gh-pages` ou no branch padrão do repositório{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Repositórios populares

Esta seção exibe os repositórios com a maioria dos inspetores. Depois que você [fixar os repositórios no seu perfil](/articles/pinning-repositories-to-your-profile), esta seção será alterada para "Repositórios fixos".

![Repositórios populares](/assets/images/help/profile/profile_popular_repositories.png)

### Repositórios fixos

Esta seção exibe até seis repositórios públicos e pode incluir tanto repositórios pertencentes a você como aqueles com os quais você contribuiu. Para ver detalhes importantes sobre os repositórios que você escolheu retratar, cada repositório nesta seção inclui um resumo do trabalho que está sendo feito, o número de [estrelas](/articles/saving-repositories-with-stars/) que ele recebeu e a principal linguagem de programação usada nele. Para obter mais informações, consulte "[Fixar repositórios no seu perfil](/articles/pinning-repositories-to-your-profile)".

![Repositórios fixos](/assets/images/help/profile/profile_pinned_repositories.png)

### Calendário de contribuições

O calendário de contribuições mostra sua atividade de contribuição.

#### Exibir contribuições de horários específicos

- Clique no quadrado de um dia para mostrar as contribuições feitas durante esse período de 24 horas.
- Pressione *Shift* e clique no quadrado de outro dia para mostrar as contribuições feitas durante esse intervalo de tempo.

{% note %}

**Observação:** só é possível selecionar um intervalo de até um mês no calendário de contribuições. Mesmo que você selecione um período maior, será exibido apenas um mês de contribuições.

{% endnote %}

![Gráfico de contribuição](/assets/images/help/profile/contributions_graph.png)

#### Como são calculados os horários de evento de contribuição

Os registros de data e hora são calculados de forma diferente para commits e pull requests:
- Os **commits** usam as informações de fuso horário no registro de data e hora do commit. Para obter mais informações, consulte "[Solucionar problemas de commits na linha do tempo](/articles/troubleshooting-commits-on-your-timeline)".
- As **pull requests** e os **problemas** abertos no {% data variables.product.product_name %} usam o fuso horário do navegador. Os abertos pela API usam o registro de data e hora ou o fuso horário [especificado na chamada de API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

### Visão geral de atividade

{% data reusables.profile.activity-overview-summary %} Para obter mais informações, consulte "[Exibir a visão geral das atividades no perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)".

![Seção Visão geral de atividade no perfil](/assets/images/help/profile/activity-overview-section.png)

As organizações retratadas na visão geral da atividade são priorizadas de acordo com a forma como você está ativo na organização. Se você for integrante de uma organização e @mencioná-la na bio do perfil, essa organização será priorizada na visão geral da atividade. Para obter mais informações, consulte “[Mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)” ou "[Adicionar uma bio ao seu perfil](/articles/adding-a-bio-to-your-profile/)".

### Atividade de contribuição

A seção de atividade de contribuição contém uma linha do tempo detalhada do seu trabalho, incluindo commits feitos exclusivamente por você ou em coautoria, solicitações de pull que você propôs e problemas que você abriu. Para ver suas contribuições ao longo do tempo, clique em **Mostrar mais atividade** na parte inferior da atividade de contribuição ou clique no ano em que você está interessado em visualizar, no lado direito da página. Momentos importantes, como a data em que você ingressou na organização, propôs sua primeira pull request ou abriu um problema relevante, são realçados na atividade de contribuição. Se você não conseguir ver determinados eventos na sua linha do tempo, verifique se ainda tem acesso à organização ou ao repositório em que o evento aconteceu

![Filtro de hora de atividade de contribuição](/assets/images/help/profile/contributions_activity_time_filter.png)

### Exibir contribuições da {% data variables.product.product_location_enterprise %} no {% data variables.product.prodname_dotcom_the_website %}

Se o administrador do site tiver ativado o {% data variables.product.prodname_unified_contributions %}, você poderá enviar contagens de contribuição do {% data variables.product.prodname_enterprise %} para o perfil do {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Enviar suas contribuições do {% data variables.product.prodname_ghe_server %} para o {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)".

### Leia mais

- "[Visualizar contribuições na página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Mostrar ou ocultar contribuições privadas no perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Exibir a visão geral das atividades no perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)"

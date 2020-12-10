---
title: Métricas disponíveis com o GitHub Insights
product: '{% data reusables.gated-features.github-insights %}'
intro: '{% data variables.product.prodname_insights %} inclui uma variedade de métricas para dar visibilidade no processo de entrega de software da sua equipe.'
redirect_from:
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
versions:
  enterprise-server: '*'
---

### Sobre as métricas no {% data variables.product.prodname_insights %}

{% data reusables.github-insights.key-metrics-and-reports %}

{% data reusables.github-insights.about-key-metrics %} Você pode definir e medir metas para cada métrica principal. Para obter mais informações, consulte "[Gerenciar metas](/insights/installing-and-configuring-github-insights/managing-goals)".

{% data reusables.github-insights.about-reports %}

{% data reusables.github-insights.manage-metrics %}

### Métricas principais para colaboração em pull requests

As métricas principais para a colaboração em pull requests ajudam as equipes a remover obstáculos no processo, melhorar a colaboração e entregar projetos mais rápido e com maior qualidade. A melhoria dessas métricas resulta em uma equipe mais produtiva.

- [Distribuição da revisão de código](#code-review-distribution)
- [Resposta da revisão de código](#code-review-turnaround)
- [Tempo de abertura](#time-to-open)
- [Tamanho do pull request](#pull-request-size)
- [Trabalho em andamento](#work-in-progress)

#### Distribuição da revisão de código

Mede a distribuição de revisões de códigos em uma equipe ou organização. O valor mais próximo de 1 indica uma distribuição mais igual. Inclui integrantes que abriram, revisaram ou comentaram em um pull request anteriormente, ou que fizeram o commit de um branch.

O índice é igual a 1 menos do coeficiente de Gini de revisões de código para uma organização ou equipe. Para obter mais informações, consulte [Coeficiente de Gini](https://en.wikipedia.org/wiki/Gini_coefficient) na Wikipedia.

#### Resposta da revisão de código

O tempo decorrido entre uma atividade de revisão e uma revisão concluída.

Para contrariar revisões de códigos como um bloqueador de equipes, as organizações podem otimizar seu processo de atribuição de atividade e definir metas para o tempo de resposta.

#### Tempo de abertura

O tempo decorrido entre o primeiro commit de um usuário para um branch e a abertura de um pull request para esse branch.

A diminuição desse período de tempo permite que os contribuidores recebam feedback mais cedo no processo e permite mais tempo para colaboração e iteração.

#### Tamanho do pull request

Tamanho do diff total de um pull request (total de linhas adicionadas, removidas e alteradas).

Pull requests grandes portam mais risco ao serem implantados na produção e são mais difíceis de revisar, mesclar e liberar. A implantação de pull requests de um tamanho razoável permite que sua equipe reveja e envie novos recursos em uma cadência mais rápida e com mais confiança

#### Trabalho em andamento

O número de pull requests abertos para uma determinada equipe ou organização, expresso como um total bem como uma proporção de solicitações abertas para o desenvolvedor.

Um grande acúmulo de pull request significa que o trabalho pode estar desatualizado, o que indica o esforço desperdiçado da sua equipe. Essa métrica ajuda a manter sua equipe focada e garante que ninguém na equipe seja bloqueado ou sobrecarregado.

### Relatórios

| Métrica                                                       | Descrição                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Atividade                                                     | Uma atividade é qualquer uma das seguintes:<ul><li>Fazer commit em um branch</li><li>Abrir um pull request</li><li>Fechar uma pull request</li><li>Fazer merge de uma pull request</li><li>Fazer comentários em uma pull request</li><li>Aprovar um pull request</li></ul>                                                                                                                                             |
| Atividade, hora                                               | Uma hora com atividade é qualquer hora em que pelo menos um contribuidor registra uma atividade.                                                                                                                 |
| Código de renovação                                           | O código de renovação é alterado em três semanas após ser adicionado ou alterado pela última vez. Isto inclui linhas de código que foram sobrescritas pelo autor ou por outro contribuidor.                      |
| Linhas de código adicionadas e alteradas                      | Contagem total de novas linhas de código além das linhas de código alteradas. Você pode incluir ou excluir o código de renovação.                                                                                |
| Propriedade                                                   | Porcentagem de quebra de linhas de código adicionadas e alteradas pelo último contribuidor para adicionar ou alterar cada linha de código.                                                                       |
| Pareamentos                                                   | Contribuidores que modificam ou removem o código de outro contribuidor.                                                                                                                                          |
| Porcentagem de base de código alterada                        | Linhas de código adicionadas ou alteradas na base de código como porcentagem do total de linhas de código na base de código.                                                                                     |
| Porcentagem de código novo e alterado vs. código de renovação | Linhas de código adicionadas e modificadas, excluindo o código de renovação, como porcentagem do total de linhas de código adicionadas e alteradas, incluindo o código de renovação.                             |
| Pull requests abertos                                         | A contagem de todos os pull requests que estão abertos no final do período selecionado ou o intervalo de tempo exibido no gráfico.                                                                               |
| Retenção                                                      | Porcentagem de linhas de código persistentes na base de código após cada semana, agrupadas na semana em que as linhas foram criadas.                                                                             |
| Tempo para fazer merge                                        | Tempo entre o primeiro commit em um branch e a ação de merge de um pull request naquele branch. A marca de tempo do primeiro commit em um branch é subtraído da marca de tempo na ação de merge do pull request. |

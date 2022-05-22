---
title: Adicionar executores hospedados de AE
intro: 'Você pode adicionar {% data variables.actions.hosted_runner %} a uma organização ou uma empresa.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% note %}

**Observação:** Para adicionar {% data variables.actions.hosted_runner %}a {% data variables.product.prodname_ghe_managed %}, você precisará entrar em contato com o suporte de {% data variables.product.prodname_dotcom %}. Este artigo descreve as informações de que o suporte necessitará para concluir este processo.

{% endnote %}

{% data variables.actions.hosted_runner %}s podem usar as imagens básicas do sistema operacional Azure ou você pode criar suas próprias imagens personalizadas.

### Adicionar um {% data variables.actions.hosted_runner %} a partir da imagem de base do Azure

Você pode adicionar {% data variables.actions.hosted_runner %}s que usam as imagens básicas do sistema operacional do Azure. Para adicionar {% data variables.actions.hosted_runner %}s à sua organização ou empresa, entre em contato com o suporte de {% data variables.product.prodname_dotcom %} e tenha as seguintes informações prontas:
 - Sistema operacional necessário: As opções disponíveis estão listadas nas ["Especificações do software](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)".
 - Selecione um nome para cada conjunto de {% data variables.actions.hosted_runner %}s. Estes nomes são criados como etiquetas, que permite que você roteie os seus fluxos de trabalho para esses executores. Para obter mais informações, consulte ["Usar {% data variables.actions.hosted_runner %}s em um fluxo de trabalho](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".
 - Onde adicionar o {% data variables.actions.hosted_runner %}: Identifique os nomes das organizações e empresas que receberão os executores.

### Adicionar um {% data variables.actions.hosted_runner %} com uma imagem personalizada

Para criar uma imagem personalizada do sistema operacional, consulte as etapas de ["Criar imagens personalizadas"](/actions/using-github-hosted-runners/creating-custom-images).

Depois de criar uma imagem personalizada usando os passos acima, entre em contato com o suporte de {% data variables.product.prodname_dotcom %} e forneça as informações a seguir:

  - O URI do SAS que você gerou ao seguir as etapas de criação de imagens personalizadas.
  - Tipo de sistema operacional usado pela imagem: pode ser Linux ou Windows.
  - Nome da imagem.
  - Versão.
  - VM SKU para o novo grupo.
  - Selecione um nome para cada conjunto de {% data variables.actions.hosted_runner %}s. Estes nomes são criados como etiquetas, que permite que você roteie os seus fluxos de trabalho para esses executores. Para obter mais informações, consulte ["Usar {% data variables.actions.hosted_runner %}s em um fluxo de trabalho](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".
  - Onde adicionar o {% data variables.actions.hosted_runner %}: Identifique os nomes das organizações e empresas que receberão os executores.

### Revisar seus {% data variables.actions.hosted_runner %}s

Depois que seus executores forem adicionados pelo suporte de {% data variables.product.prodname_dotcom %}, você poderá encontrá-los na sua lista de executores:

{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}

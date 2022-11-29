---
title: Exibir patrocinadores e patrocínios
intro: Você pode ver e exportar informações detalhadas e análises sobre seus patrocinadores e patrocínios.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128192'
---
## Sobre patrocinadores e patrocínios

Você pode ver a análise sobre seus patrocínios atuais e anteriores, os pagamentos que recebeu de patrocinadores e eventos, como cancelamentos e mudanças na camada dos patrocinadores para seus patrocínios. Você também pode visualizar as atividades, tais como novos patrocinadores, alterações e cancelamentos nos patrocínios. Você pode filtrar a lista de atividades por data. Você também pode exportar dados de patrocínio para a conta que você está visualizando em formato CSV ou JSON.

## Sobre os metadados de transação

Para controlar a origem dos seus patrocinadores, você pode usar URLs personalizados com metadados para a sua página de perfil {% data variables.product.prodname_sponsors %} ou para a sua página de check-out. Os metadados serão incluídos na sua exportação de transação na coluna de metadados. Para obter mais informações sobre como exportar dados de transação, confira "[Como exportar seus dados de patrocínio](#exporting-your-sponsorship-data)".

Os metadados precisam usar o formato `key=value` e podem ser adicionados ao final destas URLs.

- Perfil da conta patrocinada: `https://github.com/sponsors/{account}`
- Check-out de patrocínio: `https://github.com/sponsors/{account}/sponsorships`

Os metadados persistirão no URL, uma vez que um potencial patrocinador troca as contas para patrocinar, seleciona pagamentos mensais ou únicos e escolhe um nível diferente.

### Requisitos de sintaxe

Seus metadados devem atender aos seguintes requisitos, que não se aplicam a quaisquer outros parâmetros de URL passados.

- As chaves precisam ter o prefixo `metadata_`, como `metadata_campaign`. Na exportação de transações, o prefixo `metadata_` será removido da chave.
- As chaves e os valores devem conter apenas valores alfanuméricos, hífens ou sublinhados. Se os caracteres não aceitos forem passados em chaves ou valores, será exibido um erro 404.
- Espaços brancos não são permitidos.
- No máximo, **dez** pares chave-valor são aceitos por solicitação. Se mais forem aprovados, apenas os primeiros 10 serão salvos.
- No máximo, **25** caracteres por chave são aceitos. Se mais do que isso for aprovado, apenas os primeiros 25 serão salvos.
- No máximo, **100** caracteres por valor são aceitos. Se mais do que isso for aprovado, apenas os primeiros 100 serão salvos.

Por exemplo, você pode usar `https://github.com/sponsors/{account}?metadata_campaign=myblog` para acompanhar os patrocínios originados no blog. `metadata_campaign` é a chave, e `myblog` é o valor. Na coluna de metadados da exportação de transação, a chave será listada como `campaign`.

## Exibir patrocinadores e patrocínios

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Opcionalmente, para filtrar os patrocinadores por camada, use o menu suspenso **Filtrar**, clique em **Camadas ativas** ou **Camadas desativadas** e selecione uma camada.
  ![Menu suspenso usado para filtragem por camada](/assets/images/help/sponsors/filter-drop-down.png)

## Visualizando atividade de patrocínio recente

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## Exportando seus dados de patrocínio

Você pode exportar suas transações de patrocínio por mês. {% data variables.product.company_short %} enviará um e-mail com dados de transação para todos os seus patrocinadores do mês que você selecionar. Depois que a exportação estiver concluída, você poderá exportar mais um mês de dados. Você pode exportar até 10 conjuntos de dados por hora para qualquer uma das suas contas patrocinadas.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. No canto superior à direita, clique em {% octicon "download" aria-label="The download icon" %} **Exportar**.
  ![Botão Exportar](/assets/images/help/sponsors/export-all.png)
1. Escolha um período e um formato para os dados que deseja exportar e clique em **Iniciar exportação**.
  ![Opções de exportação de dados](/assets/images/help/sponsors/export-your-sponsors.png)

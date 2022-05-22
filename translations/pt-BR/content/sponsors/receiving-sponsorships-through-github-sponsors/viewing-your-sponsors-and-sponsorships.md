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
shortTitle: Ver patrocinadores & patrocínios
---

## Sobre patrocinadores e patrocínios

Você pode ver a análise sobre seus patrocínios atuais e anteriores, os pagamentos que recebeu de patrocinadores e eventos, como cancelamentos e mudanças na camada dos patrocinadores para seus patrocínios. Você também pode visualizar as atividades, tais como novos patrocinadores, alterações e cancelamentos nos patrocínios. Você pode filtrar a lista de atividades por data. Você também pode exportar dados de patrocínio para a conta que você está visualizando em formato CSV ou JSON.

## About transaction metadata

To track where your sponsorships are coming from, you can use custom URLs with metadata for your {% data variables.product.prodname_sponsors %} profile or checkout page. The metadata will be included in your transaction export in the metadata column. For more information about exporting transaction data, see "[Exporting your sponsorship data](#exporting-your-sponsorship-data)."

Metadata must use the `key=value` format and can be added to the end of these URLs.

- Sponsored account profile: `https://github.com/sponsors/{account}`
- Sponsorship checkout: `https://github.com/sponsors/{account}/sponsorships`

The metadata will persist in the URL as a potential sponsor switches accounts to sponsor with, selects monthly or one-time payments, and chooses a different tier.

### Syntax requirements

Your metadata must meet the following requirements, which do not apply to any other URL parameters that are passed.

- Keys must be prefixed by `metadata_`, such as `metadata_campaign`. In your transaction export, the `metadata_` prefix will be removed from the key.
- Keys and values must only contain alphanumeric values, dashes, or underscores. If non-accepted characters are passed in either keys or values, a 404 error will be presented.
- Whitespaces are not allowed.
- A maximum of **10** key-value pairs are accepted per request. If more are passed, only the first 10 will be saved.
- A maximum of **25** characters per key are accepted. If more than that are passed, only the first 25 will be saved.
- A maximum of **100** characters per value are accepted. If more than that are passed, only the first 100 will be saved.

For example, you can use `https://github.com/sponsors/{account}?metadata_campaign=myblog` to track sponsorships that originate from your blog. `metadata_campaign` is the key and `myblog` is the value. In the metadata column of your transaction export, the key will be listed as `campaign`.

## Exibir patrocinadores e patrocínios

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Como alternativa, para filtrar os patrocinadores por nível, use o menu suspenso **Filter** (Filtro), clique em **Active tiers** (Níveis ativos) ou **Retired tiers** (Níveis removidos) e selecione um nível. ![Menu suspenso para filtrar por nível](/assets/images/help/sponsors/filter-drop-down.png)

## Visualizando atividade de patrocínio recente

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}

## Exportando seus dados de patrocínio

Você pode exportar suas transações de patrocínio por mês. {% data variables.product.company_short %} enviará um e-mail com dados de transação para todos os seus patrocinadores do mês que você selecionar. Depois que a exportação estiver concluída, você poderá exportar mais um mês de dados. Você pode exportar até 10 conjuntos de dados por hora para qualquer uma das suas contas patrocinadas.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}
1. Clique em {% octicon "download" aria-label="The download icon" %} **Exportar**. ![Botão de exportação](/assets/images/help/sponsors/export-all.png)
1. Escolha um período de tempo e um formato para os dados que você gostaria de exportar e, em seguida, clique em **Iniciar a exportação**. ![Opções de Exportar dados](/assets/images/help/sponsors/export-your-sponsors.png)

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

## Sobre os metadados de transação

Para controlar a origem dos seus patrocinadores, você pode usar URLs personalizados com metadados para a sua página de perfil {% data variables.product.prodname_sponsors %} ou para a sua página de check-out. Os metadados serão incluídos na sua exportação de transação na coluna de metadados. Para obter mais informações sobre a exportação de dados de transação, consulte "[Exportando seus dados de patrocínio](#exporting-your-sponsorship-data)".

Os metadados devem usar o formato `key=value` e podem ser adicionados ao final dessas URLs.

- Perfil de conta patrocinado: `https://github.com/sponsors/{account}`
- Checkout para patrocínio: `https://github.com/sponsors/{account}/sponsorships`

Os metadados persistirão no URL, uma vez que um potencial patrocinador troca as contas para patrocinar, seleciona pagamentos mensais ou únicos e escolhe um nível diferente.

### Requisitos de sintaxe

Seus metadados devem atender aos seguintes requisitos, que não se aplicam a quaisquer outros parâmetros de URL passados.

- As chaves devem ser prefixadas por `metadados_`, como `metadata_campaign`. Na exportação da sua transação, os prefixo `metadada_` serão removidos da chave.
- As chaves e os valores devem conter apenas valores alfanuméricos, hífens ou sublinhados. Se os caracteres não aceitos forem passados em chaves ou valores, será exibido um erro 404.
- Espaços brancos não são permitidos.
- São aceitos, no máximo **10** pares de chave-valor por solicitação. Se mais forem aprovados, apenas os primeiros 10 serão salvos.
- São aceitos, no máximo, **25** caracteres por chave. Se mais do que isso for aprovado, apenas os primeiros 25 serão salvos.
- São aceitos, no máximo, **100** caracteres por valor. Se mais do que isso for aprovado, apenas os primeiros 100 serão salvos.

Por exemplo, você pode usar `https://github.com/sponsors/{account}?metadata_campaign=myblog` para acompanhar patrocinadores que se originaram no seu blogue. `metadata_campaign` é a chave e `myblog` é o valor. Na coluna de metadados da sua exportação da transação, a chave será listada como a `campanha`.

## Exibir patrocinadores e patrocínios

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Como alternativa, para filtrar os patrocinadores por nível, use o menu suspenso **Filter** (Filtro), clique em **Active tiers** (Níveis ativos) ou **Retired tiers** (Níveis removidos) e selecione um nível. ![Menu suspenso para filtrar por nível](/assets/images/help/sponsors/filter-drop-down.png)

## Visualizando atividade de patrocínio recente

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}

## Exportando seus dados de patrocínio

Você pode exportar suas transações de patrocínio por mês. {% data variables.product.company_short %} enviará um e-mail com dados de transação para todos os seus patrocinadores do mês que você selecionar. Depois que a exportação estiver concluída, você poderá exportar mais um mês de dados. Você pode exportar até 10 conjuntos de dados por hora para qualquer uma das suas contas patrocinadas.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}
1. In the top-right, click {% octicon "download" aria-label="The download icon" %} **Export**. ![Botão de exportação](/assets/images/help/sponsors/export-all.png)
1. Escolha um período de tempo e um formato para os dados que você gostaria de exportar e, em seguida, clique em **Iniciar a exportação**. ![Opções de Exportar dados](/assets/images/help/sponsors/export-your-sponsors.png)

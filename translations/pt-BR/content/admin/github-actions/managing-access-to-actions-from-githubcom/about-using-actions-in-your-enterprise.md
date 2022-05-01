---
title: Sobre como usar ações na sua empresa
intro: '{% data variables.product.product_name %} inclui a maioria das ações de autoria de {% data variables.product.prodname_dotcom %} e tem opções para permitir o acesso a outras ações de {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: Sobre ações na sua empresa
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre ações em {% data variables.product.product_name %}

Os fluxos de trabalho de {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que você pode combinar para criar tarefas e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} Você pode restringir seus desenvolvedores a usar ações que são armazenadas em {% data variables.product.product_location %}, o que inclui a maioria das ações oficiais de criadas por {% data variables.product.company_short %}, bem como quaisquer ações que seus desenvolvedores criarem. Como alternativa, para permitir que seus desenvolvedores se beneficiem de todo o ecossistema de ações criadas pelos líderes do setor e pela comunidade de código aberto você pode configurar o acesso a outras ações a partir de {% data variables.product.prodname_dotcom_the_website %}.

Recomendamos permitir acesso automático a todas as ações de {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}No entanto, isso exige que {% data variables.product.product_name %} faça conexões de saída para {% data variables.product.prodname_dotcom_the_website %}. Se você não quiser permitir essas conexões ou{% else %}Se{% endif %} se você quiser ter maior controle sobre quais ações são usadas em sua empresa, você pode sincronizar manualmente ações específicas de {% data variables.product.prodname_dotcom_the_website %}.

## Ações oficiais agrupadas com a sua instância corporativa

{% data reusables.actions.actions-bundled-with-ghes %}

As acções oficiais agrupadas incluem, entre outras, as listadas a seguir.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Diversas ações de `actions/setup-`

Para ver todas as ações oficiais incluídas na instância da sua empresa, acesse a organização das `ações` na sua instância: <code>https://<em>HOSTNAME</em>/actions</code>.

Não há conexão necessária entre {% data variables.product.product_location %} e {% data variables.product.prodname_dotcom_the_website %} para usar essas ações.

Cada ação é um repositório na organização de `ações`, e cada repositório de ação inclui as tags necessárias, branches e commit de SHAs que seus fluxos de trabalho podem usar para fazer referência à ação. Para obter informações sobre como atualizar as ações oficiais empacotadas, consulte "[Usar a versão mais recente das ações oficiais empacotadas](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Notas:**
- Ao usar ações de configuração (como `actions/setup-LANGUAGE`) em {% data variables.product.product_name %} com executores auto-hospedados, você pode precisar configurar o armazenamento de ferramentas em executores que não possuem acesso à internet. Para obter mais informações, consulte "[Configurar o cache da ferramenta em executores auto-hospedados sem acesso à internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".
- Bundled actions are automatically updated when {% data variables.product.product_name %} is updated.

{% endnote %}

## Configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

A abordagem recomendada é habilitar o acesso automático para todas as ações a partir de {% data variables.product.prodname_dotcom_the_website %}. Você pode fazer isso usando {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} com {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

{% ifversion ghes %}
{% note %}

**Oservação:** Antes que você possa configurar o acesso a ações em {% data variables.product.prodname_dotcom_the_website %}, você deve configurar {% data variables.product.product_location %} para usar {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."


{% endnote %}
{% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, se você quiser um controle mais rigoroso sobre quais as ações são permitidas na sua empresa, ou você não deseja permitir conexões de saída para {% data variables.product.prodname_dotcom_the_website %}, você pode fazer o download e sincronizar manualmente ações para a instância corporativa usando a ferramenta `actions-sync`. Para obter mais informações, consulte "[Sincronizando ações manualmente com o {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".

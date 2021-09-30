---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between your enterprise accounts automatically. Automatic synchronization ensures that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can manually sync license usage by uploading a file from {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}.

For more information about licenses and usage for {% data variables.product.prodname_ghe_server %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

## Automatically syncing license usage

É possível usar o {% data variables.product.prodname_github_connect %} para sincronizar automaticamente o uso e a contagem da licença de usuários entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar a sincronização de licenças de usuário entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)".

## Manually syncing license usage

Para sincronizar manualmente o uso das licenças de usuário entre as duas implantações, você pode baixar um arquivo JSON do {% data variables.product.prodname_ghe_server %} e fazer upload desse arquivo no {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Em "Quick links" (Links rápidos), para baixar um arquivo com o uso da sua licença atual no {% data variables.product.prodname_ghe_server %}, clique em **Export license usage** (Exportar uso de licença). ![Exportar link de uso de licença](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Em "Instâncias Enterprise Server", clique em **Add server usage** (Adicionar uso de servidor). ![Fazer upload do link de uso do GitHub Enterprise Server](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Faça upload do arquivo JSON que você baixou do {% data variables.product.prodname_ghe_server %}.![Arrastar e soltar ou selecionar um arquivo para upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)

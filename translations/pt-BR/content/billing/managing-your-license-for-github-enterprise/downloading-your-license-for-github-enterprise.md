---
title: Fazendo o download da sua licença para o GitHub Enterprise
intro: 'Você pode fazer o download de uma cópia do arquivo da sua licença para {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  fpt: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Faça o download da sua licença
---

## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

Após comprar ou atualizar uma licença para {% data variables.product.prodname_enterprise %} de {% data variables.contact.contact_enterprise_sales %}, você deverá fazer o download do arquivo da sua nova licença. Para obter mais informações sobre licenças para {% data variables.product.prodname_enterprise %}, consulte "[Sobre licenças para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Fazer o download da sua licença de {% data variables.product.prodname_dotcom_the_website %}

Você deve ter uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} para fazer o download da sua licença em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre contas corporativas, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Em "Enterprise Server Instances", clique em {% octicon "download" aria-label="The download icon" %} para fazer o download do seu arquivo de licença. ![Baixar licença do GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

Depois de fazer o download do arquivo da sua licença, você poderá enviar o arquivo para {% data variables.product.product_location_enterprise %} para validar seu aplicativo. Para obter mais informações, consulte {% ifversion fpt %}"[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" na documentação de {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}"[Fazero upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

## Fazer o download da sua licença se você não tiver uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}

Se você não tiver uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}, ou se você não tiver certeza, é possível que você consiga fazer o download da sua licença {% data variables.product.prodname_ghe_server %} no site [{% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Em caso de dúvidas sobre o download da sua licença, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

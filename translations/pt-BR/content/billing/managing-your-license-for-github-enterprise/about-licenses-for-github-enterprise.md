---
title: Sobre licenças para o GitHub Enterprise
intro: '{% ifversion fpt %}Se você comprar {% data variables.product.prodname_enterprise %} e usar {% data variables.product.prodname_ghe_server %}, cada{% elsif ghes %}Cada{% endif %} instância de {% data variables.product.prodname_ghe_server %} exige um arquivo de licença para validar e desbloquear o aplicativo.'
versions:
  fpt: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Sobre licenças
---

## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

{% ifversion fpt %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

Ao comprar ou renovar {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} fornece o arquivo de uma licença {% ifversion fpt %}para suas implantações de {% data variables.product.prodname_ghe_server %}{% elsif ghes %}para {% data variables.product.product_location_enterprise %}{% endif %}. O arquivo de uma licença tem uma data de validade e controla o número de pessoas que podem usar {% data variables.product.product_location_enterprise %}. Após fazer o download e instalar o {% data variables.product.prodname_ghe_server %}, você deverá fazer o upload do arquivo de licença para desbloquear o aplicativo para você usar.

Para obter mais informações sobre a transferência de arquivo da sua licença, consulte "[Fazer o download da sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)". Para obter mais informações sobre como fazer o upload do seu arquivo de licença, consulte {% ifversion fpt %}"[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" na documentação de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

Se sua licença vencer, você não poderá acessar {% data variables.product.prodname_ghe_server %} por meio de um navegador ou Git. Se necessário, você poderá usar os utilitários de linha de comando para fazer backup de todos os seus dados. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)". Se você tiver alguma dúvida sobre a renovação da sua licença, contate {% data variables.contact.contact_enterprise_sales %}.

## Sobre a sincronização do uso da licença para {% data variables.product.prodname_enterprise %}

{% ifversion ghes %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

{% data reusables.enterprise-licensing.about-license-sync %} Para mais informações, consulte {% ifversion fpt %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" na documentação de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

## Leia mais

- "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Site de [Versões de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- [Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)

---
title: Sobre licenças para o GitHub Enterprise
intro: '{% ifversion ghec %}Se você implantar {% data variables.product.prodname_ghe_server %} além de usar {% data variables.product.prodname_ghe_cloud %}, você{% else %}Você{% endif %} pode sincronizar o uso da sua licença entre{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} implantações e usar um arquivo de licença para desbloquear cada instância do {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Sobre licenças
---

## Sobre o licenciamento para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Para garantir que o mesmo usuário não esteja consumindo mais de uma licença para várias implantações corporativas, você pode sincronizar o uso da licença entre as suas implentações {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}.

Para usar uma instância de {% data variables.product.prodname_ghe_server %}, você deve fazer o upload de um arquivo de licença que {% data variables.product.company_short %} fornece quando você compra, renovar ou adicionar licenças de usuário para {% data variables.product.prodname_enterprise %}.

## Sobre a sincronização do uso da licença para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obter mais informações, consulte "[Sincronizando uso de licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

Ao comprar ou renovar {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} fornece o arquivo de uma licença {% ifversion ghec %}para suas implantações de {% data variables.product.prodname_ghe_server %}{% elsif ghes %}para {% data variables.product.product_location_enterprise %}{% endif %}. O arquivo de uma licença tem uma data de validade e controla o número de pessoas que podem usar {% data variables.product.product_location_enterprise %}. Após fazer o download e instalar o {% data variables.product.prodname_ghe_server %}, você deverá fazer o upload do arquivo de licença para desbloquear o aplicativo para você usar.

Para obter mais informações sobre a transferência de arquivo da sua licença, consulte "[Fazer o download da sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".

Para obter mais informações sobre como fazer o upload do seu arquivo de licença, consulte {% ifversion ghec %}"[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" na documentação de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

Se sua licença vencer, você não poderá acessar {% data variables.product.prodname_ghe_server %} por meio de um navegador ou Git. Se necessário, você poderá usar os utilitários de linha de comando para fazer backup de todos os seus dados. Para obter mais informações, consulte {% ifversion ghec %}"[Configurando backups no seu dispositivo]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" na documentação do {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Configurando backups no seu dispositivo](/admin/guides/installation/configuring-backups-on-your-appliance)". {% endif %}

Se você tiver alguma dúvida sobre a renovação da sua licença, contate {% data variables.contact.contact_enterprise_sales %}.

## Leia mais

- "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Site de [Versões de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- [Configurar instância do {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)

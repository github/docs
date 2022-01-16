---
title: Fazer o upload uma nova licença para o GitHub Enterprise Server
intro: 'Você pode fazer o upload do arquivo da sua licença para {% data variables.product.prodname_enterprise %} para {% data variables.product.product_location_enterprise %} a fim de validar seu aplicativo.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Fazer o upload de uma nova licença
---

## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

Após comprar ou atualizar uma licença para {% data variables.product.prodname_enterprise %} de {% data variables.contact.contact_enterprise_sales %}, você deverá fazer o upload do novo arquivo de licença para {% data variables.product.product_location_enterprise %} para desbloquear suas novas licenças de usuário. Para obter mais informações sobre licenças para {% data variables.product.product_name %}, consulte "[Sobre licenças para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" e "[Fazer o download da sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Fazendo o upload da sua licença para {% data variables.product.product_location_enterprise %}

1. Efetue o login em {% data variables.product.product_location_enterprise %} como administrador do site.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Em "Quick links" (Links rápidos), clique em **Update license** (Atualizar licença). ![Link de atualização de licença](/assets/images/enterprise/business-accounts/update-license-link.png)
1. Para selecionar sua licença, clique em **License file** (Arquivo de licença) ou arraste o arquivo de licença para o **License file** (Arquivo de licença). ![Fazer upload do arquivo de licença](/assets/images/enterprise/management-console/upload-license.png)
1. Clique em **Fazer upload**. ![Iniciar upload](/assets/images/enterprise/management-console/begin-upload.png)

{% ifversion ghes < 3.0 %}

Se a interface web para {% data variables.product.prodname_ghe_server %} não refletir sua licença atualizada imediatamente, consulte "[Solução de problemas](#troubleshooting). "

## Solução de Problemas

Em alguns cenários, a interface de usuário web para {% data variables.product.prodname_ghe_server %} pode não refletir imediatamente sua nova licença. Você pode forçar o sistema a detectar a licença, reiniciando dois serviços do sistema.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Reinicie os serviços para autenticação Git e o servidor HTTP.

    {% warning %}

    **Aviso**: Executar o seguinte comando gerará alguns minutos de tempo de inatividade do usuário para {% data variables.product.prodname_ghe_server %}. Execute o comando com cuidado.

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. Depois que {% data variables.product.prodname_ghe_server %} retornar você para uma instrução, tente acessar {% data variables.product.prodname_ghe_server %} por meio da linha de comando ou da interface do usuário da web novamente.

{% endif %}

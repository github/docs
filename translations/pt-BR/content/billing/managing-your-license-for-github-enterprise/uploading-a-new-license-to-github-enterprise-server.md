---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.product.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.product.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.product.product_location_enterprise %}

1. Efetue o login em {% data variables.product.product_location_enterprise %} como administrador do site.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Em "Quick links" (Links rápidos), clique em **Update license** (Atualizar licença). ![Link de atualização de licença](/assets/images/enterprise/business-accounts/update-license-link.png)
1. Para selecionar sua licença, clique em **License file** (Arquivo de licença) ou arraste o arquivo de licença para o **License file** (Arquivo de licença). ![Fazer upload do arquivo de licença](/assets/images/enterprise/management-console/upload-license.png)
1. Clique em **Fazer upload**. ![Iniciar upload](/assets/images/enterprise/management-console/begin-upload.png)

{% ifversion ghes < 3.0 %}

If the web UI for {% data variables.product.prodname_ghe_server %} doesn't reflect your updated license immediately, see "[Troubleshooting](#troubleshooting)."

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

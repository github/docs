---
title: Gerenciamento do GitHub para dispositivos móveis para sua empresa
intro: 'Você pode decidir se usuários autenticados podem se conectar-se a {% data variables.product.product_location %} com {% data variables.product.prodname_mobile %}.'
permissions: 'Os proprietários da empresa podem gerenciar {% data variables.product.prodname_mobile %} para uma empresa em {% data variables.product.product_name %}.'
versions:
  enterprise-server: '>=3.0'
topics:
  - enterprise
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Sobre o {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %} Para obter mais informações, consulte "[GitHub para celular](/github/getting-started-with-github/github-for-mobile)".

Os membros da sua empresa podem usar {% data variables.product.prodname_mobile %} para triar, colaborar e gerenciar o trabalho em {% data variables.product.product_location %} em um dispositivo móvel. Por padrão, {% data variables.product.prodname_mobile %} está habilitado para {% data variables.product.product_location %}. Você pode permitir ou impedir que os membros corporativos usem {% data variables.product.prodname_mobile %} para efetuar a autenticação em {% data variables.product.product_location %} e acessar os dados da sua empresa.

### Habilitar ou desabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. Na barra lateral esquerda, clique em **Celular**. !["Celular" na barra lateral esquerda para o console de gerenciamento de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Em "GitHub dispositivos móveis", selecione ou desmarque a opção de **Habilitar aplicativos para GitHub móvel**. ![Caixa de seleção para "Habilitar os aplicativos do GitHub móvel" no console de gerenciamento de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}

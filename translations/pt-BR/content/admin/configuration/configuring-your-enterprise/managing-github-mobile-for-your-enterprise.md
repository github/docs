---
title: Gerenciando o GitHub Mobile para a sua empresa
intro: 'Você pode decidir se as pessoas podem usar {% data variables.product.prodname_mobile %} para se conectar a {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Gerenciar o GitHub Mobile
---

## Sobre o {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} permite às pessoas testar, colaborar e gerenciar trabalhos em {% data variables.product.product_location %} por meio de um dispositivo móvel após a autenticação bem-sucedida. {% data reusables.mobile.about-mobile %} Para obter mais informações, consulte "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

Você pode permitir ou impedir que as pessoas usem {% data variables.product.prodname_mobile %} para efetuar a autenticação em {% data variables.product.product_location %} e acessar os dados da sua instância. Por padrão, {% data variables.product.prodname_mobile %} é{% ifversion ghes > 3.3 %} habilitado para pessoas que usam {% data variables.product.product_location %}.{% else %} não habilitado para pessoas que usam {% data variables.product.product_location %}. Para permitir conexão com a sua instância com {% data variables.product.prodname_mobile %}, você deve habilitar o recurso para a sua instância.{% endif %}

{% ifversion ghes < 3.6 and ghes > 3.1 %}
{% note %}

**Observação:** Se você fizer a atualização para {% data variables.product.prodname_ghe_server %} 3.4. ou posterior e não tiver previamente desabilitado ou habilitado {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_mobile %} será habilitado por padrão. Se você desabilitou ou habilitou {% data variables.product.prodname_mobile %} anteriormente para a sua instância, a sua preferência será preservada após a atualização. Para obter mais informações sobre como atualizar sua instância, consulte "[Atualizando {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)".

{% endnote %}
{% endif %}

## Habilitar ou desabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. Na barra lateral esquerda, clique em **Celular**. !["Celular" na barra lateral esquerda para o console de gerenciamento de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Em "GitHub Mobile", selecione ou desmarque **Habilitar aplicativos do GitHub Mobile**. ![Caixa de seleção para "Habilitar os aplicativos do GitHub móvel" no console de gerenciamento de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}

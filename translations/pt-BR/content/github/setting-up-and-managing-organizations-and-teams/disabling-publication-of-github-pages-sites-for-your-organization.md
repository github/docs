---
title: Desabilitar a publicação de sites do GitHub Pages para sua organização
intro: 'É possível impedir que os integrantes da sua organização publiquem sites do {% data variables.product.prodname_pages %} em repositórios na organização.'
permissions: 'Os proprietários da organização podem desabilitar a publicação de sites do {% data variables.product.prodname_pages %} em repositórios na organização.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
---

### Sobre as restrições na publicação de sites do {% data variables.product.prodname_pages %}

Você pode controlar se os integrantes da sua organização podem publicar sites de repositórios na sua organização usando o {% data variables.product.prodname_pages %}. Para obter mais informações sobre {% data variables.product.prodname_pages %}, consulte "[Sobre {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)."

{% if currentVersion != "free-pro-team@latest" %}Se o administrador do seu site habilitou páginas públicas, {% endif %} os sites do {% data variables.product.prodname_pages %} ficarão publicamente disponíveis na internet, Mesmo que o repositório para o site seja privado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou interno{% endif %}. For more information, see{% if currentVersion != "free-pro-team@latest" %} "[Configuring {% data variables.product.prodname_pages %} on your appliance](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)" and{% endif %} "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

### Desabilitar publicação de sites do {% data variables.product.prodname_pages %}

Depois de desabilitar a publicação de sites do {% data variables.product.prodname_pages %} , qualquer site publicado permanecerá publicado. Você pode remover manualmente a publicação do site. Para obter mais informações, consulte "[Cancelar a publicação de um site do {% data variables.product.prodname_pages %}](/github/working-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Em "Criação de páginas, desmarque **Permitir que os integrantes publiquem sites**. ![Caixa de seleção não marcada para a opção "Permitir que os membros publiquem sites"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. Clique em **Salvar**. ![Botão "Salvar" para a opção "Permitir que os integrantes publiquem sites"](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)

---
title: Desabilitar a publicação de sites do GitHub Pages para sua organização
intro: 'É possível impedir que os integrantes da sua organização publiquem sites do {% data variables.product.prodname_pages %} em repositórios na organização.'
permissions: 'Os proprietários da organização podem desabilitar a publicação de sites do {% data variables.product.prodname_pages %} em repositórios na organização.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
  github-ae: '*'
---

### Sobre as restrições na publicação de sites do {% data variables.product.prodname_pages %}

Você pode controlar se os integrantes da sua organização podem publicar sites de repositórios na sua organização usando o {% data variables.product.prodname_pages %}. Para obter mais informações sobre {% data variables.product.prodname_pages %}, consulte "[Sobre {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)."

{% if enterpriseServerVersions contém currentVersion ou currentVersion == "github-ae@latest" %}Se o administrador do site tiver habilitado Páginas Públicas, os sites de {% endif %}{% data variables.product.prodname_pages %} ficarão disponíveis publicamente na internet, mesmo que o repositório do site seja privado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 9" or currentVersion == "github-ae@latest" %} ou{% endif %} interno. Para mais informações, consulte {% if enterpriseServerVersions contém currentVersion ou currentVersion == "github-ae@latest" %}[Configurar {% data variables.product.prodname_pages %} para a sua empresa](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" e{% endif %} "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

### Desabilitar publicação de sites do {% data variables.product.prodname_pages %}

Depois de desabilitar a publicação de sites do {% data variables.product.prodname_pages %} , qualquer site publicado permanecerá publicado. Você pode remover manualmente a publicação do site. Para obter mais informações, consulte "[Cancelar a publicação de um site do {% data variables.product.prodname_pages %}](/github/working-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Em "Criação de páginas", desmarque **Permitir que os integrantes publiquem sites**. ![Caixa de seleção não marcada para a opção "Permitir que os membros publiquem sites"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. Clique em **Salvar**. ![Botão "Salvar" para a opção "Permitir que os integrantes publiquem sites"](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)

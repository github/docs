---
title: Revisar as integrações instaladas da organização
intro: Você pode revisar os níveis de permissão das integrações instaladas da organização e configurar o acesso de cada integração aos repositórios da organização.
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Revisar integrações instaladas
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. In the left sidebar, click **Installed {% data variables.product.prodname_github_apps %}**. ![Installed {% data variables.product.prodname_github_apps %} tab in the organization settings sidebar](/assets/images/help/organizations/org-settings-installed-github-apps.png)
5. Próximo do {% data variables.product.prodname_github_app %} que deseja revisar, clique em **Configure** (Configurar). ![Botão Configure (Configurar)](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Revise o acesso ao repositório e as permissões de {% data variables.product.prodname_github_app %}. ![Opção para fornecer ao {% data variables.product.prodname_github_app %} acesso a todos os repositórios ou a repositórios específicos](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Para fornecer acesso ao {% data variables.product.prodname_github_app %} em todos os repositórios da organização, selecione **All repositories** (Todos os repositórios).
    - Para selecionar repositórios específicos para fornecer acesso ao aplicativo, selecione **Only select repositories** (Somente os repositórios selecionados) e insira o nome do repositório.
7. Clique em **Salvar**.

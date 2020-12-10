---
title: Configurando permissões para aplicativos GitHub
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Ao criar um aplicativo GitHub, você pode selecionar as permissões de que precisa para acessar os dados do usuário final. As permissões também podem ser adicionadas e removidas. Para obter mais informações, consulte "[Editando as permissões de um aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

### Permissões de metadados

Por padrão, os aplicativos GitHub têm acesso `somente leitura` aos pontos de extremidade dos metadados. Metadados é uma coleção de pontos de extremidade somente leitura que fornecem informações gerais sobre recursos que a instalação autorizada pode acessar.

{% data reusables.apps.metadata-permissions %} Para obter uma lista de pontos de extremidade dos metadados, consulte "[Permissões dos metadados](/rest/reference/permissions-required-for-github-apps#metadata-permissions)".

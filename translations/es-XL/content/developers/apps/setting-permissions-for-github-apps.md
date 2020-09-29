---
title: Configurar los permisos para las GitHub Apps
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Cuando creas una GitHub App, puedes seleccionar los permisos a los que necesita para acceder a los datos del usuario final. Los permisos también se pueden agregar y eliminar. Para obtener más información, consulta la sección "[Editar los permisos de una GitHub App](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

### Permisos de metadatos

Predeterminadamente, las GitHub Apps tienen acceso de `Read-only` a las terminales de metadatos. Los metadatos son un conjunto de terminales de solo lectura que proporcionan información general acerca de los recursos a los que puede acceder la instalación autorizada.

{% data reusables.apps.metadata-permissions %}Para encontrar una lista de terminales de metadatos, consulta la sección "[Permisos de metadatos](/v3/apps/permissions/#metadata-permissions)".

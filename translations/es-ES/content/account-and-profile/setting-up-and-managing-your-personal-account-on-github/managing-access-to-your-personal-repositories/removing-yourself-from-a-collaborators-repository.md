---
title: Eliminarte del repositorio de un colaborador
intro: 'Si no quieres seguir siendo colaborador del repositorio de otra persona, te puedes eliminar.'
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Eliminarte a ti mismo
---

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. En la sección de "Código, planeación y automatización" de la barra lateral, haz clic en **Repositorios {% octicon "repo" aria-label="The repo icon" %}**.
{% else %}
2. En la barra lateral izquierda, haz clic en **Repositories** (Repositorios). ![Pestaña Repositories (Repositorios)](/assets/images/help/settings/settings-sidebar-repositories.png)
{% endif %}
3. Junto al repositorio que quieres abandonar, haz clic en **Leave** (Abandonar). ![Botón Leave (Abandonar)](/assets/images/help/repository/repo-leave.png)
4. Lee la advertencia con atención, luego haz clic en "I understand, leave this repository" (Comprendo, abandonar este repositorio). ![Cuadro de diálogo con advertencia sobre el abandono](/assets/images/help/repository/repo-leave-confirmation.png)

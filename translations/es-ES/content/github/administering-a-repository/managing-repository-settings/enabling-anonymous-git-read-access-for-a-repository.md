---
title: Activar el acceso de lectura Git anónimo para un repositorio
intro: 'Como administrador de un repositorio, puedes habilitar o inhabilitar el acceso de lectura Git anónimo para repositorios públicos que cumplen con determinados requisitos.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

Los administradores de repositorios pueden cambiar el acceso de lectura Git anónimo y establecer un repositorio específico en los siguientes casos:
- Si un administrador del sitio ha habilitado el modo privado y el acceso de lectura Git anónimo.
- Si el repositorio es público en la empresa y si no es una bifurcación.
- Si un administrador del sitio no ha inhabilitado el acceso de lectura Git anónimo para el repositorio.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Junto a "Habilitar el acceso de lectura Git anónimo", haz clic en **Habilitar**. ![Botón "Habilitado" en "Acceso de lectura Git anónimo"](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Revisa los cambios. Para confirmar, escribe el nombre del repositorio y haz clic en **Comprendo. Habilitar el acceso de lectura Git.**

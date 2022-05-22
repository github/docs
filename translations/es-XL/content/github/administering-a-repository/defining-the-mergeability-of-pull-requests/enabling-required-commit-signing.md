---
title: Habilitar la firma de confirmación requerida
intro: Los administradores de repositorios pueden implementar la firma de confirmación requerida en una rama para bloquear todas las confirmaciones que no estén firmadas y verificadas.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Antes de habilitar la firma de confirmación requerida en una rama, debes configurar primero la rama como rama protegida. Para obtener más información, consulta "[Configurar ramas protegidas](/github/administering-a-repository/configuring-protected-branches)".

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecciona **Requerir confirmaciones firmadas**. ![Opción Requerir confirmaciones firmadas](/assets/images/help/repository/require-signed-commits.png)
6. También puedes seleccionar **Incluir administradores**. Esto exige las confirmaciones firmadas requeridas en el repositorio. ![Casilla de verificación Incluir administradores](/assets/images/help/repository/include-admins-protected-branches.png)
7. Haz clic en **Create** (crear).

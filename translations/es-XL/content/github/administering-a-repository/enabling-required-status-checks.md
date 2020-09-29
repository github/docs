---
title: Habilitar verificaciones de estado requeridas
intro: Los administradores de repositorios pueden exigir verificaciones de estado requeridas antes de que una rama se fusione con una solicitud de extracción o antes de que las confirmaciones en una rama local puedan subirse a la rama remota protegida.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.protected-branches-options %}

Antes de que puedas habilitar las verificaciones de estado requeridas, debes configurar el repositorio para utilizar la API de estado. Para obtener más información, consulta la sección "[Construir un servidor de IC](/guides/building-a-ci-server/)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Selecciona **Requerir verificaciones de estado para pasar antes de fusionar** debajo de "Proteger ramas correspondientes". ![Opción Verificaciones de estado requeridas](/assets/images/help/repository/required-status-checks.png)
7. Opcionalmente, selecciona **requerir que las ramas estén actualizadas antes de fusionar**. Al seleccionar esta opción, te aseguras de que la rama se pruebe con el código más reciente en la rama base. ![Casilla de verificación de estado estricta o poco estricta](/assets/images/help/repository/protecting-branch-loose-status.png)
7. Selecciona las verificaciones que quieres requerir de la lista de verificaciones de estado disponibles. ![Lista de verificaciones de estado disponibles](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. Haz clic en **Create** (crear).

{% data reusables.repositories.required-status-merge-tip %}

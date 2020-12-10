---
title: Habilitar revisiones requeridas para las solicitudes de extracción
intro: Los administradores del repositorio pueden exigir revisiones requeridas para que las solicitudes de extracción tengan un número específico de revisiones para su aprobación antes de la fusión.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Antes de habilitar las revisiones requeridas en una rama, debes configurar primero la rama como rama protegida. Para obtener más información, consulta "[Configurar ramas protegidas](/github/administering-a-repository/configuring-protected-branches)".

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecciona **Requerir revisiones de solicitudes de extracción antes de la fusión**. ![Casilla de verificación Restricción de revisión de solicitud de extracción](/assets/images/help/repository/PR-reviews-required.png)
6. En el menú desplegable de revisiones para la aprobación, selecciona el número de revisiones para la aprobación que deseas en esa rama. ![Menú desplegable para seleccionar el número de aprobaciones de revisión requeridas](/assets/images/help/repository/number-of-required-review-approvals.png)
7. También puedes **Descartar aprobaciones de solicitudes de extracción en espera cuando se suben nuevas confirmaciones**. Esto descarta la revisión de aprobación de una solicitud de extracción cuando una confirmación que modifica el código se sube a la rama. ![Casilla de verificación Descartar aprobaciones de solicitudes de extracción en espera cuando se suben nuevas confirmaciones](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. También puedes seleccionar **Requerir revisión de los propietarios del código** para requerir la revisión por parte de un propietario del código cuando la solicitud de extracción afecta el código que tiene un propietario designado. Para obtener más información, consulta "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Requerir revisión de los propietarios del código](/assets/images/help/repository/PR-review-required-code-owner.png)
9. Si el repositorio es parte de una organización, también puedes seleccionar **Restringir quién puede descartar revisiones de solicitud de extracción** para buscar y seleccionar las personas o los equipos que pueden descartar revisiones de solicitudes de extracción. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)". esta opción no se encuentra disponible para repositorios personales. ![Restringir quién puede descartar la casilla de verificación de revisiones de solicitudes de extracción](/assets/images/help/repository/PR-review-required-dismissals.png)
{% data reusables.repositories.include-administrators %}
11. Haz clic en **Create** (crear).

### Leer más

- "[Acerca de las revisiones requeridas para las solicitudes de extracción](/github/administering-a-repository/about-required-reviews-for-pull-requests)"
- "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)"
- "[Acerca de las verificaciones de estado requeridas](/github/administering-a-repository/about-required-status-checks)"

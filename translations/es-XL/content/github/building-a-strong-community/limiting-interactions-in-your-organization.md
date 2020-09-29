---
title: Limitar las interacciones en tu organización
intro: 'Los propietarios de la organización pueden restringir de manera temporaria que determinados usuarios comenten, abran propuestas o creen solicitudes de extracción en los repositorios públicos de la organización para hacer cumplir un período de actividad limitada.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

Después de 24 horas, los usuarios pueden reanudar la actividad normal en los repositorios públicos de tu organización. Cuando habilitas limitaciones de actividad en toda la organización, no puedes habilitar o inhabilitar límites de interacción en los repositorios individuales. Para obtener más información sobre la limitación de actividad por repositorio, consulta "[Limitar las interacciones de tu repositorio](/articles/limiting-interactions-in-your-repository)".

{% tip %}

**Sugerencia:** Los propietarios de la organización también pueden bloquear usuarios durante una cantidad de tiempo específica. Después de que expira el bloqueo, el usuario se desbloquea de manera automática. Para obtener más información, consulta "[Bloquear un usuario de tu organización](/articles/blocking-a-user-from-your-organization)".

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. En la barra lateral Settings (Parámetros) de tu organización, haz clic en **Límites de interacción**. ![Límites de interacción en los parámetros de la organización ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. Da clic en una o más opciones debajo de "límites de interacción temporales". ![Opciones de límites de interacción temporal](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - **Límites para usuarios existentes**: Limita la actividad de usuarios de la organización con cuentas que tienen menos de 24 horas y que no han realizado contribuciones anteriores ni no son colaboradores.
   - **Límite para contribuyentes previos**: Limita la actividad de usuarios de la organización que no hayan contribuido anteriormente y que no sean colaboradores.
   - "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)"

### Leer más
- "[Informar abuso o spam](/articles/reporting-abuse-or-spam)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"

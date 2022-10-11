---
title: Limitar las interacciones en tu repositorio
intro: 'Las personas con acceso de propietario o administrador pueden restringir de manera temporal que determinados usuarios comenten, abran propuestas o creen solicitudes de extracción en tu repositorio público para aplicar un período de actividad limitada.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---
Después de 24 horas, los usuarios pueden reanudar la actividad normal en tu repositorio.

{% tip %}

**Sugerencia:** Los propietarios de la organización pueden habilitar limitaciones de actividad en toda la organización. Si están habilitadas las limitaciones de actividad en toda la organización, no puedes limitar la actividad de los repositorios individuales. Para obtener más información, consulta "[Limitar las interacciones en tu organización](/articles/limiting-interactions-in-your-organization)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En la barra lateral de tus Parámetros del repositorio, haz clic en **Interaction limits** (Límites de interacción). ![Límites de interacción en los parámetros del repositorio ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. Da clic en una o más opciones debajo de "límites de interacción temporales": ![Opciones de límites de interacción temporal](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - **Limit to existing users** (Límites para usuarios existentes): Limita la actividad de usuarios con cuentas que tienen menos de 24 horas y que no han realizado contribuciones anteriores ni son colaboradores.
    - **Limit to prior contributors** (Límite para contribuyentes anteriores): Limita la actividad de usuarios que no hayan contribuido anteriormente ni son colaboradores.
    - "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)"

### Leer más
- "[Informar abuso o spam](/articles/reporting-abuse-or-spam)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"

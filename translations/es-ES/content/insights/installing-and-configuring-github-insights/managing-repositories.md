---
title: Administrar repositorios
intro: 'Puedes administrar los repositorios conectados a {% data variables.product.prodname_insights %} y los datos incluidos en las métricas de cada repositorio.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-repositories
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage repositories. '
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### Acerca de la administración del repositorio

Para que {% data variables.product.prodname_insights %} incluya datos de un repositorio en {% data variables.product.prodname_enterprise %}, debes agregar la organización a la que pertenece el repositorio a {% data variables.product.prodname_insights %}. Para obtener más información, consulta "[Administrar organizaciones](/github/installing-and-configuring-github-insights/managing-organizations)."

Después de agregar una organización a {% data variables.product.prodname_insights %}, cada repositorio que le pertenece a la organización se importa automáticamente si el repositorio:
- Tiene al menos una confirmación
- No es privado
- No se archiva
- Ha sido subido en los últimos 6 meses

Los datos del repositorio se actualizan mediante webhooks y sincronizaciones periódicas. Puedes actualizar de forma manual los datos del repositorio en cualquier momento o cancelar una importación de datos que esté en progreso.

{% data reusables.github-insights.repository-groups %}

Puedes excluir archivos específicos de {% data variables.product.prodname_insights %} para un repositorio específico o para todos los repositorios.

### Acerca de los tiempos de importación

{% data variables.product.prodname_insights %} importa los últimos tres años de datos para cada repositorio. Dependiendo del tamaño y la complejidad de tus repositorios, la importación inicial puede demorar un tiempo, durante el cual los datos de {% data variables.product.prodname_insights %} están incompletos. Habitualmente, la importación inicial de unos cuantos equipos tomará un día o dos. Las importaciones iniciales largas y complejas pueden tomar hasta dos semanas.

| Tamaño del repositorio             | Tiempo de importación inicial |
| ---------------------------------- | ----------------------------- |
| < 10.000 confirmaciones            | < 1 hora                      |
| de 10,000 a 300,000 confirmaciones | de 1 a 10 días                |
| 300,000 confirmaciones o más       | 10 días o más                 |

Una vez que se completa la importación inicial, las importaciones posteriores de los cambios incrementales deberían demorar dos minutos o menos.

Para reducir los tiempos de importación, puedes excluir cualquier biblioteca de terceros en carpetas no estándar desde {% data variables.product.prodname_insights %} antes de la importación. Para obtener más información, consulta "[Administrar filtros de exclusión](#managing-exclusion-filters)."

Si tienes muchos repositorios de gran tamaño, puedes mejorar los tiempos de importación iniciales al proporcionar más núcleos al servidor de aplicaciones. Los servidores de aplicaciones con más núcleos pueden realizar más trabajos paralelos de importación.

| Núcleos de servidores de aplicaciones | Trabajos paralelos de importación inicial |
| ------------------------------------- | ----------------------------------------- |
| 16 núcleos                            | 1 job                                     |
| 32 núcleos                            | 4 puestos de trabajo                      |

Importar un gran número de solicitudes de extracción puede desencadenar la limitación de tasa desde {% data variables.product.prodname_enterprise %}. En este caso, la importación se detendrá durante una hora antes de reanudarse. Puedes aumentar de forma temporal el límite de tasa de {% data variables.product.prodname_enterprise %} para mejorar los tiempos de importación. Para obtener más información, consulta "[Configurar límites de tasa](/enterprise/{{ currentVersion }}/admin/installation/configuring-rate-limits)."

### Ver y administrar repositorios

Puedes ver los repositorios importados y los repositorios que están disponibles para importar. Si una importación está en progreso, puedes ver el estado de la importación y una estimación de tiempo hasta que se complete la importación.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
3. Como alternativa, para agregar un repositorio que no se ha importado, a la derecha del nombre del repositorio, haz clic en **Add (Añadir)**. ![Botón Add (Agregar)](/assets/images/help/insights/add-button.png)
4. Como alternativa, para actualizar de forma manual los datos del repositorio, a la derecha del nombre del repositorio, haz clic en el icono de actualización **{% octicon "sync" aria-label="The refresh icon" %}**. ![Botón Actualizar](/assets/images/help/insights/refresh-button.png)
5. Como alternativa, para cancelar una importación en progreso, a la derecha del nombre del repositorio, haz clic en **Cancel (Cancelar)**. ![Botón Cancelar](/assets/images/help/insights/cancel-button.png)
6. Como alternativa, para eliminar un repositorio importado, a la derecha del nombre del repositorio, haz clic en **Remove (Eliminar)**. ![Botón Eliminar](/assets/images/help/insights/remove-button.png)

### Administrar grupos de repositorios para informes

Puedes crear un grupo de repositorios, agregar o eliminar repositorios a un grupo y eliminar un grupo de repositorios.

#### Crear un grupo de repositorios

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
2. En el ángulo superior derecho, haz clic en **Create group (Crear grupo)**. ![Botón Crear grupo](/assets/images/help/insights/create-group.png)
3. En "Group Name" (Nombre del grupo), escribe un nombre para tu grupo. ![Campo de nombre de grupo](/assets/images/help/insights/group-name.png)
4. Da clic en **Crear**.

#### Agregar un repositorio a un grupo de repositorios

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. En "Repositories" (Repositorios), usa el menú desplegable y selecciona un repositorio para agregar al grupo. ![Menú desplegable de repositorios](/assets/images/help/insights/repositories-drop-down.png)
5. Haz clic en **Done** (listo).

#### Eliminar un grupo de repositorios

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. Haz clic en **Delete Group (Eliminar grupo)**. ![Botón Eliminar grupo](/assets/images/help/insights/delete-group.png)
5. Haz clic en **Confirm (Confirmar)**.

### Administrar filtros de exclusión

Puedes crear una lista de reglas de exclusión de archivos para omitir los archivos especificados de todos los datos de {% data variables.product.prodname_insights %}. Las reglas de exclusión de archivos siguen las mismas reglas que se usan en los archivos *. gitignore*. Para obtener más información, consulta "[gitignore](https://git-scm.com/docs/gitignore)"en la documentación de Git.

#### Agregar una regla de exclusión de archivos para todos los repositorios

Los cambios en las exclusiones de archivos globales solo se aplican a los datos recién importados y no afectarán de manera retroactiva a los datos existentes. Para aplicar nuevas reglas de exclusión a los datos existentes, puedes eliminar y volver a agregar repositorios a {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. De manera opcional, en "Exclude files" (Excluir archivos), selecciona **Include all binaries (Incluir todos los binarios)**. ![Casilla de verificación para incluir todos los binarios](/assets/images/help/insights/include-all-binaries-global.png)
4. En el editor de código, agrega una nueva regla de exclusión a la lista. ![Editor de código para agregar una regla de exclusión global](/assets/images/help/insights/global-exclusion-list.png)
5. Haz clic en **Save Changes (Guardar cambios)**.

#### Agregar una regla de exclusión de archivos para un repositorio

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. A la derecha de "Repositories with File Filters" (Repositorios con filtros de archivos), haz clic en **Add Filter (Agregar filtro)**. ![Botón Agregar filtro](/assets/images/help/insights/add-filter.png)
4. Usa el menú desplegable "Repository" (Repositorio) y selecciona un repositorio. ![Menú desplegable del repositorio](/assets/images/help/insights/repository-drop-down-exclude.png)
5. De forma opcional, para aplicar reglas de exclusión a los datos existentes, selecciona **Re-import (Volver a importar)**. ![Casilla de verificación de re-importación](/assets/images/help/insights/re-import-checkbox.png)
6. Como alternativa, selecciona **Include all binaries (Incluir todos los binarios)**. ![Casilla de verificación para incluir todos los binarios](/assets/images/help/insights/include-all-binaries-repo.png)
7. En el editor de código, agrega las reglas de exclusión que deseas aplicar al repositorio. ![Editor de código para agregar una regla de exclusión de repositorios](/assets/images/help/insights/repo-exclusion-list.png)
8. Haz clic en **Create Filter (Crear filtro)**.

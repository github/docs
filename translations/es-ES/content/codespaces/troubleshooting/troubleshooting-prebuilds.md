---
title: Solucionar problemas de las precompilaciones
shortTitle: Precompilaciones de los codespaces
intro: Puedes utilizar las precompilaciones para acelerar la creación de los codespaces. Este artículo te proporciona los pasos de solución de problemas para las propuestas comunes con las precompilaciones.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

Para obtener más información sobre las precompilaciones de los {% data variables.product.prodname_codespaces %}, consulta la sección "[Precompilar tus codespaces](/codespaces/prebuilding-your-codespaces)".

## Verificar si un codespace se creó desde una precompilación

Cuando creas un codespace, puedes elegir el tipo de máquina virtual que quieres utilizar. Si hay una precompilación disponible para el tipo de máquina virtual, se mostrará el diálogo "{% octicon "zap" aria-label="The zap icon" %} Precompilaciòn lista" junto a ella.

![Una lista de tipos de máquina disponibles](/assets/images/help/codespaces/choose-custom-machine-type.png)

So configuraste las preferencias de tu editor de {% data variables.product.prodname_codespaces %} en "{% data variables.product.prodname_vscode %} para web", entonces la página de "Configurar tu codespace" mostrará el mensaje "Se encontró una precompilación de codespace" en caso de que se esté utilizando una precompilación.

![El mensaje de 'se encontró un codespace precompilado'](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Del mismo modo, si tu preferencia de editor es "{% data variables.product.prodname_vscode_shortname %}", entonces la terminal integrada contendrá el mensaje "Estás en un codespace precompilado que definió la configuración de precompilación de tu repositorio" cuando crees un codespace nuevo. Para obtener más información, consulta la sección "[Configurar tu editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Después de que hayas creado un codespace, puedes verificar si se creó desde una precompilación que ejecutó el siguiente comando del {% data variables.product.prodname_cli %} en la terminal:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Esto devuelve `true` si el codespace se creó utilizando una precompilación.

Como alternativa, si no está instalado el {% data variables.product.prodname_cli %} (`gh`), puedes utilizar el siguiente comando, el cual devolverá `createFromPrebuild` si el codespace se creó desde una precompilación:

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## Algunas veces falta la etiqueta de "Precompilación lista"

Es posible que notes que, algunas veces cuando creas un codespace desde una rama habilitada para precompilaciones, la etiqueta de "{% octicon "zap" aria-label="The zap icon" %} Precompilaciòn lista" no se muestra en la caja de diálogo para elegir un tipo de máquina. Esto significa que las precompilaciones no están disponibles actualmente.

Predeterminadamente, la plantilla de precompilación se actualizará cada que subas información a una rama habilitada para precompilaciones. Si la subida de información involucra un cambio a la configuración del contenedor dev, entonces, mientras la actualización está en curso, la etiqueta de "{% octicon "zap" aria-label="The zap icon" %} Precompilaciòn lista" se eliminará de la lista de los tipos de máquina. Durante este tiempo aún podrás crear codespaces sin una plantilla de precompilación. De requerirse, puedes reducir las ocasiones en las cuales las precompilaciones no están disponibles para un repositorio si ajustas la plantilla de precompilación para que se actualice únicamente cuando haces un cambio a tus archivos de configuración de contenedor dev o únicamente en un itinerario personalizado. Para obtener más información, consulta la sección "[Configurar las precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Si tu rama no está habilitada específicamente para las precompilaciones, es posible que aún así se beneficie de estas si se deriva de una rama habilitada para precompilaciones. Sin embargo, si la configuración de contenedor dev cambia en tu rama para que no sea la misma que aquella configuración de la rama base, las precompilaciones ya no estarán disponibles en tu rama.

Aquí tienes lo que puedes verificar si la etiqueta de "{% octicon "zap" aria-label="The zap icon" %} Precompilaciòn lista" no se muestra en una rama particular:

* Confirma que existe una configuración de precompilación para esta rama. Si no eres un administrador de repositorio, necesitarás contactar a alguno para confirmar esto.
* Confirma que la configuración de precompilación incluye a tu región.
* Verifica si el cambio en el contenedor dev se subió recientemente en la rama habilitada para precompilación. De ser así, habitualmente tendrás que esperar hasta que la ejecución de flujo de trabajo de precompilación para esta subida se complete antes de que las precompilaciones estén disponibles nuevamente.
* Si no se hicieron cambios de configuración recientemente, dirígete a la pestaña de **Acciones** de tu repositorio, haz clic en **{% octicon "codespaces" aria-label="The Codespaces icon" %} Preconfiguraciones de los {% data variables.product.prodname_codespaces %} ** en la lista de flujos de trabajo y verifica que las ejecuciones de flujo de trabajo precompliladas para la rama estén teniendo éxito. Si las ejecuciones más recientes de un flujo de trabajo fallaron y una o más de estas ejecuciones fallidas contenían cambios a la configuración del contenedor dev, entonces no habrán precompilaciones disponibles para la rama asociada.

## Ejecuciones de flujo de trabajo con solución de problemas fallida para las precompilaciones

Si las ejecuciones de flujo de trabajo para una configuración de precompilación están fallando, puedes inhabilitar temporalmente dicha configuración de precompilación mientras haces tu investigación. Para obtener más información, consulta la sección "[Administrar las precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)".

## Leer más

- "[Configurar las precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Administrar las precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"

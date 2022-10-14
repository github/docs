---
title: Inserción de una rama bloqueada por la protección de inserción
intro: 'La característica de protección de inserción de {% data variables.product.prodname_secret_scanning %} protege proactivamente contra los secretos que se filtran en los repositorios. Puedes resolver las inserciones bloqueadas y, una vez que se ha quitado el secreto detectado, puedes insertar los cambios en la rama de trabajo desde la línea de comandos o la interfaz de usuario web.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 743cdc094acfd2465d4bb97f1ae7ec0a7f8b86f0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683795'
---
## Acerca de la protección de inserción para {% data variables.product.prodname_secret_scanning %}

La característica de protección de inserción de {% data variables.product.prodname_secret_scanning %} ayuda a evitar pérdidas de seguridad mediante el examen de los secretos antes de insertar los cambios en el repositorio. {% data reusables.secret-scanning.push-protection-overview %} Para obtener información sobre los secretos y proveedores de servicios admitidos para la protección de inserción, consulta "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Sugerencia** Si {% data variables.product.prodname_dotcom %} bloquea un secreto que crees que es seguro insertar, puedes permitirlo y especificar el motivo por el que se debe permitir. Para obtener más información sobre cómo omitir la protección de inserción para un secreto, consulta "[Permitir que se suba un secreto bloqueado](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" y "[Saltar la protección contra subidas para un secreto](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)" para la línea de comandos y la interfaz de usuario web, respectivamente. 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

Los administradores de la organización pueden proporcionar un vínculo personalizado que se incluirá en el mensaje de {% data variables.product.product_name %} cuando se bloquee la inserción. Este vínculo personalizado puede incluir recursos y consejos específicos de tu organización y sus directivas.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

## Resolución de una inserción bloqueada en la línea de comandos

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Si el secreto bloqueado se introdujo con la confirmación más reciente en la rama, puedes seguir las instrucciones a continuación.

1. Quita el secreto del código.
1. Confirma los cambios mediante `git commit --amend`.
1. Envía los cambios con `git push`.

También puedes quitar el secreto si aparece en una confirmación anterior en el historial de Git.

1. Usa `git log` para determinar qué confirmación expuesta en el error de inserción apareció primero en el historial.
1. Inicia una fusión mediante cambio de base interactiva con `git rebase -i <commit-id>~1`. <commit-id> es el identificador de la confirmación del paso 1.
1. Identifica la confirmación para editar cambiando `pick` a `edit` en la primera línea del texto que aparece en el editor.
1. Quita el secreto del código.
1. Confirma el cambio con `git commit --amend`.
1. Ejecuta `git rebase --continue` para finalizar la fusión mediante cambio de base.

## Resolución de una confirmación bloqueada en la interfaz de usuario web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Para resolver una confirmación bloqueada en la interfaz de usuario web, debes quitar el secreto del archivo o usar la lista desplegable **Omitir protección** para permitir el secreto. Para obtener más información sobre cómo omitir la protección de inserción de la interfaz de usuario web, consulta "[Proteger las subidas con el escaneo de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".

Si confirmas que un secreto es real, debes quitar el secreto del archivo. Una vez quitado el secreto, el banner de la parte superior de la página cambiará e indicará que ahora puedes confirmar los cambios.

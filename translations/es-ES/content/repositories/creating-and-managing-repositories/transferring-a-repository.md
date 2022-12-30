---
title: Transferir un repositorio
intro: Puedes transferir repositorios a otros usuarios o cuentas de organización.
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160684'
---
## Acerca de las transferencias de repositorios

Cuando transfiere un repositorio a un propietario nuevo, este puede administrar de inmediato los contenidos, incidencias, solicitudes de incorporación de cambios, lanzamientos, {% data variables.product.prodname_projects_v1 %} y opciones.

Los prerrequisitos para las transferencias de repositorio son:
- Cuando transfieres un repositorio que te pertenece a otra cuenta personal, el dueño nuevo recibirá un correo electrónico de confirmación.{% ifversion fpt or ghec %} El correo electrónico de confirmación incluye instrucciones para aceptar la transferencia. Si el propietario nuevo no acepta la transferencia en el transcurso de un día, la invitación se vencerá.{% endif %}
- Para transferirle un repositorio que te pertenece a una organización, debes tener permiso para crear un repositorio en la organización de destino.
- La cuenta objetivo no debe tener un repositorio con el mismo nombre o una bifurcación en la misma red.
- El propietario original del repositorio se agrega como colaborador en el repositorio transferido. El resto de los colaboradores del repositorio transferido permanecerá intacto.{% ifversion ghes < 3.7 or ghae %}
- Los repositorios internos no pueden transferirse.{% endif %}
- Las bifurcaciones privadas no se pueden transferir.
{%- ifversion ghec %}
- No se puede transferir un repositorio interno de una organización propiedad de una cuenta empresarial a una organización que pertenezca a otra cuenta empresarial.
{%- endif %}

{% ifversion fpt or ghec %}Si transfiere un repositorio privado a una cuenta de usuario u organización de {% data variables.product.prodname_free_user %}, el repositorio perderá acceso a características como ramas protegidas y {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### ¿Qué se transfiere con un repositorio?

Cuando transfieres un repositorio, también se transfieren sus propuestas, solicitudes de extracción, wiki, estrellas y observadores. Si el repositorio transferido contiene webhooks, servicios, secretos, o llaves de implementación, estos permanecerán asociados después de que se complete la transferencia. Se preserva la información de Git acerca de las confirmaciones, incluidas las contribuciones. Además:

- Si el repositorio transferido es una bifurcación, sigue asociado con el repositorio ascendente.
- Si el repositorio transferido tiene alguna bifurcación, esas bifurcaciones seguirán asociadas al repositorio después de que se complete la transferencia.
- Si el repositorio transferido utiliza {% data variables.large_files.product_name_long %}, todos {% data variables.large_files.product_name_short %} los objetos se mueven automáticamente. Esta transferencia ocurre en segundo plano, así que, si tienes una cantidad grande de objetos de {% data variables.large_files.product_name_short %} o si los mismos objetos de {% data variables.large_files.product_name_short %} son grandes, podría tomar algo de tiempo para que ocurra la transferencia.{% ifversion fpt or ghec %} Antes de que transfieras un repositorio que utilice {% data variables.large_files.product_name_short %}, asegúrate de recibir una cuenta que tenga suficientes paquetes de datos para almacenar los objetos de {% data variables.large_files.product_name_short %} que vayas a migrar. Para obtener más información sobre cómo agregar almacenamiento para cuentas personales, consulta "[Actualización de {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage)".{% endif %}
- Cuando se transfiere un repositorio entre dos cuentas personales, las asignaciones de incidencias se dejan intactas. Cuando transfieres un repositorio desde una cuenta personal a una organización, las incidencias asignadas a los miembros de la organización permanecen intactas y todos los demás asignatarios de incidencias se eliminan. Solo los propietarios de la organización están autorizados a crear asignaciones de propuestas nuevas. Cuando transfieres un repositorio desde una organización a una cuenta personal, solo se mantienen las incidencias asignadas al propietario del repositorio y se eliminan todos los demás asignatarios de incidencias.
- Si el repositorio transferido contiene un {% data variables.product.prodname_pages %} sitio, se redirigen los enlaces al repositorio de Git en la web y a través de la actividad de Git. Sin embargo, no redirigimos {% data variables.product.prodname_pages %} asociadas al repositorio.
- Todos los enlaces a la ubicación anterior del repositorio se redirigen de manera automática hacia la ubicación nueva. Al usar `git clone`, `git fetch` o `git push` en un repositorio transferido, estos comandos le redirigirán a la nueva ubicación o dirección URL del repositorio. Sin embargo, para evitar confusiones, es altamente recomendable actualizar cualquier clon local existente para que apunte a la nueva URL del repositorio. Puede hacerlo con `git remote` en la línea de comandos:

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **Advertencia**: Si en el futuro crea un nuevo repositorio en su cuenta, no reutilice el nombre original del repositorio transferido. Si lo hace, los redireccionamientos al repositorio transferido fallarán.

  {% endwarning %}

- Cuando transfieres un repositorio desde una organización a una cuenta personal, los colaboradores de solo lectura de este no se transferirán. Esto es porque los colaboradores no pueden tener acceso de solo lectura a los repositorios que pertenecen a una cuenta personal. Para obtener más información sobre los niveles de permisos de repositorio, consulta "[Niveles de permisos para un repositorio de cuentas personales](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".{% ifversion fpt or ghec %}
- Los patrocinadores que tengan acceso al repositorio a través de un nivel de patrocinio podrían verse afectados. Para más información, vea "[Adición de un repositorio a un nivel de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)".{% endif %}

Para más información, vea "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Transferencias de repositorios y organizaciones

Para transferir repositorios a una organización, debes tener permisos de creación de repositorios en la organización receptora. Si los propietarios de la organización inhabilitaron la creación de repositorios para los miembros de la organización, solo los propietarios de la organización pueden transferir repositorios hacia fuera o dentro de la organización.

Una vez que se transfiere un repositorio a una organización, los parámetros de permiso del repositorio de la organización predeterminados y los privilegios de membresía predeterminados se aplicarán al repositorio transferido.

## Transferir un repositorio que le pertenece a tu cuenta personal

Puedes transferir tu repositorio a cualquier cuenta personal que acepte la transferencia de tu repositorio. Cuando se transfiere un repositorio entre dos cuentas personales, el propietario del repositorio original y los colaboradores se agregan automáticamente como colaboradores al repositorio nuevo.

{% ifversion fpt or ghec %}Si publicaste un sitio de {% data variables.product.prodname_pages %} en un repositorio privado y agregaste un dominio personalizado, antes de transferir el repositorio, deberás eliminar o actualizar tus registros de DNS para evitar el riesgo de que alguien más tome el dominio. Para más información, vea "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## Transferir un repositorio que le pertenece a tu organización

Si tienes permisos de propietario en una organización o permisos de administrador para uno de sus repositorios, puedes transferir un repositorio que le pertenece a tu organización a tu cuenta personal o a otra organización.

1. Inicia sesión en tu cuenta personal que tiene permisos de administrador o propietario en la organización a la que le pertenece el repositorio.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

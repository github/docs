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
---

## Acerca de las transferencias de repositorios

Cuando transfieres un repositorio a un propietario nuevo, puede administrar de inmediato los contenidos, propuestas, solicitudes de extracción, lanzamientos, tableros de proyecto y parámetros del repositorio.

Los prerrequisitos para las transferencias de repositorio son:
- Cuando transfieres un repositorio que te pertenece a otra cuenta personal, el propietario nuevo recibirá un correo electrónico de confirmación.{% ifversion fpt or ghec %} El correo electrónico de confirmación incluye las instrucciones para aceptar la transferencia. Si el propietario nuevo no acepta la transferencia en el transcurso de un día, la invitación se vencerá.{% endif %}
- Para transferirle un repositorio que te pertenece a una organización, debes tener permiso para crear un repositorio en la organización de destino.
- La cuenta objetivo no debe tener un repositorio con el mismo nombre o una bifurcación en la misma red.
- El propietario original del repositorio se agrega como colaborador en el repositorio transferido. El resto de los colaboradores del repositorio transferido permanecerán intactos.{% ifversion ghec or ghes or ghae %}
- Los repositorios internos no pueden transferirse.{% endif %}
- Las bifurcaciones privadas no se pueden transferir.

{% ifversion fpt or ghec %}Si transfieres un repositorio privado a una cuenta de usuario u organización de {% data variables.product.prodname_free_user %}, éste perderá acceso a características como ramas protegidas y {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### ¿Qué se transfiere con un repositorio?

Cuando transfieres un repositorio, también se transfieren sus propuestas, solicitudes de extracción, wiki, estrellas y observadores. Si el repositorio transferido contiene webhooks, servicios, secretos, o llaves de implementación, estos permanecerán asociados después de que se complete la transferencia. Se preserva la información de Git acerca de las confirmaciones, incluidas las contribuciones. Asimismo:

- Si el repositorio transferido es una bifurcación, sigue asociado con el repositorio ascendente.
- Si el repositorio transferido tiene alguna bifurcación, esas bifurcaciones seguirán asociadas al repositorio después de que se complete la transferencia.
- Si el repositorio transferido utiliza {% data variables.large_files.product_name_long %}, todos {% data variables.large_files.product_name_short %} los objetos se mueven automáticamente. Esta transferencia ocurre en segundo plano, así que, si tienes una cantidad grande de objetos de {% data variables.large_files.product_name_short %} o si los mismos objetos de {% data variables.large_files.product_name_short %} son grandes, podría tomar algo de tiempo para que ocurra la transferencia.{% ifversion fpt or ghec %} Antes de que transfieras un repositorio que utilice {% data variables.large_files.product_name_short %}, asegúrate de recibir una cuenta que tenga suficientes paquetes de datos para almacenar los objetos de {% data variables.large_files.product_name_short %} que vayas a migrar. Para obtener más información acerca de agregar almacenamiento a las cuentas personales, consulta "[Subir de categoría {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage)."{% endif %}
- Cuando se transfiere un repositorio entre dos cuentas personales, las tareas de las propuestas quedan intactas. Cuando transfieres un repositorio desde una cuenta personal a una organización, las propuestas asignadas a los miembros en la organización permanecen intactas y se limpia al resto de los asignatarios de la propuesta. Solo los propietarios de la organización están autorizados a crear asignaciones de propuestas nuevas. Cuando transfieres un repositorio desde una organización hacia una cuenta personal, solo se mantendrán las propuestas que se hayan asignado al propietario del repositorio y se eliminará al resto de los asignatarios de estas.
- Si el repositorio transferido contiene un {% data variables.product.prodname_pages %} sitio, se redirigen los enlaces al repositorio de Git en la web y a través de la actividad de Git. Sin embargo, no redirigimos {% data variables.product.prodname_pages %} asociadas al repositorio.
- Todos los enlaces a la ubicación anterior del repositorio se redirigen de manera automática hacia la ubicación nueva. Cuando utilices `git clone`, `git fetch` o `git push` en un repositorio transferido, estos comando redirigirán a la ubicación del repositorio o URL nueva. Sin embargo, para evitar confusiones, es altamente recomendable actualizar cualquier clon local existente para que apunte a la nueva URL del repositorio. Puedes hacerlo utilizando `git remote` en la línea de comando:

  ```shell
  $ git remote set-url origin <em>new_url</em>
  ```

- Cuando transfieres un repositorio desde una organización hacia una cuenta personal, no se transferirán los colaboradores de solo lectura de este. Esto es porque los colaboradores no pueden tener acceso de solo lectura a los repositorios que le pertenezcan a una cuenta personal. Para obtener más información sobre los niveles de permiso de los repositorios, consulta las secciones "[Niveles de permiso para un repositorio de cuenta personal](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".{% ifversion fpt or ghec %}
- Los patrocinadores que tengan acceso al repositorio a través de un nivel de patrocinio podrían verse afectados. Para obtener más información, consulta la sección "[Agregar un repositorio a un nivel de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)".{% endif %}

Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

### Transferencias de repositorios y organizaciones

Para transferir repositorios a una organización, debes tener permisos de creación de repositorios en la organización receptora. Si los propietarios de la organización inhabilitaron la creación de repositorios para los miembros de la organización, solo los propietarios de la organización pueden transferir repositorios hacia fuera o dentro de la organización.

Una vez que se transfiere un repositorio a una organización, los parámetros de permiso del repositorio de la organización predeterminados y los privilegios de membresía predeterminados se aplicarán al repositorio transferido.

## Transferir un repositorio que le pertenece a tu cuenta personal

Puedes transferir tu repositorio a cualquier cuenta personal que acepte tu transferencia de repositorio. Cuando se transfiere un repositorio entre dos cuentas personales, el propietario original y los colaboradores de este se agregan automáticamente como colaboradores al repositorio nuevo.

{% ifversion fpt or ghec %}Si publicaste un sitio de {% data variables.product.prodname_pages %} en un repositorio privado y agregaste un dominio personalizado, antes de transferir el repositorio, deberás eliminar o actualizar tus registros de DNS para evitar el riesgo de que alguien más tome el dominio. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

## Transferir un repositorio que le pertenece a tu organización

Si tienes permisos de propietario en una organización o permisos administrativos para alguno de sus repositorios, puedes transferir un repositorio que le pertenezca a tu organización a tu cuenta personal o a otra organización.

1. Inicia sesión en tu cuenta personal que tiene permisos administrativos o de propietario en la organización a la cual le pertenece el repositorio.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

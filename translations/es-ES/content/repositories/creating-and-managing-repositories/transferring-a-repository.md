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
- When you transfer a repository that you own to another personal account, the new owner will receive a confirmation email.{% ifversion fpt or ghec %} The confirmation email includes instructions for accepting the transfer. Si el propietario nuevo no acepta la transferencia en el transcurso de un día, la invitación se vencerá.{% endif %}
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
- When a repository is transferred between two personal accounts, issue assignments are left intact. When you transfer a repository from a personal account to an organization, issues assigned to members in the organization remain intact, and all other issue assignees are cleared. Solo los propietarios de la organización están autorizados a crear asignaciones de propuestas nuevas. When you transfer a repository from an organization to a personal account, only issues assigned to the repository's owner are kept, and all other issue assignees are removed.
- Si el repositorio transferido contiene un {% data variables.product.prodname_pages %} sitio, se redirigen los enlaces al repositorio de Git en la web y a través de la actividad de Git. Sin embargo, no redirigimos {% data variables.product.prodname_pages %} asociadas al repositorio.
- Todos los enlaces a la ubicación anterior del repositorio se redirigen de manera automática hacia la ubicación nueva. Cuando utilices `git clone`, `git fetch` o `git push` en un repositorio transferido, estos comando redirigirán a la ubicación del repositorio o URL nueva. Sin embargo, para evitar confusiones, es altamente recomendable actualizar cualquier clon local existente para que apunte a la nueva URL del repositorio. Puedes hacerlo utilizando `git remote` en la línea de comando:

  ```shell
  $ git remote set-url origin <em>new_url</em>
  ```

- When you transfer a repository from an organization to a personal account, the repository's read-only collaborators will not be transferred. This is because collaborators can't have read-only access to repositories owned by a personal account. For more information about repository permission levels, see "[Permission levels for a personal account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."{% ifversion fpt or ghec %}
- Los patrocinadores que tengan acceso al repositorio a través de un nivel de patrocinio podrían verse afectados. Para obtener más información, consulta la sección "[Agregar un repositorio a un nivel de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)".{% endif %}

Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

### Transferencias de repositorios y organizaciones

Para transferir repositorios a una organización, debes tener permisos de creación de repositorios en la organización receptora. Si los propietarios de la organización inhabilitaron la creación de repositorios para los miembros de la organización, solo los propietarios de la organización pueden transferir repositorios hacia fuera o dentro de la organización.

Una vez que se transfiere un repositorio a una organización, los parámetros de permiso del repositorio de la organización predeterminados y los privilegios de membresía predeterminados se aplicarán al repositorio transferido.

## Transferir un repositorio que le pertenece a tu cuenta personal

You can transfer your repository to any personal account that accepts your repository transfer. When a repository is transferred between two personal accounts, the original repository owner and collaborators are automatically added as collaborators to the new repository.

{% ifversion fpt or ghec %}Si publicaste un sitio de {% data variables.product.prodname_pages %} en un repositorio privado y agregaste un dominio personalizado, antes de transferir el repositorio, deberás eliminar o actualizar tus registros de DNS para evitar el riesgo de que alguien más tome el dominio. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

## Transferir un repositorio que le pertenece a tu organización

If you have owner permissions in an organization or admin permissions to one of its repositories, you can transfer a repository owned by your organization to your personal account or to another organization.

1. Sign into your personal account that has admin or owner permissions in the organization that owns the repository.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

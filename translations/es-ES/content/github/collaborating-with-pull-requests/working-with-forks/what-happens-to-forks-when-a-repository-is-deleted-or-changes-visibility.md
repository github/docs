---
title: ¿Qué le sucede a las bifurcaciones cuando se elimina un repositorio o cambia la visibilidad?
intro: Eliminar tu repositorio o cambiar su visibilidad afecta las bifurcaciones de ese repositorio.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network/
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### Eliminar un repositorio privado

Cuando eliminas un repositorio privado, todas sus bifurcaciones privadas también se eliminan.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Eliminar un repositorio público

Cuando eliminas un repositorio público, se elige una de sus bifurcaciones públicas para ser el nuevo repositorio padre. Todos los otros repositorios se bifurcan fuera de este nuevo repositorio y las solicitudes de extracción siguientes van a este nuevo padre.

{% endif %}

### Permisos y bifurcaciones privadas

{% data reusables.repositories.private_forks_inherit_permissions %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Convertir un repositorio público en un repositorio privado

Si un repositorio público se convierte en privado, sus bifurcaciones públicas se separan a una nueva red. Como con la eliminación de un repositorio público, se elige una de las bifurcaciones públicas existentes para ser el nuevo repositorio padre y todos los otros repositorios se bifurcan fuera de este nuevo padre. Las solicitudes de extracción siguientes van a este nuevo padre.

En otras palabras, las bifurcaciones de un repositorio público permanecerán en su propia red separada del repositorio incluso después de que un repositorio padre se convierte en privado. Esto permite que los propietarios de las bifurcaciones continúen trabajando y colaboren sin interrupción. Si las bifurcaciones públicas no se mueven a una red separada de esta manera, los propietarios de esas bifurcaciones podrían necesitar obtener los [permisos de acceso](/articles/access-permissions-on-github) adecuados para extraer cambios y enviar solicitudes de extracción desde el repositorio padre (ahora privado) y hacia él, incluso si no necesitaban esos permisos anteriormente.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
Si un repositorio público tiene habilitado el acceso de lectura anónimo de Git, y el repositorio se vuelve privado, todas las bifurcaciones del repositorio perderán el acceso de lectura anónimo de Git y regresarán a la configuración predeterminada inhabilitada. Si un repositorio bifurcado se convierte en público, los administradores del repositorio pueden volver a habilitar el acceso de lectura anónimo de Git. Para obtener más información, consulta la sección "[Habilitar el acceso de lectura anónima en Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".
{% endif %}

#### Eliminar el repositorio privado

Si un repositorio público se convierte en privado, y después se elimina, sus bifurcaciones públicas continuarán existiendo en una red separada.

### Convertir un repositorio privado en un repositorio público

Si un repositorio privado se convierte en público, cada una de sus bifurcaciones se convierte en un repositorio privado independiente y se vuelve el padre de su propia red de repositorio nueva. Las bifurcaciones privadas nunca se convierten en públicas automáticamente ya que podrían contener confirmaciones confidenciales que no deberían divulgarse públicamente.

#### Eliminar el repositorio público

Si un repositorio privado se convierte en público y después se elimina, sus bifurcaciones privadas continuarán existiendo como repositorios privados independientes en redes separadas.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

### Cambiar la visibilidad de un repositorio interno

{% note %}

**Nota:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

Si la política deSi la política para tu empresa permite las bifurcaciones, cualquier bifurcación de un repositorio interno será privada. Si cambias la visibilidad de un repositorio interno, cualquier bifurcación que pertenezca a una cuenta de organización o de usuario permanecerá como privada.

#### Borrar el repositorio interno

Si cambias la visibilidad de un repositorio interno y luego lo borras, las bifurcaciones seguirán existiendo en una red separada.

{% endif %}

### Leer más

- "[Configurar la visibilidad de un repositorio](/articles/setting-repository-visibility)"
- "[Acerca de las bifurcaciones](/articles/about-forks)"
- "[Administrar la política de bifurcación para tu repositorio](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)"
- "[Administrar la política de bifurcación para tu organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- "{% if currentVersion == "free-pro-team@latest" %}[Requerir políticas de administración de repositorios en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-forking-private-or-internal-repositories){% else %}[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories){% endif %}"

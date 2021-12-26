---
title: Administrar los secretos cifrados para el Dependabot
intro: 'Puedes almacenar la información sensible, como las contraseñas y tokens de acceso, como secretos cifrados y luego referenciarlos en el archivo de configuración del {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
---

### Acerca de los secretos cifrados para los {% data variables.product.prodname_dependabot %}

Los secretos del {% data variables.product.prodname_dependabot %} son credenciales cifradas que creas ya sea a nivel de la organización o del repositorio.
Cuando agregas un secreto a nivel de la organización, puedes especificar qué repositorios pueden acceder a éste. Puedes utilizar secretos para permitir que el {% data variables.product.prodname_dependabot %} actualice las dependencias que se ubiquen en los registros del paquete. Cuando agregas un secreto que está cifrado antes de llegar a {% data variables.product.prodname_dotcom %} y permanece cifrado hasta que lo utiliza el {% data variables.product.prodname_dependabot %} para acceder a un registro de paquetes privado.

Después de que agregas un secreto del {% data variables.product.prodname_dependabot %}, puedes referenciarlo en el archivo de configuración _dependabot.yml_ de esta forma: {% raw %}`${{secrets.NAME}}`{% endraw %}, en donde "NAME" es el nombre que eliges para el secreto. Por ejemplo:

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

Para obtener más información, consulta la sección "[Opciones de configuración para las actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

#### Nombrar tus secretos

El nombre de un secreto del {% data variables.product.prodname_dependabot %}:
* Solo puede contener caracteres alfanuméricos (`[A-Z]`, `[0-9]`) o guiones bajos (`_`). No se permiten espacios. Si escribes en minúscula, se cambiará todo a mayúsculas.
* No puede iniciar con el prefijo `GITHUB_`.
* No puede iniciar con un número.

### Agregar un secreto de repositorio para el {% data variables.product.prodname_dependabot %}

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. Da clic en **Secreto de repositorio nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el valor de tu secreto.
1. Haz clic en **Agregar secreto** (Agregar secreto).

   El nombre del secreto se lista en la página de secretos del Dependabot. Puedes hacer clic en **Actualizar** para cambiar el valor del secreto. Puedes hacer clic en **Eliminar** para borrar el secreto.

   ![Actualizar o eliminar un secreto del repositorio](/assets/images/help/dependabot/update-remove-repo-secret.png)

### Agregar un secreto de organización para el {% data variables.product.prodname_dependabot %}

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. Da clic en **Secreto de organización nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el **Valor** para tu secreto.
1. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso.
1. Si eliges **Repositorios seleccionados**:

   * Da clic en {% octicon "gear" aria-label="The Gear icon" %}.
   * Elige los repositorios que pueden acceder a este secreto. ![Selecciona los repositorios para este secreto](/assets/images/help/dependabot/secret-repository-access.png)
   * Haz clic en **Actualizar selección**.

1. Haz clic en **Agregar secreto** (Agregar secreto).

   El nombre del secreto se lista en la página de secretos del Dependabot. Puedes hacer clic en **Actualizar** para cambiar el valor del secreto o su política de acceso. Puedes hacer clic en **Eliminar** para borrar el secreto.

   ![Actualiza o elimina un secreto de organización](/assets/images/help/dependabot/update-remove-repo-secret.png)

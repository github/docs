---
title: Administrar los secretos cifrados de tu repositorio y organización para los Codespaces
shortTitle: Administrar los secretos de tu repositorio y organización
intro: 'Los secretos cifrados te permiten almacenar información sensible en tu organización, repositorio o {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Acerca de los secretos

Los secretos son variables de ambiente cifradas que creas en una organización o repositorio. Los secretos que creas están disponibles para utilizarse en {% data variables.product.prodname_codespaces %}. GitHub utiliza una [caja sellada de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para cifrar los secretos antes de que lleguen a GitHub y solo los decifra cuando los utilizas en un codespace.

Los secretos a nivel organizacional te permiten compartir secretos entre repositorios múltiples, lo cual reduce la necesidad de crear secretos duplicados. Puedes utilizar las políticas de acceso para controlar qué repositorios pueden utilizar los secretos de la organización.

{% data reusables.codespaces.secrets-on-start %}

#### Nombrar secretos

{% data reusables.codespaces.secrets-naming %} Por ejemplo, un secreto que se creó a nivel de repositorio debe tener un nombre único en dicho repositorio y uno que se haya cerado a nivel organizacional debe tener un nombre único en dicho nivel.

  {% data reusables.codespaces.secret-precedence %}

#### Límites para los secretos

Puedes almacenar hasta 100 secretos por organización y 100 por repositorio.

Los secretos tienen un tamaño máximo de 64 KB.

### Agregar secretos para un repositorio

Para crear secretos para un repositorio de la organización, debes tener acceso adminsitrativo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Navega hacia la parte inferior de la página y, debajo de **Secretos**, selecciona **Codespaces**. ![Opción de codespaces in la barra lateral](/assets/images/help/codespaces/codespaces-option-secrets.png)
1. En la parte superior de la página, haz clci en **Secreto de repositorio nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el valor de tu secreto.
1. Haz clic en **Agregar secreto** (Agregar secreto).

### Agregar secretos para una organización

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Navega hacia la parte inferior de la página y, debajo de **Secretos**, selecciona **Codespaces**. ![Opción de codespaces in la barra lateral](/assets/images/help/codespaces/codespaces-option-secrets-org.png)
1. En la parte superior de la página, haz clic en **Nuego secreto de organización**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el **Valor** para tu secreto.
1. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso. ![Lista de acceso a los repositorios con los repositorios privados seleccionados](/assets/images/help/codespaces/secret-repository-access.png)
1. Haz clic en **Agregar secreto** (Agregar secreto).

### Revisar el acceso a los secretos de nivel organizacional

Puedes revisar qué políticas de acceso se aplican a un secreto en tu organización.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. La lista de secretos incluye cualquier política y permiso configurado. Por ejemplo: ![Lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para encontrar más detalles sobre los permisos configurados para cada secreto, da clic en **Actualizar**.

---
title: Managing encrypted secrets for your repository and organization for GitHub Codespaces
shortTitle: Secretos cifrados
intro: 'Los secretos cifrados te permiten almacenar información sensible en tu organización, repositorio o {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
---

 

## Acerca de los secretos

Los secretos son variables de ambiente cifradas que creas en una organización o repositorio. Los secretos que creas están disponibles para utilizarse en {% data variables.product.prodname_github_codespaces %}. GitHub utiliza una [caja sellada de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para cifrar los secretos antes de que lleguen a GitHub y solo los decifra cuando los utilizas en un codespace.

Los secretos a nivel organizacional te permiten compartir secretos entre repositorios múltiples, lo cual reduce la necesidad de crear secretos duplicados. Puedes utilizar las políticas de acceso para controlar qué repositorios pueden utilizar los secretos de la organización.

{% data reusables.codespaces.secrets-on-start %}

### Nombrar secretos

{% data reusables.codespaces.secrets-naming %} Por ejemplo, un secreto que se creó a nivel de repositorio debe tener un nombre único en dicho repositorio y uno que se haya cerado a nivel organizacional debe tener un nombre único en dicho nivel.

  {% data reusables.codespaces.secret-precedence %}

### Límites para los secretos

Puedes almacenar hasta 100 secretos por organización y 100 por repositorio.

Los secretos tienen un tamaño máximo de 64 KB.

## Agregar secretos para un repositorio

Para crear secretos para un repositorio de la organización, debes tener acceso adminsitrativo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la sección de "Seguridad" de la barra lateral, selecciona **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secretos** y luego haz clic en **{% data variables.product.prodname_codespaces %}**.
2. En la parte superior de la página, haz clci en **Secreto de repositorio nuevo**.
3. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
4. Ingresa el valor de tu secreto.
5. Haz clic en **Agregar secreto** (Agregar secreto).

## Agregar secretos para una organización

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. En la sección de "Seguridad" de la barra lateral, selecciona **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secretos** y luego haz clic en **{% data variables.product.prodname_codespaces %}**.
2. En la parte superior de la página, haz clic en **Nuego secreto de organización**.
3. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
4. Ingresa el **Valor** para tu secreto.
5. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso. ![Lista de acceso a los repositorios con los repositorios privados seleccionados](/assets/images/help/codespaces/secret-repository-access.png)
6. Haz clic en **Agregar secreto** (Agregar secreto).

## Revisar el acceso a los secretos de nivel organizacional

Puedes revisar qué políticas de acceso se aplican a un secreto en tu organización.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. La lista de secretos incluye cualquier política y permiso configurado. Por ejemplo: ![Lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para encontrar más detalles sobre los permisos configurados para cada secreto, da clic en **Actualizar**.

## Leer más

- "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"

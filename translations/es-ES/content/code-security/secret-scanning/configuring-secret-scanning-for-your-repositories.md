---
title: Configurar el escaneo de secretos para tus repositorios
intro: 'Puedes configurar la forma en la que {% data variables.product.prodname_dotcom %} escanea tus repositorios en búsqueda de secretos que coincidan con los patrones de seguridad avanzada.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configurar escaneos de secretos
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Habilitar {% data variables.product.prodname_secret_scanning_GHAS %}

Puedes habilitar el {% data variables.product.prodname_secret_scanning_GHAS %} para cualquier repositorio que pertenezca a una organización. Una vez que se habilite, {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Si aún no se ha habilitado la {% data variables.product.prodname_advanced_security %} para el repositorio, haz clic en **Habilitar** a la derecha de "{% data variables.product.prodname_GH_advanced_security %}".
   {% ifversion fpt or ghec %}![Habilitar la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif ghes or ghae %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Revisa el impacto de habilitar la {% data variables.product.prodname_advanced_security %} y luego haz clic en **Habilitar la {% data variables.product.prodname_GH_advanced_security %} para este repositorio**.
6. Cuando habilitas la {% data variables.product.prodname_advanced_security %}, puede que el {% data variables.product.prodname_secret_scanning %} se habilite en el repositorio debido a la configuración de la organización. Si se muestra "{% data variables.product.prodname_secret_scanning_caps %}" con un botón de **Habilitar**, aún necesitarás habilitar el {% data variables.product.prodname_secret_scanning %} si das clic en **Habilitar**. Si ves un botón de **Inhabilitar**, entonces el {% data variables.product.prodname_secret_scanning %} ya se encuentra habilitado. ![Habilitar el {% data variables.product.prodname_secret_scanning %} para tu repositorio](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
{% ifversion secret-scanning-push-protection %}
7. Opcionalmente, si quieres habilitar la protección de subida, haz clic en **Habilitar** a la derecha de "Protección de subida". {% data reusables.secret-scanning.push-protection-overview %} Para obtener más información, consulta la sección "[Proteger las subidas con el {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". ![Habilitar la protección de subida para tu repositorio](/assets/images/help/repository/secret-scanning-enable-push-protection.png)
{% endif %}
{% ifversion ghae %}
1. Antes de que puedas habilitar el {% data variables.product.prodname_secret_scanning %}, necesitas habilitar primero la {% data variables.product.prodname_GH_advanced_security %}. A la derecha de "{% data variables.product.prodname_GH_advanced_security %}", da clic en **Habilitar**. ![Habilitar la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Da clic en **Habilitar la {% data variables.product.prodname_GH_advanced_security %} para este repositorio** para confirmar la acción. ![Confirmar la habilitación de la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. A la derecha de "{% data variables.product.prodname_secret_scanning_caps %}", da clic en **Habilitar**. ![Habilitar el {% data variables.product.prodname_secret_scanning %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

## Excluir directorios de la {% data variables.product.prodname_secret_scanning_GHAS %}

Puedes utilizar un archivo *secret_scanning.yml* para excluir los directorios de {% data variables.product.prodname_secret_scanning %}. Por ejemplo, puedes excluir directorios que contengan pruebas o contenido generado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre del archivo, teclea *.github/secret_scanning.yml*.
4. Debajo de **Editar nuevo archivo**, teclea `paths-ignore:` seguido por las rutas que quieras excluir de {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Puedes utilizar caracteres especiales, tales como `*` para filtrar las rutas. Para obtener más información acerca de filtrar las rutas, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}

    **Notas:**
    - Si hay más de 1,000 entradas en `paths-ignore`, {% data variables.product.prodname_secret_scanning %} solo excluirá de los escaneos a los primeros 1,000 directorios.
    - Si *secret_scanning.yml* es mayor a 1 MB, {% data variables.product.prodname_secret_scanning %} ignorará todo el archivo.

    {% endnote %}

También puedes ignorar alertas individuales de {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)".

## Leer más

- "[Administrar la seguridad y la configuración de análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
- "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"

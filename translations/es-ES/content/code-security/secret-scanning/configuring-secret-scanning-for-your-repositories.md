---
title: Configuración del examen de secretos para los repositorios
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
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192941'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Habilitación de {% data variables.product.prodname_secret_scanning_GHAS %}

Puedes habilitar {% data variables.product.prodname_secret_scanning_GHAS %} para cualquier repositorio que sea propiedad de una organización. Una vez habilitado, {% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**Nota:** {% data variables.product.prodname_secret_scanning_caps %} para las descripciones del problema y los comentarios se encuentra en versión beta pública y está sujeto a cambios.

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**Nota:** Si tu organización es propiedad de una cuenta de empresa, un propietario de la empresa también puede habilitar {% data variables.product.prodname_secret_scanning %} en el nivel empresarial. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Si {% data variables.product.prodname_advanced_security %} todavía no está habilitado para el repositorio, a la derecha de "{% data variables.product.prodname_GH_advanced_security %}", haz clic en **Habilitar**.
   {% ifversion fpt or ghec %}![Habilitación de {% data variables.product.prodname_GH_advanced_security %} para el repositorio](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Habilitación de {% data variables.product.prodname_GH_advanced_security %} para el repositorio](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. Revisa el impacto de habilitar la {% data variables.product.prodname_advanced_security %} y luego haz clic en **Habilitar la {% data variables.product.prodname_GH_advanced_security %} para este repositorio**.
3. Cuando habilitas la {% data variables.product.prodname_advanced_security %}, puede que el {% data variables.product.prodname_secret_scanning %} se habilite en el repositorio debido a la configuración de la organización. Si "{% data variables.product.prodname_secret_scanning_caps %}" se muestra con un botón **Habilitar**, debes habilitar {% data variables.product.prodname_secret_scanning %} haciendo clic en **Habilitar**. Si ves un botón **Deshabilitar**, {% data variables.product.prodname_secret_scanning %} ya está habilitado. 
   ![Habilitación de {% data variables.product.prodname_secret_scanning %} para el repositorio](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. Opcionalmente, si quieres habilitar la protección de los envíos de cambios, haz clic en **Habilitar** a la derecha de "Protección de envíos de cambios". {% data reusables.secret-scanning.push-protection-overview %} Para obtener más información, consulta "[Protección de envíos de cambios con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
   ![Habilitar la protección de envíos de cambios para el repositorio](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. Antes de que puedas habilitar el {% data variables.product.prodname_secret_scanning %}, necesitas habilitar primero la {% data variables.product.prodname_GH_advanced_security %}. A la derecha de "{% data variables.product.prodname_GH_advanced_security %}", haz clic en **Habilitar**.
   ![Habilitación de la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Haz clic en **Habilitar la {% data variables.product.prodname_GH_advanced_security %} para este repositorio** para confirmar la acción.
   ![Confirmar la habilitación de la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. A la derecha de "{% data variables.product.prodname_secret_scanning_caps %}", haz clic en **Habilitar**.
   ![Habilitar el {% data variables.product.prodname_secret_scanning %} para tu repositorio](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## Excluir directorios de la {% data variables.product.prodname_secret_scanning_GHAS %}

Puedes utilizar un archivo *secret_scanning.yml* para excluir los directorios de {% data variables.product.prodname_secret_scanning %}. Por ejemplo, puedes excluir directorios que contengan pruebas o contenido generado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo nombre de archivo, escribe *.github/secret_scanning.yml*.
4. En **Editar nuevo archivo**, escribe `paths-ignore:` seguido por las rutas de acceso que quieras excluir de {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    Puede usar caracteres especiales, como `*` para filtrar las rutas. Para obtener más información sobre los patrones de filtro, consulta "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}
    
    **Notas:**
    - Si hay más de 1000 entradas en `paths-ignore`, {% data variables.product.prodname_secret_scanning %} solo excluirá los primeros 1000 directorios de los análisis.
    - Si *secret_scanning.yml* es mayor que 1 MB, {% data variables.product.prodname_secret_scanning %} ignorará todo el archivo.
    
    {% endnote %}

También puedes ignorar alertas individuales de {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)".

## Información adicional

- "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
- "[Definición de patrones personalizados para el {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"

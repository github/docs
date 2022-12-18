---
title: Agregar una política de seguridad a tu repositorio
intro: Puedes dar instrucciones de cómo reportar una vulnerabilidad de seguridad en tu proyecto si agregas una política de seguridad a tu repositorio.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159273'
---
## Acerca de las políticas de seguridad

Para proporcionar instrucciones sobre cómo notificar vulnerabilidades de seguridad en el proyecto,{% ifversion fpt or ghes or ghec %} puede agregar un archivo _SECURITY.md_ a la raíz, `docs`, o a la carpeta `.github` del repositorio.{% else %} puede agregar un archivo _SECURITY.md_ a la raíz o a la carpeta `docs` del repositorio.{% endif %} Cuando alguien cree una incidencia en el repositorio, verá un vínculo a la directiva de seguridad del proyecto.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Puedes crear una política de seguridad predeterminada para tu organización o cuenta personal. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".
{% endif %}

{% tip %}

**Sugerencia:** Para ayudar a los usuarios a encontrar su directiva de seguridad, puede vincular a su archivo _SECURITY.md_ desde otros lugares del repositorio, como un archivo Léame. Para más información, vea "[Acerca de los archivos Léame](/articles/about-readmes)".

{% endtip %}

{% ifversion fpt or ghec %} Cuando alguien informa de una vulnerabilidad de seguridad en el proyecto, puede usar {% data variables.product.prodname_security_advisories %} para divulgar, corregir y publicar información sobre esta. Para obtener más información sobre el proceso de generación de informes y la divulgación de vulnerabilidades en {% data variables.product.prodname_dotcom %}, vea "[Acerca de la divulgación coordinada de vulnerabilidades de seguridad](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para más información acerca de las asesorías de seguridad de repositorio, consulta "[Acerca de las asesorías de seguridad de repositorio](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Cuando pones las instrucciones de reporte de seguridad claramente disponibles, facilitas a tus usurios el reportar cualquier vulnerabilidad de seguridad que encuentren en tu repositorio utilizando tu canal de comunicación preferido.
{% endif %}

## Agregar una política de seguridad a tu repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. En la barra lateral izquierda, haga clic en **Security policy** (Directiva de seguridad).
  ![Pestaña Security policy (Directiva de seguridad)](/assets/images/help/security/security-policy-tab.png)
4. Haga clic en **Iniciar configuración**.
  ![Botón Start setup (Iniciar configuración)](/assets/images/help/security/start-setup-security-policy-button.png)
5. En el nuevo archivo _SECURITY.md_, agregue información sobre las versiones admitidas del proyecto y cómo notificar una vulnerabilidad.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"{% ifversion not ghae %}
- "[Configuración del proyecto para contribuciones correctas](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}

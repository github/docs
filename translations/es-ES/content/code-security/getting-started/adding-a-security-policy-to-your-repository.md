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
shortTitle: Agregar una política de seguridad
---

## Acerca de las políticas de seguridad

Para otorgar instrucciones a las personas sobre cómo reportar las vulnerabilidades de seguridad en tu proyecto,{% ifversion fpt or ghes or ghec %} puedes agregar un archivo de _SECURITY.md_ a carpeta `docs`, `.github` o raíz de tu repositorio.{% else %} puedes agregar un archivo de _SECURITY.md_ a la carpeta `docs` o raíz de tu repositorio.{% endif %} Cuando alguien crea una propuesta en tu repositorio, verán un enlace en la política de seguridad de tu proyecto.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Puedes crear una política de seguridad predeterminada para tu cuenta personal o de organización. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."
{% endif %}

{% tip %}

**Sugerencia:** Para que las demás personas puedan encontrar tu política de seguridad, puedes vincular tu archivo _SECURITY.md_ desde otros lugares en tu repositorio, como un archivo README. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".

{% endtip %}

{% ifversion fpt or ghec %}
Después de que alguien reporte una vulnerabilidad de seguridad en tu proyecto, puedes utilizar {% data variables.product.prodname_security_advisories %} para divulgar, arreglar y publicar información acerca de la misma. Para obtener más información sobre el proceso de reportar y divulgar vulnerabilidades en {% data variables.product.prodname_dotcom %}, consulta la sección "[Acerca de la divulgación coordinada de las vulnerabilidades de seguridad](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obtener más información acerca de las {% data variables.product.prodname_security_advisories %}, consulta la sección "[Acerca del {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Cuando pones las instrucciones de reporte de seguridad claramente disponibles, facilitas a tus usurios el reportar cualquier vulnerabilidad de seguridad que encuentren en tu repositorio utilizando tu canal de comunicación preferido.
{% endif %}

## Agregar una política de seguridad a tu repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. En la barra lateral iziquierda, haz clic en **Política de seguridad**. ![Pestaña de política de seguridad](/assets/images/help/security/security-policy-tab.png)
4. Haz clic en **Start setup** (Iniciar configuración). ![Botón Start setup (Iniciar configuración)](/assets/images/help/security/start-setup-security-policy-button.png)
5. En el archivo _SECURITY.md_ nuevo, agrega información sobre las versiones compatibles de tu proyecto y cómo informar una vulnerabilidad.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Leer más

- "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)"{% ifversion not ghae %}
- "[Configurar tu proyecto para tener contribuciones saludables](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}

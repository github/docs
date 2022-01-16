---
title: Agregar una política de seguridad a tu repositorio
intro: Puedes brindar instrucciones sobre cómo informar responsablemente una vulnerabilidad de seguridad en tu proyecto al agregar una política de seguridad a tu repositorio.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Security
---

### Acerca de las políticas de seguridad

Para brindar instrucciones sobre cómo informar responsablemente las vulnerabilidades de seguridad en tu proyecto, puedes agregar un archivo _SECURITY.md_ a la raíz de tu repositorio, `docs`, o carpeta `.github`. Cuando alguien crea una propuesta en tu repositorio, verán un enlace en la política de seguridad de tu proyecto.

Puedes crear una política de seguridad predeterminada para tu cuenta de usuario o de organización. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% tip %}

**Sugerencia:** Para que las demás personas puedan encontrar tu política de seguridad, puedes vincular tu archivo _SECURITY.md_ desde otros lugares en tu repositorio, como un archivo README. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".

{% endtip %}

Después de que alguien reporte una vulnerabilidad de seguridad en tu proyecto, puedes utilizar {% data variables.product.prodname_security_advisories %} para divulgar, arreglar y publicar información acerca de la misma. Para obtener más información sobre el proceso de reportar y divulgar vulnerabilidades en {% data variables.product.prodname_dotcom %}, consulta la sección "[Acerca de la divulgación coordinada de las vulnerabilidades de seguridad](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obtener más información acerca de las {% data variables.product.prodname_security_advisories %}, consulta la sección "[Acerca del {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% data reusables.repositories.github-security-lab %}

### Agregar una política de seguridad a tu repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. En la barra lateral izquierda, haz clic en **Policy** (Política). ![Pestaña Policy (Política)](/assets/images/help/security/policy-tab.png)
4. Haz clic en **Start setup** (Iniciar configuración). ![Botón Start setup (Iniciar configuración)](/assets/images/help/security/start-setup-policy-button.png)
5. En el archivo _SECURITY.md_ nuevo, agrega información sobre las versiones compatibles de tu proyecto y cómo informar una vulnerabilidad.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Leer más

- [Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Configurar tu proyecto para contribuciones positivas](/communities/setting-up-your-project-for-healthy-contributions)"
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})

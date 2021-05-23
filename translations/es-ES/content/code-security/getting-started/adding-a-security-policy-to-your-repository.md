---
title: Agregar una política de seguridad a tu repositorio
intro: You can give instructions for how to report a security vulnerability in your project by adding a security policy to your repository.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
topics:
  - Security
---

### Acerca de las políticas de seguridad

To give people instructions for reporting security vulnerabilities in your project,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} you can add a _SECURITY.md_ file to your repository's root, `docs`, or `.github` folder.{% else %} you can add a _SECURITY.md_ file to your repository's root, or `docs` folder.{% endif %} When someone creates an issue in your repository, they will see a link to your project's security policy.

{% if currentVersion != 'github-ae@next' %}
<!-- no public repos in GHAE -->
Puedes crear una política de seguridad predeterminada para tu cuenta de usuario o de organización. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."
{% endif %}

{% tip %}

**Sugerencia:** Para que las demás personas puedan encontrar tu política de seguridad, puedes vincular tu archivo _SECURITY.md_ desde otros lugares en tu repositorio, como un archivo README. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}
Después de que alguien reporte una vulnerabilidad de seguridad en tu proyecto, puedes utilizar {% data variables.product.prodname_security_advisories %} para divulgar, arreglar y publicar información acerca de la misma. Para obtener más información sobre el proceso de reportar y divulgar vulnerabilidades en {% data variables.product.prodname_dotcom %}, consulta la sección "[Acerca de la divulgación coordinada de las vulnerabilidades de seguridad](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obtener más información acerca de las {% data variables.product.prodname_security_advisories %}, consulta la sección "[Acerca del {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.
{% endif %}

### Agregar una política de seguridad a tu repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Security policy**. ![Security policy tab](/assets/images/help/security/security-policy-tab.png)
4. Haz clic en **Start setup** (Iniciar configuración). ![Botón Start setup (Iniciar configuración)](/assets/images/help/security/start-setup-security-policy-button.png)
5. En el archivo _SECURITY.md_ nuevo, agrega información sobre las versiones compatibles de tu proyecto y cómo informar una vulnerabilidad.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Leer más

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}

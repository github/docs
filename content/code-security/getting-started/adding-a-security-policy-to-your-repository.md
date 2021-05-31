---
title: Adding a security policy to your repository
intro: You can give instructions for how to report a security vulnerability in your project by adding a security policy to your repository.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: 'next'
topics:
  - Security
---

### About security policies

To give people instructions for reporting security vulnerabilities in your project,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} you can add a _SECURITY.md_ file to your repository's root, `docs`, or `.github` folder.{% else %} you can add a _SECURITY.md_ file to your repository's root, or `docs` folder.{% endif %} When someone creates an issue in your repository, they will see a link to your project's security policy.

{% if currentVersion != 'github-ae@next' %}
<!-- no public repos in GHAE -->
You can create a default security policy for your organization or user account. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."
{% endif %}

{% tip %}

**Tip:** To help people find your security policy, you can link to your _SECURITY.md_ file from other places in your repository, such as your README file. For more information, see "[About READMEs](/articles/about-readmes)."

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}
After someone reports a security vulnerability in your project, you can use {% data variables.product.prodname_security_advisories %} to disclose, fix, and publish information about the vulnerability. For more information about the process of reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}, see "[About coordinated disclosure of security vulnerabilities](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)." For more information about {% data variables.product.prodname_security_advisories %}, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.
{% endif %}

### Adding a security policy to your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Security policy**.
  ![Security policy tab](/assets/images/help/security/security-policy-tab.png)
4. Click **Start setup**.
  ![Start setup button](/assets/images/help/security/start-setup-security-policy-button.png)
5. In the new _SECURITY.md_ file, add information about supported versions of your project and how to report a vulnerability.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Further reading

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}

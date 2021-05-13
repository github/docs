---
title: Adding a security policy to your repository
intro: You can give instructions for how to responsibly report a security vulnerability in your project by adding a security policy to your repository.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Security
---

### About security policies

To give people instructions for responsibly reporting security vulnerabilities in your project, you can add a _SECURITY.md_ file to your repository's root, `docs`, or `.github` folder. When someone creates an issue in your repository, they will see a link to your project's security policy.

You can create a default security policy for your organization or user account. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% tip %}

**Tip:** To help people find your security policy, you can link to your _SECURITY.md_ file from other places in your repository, such as your README file. For more information, see "[About READMEs](/articles/about-readmes)."

{% endtip %}

After someone reports a security vulnerability in your project, you can use {% data variables.product.prodname_security_advisories %} to disclose, fix, and publish information about the vulnerability. For more information about the process of reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}, see "[About coordinated disclosure of security vulnerabilities](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)." For more information about {% data variables.product.prodname_security_advisories %}, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% data reusables.repositories.github-security-lab %}

### Adding a security policy to your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Policy**. ![Policy tab](/assets/images/help/security/policy-tab.png)
4. Click **Start setup**. ![Start setup button](/assets/images/help/security/start-setup-policy-button.png)
5. In the new _SECURITY.md_ file, add information about supported versions of your project and how to report a vulnerability.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Дополнительная литература

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})

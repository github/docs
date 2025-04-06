---
title: Adding a security policy to your repository
intro: You can give instructions for how to report a security vulnerability in your project by adding a security policy to your repository.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
---

## About security policies

To give people instructions for reporting security vulnerabilities in your project, you can add a `SECURITY.md` file to your repository's root, `docs`, or `.github` folder. Adding this file to this part(s) of your repository automatically creates a row with a description where people can review it. When someone creates an issue in your repository, they will see a link to your project's security policy.

You can create a default security policy for your organization or personal account. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% tip %}

**Tip:** To help people find your security policy, you can link to your `SECURITY.md` file from other places in your repository, such as your `README` file. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

{% endtip %}

{% ifversion fpt or ghec %}
After someone reports a security vulnerability in your project, you can use {% data variables.product.prodname_security_advisories %} to disclose, fix, and publish information about the vulnerability. For more information about the process of reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}, see "[AUTOTITLE](/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)." For more information about repository security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% ifversion ghes %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.
{% endif %}

For an example of a real `SECURITY.md` file, see [https://github.com/electron/electron/blob/main/SECURITY.md](https://github.com/electron/electron/blob/main/SECURITY.md).

## Adding a security policy to your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Reporting", click **{% octicon "law" aria-hidden="true" %} Policy**.
1. Click **Start setup**.
1. In the new `SECURITY.md` file, add information about supported versions of your project and how to report a vulnerability.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Further reading

* "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
* "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions)"{% ifversion fpt or ghec %}
* [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}

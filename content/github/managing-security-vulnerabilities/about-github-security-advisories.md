---
title: About GitHub Security Advisories
intro: 'You can use {% data variables.product.prodname_security_advisories %} to privately discuss, fix, and publish information about security vulnerabilities in your repository.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### About disclosing vulnerabilities

When someone lets you, as an organization maintainer, know privately about a vulnerability, you develop a fix, validate it, and notify your users. The initial report of a vulnerability is made privately, and the full details are only published once a patch has been made available, sometimes with a delay to allow more time for the patches to be installed. For more information, see the "[OWASP Cheat Sheet Series about vulnerability disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)."

Maintainers should disclose vulnerabilities in a timely manner, if there is a security vulnerability in their repository. It's wrong: 
- to not disclose the vulnerability, 
- to not identify it as a security issue, or
- to wait an unacceptably long time while maintainers create a fix. 

It's important to remember that publishing the details of a security vulnerability doesn't make you look bad. Security vulnerabilities are present everywhere in sofware, and your users will thank you for demonstrating a clear and established process for disclosing security vulnerabilities in your software, and not hiding things.

Security researchers should disclose vulnerabilities privately to maintainers. It's wrong to: 
- disclose the vulnerability publicly, 
- not contact the maintainer, 
- disclose the vulnerability before patching the code.

It's seen as fine for security researchers to disclose a vulnerability publicly after a period of time, if they have tried to contact the maintainers and not received a response, or contacted them and been asked to wait too long to disclose it.

### About disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}

Here at {% data variables.product.company_short %}, the process is as follows:

 If you are a security researcher who would like report a vulnerability:
 - First check if there is a security policy for the related repository. For more information, see "[About security policies](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)." 
 - If there is one, follow it to understand the process before contacting the security team for that repository. 

 If you are a maintainer, it's likely that a security researcher will email you or otherwise privately contact you. This can be, for example, based on information in your _security.md_ file. Alternatively, someone may open a (public) issue with details of a security issue. 
 
 {% note %}

**Note**: For npm only—if you report a vulnerability to npm, we try to contact you privately. If you don't address the issue in a timely manner, we will disclose it. For more information, see "[Reporting malware in an npm package](https://docs.npmjs.com/reporting-malware-in-an-npm-package)."

{% note %}

 As a maintainer, to disclose a vulnerability that exists in your repository (for example if someone got in touch and reported a vulnerability to you), you create a draft security advisory in your package's {% data variables.product.prodname_dotcom %} repository. For more information, see "[About security advisory](\github\managing-security-vulnerabilities\about-github-security-advisories)" and "[Creating a security advisory](\github\managing-security-vulnerabilities\creating-a-security-advisory)." The security advisory form on {% data variables.product.prodname_dotcom %} is a standardized form that matches the CVE description format.

For details about the process of disclosing a security vulnerability in {% data variables.product.product_name %} and information on getting started, see "[About GitHub Security Advisories](#about-github-security-advisories)" below.

### About {% data variables.product.prodname_security_advisories %}

{% data variables.product.prodname_security_advisories %} allows repository maintainers to privately discuss and fix a security vulnerability in a project. After collaborating on a fix, repository maintainers can publish the security advisory to publicly disclose the security vulnerability to the project's community. By publishing security advisories, repository maintainers make it easier for their community to update package dependencies and research the impact of the security vulnerabilities.

With {% data variables.product.prodname_security_advisories %}, you can:

1. Create a draft security advisory, and use the draft to privately discuss the impact of the vulnerability on your project.
2. Privately collaborate to fix the vulnerability in a temporary private fork.
3. Publish the security advisory to alert your community of the vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

To get started, see "[Creating a security advisory](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

You can give credit to individuals who contributed to a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."

 Once a patch is released, you can publish the security advisory to alert your community about the vulnerability.

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### CVE identification numbers

{% data variables.product.prodname_security_advisories %} builds upon the foundation of the Common Vulnerabilities and Exposures (CVE) list. {% data variables.product.prodname_dotcom %} is a CVE Numbering Authority (CNA) and is authorized to assign CVE identification numbers. For more information, see "[About CVE](https://cve.mitre.org/about/index.html)" and "[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)" on the CVE website.

When you create a security advisory for a public repository on {% data variables.product.prodname_dotcom %}, you have the option of providing an existing CVE identification number for the security vulnerability. {% data reusables.repositories.request-security-advisory-cve-id %}

Once you've published the security advisory and {% data variables.product.prodname_dotcom %} has assigned a CVE identification number to the vulnerability, {% data variables.product.prodname_dotcom %} publishes the CVE to the MITRE database.
For more information, see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)."

### {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}


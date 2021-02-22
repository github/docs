---
title: About disclosing vulnerabilities
intro: 'Vulnerability disclosure is a responsible and coordinated effort between security researchers and repository maintainers.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### About disclosing vulnerabilities in the industry

{% data reusables.security-advisory.disclosing-vulnerabilities %}

The initial report of a vulnerability is made privately, and the full details are only published once a patch has been made available, sometimes with a delay to allow more time for the patches to be installed. For more information, see the "[OWASP Cheat Sheet Series about vulnerability disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)" on the OWASP Cheat Sheet Series website.

#### Best practices for security researchers

Security researchers should report vulnerabilities privately to maintainers. It's not acceptable to:
- Disclose the vulnerability publicly
- Not contact the maintainer 
- Disclose the vulnerability before a fixed version of the code is available

It's acceptable for security researchers to disclose a vulnerability publicly after a period of time, if they have tried to contact the maintainers and not received a response, or contacted them and been asked to wait too long to disclose it.

#### Best practices for maintainers

Maintainers should disclose vulnerabilities in a timely manner. If there is a security vulnerability in your repository, you should:
- Treat the vulnerability as a security issue rather than a simple bug
- Plan to disclose the vulnerability responsibly
- Aim to publish a fix as soon as you can

Publishing the details of a security vulnerability doesn't make maintainers look bad. Security vulnerabilities are present everywhere in sofware nowadays, and users will trust maintainers who have a clear and established process for disclosing security vulnerabilities in their code.

### About reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}

The process for reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom_the_website %} is as follows:

 If you are a security researcher who would like report a vulnerability, first check if there is a security policy for the related repository. For more information, see "[About security policies](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)." If there is one, follow it to understand the process before contacting the security team for that repository. If there isn't a security policy for the repository, you may try to privately contact the maintainer based on information available in the _security.md_ file.

{% note %}

**Note**: _For npm only_ - If you report a vulnerability to npm, we try to contact you privately. If you don't address the issue in a timely manner, we will disclose it. For more information, see "[Reporting malware in an npm package](https://docs.npmjs.com/reporting-malware-in-an-npm-package)" on the npm Docs website.

{% endnote %}

 If you are a maintainer, it's likely that a security researcher will email you or otherwise privately contact you. Alternatively, someone may open a (public) issue with details of a security issue. 

 As a maintainer, to disclose a vulnerability that exists in your repository, you first create a draft security advisory in your package's repository in {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.security-advisory-overview %} For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."


 To get started, see "[Creating a security advisory](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

---
title: About code scanning
intro: 'You can use {{ site.data.variables.product.prodname_code_scanning }} to find security vulnerabilities and errors in the code for your project on {{ site.data.variables.product.prodname_dotcom }}.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

### About {{ site.data.variables.product.prodname_code_scanning }}

{{ site.data.reusables.code-scanning.about-code-scanning }}

You can use {{ site.data.variables.product.prodname_code_scanning }} to find, triage, and prioritize fixes for existing problems in your code. {{ site.data.variables.product.prodname_code_scanning_capc }} also prevents developers from introducing new problems. You can schedule scans for specific days and times, or trigger scans when a specific event occurs in the repository, such as a push.

If {{ site.data.variables.product.prodname_code_scanning }} finds a potential vulnerability or error in your code, {{ site.data.variables.product.prodname_dotcom }} displays an alert in the repository. After you fix the code that triggered the alert, {{ site.data.variables.product.prodname_dotcom }} closes the alert. For more information, see "[Managing {{ site.data.variables.product.prodname_code_scanning }} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

To monitor results from {{ site.data.variables.product.prodname_code_scanning }} across your repositories or your organization, you can use the {{ site.data.variables.product.prodname_code_scanning }} API.
For more information about API endpoints, see  "[{{ site.data.variables.product.prodname_code_scanning_capc }}](/v3/code-scanning)."

To get started with {{ site.data.variables.product.prodname_code_scanning }}, see "[Enabling {{ site.data.variables.product.prodname_code_scanning }} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)."

### About {{ site.data.variables.product.prodname_codeql }}

You can use {{ site.data.variables.product.prodname_code_scanning }} with {{ site.data.variables.product.prodname_codeql }}, a semantic code analysis engine. {{ site.data.variables.product.prodname_codeql }} treats code as data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers. 

{{ site.data.variables.product.prodname_ql }} is the query language that powers {{ site.data.variables.product.prodname_codeql }}. {{ site.data.variables.product.prodname_ql }} is an object-oriented logic programming language. {{ site.data.variables.product.company_short }}, language experts, and security researchers create the queries used for {{ site.data.variables.product.prodname_code_scanning }}, and the queries are open source. The community maintains and updates the queries to improve analysis and reduce false positives. For more information, see [{{ site.data.variables.product.prodname_codeql }}](https://securitylab.github.com/tools/codeql) on the GitHub Security Lab website.

{{ site.data.variables.product.prodname_code_scanning_capc }} with {{ site.data.variables.product.prodname_codeql }} supports both compiled and interpreted languages, and can find vulnerabilities and errors in code that's written in the supported languages.

{{ site.data.reusables.code-scanning.supported-languages }}

You can view and contribute to the queries for {{ site.data.variables.product.prodname_code_scanning }} in the [`github/codeql`](https://github.com/github/codeql) repository. For more information, see [{{ site.data.variables.product.prodname_codeql }} queries](https://help.semmle.com/QL/learn-ql/writing-queries/writing-queries.html) in the {{ site.data.variables.product.prodname_codeql }} documentation.

{% if currentVersion == "free-pro-team@latest" %}

### About billing for {{ site.data.variables.product.prodname_code_scanning }}

{{ site.data.variables.product.prodname_code_scanning_capc }} uses {{ site.data.variables.product.prodname_actions }}, and each run of a {{ site.data.variables.product.prodname_code_scanning }} workflow consumes minutes for {{ site.data.variables.product.prodname_actions }}. For more information, see "[About billing for {{ site.data.variables.product.prodname_actions }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

{% endif %}

### About third-party code scanning tools

{{ site.data.reusables.code-scanning.you-can-upload-third-party-analysis }}

{{ site.data.reusables.code-scanning.interoperable-with-tools-that-output-sarif }}

{{ site.data.reusables.code-scanning.get-started-uploading-third-party-data }}

### Further reading

{% if currentVersion == "free-pro-team@latest" %}
- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"{% endif %}
- [{{ site.data.variables.product.prodname_security }}](https://securitylab.github.com/)
- [OASIS Static Analysis Results Interchange Format (SARIF) TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=sarif) on the OASIS Committee website

---
title: 'Finding existing vulnerabilities in code'
shortTitle: Finding vulnerabilities
intro: 'Copilot Chat can help find common vulnerabilities in your code and suggest fixes.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/security-analysis/finding-existing-vulnerabilities-in-code
versions:
  feature: copilot
category:
  - 'Security analysis'
complexity:
  - Intermediate
octicon: code
topics:
  - Copilot
---

While they may be considered "common knowledge" by many developers, the vast majority of newly introduced security weaknesses are due to vulnerabilities like cross-site scripting (XSS), SQL injection, and cross-site request forgery (CSRF). These vulnerabilities can be mitigated by following secure coding practices, such as using parameterized queries, input validation, and avoiding hard-coded sensitive data. GitHub Copilot can help detect and resolve these issues.

> [!NOTE] While {% data variables.product.prodname_copilot_chat_short %} can help find some common security vulnerabilities and help you fix them, you should not rely on {% data variables.product.prodname_copilot_short %} for a comprehensive security analysis. Using security tools and features will more thoroughly ensure your code is secure. For more information on {% data variables.product.github %} security features, see [AUTOTITLE](/code-security/getting-started/github-security-features).

## Example scenario

The JavaScript code below has a potential XSS vulnerability that could be exploited if the `name` parameter is not properly sanitized before being displayed on the page.

```javascript
function displayName(name) {
  const nameElement = document.getElementById('name-display');
  nameElement.innerHTML = `Showing results for "${name}"`
}
```

## Example prompt

You can ask {% data variables.product.prodname_copilot_chat_short %} to analyze code for common security vulnerabilities and provide explanations and fixes for the issues it finds.

`Analyze this code for potential security vulnerabilities and suggest fixes.`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} responds with an explanation of the vulnerability, and suggested changes to the code to fix it.

```javascript
function displayName(name) {
  const nameElement = document.getElementById('name-display');
  nameElement.textContent = `Showing results for "${name}"`;
}
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}

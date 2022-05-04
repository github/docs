---
title: Best practices for securing code in your supply chain
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: Guidance on how to protect the center of your supply chain—the code you write and the code you depend on.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
---

## Acerca de esta guía

This guide describes the highest impact changes you can make to improve the security of your code. Cada sección detalla un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de más alto impacto se listan primero.

## ¿Cuál es el riesgo?

Key risks in the development process include:

- Using dependencies with security vulnerabilities that an attacker could exploit.
- Leaking authentication credentials or a token that an attacker could use to access your resources.
- Introducing a vulnerability to your own code that an attacker could exploit.

These risks open your resources and projects to attack and those risks are passed directly on to anyone who uses a package that you create. The following sections explain how you can protect yourself and your users from these risks.

## Create a vulnerability management program for dependencies

You can secure the code you depend on by creating a vulnerability management program for dependencies. At a high level this should include processes to ensure that you:

1. Create an inventory of your dependencies.

2. Know when there is a security vulnerability in a dependency.

3. Assess the impact of that vulnerability on your code and decide what action to take.

### Automatic inventory generation

As a first step, you want to make a complete inventory of your dependencies. The dependency graph for a repository shows you dependencies for supported ecosystems. If you check in your dependencies, or use other ecosystems, you will need to supplement this with data from 3rd party tools or by listing dependencies manually. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Automatic detection of vulnerabilities in dependencies

{% data variables.product.prodname_dependabot %} can help you by monitoring your dependencies and notifying you when they contain a known vulnerability. {% ifversion fpt or ghec or ghes > 3.2 %}Incluso puedes habilitar el {% data variables.product.prodname_dependabot %} para que levante solicitudes de cambio automáticamente, las cuales actualicen la dependencia a una versión segura.{% endif %} Para obtener más información, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %} y "[Acerca de las actualizaciones de seguridad del Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}.

### Assessment of exposure to risk from a vulnerable dependency

When you discover you are using a vulnerable dependency, for example, a library or a framework, you must assess your project's level of exposure and determine what action to take. Vulnerabilities are usually reported with a severity score to show how severe their impact could be. The severity score is a useful guide but cannot tell you the full impact of the vulnerability on your code.

To assess the impact of a vulnerability on your code, you also need to consider how you use the library and determine how much risk that actually poses to your system. Maybe the vulnerability is part of a feature that you don't use, and you can update the affected library and continue with your normal release cycle. Or maybe your code is badly exposed to risk, and you need to update the affected library and ship an updated build right away. This decision depends on how you're using the library in your system, and is a decision that only you have the knowledge to make.

## Secure your communication tokens

Code often needs to communicate with other systems over a network, and requires secrets (like a password, or an API key) to authenticate. Your system needs access to those secrets to run, but it's best practice to not include them in your source code. This is especially important for public repositories, but also for private repositories to which many people might have access.

### Automatic detection of secrets committed to a repository

{% note %}

**Note:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dotcom %} partners with many providers to automatically detect when secrets are committed to or stored in your public repositories, and will notify the provider so they can take appropriate actions to ensure your account remains secure. For more information, see "[About {% data variables.product.prodname_secret_scanning %} for partner patterns](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)."
{% endif %}

{% ifversion fpt %}
{% data reusables.secret-scanning.fpt-GHAS-scans %}
{% elsif ghec %}
If your organization uses {% data variables.product.prodname_GH_advanced_security %}, you can enable {% data variables.product.prodname_secret_scanning_GHAS %} on any repository owned by the organization. You can also define custom patterns to detect additional secrets at the repository, organization, or enterprise level. For more information, see "[About {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)."
{% else %}
You can configure {% data variables.product.prodname_secret_scanning %} to check for secrets issued by many service providers and to notify you when any are detected. También puedes definir patrones personalizados para detectar secretos adicionales a nivel de repositorio, organización o empresa. For more information, see "[About secret scanning](/code-security/secret-scanning/about-secret-scanning)" and "[Secret scanning patterns](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### Secure storage of secrets you use in {% data variables.product.product_name %}
{% endif %}

{% ifversion fpt or ghec %}
Besides your code, you probably need to use secrets in other places. For example, to allow {% data variables.product.prodname_actions %} workflows, {% data variables.product.prodname_dependabot %}, or your {% data variables.product.prodname_codespaces %} development environment to communicate with other systems. Para obtener más información sobre cómo almacenar y utilizar secretos de forma segura, consulta las secciones "[Secretos cifrados en las acciones](/actions/security-guides/encrypted-secrets)", "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)" y "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% endif %}

{% ifversion ghes > 3.2 %}
Además de tu código, probablemente necesitarás utilizar secretos en otros lugares. For example, to allow {% data variables.product.prodname_actions %} workflows or {% data variables.product.prodname_dependabot %} to communicate with other systems. Para obtener más información sobre cómo almacenar y utilizar los secretos de forma segura, consulta las secciones "[Secretos cifrados en las acciones](/actions/security-guides/encrypted-secrets)" y "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".
{% endif %}

## Keep vulnerable coding patterns out of your repository

{% note %}

**Note:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Create a pull request review process

You can improve the quality and security of your code by ensuring that all pull requests are reviewed and tested before they are merged. {% data variables.product.prodname_dotcom %} has many features you can use to control the review and merge process. To get started, see "[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)."

### Scan your code for vulnerable patterns

Insecure code patterns are often difficult for reviewers to spot unaided. In addition to scanning your code for secrets, you can check it for patterns that are associated with security vulnerabilities. For example, a function that isn't memory-safe, or failing to escaping user input that could lead to an injection vulnerability. {% data variables.product.prodname_dotcom %} offers several different ways to approach both how and when you scan your code. To get started, see "[About code scanning](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)."

## Pasos siguientes

- "[Asegurar tu cadena de suministros de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Mejores prácticas para asegurar cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Mejores prácticas para asegurar tu sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"

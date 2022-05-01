---
title: About supply chain security for your enterprise
intro: You can enable features that help your developers understand and update the dependencies their code relies on.
shortTitle: Acerca de la seguridad de la cadena de suministro
permissions: ''
versions:
  ghes: '*'
  ghae: issue-4864
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

You can allow users to identify their projects' dependencies by {% ifversion ghes %}enabling{% elsif ghae %}using{% endif %} the dependency graph for {% data variables.product.product_location %}. Para obtener más información, consulta la sección "{% ifversion ghes %}[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

You can also allow users on {% data variables.product.product_location %} to find and fix vulnerabilities in their code dependencies by enabling {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} and {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can view vulnerability data from the {% data variables.product.prodname_advisory_database %} on {% data variables.product.product_location %} and manually sync the data. Para obtener más información, consulta la sección "[Ver los datos de vulnerabilidad de tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

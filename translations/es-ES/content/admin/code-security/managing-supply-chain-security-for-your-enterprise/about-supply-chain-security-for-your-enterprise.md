---
title: Acerca de la seguridad de la cadena de suministro para tu empresa
intro: Puedes habilitar las características que ayudan a tus desarrolladores a entender y actualizar las dependencias de las cuales depende su código.
shortTitle: Acerca de la seguridad de la cadena de suministro
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si {% ifversion ghes %}habilitas{% elsif ghae %}utilizas{% endif %} la gráfica de dependencias para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "{% ifversion ghes %}[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

También puedes permitir que los usuarios de {% data variables.product.product_location %} encuentren y corrijan las vulnerabilidades en las dependencias de su código si habilitas las {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} y las {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Después de que habilites las {% data variables.product.prodname_dependabot_alerts %}, puedes ver los datos de las vulnerabilidades desde la {% data variables.product.prodname_advisory_database %} en {% data variables.product.product_location %} y sincronizar los datos manualmente. Para obtener más información, consulta la sección "[Ver los datos de vulnerabilidad de tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

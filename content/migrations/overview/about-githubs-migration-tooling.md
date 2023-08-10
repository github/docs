---
title: About GitHub's migration tooling
shortTitle: GitHub's migration tooling
intro: '{% data variables.product.company_short %} provides a variety of different tooling options to support migrations to {% data variables.product.company_short %} and between {% data variables.product.company_short %} products.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
---

{% data reusables.migrations.about-migrations %}

{% data variables.product.company_short %} provides a variety of different tools to support these migrations. Different tools support different migration pathways and provide different levels of migration fidelity.

Some tools, like {% data variables.product.prodname_importer_proper_name %} migrate the current state of your code, all of the code's history, plus your settings and collaboration history, such as issues and pull requests. Other tools migrate only your code and its history, or even the code alone.

To determine the best tool for your migration and learn how to make your migration successful, see "[AUTOTITLE](/migrations/overview/planning-your-migration-to-github)."

---
title: Migrating your enterprise to GitHub Actions
shortTitle: Migrate to Actions
intro: 'Learn how to plan a migration to {% data variables.product.prodname_actions %} for your enterprise from another provider.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## About enterprise migrations to {% data variables.product.prodname_actions %}

To migrate your enterprise to {% data variables.product.prodname_actions %} from an existing system, you can plan the migration, complete the migration, and retire existing systems.

This guide addresses specific considerations for migrations. Para obtener información adicional sobre cómo incluir las {% data variables.product.prodname_actions %} en tu empresa, consulta la sección "[Incluir las {% data variables.product.prodname_actions %} en tu empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

## Planning your migration

Antes de que comiences a migrar tu empresa a {% data variables.product.prodname_actions %}, debes identificar qué flujos de trabajo se migrarán y cómo afectarán dichas migraciones a tus equipos, posteriormente, deberás planear cómo y cuándo completarás las migraciones.

### Leveraging migration specialists

{% data variables.product.company_short %} can help with your migration, and you may also benefit from purchasing {% data variables.product.prodname_professional_services %}. For more information, contact your dedicated representative or {% data variables.contact.contact_enterprise_sales %}.

### Identifying and inventorying migration targets

Before you can migrate to {% data variables.product.prodname_actions %}, you need to have a complete understanding of the workflows being used by your enterprise in your existing system.

First, create an inventory of the existing build and release workflows within your enterprise, gathering information about which workflows are being actively used and need to migrated and which can be left behind.

Next, learn the differences between your current provider and {% data variables.product.prodname_actions %}. This will help you assess any difficulties in migrating each workflow, and where your enterprise might experience differences in features. Para obtener más información, consulta la sección "[Migrarse a las {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions)".

With this information, you'll be able to determine which workflows you can and want to migrate to {% data variables.product.prodname_actions %}.

### Determine team impacts from migrations

When you change the tools being used within your enterprise, you influence how your team works. You'll need to consider how moving a workflow from your existing systems to {% data variables.product.prodname_actions %} will affect your developers' day-to-day work.

Identify any processes, integrations, and third-party tools that will be affected by your migration, and make a plan for any updates you'll need to make.

Consider how the migration may affect your compliance concerns. For example, will your existing credential scanning and security analysis tools work with {% data variables.product.prodname_actions %}, or will you need to use new tools?

Identify the gates and checks in your existing system and verify that you can implement them with {% data variables.product.prodname_actions %}.

### Identifying and validating migration tools

Automated migration tools can translate your enterprise's workflows from the existing system's syntax to the syntax required by {% data variables.product.prodname_actions %}. Identify third-party tooling or contact your dedicated representative or {% data variables.contact.contact_enterprise_sales %} to ask about tools that {% data variables.product.company_short %} can provide.

After you've identified a tool to automate your migrations, validate the tool by running the tool on some test workflows and verifying that the results are as expected.

Automated tooling should be able to migrate the majority of your workflows, but you'll likely need to manually rewrite at least a small percentage. Estimate the amount of manual work you'll need to complete.

### Deciding on a migration approach

Determine the migration approach that will work best for your enterprise. Smaller teams may be able to migrate all their workflows at once, with a "rip-and-replace" approach. For larger enterprises, an iterative approach may be more realistic. You can choose to have a central body manage the entire migration or you can ask individual teams to self serve by migrating their own workflows.

We recommend an iterative approach that combines active management with self service. Start with a small group of early adopters that can act as your internal champions. Identifica un puñado de flujos de trabajo que sean suficientemente completos como para representar la amplitud de tu negocio. Trabaja con quienes primero adoptan esto para migrar esos flujos de trabajo a {% data variables.product.prodname_actions %}, iterando conforme sea necesario. Esto les dará a los otros equipos la confianza de que sus flujos de trabajo también pueden migrarse.

Posteriormente, haz que {% data variables.product.prodname_actions %} esté disponible para tu organización extendida. Proporciona recursos para ayudar a que estos equipos migren sus propios flujos de trabajo a {% data variables.product.prodname_actions %} e informa a los equipos cuando los sistemas existentes vayan a retirarse.

Finalmente, informa a todos los equipos que aún utilicen tus sistemas anteriores que deben completar sus migraciones en cierto tiempo. Puedes apuntar a los éxitos de otros equipos para asegurarles que la migración es posible y deseable.

### Definir tu itinerario de migración

Después de que decides tomar un enfoque de migración, crea un itinerario que defina cuándo cada uno de tus equipos migrarán sus flujos de trabajo a {% data variables.product.prodname_actions %}.

Primero, decide la fecha en la que te gustaría completar tu migración. Por ejemplo, puedes planear completar tu migración en el momento en el que finalice tu contrato con tu proveedor actual.

Entonces, trabaja con tus equipos para crear un itinerario que cumpla con tu fecha límite sin sacrificar sus metas de equipo. Fíjate en la cadencia de tu negocio y en la carga de trabajo de cada equipo individual al que le pides migrarse. Coordínate con cada equipo para entender sus itinerarios de entrega y crea un plan que les permita migrar sus flujos de trabajo en un momento en el que no vaya a impactar su capacidad de entrega.

## Migrarse a {% data variables.product.prodname_actions %}

Cuando estés listo para iniciar tu migración, traduce tus flujos existentes a {% data variables.product.prodname_actions %} utilizando las herramientas automatizadas y reescritura manual que ya planeaste para lo anterior.

También podrías querer mantener artefactos de compilaciones anteriores de tu sistema existente, probablemente escribiendo un proceso con script para archivar los artefactos.

## Retirar los sistemas existentes

Después de que se complete tu migración, puedes pensar en retirar tu sistema existente.

You may want to run both systems side-by-side for some period of time, while you verify that your {% data variables.product.prodname_actions %} configuration is stable, with no degradation of experience for developers.

Eventually, decommission and shut off the old systems, and ensure that no one within your enterprise can turn the old systems back on.

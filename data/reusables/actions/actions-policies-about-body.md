## About Actions policies

Actions policies let you govern how {% data variables.product.prodname_actions %} workflows run across your organizations and repositories. You configure Actions policies in a new **Policies** section of your {% data variables.product.prodname_actions %} settings, separate from your existing **General** settings.

Actions policies are available at the enterprise, organization, and repository levels.

Actions policies currently contain one type of policy: workflow execution protections. {% data variables.product.github %} plans to add more policies over time.

## About workflow execution protections

Workflow execution protections let you define an allow list that controls who can trigger {% data variables.product.prodname_actions %} workflows and which events are permitted to run them. Workflow execution protections come with two rule types: event and actor. {% data variables.product.github %} plans to add more rules over time.

Workflow execution protections are built on the {% data variables.product.github %} rulesets framework, so the targeting you already know from rulesets works here too. You can apply protections with rulesets and scope them to specific repositories using repository custom properties. For more information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

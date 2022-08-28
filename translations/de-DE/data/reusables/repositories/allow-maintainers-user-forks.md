1. On user-owned forks, if you want to allow anyone with push access to the upstream repository to make changes to your pull request, select **Allow edits from maintainers**.

    {% warning %}

    **Warning:** If your fork contains {% data variables.product.prodname_actions %} workflows, the option is  **Allow edits and access to secrets by maintainers**. Allowing edits on a fork's branch that contains {% data variables.product.prodname_actions %} workflows also allows a maintainer to edit the forked repository's workflows, which can potentially reveal values of secrets and grant access to other branches.

    {% endwarning %}

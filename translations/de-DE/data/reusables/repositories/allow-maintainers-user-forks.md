1. Wenn Du auf benutzereigenen Forks niemandem mit Push-Zugriff auf das vorgelagerte Repository erlauben möchtest, Änderungen an Deinem Pull Request vorzunehmen, deaktiviere die Option **Allow edits from maintainers** (Änderungen von Betreuern zulassen).

    {% warning %}

    **Warning:** If your fork contains {% data variables.product.prodname_actions %} workflows, the option is  **Allow edits and access to secrets by maintainers**. Allowing edits on a fork's branch that contains {% data variables.product.prodname_actions %} workflows also allows a maintainer to edit the forked repository's workflows, which can potentially reveal values of secrets and grant access to other branches.

    {% endwarning %}

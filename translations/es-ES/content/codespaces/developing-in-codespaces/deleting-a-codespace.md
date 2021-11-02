---
title: Borrar un codespace
intro: Puedes borrar un codespace que ya no necesites.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

 

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Nota:** Solo la persona que creó un codespace podrá borrarlo. Actualmente no hay forma de que los propietarios de las organizaciones borren los codespaces que se crearon dentro de su organización.

{% endnote %}

{% include tool-switcher %}

{% webui %}

1. Navegar a la página de "Tus Codespaces" en [github.com/codespaces](https://github.com/codespaces).

2. A la derecha del codespace que quieres borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Borrar {% octicon "trash" aria-label="The trash icon" %}**

   ![Botón de borrar](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `-f` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

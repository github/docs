## Linking to an existing codespace

You can create links to your existing codespaces. This is useful if you have a long-lived codespace that you return to frequently. You can save the link in a location of your choice, as an alternative to using the link on https://github.com/codespaces.

{% note %}

**Note**: You can only open your own codespaces. If someone clicks a link to one of your codespaces they will see a 404 error message.

{% endnote %}

Create a link using one of the following URL patterns. In these URLs `CODESPACE-NAME` represents the unique name of the codespace, such as `monalisa-project-x-codespace-956j5pp5pjpc79wx`, not the codespace's display name. You can find the name of a codespace by copying the link to the codespace on your https://github.com/codespaces page and extracting the codespace name from the URL.

| **Link opens in** | **Link syntax** |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} web client |  `https://CODESPACE-NAME.github.dev` |
| {% data variables.product.prodname_vscode_shortname %} web client with a specified workspace |  `https://CODESPACE-NAME.github.dev?folder=/workspaces/PATH/TO/WORKSPACE/DIRECTORY` |
| {% data variables.product.prodname_vscode_shortname %} desktop application |  `https://github.com/codespaces/CODESPACE-NAME?editor=vscode` |
| JetBrains Gateway |  `https://github.com/codespaces/CODESPACE-NAME?editor=jetbrains` |
| JupyterLab |  `https://github.com/codespaces/CODESPACE-NAME?editor=jupyter` |

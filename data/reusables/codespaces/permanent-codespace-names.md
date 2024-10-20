You will occasionally need to know the permanent name of a codespace. For example, when you use some {% data variables.product.prodname_cli %} commands, or when you discuss a particular codespace with {% data variables.product.prodname_dotcom %} support.

To find the permanent name of a codespace, do one of the following:

* Open the codespace in the browser. The subdomain of the URL is the name of the codespace. For example: `https://obscure-space-engine-grx7rgg6qp43v9j5.github.dev` is the URL for the `obscure-space-engine-grx7rgg6qp43v9j5` codespace.
* If you cannot open a codespace, you can access the name from your list of codespaces at https://github.com/codespaces. Right-click the display name of the codespace and select your browser's option for copying the link address. The final part of the URL you copy is the permanent name of the codespace.
* In a codespace, use this command in the terminal: `echo $CODESPACE_NAME`.
* If {% data variables.product.prodname_cli %} is installed, either locally or in a codespace, use this command in the terminal to list all of your codespaces: `gh codespace list`.

The permanent name the codespace is also included in many of the log files. For example, in the {% data variables.product.prodname_github_codespaces %} extension log, after `fetching codespace` or `Connecting to codespace`, and in the browser console log after `clientUrl`. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)."

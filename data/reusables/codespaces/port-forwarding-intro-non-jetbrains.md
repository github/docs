When an application running inside a codespace prints output to the terminal that contains a localhost URL, such as `http://localhost:PORT` or `http://127.0.0.1:PORT`, the port is automatically forwarded. If you're using {% data variables.product.prodname_github_codespaces %} in the browser or in {% data variables.product.prodname_vscode %}, the URL string in the terminal is converted into a link that you can click to view the web page on your local machine. By default, {% data variables.product.prodname_github_codespaces %} forwards ports using HTTP.

You can edit the dev container configuration for the repository to automatically forward one or more ports. You can also forward a port manually, label forwarded ports, share forwarded ports with members of your organization, share forwarded ports publicly, and add forwarded ports to the codespace configuration.

{% note %}

**Note**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Forwarding a port

You can manually forward a port that wasn't forwarded automatically.

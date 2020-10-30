{% warning %}

**New release:**  {% data variables.product.prodname_actions %} is now available in a new limited public beta. This version offers a new workflow configuration and built-in continuous integration and continuous deployment capabilities. We strongly recommend you avoid using it for high-value workflows and content during this public beta period. To request to join the limited public beta, see the [GitHub Actions page](https://github.com/features/actions). For more information, see "[About GitHub Actions](/articles/about-github-actions)".

GitHub Support will only provide support for the YAML syntax and no longer provides support for the HCL syntax.

Wenn Sie an der öffentlichen Beta-Version mit eingeschränkten Funktionen teilgenommen und Workflows mit der HCL-Syntax in {% data variables.product.prodname_actions %} erstellt haben, müssen Sie ein Upgrade auf die neue öffentliche Beta-Version mit eingeschränkten Funktionen durchführen, in der die YAML-Syntax verwendet wird. Wenn Ihr Repository für ein Upgrade geeignet ist, wird eine Einladung im Repository angezeigt. Sie müssen die Einladung annehmen, bevor Sie die neue öffentliche Beta-Version mit eingeschränkten Funktionen nutzen können.

Once you've upgraded, any workflows that you created with the HCL syntax will need to be updated to the new YAML syntax. To automatically convert your workflows, see "[Migrating {% data variables.product.prodname_actions %} from HCL syntax to YAML syntax](/articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax)".

{% endwarning %}

{% warning %}

**New release:**  {% data variables.product.prodname_actions %} is now available in a new limited public beta. This version offers a new workflow configuration and built-in continuous integration and continuous deployment capabilities. We strongly recommend you avoid using it for high-value workflows and content during this public beta period. To request to join the limited public beta, see the [GitHub Actions page](https://github.com/features/actions). For more information, see "[About GitHub Actions](/articles/about-github-actions)".

GitHub Support will only provide support for the YAML syntax and no longer provides support for the HCL syntax.

If you participated in the limited public beta and created workflows with the HCL syntax {% data variables.product.prodname_actions %}, you will need to upgrade to the new limited public beta that uses YAML syntax. When your repository is eligible to upgrade, you'll see an invitation in your repository. You must accept the invitation before you can use the new limited public beta.

Once you've upgraded, any workflows that you created with the HCL syntax will need to be updated to the new YAML syntax. To automatically convert your workflows, see "[Migrating {% data variables.product.prodname_actions %} from HCL syntax to YAML syntax](/articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax)".

{% endwarning %}

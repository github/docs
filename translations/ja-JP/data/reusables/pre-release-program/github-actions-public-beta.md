{% warning %}

**New release:**  {% data variables.product.prodname_actions %} is now available in a new limited public beta. This version offers a new workflow configuration and built-in continuous integration and continuous deployment capabilities. We strongly recommend you avoid using it for high-value workflows and content during this public beta period. To request to join the limited public beta, see the [GitHub Actions page](https://github.com/features/actions). For more information, see "[About GitHub Actions](/articles/about-github-actions)".

GitHub Support will only provide support for the YAML syntax and no longer provides support for the HCL syntax.

限定パブリックベータに参加しており、HCL構文の{% data variables.product.prodname_actions %}でワークフローを作成していた場合、YAML構文を使う新しい限定パブリックベータにアップグレードする必要があります。 リポジトリがアップグレードできるようになると、リポジトリ内で招待を受けます。 その招待を受けると、新しい限定パブリックベータが利用できるようになります。

Once you've upgraded, any workflows that you created with the HCL syntax will need to be updated to the new YAML syntax. To automatically convert your workflows, see "[Migrating {% data variables.product.prodname_actions %} from HCL syntax to YAML syntax](/articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax)".

{% endwarning %}

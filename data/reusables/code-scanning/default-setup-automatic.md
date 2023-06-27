{% ifversion code-scanning-default-setup-automatic-311 %}

If the code in a repository changes to include {% ifversion code-scanning-default-setup-go %}Go, {% endif %}JavaScript/TypeScript, Python, or Ruby, {% data variables.product.prodname_dotcom %} will automatically update the {% data variables.product.prodname_code_scanning %} configuration to include the new language. If {% data variables.product.prodname_code_scanning %} fails with the new configuration, {% data variables.product.prodname_dotcom %} will resume the previous configuration automatically so that the repository does not lose {% data variables.product.prodname_code_scanning %} coverage.

{% endif %}
1. Enter the details for your new custom pattern. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. In the "Pattern name" field, type a name for your pattern.
   1. In the "Secret format" field, type a regular expression for the format of your secret pattern.{% ifversion secret-scanning-custom-pattern-ai-generated %} Alternatively, you can use the generator to generate a regular expression for you. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/generating-regular-expressions-for-custom-patterns-with-ai)."{% endif %}
   1. You can click **More options {% octicon "chevron-down" aria-label="down" %}** to provide other surrounding content or additional match requirements for the secret format.
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![Screenshot of a filled custom {% data variables.product.prodname_secret_scanning %} pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)

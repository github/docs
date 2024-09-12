1. In the "Pattern name" field, type a name for your pattern.
1. On the top right, click **Generate with AI**.

   {% note %}

   **Note:** You can enter a regular expression manually instead of using the generator, by typing a regular expression for the format of your secret pattern in the "Secret format" field. For more information, see "[Defining a custom pattern for a repository](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)" or "[Defining a custom pattern for an organization](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."

   {% endnote %}

1. In the sliding panel that is displayed:
   * Complete the "I want a regular expression that" field, describing, ideally in plain English, what patterns you want your regular expression to capture. You can use other natural languages, but the performance may not be as good as with English.
   * Complete the "Examples of what I'm looking for" field, giving an example of a pattern you want to scan for.
   * Click **Generate suggestions**.
   * Optionally, click on a suggestion to view a description of the regular expression.
   * Click **Use results** in the Results section that appears, for the result you want to use.

     ![Screenshot of a filled custom {% data variables.product.prodname_secret_scanning %} pattern form for the generator to use.](/assets/images/help/repository/secret-scanning-use-regular-expression-generator.png)

1. You can click **More options {% octicon "chevron-down" aria-label="down" %}** to provide other surrounding content or additional match requirements for the secret format. {% data variables.product.prodname_dotcom %} will add the examples you typed in the sliding panel to the **Test string** field.

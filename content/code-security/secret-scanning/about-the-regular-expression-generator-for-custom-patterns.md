---
title: About custom patterns with GitHub Copilot Secret Scanning
shortTitle: About custom patterns with AI
intro: 'You can define your own custom patterns with AI.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  feature: secret-scanning-custom-pattern-ai-generated
  fpt: '*'
type: rai
topics:
  - Advanced Security
  - Secret scanning
  - AI
---

<!--Note on the versioning above ^. This article is visible to free, pro, team users for transparency. They cannot use the feature so `fpt` is not included in the feature definition.-->

## About custom patterns with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data variables.product.prodname_secret_scanning_caps %} scans repositories for a predefined set of secrets from our partner program, as well as custom patterns that are user-defined. Custom patterns are formatted as regular expressions.

Regular expressions can be challenging for people to write. {% data variables.secret-scanning.copilot-secret-scanning %} helps you to define your custom patterns without knowledge of regular expressions. Within the existing custom pattern page, you can launch a generative AI experience where you input a text description of what pattern you would like to detect, include optional example strings that should be detected, and get matching regular expressions in return.

### Input processing

Users input a text description of what they would like to detect, and optional example strings that should be detected.

### Response generation and output formatting

{% data variables.secret-scanning.copilot-secret-scanning %} uses GPT-3.5-Turbo and the {% data variables.product.prodname_copilot %} API to generate regular expressions that match your input.

The model returns up to three regular expressions for you to review. You can click on the regular expression to get an AI-generated plain language description of the regular expression.

Some results may be quite similar, and some results may not find every instance of the secret that the pattern is intended to detect. It is also possible that the model may produce results which are invalid or inappropriate.

When you click **Use result** on a regular expression, the expression and any examples inputted will be copied over to the main custom pattern form. There, you can perform a dry run of the pattern to see how it performs across your repository or organization.{% ifversion secret-scanning-custom-pattern-ai-generated %} For more information on how to define a custom pattern for your repository or organization, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}

## Improving performance for {% data variables.secret-scanning.copilot-secret-scanning %} when defining custom patterns

To enhance performance and address some of the limitations of defining custom patterns with {% data variables.secret-scanning.copilot-secret-scanning %}, there are various measures that you can adopt. For more information on the limitations, see "[Limitations of defining custom patterns with {% data variables.secret-scanning.copilot-secret-scanning %}](#limitations-of-defining-custom-patterns-with-copilot-secret-scanning)."

### Use {% data variables.secret-scanning.copilot-secret-scanning %} as a tool, not a replacement

While you can use {% data variables.secret-scanning.copilot-secret-scanning %} to help you create custom patterns without you having to write regular expressions yourself, it is important to use it as a tool rather than a replacement for manual input. You should carefully validate the performance of the results by performing a dry run across your organization or repository. It's a good idea to run the pattern on a repository (or repositories) that are representative of the repositories in your organization. In some cases, it may be beneficial to modify a generated regular expression to more fully meet your needs. You remain ultimately responsible for any custom patterns you decide to use.

## Limitations of defining custom patterns with {% data variables.secret-scanning.copilot-secret-scanning %}

Depending on factors such as your input description and examples, you may experience different levels of performance when using {% data variables.secret-scanning.copilot-secret-scanning %} to define custom patterns. You need to be as specific as possible with your description, and provide different types of examples of tokens that match your pattern, to be sure that the regular expression encompasses all the patterns you want {% data variables.product.prodname_secret_scanning %} to search for.

Also, the model used by {% data variables.secret-scanning.copilot-secret-scanning %} has been trained on natural language content written predominantly in English. As a result, you may notice differing performance when providing the model with natural language input prompts in languages other than English.

Note that {% data variables.secret-scanning.copilot-secret-scanning %} is only suitable for generating regular expressions to detect structured patterns.

{% ifversion secret-scanning-custom-pattern-ai-generated %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/generating-regular-expressions-for-custom-patterns-with-ai)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
{% endif %}

## Further reading

{% ifversion fpt %}
* [AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
{% endif %}

{% ifversion secret-scanning-custom-pattern-ai-generated %}
* [AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)
{% endif %}

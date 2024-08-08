---
title: About generating regular expressions with AI
shortTitle: Generate regular expressions with AI
intro: 'You can define your own custom patterns to extend the capabilities of {% data variables.product.prodname_secret_scanning %} by generating one or more regular expressions for each pattern, using the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  feature: secret-scanning-custom-pattern-ai-generated
  fpt: '*'
type: rai
topics:
  - Advanced Security
  - Secret scanning
  - AI
redirect_from:
  - /code-security/secret-scanning/about-the-regular-expression-generator-for-custom-patterns
  - /code-security/secret-scanning/about-generating-regular-expressions-with-ai
---

<!--Note on the versioning above ^. This article is visible to free, pro, team users for transparency. They cannot use the feature so `fpt` is not included in the feature definition.-->

## About generating regular expressions with AI

{% data variables.product.prodname_secret_scanning_caps %} scans repositories for a predefined set of secrets from our partner program, as well as custom patterns that are user-defined. Custom patterns are formatted as regular expressions.

Regular expressions can be challenging for people to write. The {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} makes it possible for you to define your custom patterns without knowledge of regular expressions. Within the existing custom pattern page, you can launch a generative AI experience where you input a text description of what pattern you would like to detect, include optional example strings that should be detected, and get matching regular expressions in return.

### Input processing

Users input a text description of what they would like to detect, and optional example strings that should be detected.

### Response generation and output formatting

The {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} uses GPT-3.5-Turbo and the {% data variables.product.prodname_copilot %} API to generate regular expressions that match your input.

The model returns up to three regular expressions for you to review. You can click on the regular expression to get an AI-generated plain language description of the regular expression.

Some results may be quite similar, and some results may not find every instance of the secret that the pattern is intended to detect. It is also possible that the regular expression generator may produce results which are invalid or inappropriate.

When you click **Use result** on a regular expression, the expression and any examples inputted will be copied over to the main custom pattern form. There, you can perform a dry run of the pattern to see how it performs across your repository or organization.{% ifversion secret-scanning-custom-pattern-ai-generated %} For more information on how to define a custom pattern for your repository or organization, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)." {% endif %}

## Improving performance when generating regular expressions with AI

To enhance performance and address some of the limitations of the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}, there are various measures that you can adopt. For more information on the limitations of the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}, see "[Limitations of generating regular expressions with AI](#limitations-of-generating-regular-expressions-with-ai)."

### Use the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} as a tool, not a replacement

While the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} is a powerful tool to create custom patterns without you having to write regular expressions yourself, it is important to use it as a tool rather than a replacement for manual input. You should carefully validate the performance of the results by performing a dry run across your organization or repository. It's a good idea to run the pattern on a repository (or repositories) that are representative of the repositories in your organization. In some cases, it may be beneficial to modify a generated regular expression to more fully meet your needs. You remain ultimately responsible for any custom patterns you decide to use.

## Limitations of generating regular expressions with AI

Depending on factors such as your input description and examples, you may experience different levels of performance when using the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}. You need to be as specific as possible with your description, and provide different types of examples of tokens that match your pattern, to be sure that the regular expression encompasses all the patterns you want {% data variables.product.prodname_secret_scanning %} to search for.

Also, the model used by the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} has been trained on natural language content written predominantly in English. As a result, you may notice differing performance when providing the generator with natural language input prompts in languages other than English.

Note that the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} is only suitable for creating regular expressions to detect structured patterns.

{% ifversion secret-scanning-custom-pattern-ai-generated %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/generating-regular-expressions-for-custom-patterns-with-ai)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
{% endif %}

## Further reading

{% ifversion fpt %}
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
{% endif %}

{% ifversion secret-scanning-custom-pattern-ai-generated %}
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
{% endif %}

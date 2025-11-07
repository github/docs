---
title: GitHub Copilot code referencing
shortTitle: Code referencing
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot %} checks suggestions for matches with publicly available code. Any matches are discarded or suggested with a code reference.'
defaultTool: vscode
topics:
  - Copilot
versions:
  feature: copilot
contentType: concepts
category: 
  - Learn about Copilot
---

{% jetbrains %}

## About {% data variables.product.prodname_copilot_short %} code referencing in JetBrains IDEs

{% data reusables.copilot.about-code-referencing %}

### Code referencing for {% data variables.product.prodname_copilot_short %} code completion

{% data reusables.copilot.code-referencing-note %}

### Code referencing for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.code-referencing-in-chat %}

{% endjetbrains %}

{% vscode %}

## About {% data variables.product.prodname_copilot_short %} code referencing in {% data variables.product.prodname_vscode %}

{% data reusables.copilot.about-code-referencing %}

### Code referencing for {% data variables.product.prodname_copilot_short %} code completion

{% data reusables.copilot.code-referencing-note %}

### Code referencing for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.code-referencing-in-chat %}

{% endvscode %}

{% webui %}

## About {% data variables.product.prodname_copilot_short %} code referencing on {% data variables.product.prodname_dotcom_the_website %}

If you, or your organization, have allowed suggestions that match public code, then whenever a response from {% data variables.copilot.copilot_chat_short %} includes matching code, details of the matches will be included in the response.

> [!NOTE]
> Typically, matches to public code occur infrequently, so you should not expect to see code references in many {% data variables.copilot.copilot_chat_short %} responses.

{% endwebui %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot_short %} code referencing in {% data variables.product.prodname_vs %}

{% data reusables.copilot.about-code-referencing %}

### Code referencing for {% data variables.product.prodname_copilot_short %} code completion

{% data reusables.copilot.code-referencing-note %}

### Code referencing for {% data variables.copilot.copilot_chat_short %}

When {% data variables.copilot.copilot_chat_short %} provides a response that includes code that matches code in a public {% data variables.product.github %} repository, this is indicated below the suggested code, with a link to display details of the matched code in the output log.

{% endvisualstudio %}

## How code referencing finds matching code

{% data variables.product.prodname_copilot_short %} code referencing compares potential code suggestions and the surrounding code of about 150 characters against an index of all public repositories on {% data variables.product.prodname_dotcom_the_website %}.

Code in private {% data variables.product.prodname_dotcom %} repositories, or code outside of {% data variables.product.prodname_dotcom %}, is not included in the search process.

## Limitations

The search index is refreshed every few months. As a result, newly committed code, and code from public repositories deleted before the index was created, may not be included in the search. For the same reason, the search may return matches to code that has been deleted or moved since the index was created.

References to matching code are currently available in JetBrains IDEs, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode %}, and on the {% data variables.product.github %} website.

## Further reading

* [AUTOTITLE](/copilot/how-tos/completions/finding-public-code-that-matches-github-copilot-suggestions)
* [AUTOTITLE](/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber)
* [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization)

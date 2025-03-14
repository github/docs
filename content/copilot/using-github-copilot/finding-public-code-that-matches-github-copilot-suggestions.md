---
title: Finding public code that matches GitHub Copilot suggestions
shortTitle: Find matching code
intro: 'If you allow {% data variables.product.prodname_copilot %} to make suggestions that match publicly available code, {% data variables.product.prodname_copilot_short %} will display references to any matching code that is found.'
defaultTool: vscode
redirect_from:
  - /early-access/copilot/code-referencing-in-github-copilot
topics:
  - Copilot
versions:
  feature: copilot
---


{% jetbrains %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in JetBrains IDEs. For {% data variables.product.prodname_copilot_short %} on other platforms, click the appropriate tab above.

{% endjetbrains %}

{% vscode %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %}. For {% data variables.product.prodname_copilot_short %} on other platforms, click the appropriate tab above.

{% endvscode %}

{% webui %}

This version of this article is for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For {% data variables.product.prodname_copilot_short %} on other platforms, click the appropriate tab above.

{% endwebui %}

## Limitations

References to matching code are currently only available in JetBrains IDEs, {% data variables.product.prodname_vscode %}, and on the {% data variables.product.github %} website.

## Prerequisites

References to matching code are only generated if {% data variables.product.prodname_copilot_short %} is configured to allow suggestions that match publicly available code. This is configured in either your personal{% ifversion ghec %},{% else %} or {% endif %} organization{% ifversion ghec %} or enterprise{% endif %} settings. For more information, see [AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code){% ifversion ghec %},{% else %} or {% endif %} [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching){% ifversion ghec %} or [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

## About code referencing in {% data variables.product.prodname_copilot %}

{% jetbrains %}

{% data reusables.copilot.about-code-referencing %}

{% endjetbrains %}

{% vscode %}

{% data reusables.copilot.about-code-referencing %}

{% endvscode %}

{% webui %}

If you've allowed suggestions that match public code, then whenever a response from {% data variables.product.prodname_copilot_chat_short %} includes matching code, details of the matches will be included in the response.

{% endwebui %}

This feature is called code referencing.

{% jetbrains %}

### Code referencing for {% data variables.product.prodname_copilot_short %} code completion

When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to the JetBrains log. The log entry includes the URLs of files containing matching code, and the name of the license that applies to that code, if any was found. This allows you to review these references and decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

{% data reusables.copilot.code-referencing-note %}

### Code referencing for {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.code-referencing-in-chat %}

{% endjetbrains %}

{% webui %}

> [!NOTE]
> Typically, matches to public code occur infrequently, so you should not expect to see code references in many {% data variables.product.prodname_copilot_chat_short %} responses.

{% endwebui %}

{% vscode %}

### Code referencing for {% data variables.product.prodname_copilot_short %} code completion

When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to a {% data variables.product.prodname_copilot %} log. The log entry includes a link to a page on {% data variables.product.prodname_dotcom_the_website %} where you can view references to similar code in public {% data variables.product.prodname_dotcom %} repositories.

The linked web page includes details of any license identified for the repository where the matching code was found. Having reviewed the references, you can decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

{% data reusables.copilot.code-referencing-note %}

### Code referencing for {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.code-referencing-in-chat %}

{% endvscode %}

### How code referencing finds matching code

{% data variables.product.prodname_copilot_short %} code referencing searches for matches by taking the code suggestion, plus some of the code that will surround the suggestion if it is accepted, and comparing it against an index of all public repositories on {% data variables.product.prodname_dotcom_the_website %}. Code in private {% data variables.product.prodname_dotcom %} repositories, or code outside of {% data variables.product.prodname_dotcom %}, is not included in the search process. The search index is refreshed every few months. As a result, newly committed code, and code from public repositories deleted before the index was created, may not be included in the search. For the same reason, the search may return matches to code that has been deleted or moved since the index was created.

{% jetbrains %}

## View code references for code completion

You can view code references in the log file for your JetBrains IDE.

1. In your JetBrains IDE, select **Help** > **Show Log in Finder/Explorer**.

   The log file is displayed in your file manager. For example, for IntelliJ IDEA the log file is called `idea.log`.

1. Open the log file in your JetBrains IDE.
1. Search for "[Public Code References]."

### Example log entry

```text
2025-02-26 09:22:12,045 [5581906] INFO - #copilot - [Public Code References] Text found matching public code in file:///Users/mona-lisa/git-repos/test-repo/fizzbuzz.js [Ln 1, Col 10] near fizzBuzz() ...:
  1) [NOASSERTION] https://github.com/nixsticks/todos/blob/ae427a721c7784da64a619ba17f60637fe1cc819/Loops/fizzbuzz/fizzbuzz.js
  2) [GPL-3.0] https://github.com/voloslg/algocasts/blob/34b423517486f908ca167b390d3b8bd05653829f/exercises/fizzbuzz/index.js
```

The log entry includes the following details:

* The date and time you accepted the suggestion.
* A "Public Code References" message telling you that matching code was found.
* The path to the file in which the suggestion was added.
* The line and column number where the suggestion was added.
* A list of matches, including:
  * The license type for the matching code—or `NOASSERTION` if no license was found.
  * The URL of the file on {% data variables.product.prodname_dotcom_the_website %} where the matching code was found.

### Verifying the code referencing functionality

You can verify that code referencing is working by prompting {% data variables.product.prodname_copilot_short %} to add some commonly used code and checking the output in the log file for your IDE.

1. Display the log file for your JetBrains IDE, as described in the previous section.
1. Create a file called `fizz-buzz.js` and open it in the JetBrains editor.
1. In the editor, type:

   ```javascript
   function fizzBuzz()
   ```

   With a space after the closing parenthesis.

   {% data variables.product.prodname_copilot %} should suggest code to complete the function. Typically the suggestion will be a common implementation of the fizz buzz algorithm that will match publicly available code on the {% data variables.product.github %} website.

1. Accept the suggestion by pressing <kbd>Tab</kbd>.
1. Check whether a "[Public Code References]" entry has been added to the log file.

{% endjetbrains %}

{% vscode %}

## View code references for code completion

You can access code references from one of the {% data variables.product.prodname_copilot %} logs in {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode %}, open the **Output** window by selecting **View** > **Output** from the menu bar.
1. In the dropdown menu at the right of the **Output** window, select **{% data variables.product.prodname_copilot %} Log**.

   ![Screenshot of the Output window with "{% data variables.product.prodname_copilot %} Log" selected from the dropdown menu.](/assets/images/help/copilot/copilot-log-selected.png)

1. Leave the **{% data variables.product.prodname_copilot %} Log** view displayed while you use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.

   When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to the log.

   The log entry includes the following details:

   * The date and time you accepted the suggestion.
   * The name of the file in which the suggestion was added.
   * A message telling you that similar code was found, with the number and type of licenses.
   * A link to a page on {% data variables.product.prodname_dotcom_the_website %}.
   * The location in the file where the suggestion was added.
   * A snippet of part of the code that was suggested and added.

   ![Screenshot of the Output window showing a code referencing log entry.](/assets/images/help/copilot/copilot-code-referencing-log.png)

   > [!NOTE] The {% data variables.product.prodname_copilot %} log is flushed when you close the editor.

1. In the log entry, <kbd>Ctrl</kbd>+click (Windows/Linux) or <kbd>Command</kbd>+click (Mac) the link to view the code references on {% data variables.product.prodname_dotcom_the_website %}.

   The page lists the matches that were found, showing an excerpt from the relevant file. You can click on the file name to view the whole file.

   ![Screenshot of code references listed on {% data variables.product.prodname_dotcom_the_website %}.](/assets/images/help/copilot/code-references-webpage.png)

   Matches may be found in multiple repositories with different, sometimes conflicting, licenses. You can use the checkboxes on the left of the page to show only the matches associated with a particular license.

   You should review all license information within a repository to verify that it applies to the matching code, as repositories may contain multiple licenses and these licenses are subject to human and non-human error.

   > [!NOTE] The web page displaying the full set of details will remain available for three months.

### Verifying the code referencing functionality

You can verify that code referencing is working by prompting {% data variables.product.prodname_copilot_short %} to add some commonly used code and checking the output in the {% data variables.product.prodname_copilot_short %} log.

1. In {% data variables.product.prodname_vscode %}, create a file called `fizz-buzz.js`.
1. Open the **Output** window by selecting **View** > **Output** from the menu bar.
1. In the dropdown menu at the right of the **Output** window, select **{% data variables.product.prodname_copilot %} Log**.
1. In the editor, type:

   ```javascript
   function fizzBuzz()
   ```

   With a space after the closing parenthesis.

   {% data variables.product.prodname_copilot %} should suggest code to complete the function. Typically the suggestion will be a common implementation of the fizz buzz algorithm that will match publicly available code on the {% data variables.product.github %} website.

1. Accept the suggestion by pressing <kbd>Tab</kbd>.

   If code referencing finds a match to public code, a log entry is added to the **{% data variables.product.prodname_copilot %} Log** view.

{% endvscode %}

## View code references for {% data variables.product.prodname_copilot_chat_short %}

{% jetbrains %}

{% data reusables.copilot.viewing-code-references-in-chat %}

{% endjetbrains %}

{% vscode %}

{% data reusables.copilot.viewing-code-references-in-chat %}

{% endvscode %}

{% webui %}

When {% data variables.product.prodname_copilot_chat_short %} provides a response that includes code that matches code in a public {% data variables.product.prodname_dotcom %} repository, this is indicated beneath the code suggestion:

> < > Public code references from _n_ repositories

To see details of the matching code:

1. Click the "Public code references..." text, under the code suggestion.

   A list of {% data variables.product.github %} repositories containing matching code is displayed in a dropdown, together with licensing information, if found.

   ![Screenshot of a code completion suggestion in {% data variables.product.prodname_copilot_chat_short %} with a link to view code references.](/assets/images/help/copilot/code-reference-dotcom.png)

1. Click the name of a repository to display that repository on {% data variables.product.prodname_dotcom_the_website %}.

{% endwebui %}

---
title: Finding public code that matches GitHub Copilot suggestions
shortTitle: Find matching code
intro: 'If you allow {% data variables.product.prodname_copilot %} to make suggestions that match publicly available code, you can see references to the matching code on {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /early-access/copilot/code-referencing-in-github-copilot
topics:
  - Copilot
versions:
  feature: copilot
---

> [!NOTE] {% data variables.product.prodname_copilot %} code referencing is in public beta and is subject to change.

## About code referencing in {% data variables.product.prodname_copilot %}

You can opt to allow {% data variables.product.prodname_copilot %} to suggest code completions that match publicly available code on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

If you have allowed suggestions that match public code, {% data variables.product.prodname_copilot %} can provide you with details about the matching code when you accept such suggestions. This feature is called code referencing. It is currently only available in {% data variables.product.prodname_vscode %}.

When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to a {% data variables.product.prodname_copilot %} log. The log entry includes a link to a page on {% data variables.product.prodname_dotcom_the_website %} where you can view references to similar code in public {% data variables.product.prodname_dotcom %} repositories.

The linked web page includes details of any license identified for the repository where the matching code was found. Having reviewed the references, you can decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

> [!NOTE]
> * Code referencing does not currently apply to code completion suggestions that you add to your code using {% data variables.product.prodname_copilot_chat %}.
> * Code referencing currently only looks for matches of accepted {% data variables.product.prodname_copilot_short %} suggestions. Matches to code you have written, or {% data variables.product.prodname_copilot_short %} suggestions you have altered, is not checked for matches to public code.
> * Typically, matches to public code occur in less than one percent of {% data variables.product.prodname_copilot_short %} suggestions, so you should not expect to see code references for many of the suggestions you accept.

### How code referencing finds matching code

{% data variables.product.prodname_copilot_short %} code referencing searches for matches by taking the code suggestion, plus some surrounding code, and comparing it against an index of all public repositories on {% data variables.product.prodname_dotcom_the_website %}. Code in private {% data variables.product.prodname_dotcom %} repositories, or code outside of {% data variables.product.prodname_dotcom %}, is not included in the search process. The search index is refreshed every few months. As a result, newly committed code, and code from public repositories deleted before the index was created, may not be included in the search. For the same reason, the search may return matches to code that has been deleted or moved since the index was created.

## Using code referencing in {% data variables.product.prodname_vscode %}

To use code referencing you must have allowed suggestions matching public code. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

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

   {% data variables.product.prodname_copilot %} should suggest code to complete the function.
1. Accept the suggestion by pressing <kbd>Tab</kbd>.

   If code referencing finds a match to public code, a log entry is added to the **{% data variables.product.prodname_copilot %} Log** view.

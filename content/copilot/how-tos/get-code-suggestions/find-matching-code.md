---
title: Finding public code that matches GitHub Copilot suggestions
shortTitle: Find matching code
intro: 'Learn how to view code references when {% data variables.product.prodname_copilot %} makes suggestions that matches publicly available code.'
defaultTool: vscode
redirect_from:
  - /early-access/copilot/code-referencing-in-github-copilot
  - /copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions
  - /copilot/how-tos/completions/finding-public-code-that-matches-github-copilot-suggestions
  - /copilot/how-tos/completions/find-matching-code
topics:
  - Copilot
versions:
  feature: copilot
contentType: how-tos
category: 
  - Author and optimize with Copilot
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

{% visualstudio %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vs %}. For {% data variables.product.prodname_copilot_short %} on other platforms, click the appropriate tab above.

{% endvisualstudio %}

## Introduction

If you allow {% data variables.product.prodname_copilot %} to make suggestions that match publicly available code, {% data variables.product.prodname_copilot_short %} will display references to any similar code that is found. See [AUTOTITLE](/copilot/concepts/completions/code-referencing).

### Prerequisites

References to matching code are only generated if {% data variables.product.prodname_copilot_short %} is configured to allow suggestions that match publicly available code. This is configured in either your personal{% ifversion ghec %},{% else %} or {% endif %} organization{% ifversion ghec %} or enterprise{% endif %} settings.

For more information, see [AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code){% ifversion ghec %},{% else %} or {% endif %} [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching){% ifversion ghec %} or [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

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
* A "Public Code References" message telling you that similar code was found.
* The path to the file in which the suggestion was added.
* The line and column number where the suggestion was added.
* A list of matches, including:
  * The license type for the matching code—or `NOASSERTION` if no license was found.
  * The URL of the file on {% data variables.product.prodname_dotcom_the_website %} where the matching code was found.

### Verifying the code referencing functionality

{% data reusables.copilot.code-referencing-verifying %}

{% endjetbrains %}

{% vscode %}

## View code references for code completion

You can find code references in one of the {% data variables.product.prodname_copilot %} logs in {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode %}, open the **Output** window by selecting **View** > **Output** from the menu bar.
1. In the dropdown menu at the right of the **Output** window, select **{% data variables.product.prodname_copilot %} Log (Code References)**.
1. Leave the **{% data variables.product.prodname_copilot %} Log (Code References)** view displayed while you use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.

   When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to the log.

   The log entry includes the following details:

   * The date and time you accepted the suggestion.
   * The name of the file in which the suggestion was added.
   * "Similar code at" followed by the location in the file where the suggestion was added.
   * An extract of the code that was added by code completion.
   * The license type for the matching code, if found, otherwise `unknown`.
   * The URL of the file on {% data variables.product.prodname_dotcom_the_website %} where the similar code was found.

### Example log entry

```text
2025-03-27 12:17:54.759 [info] file:///Users/monalisa/fizzbuzz.js Similar code at  [Ln 2, Col 8] let i = 1; i <= 100; i++) {  let output = '';  if (i % 3 === 0) {  output += 'Fizz';...
2025-03-27 12:17:54.759 [info] License: unknown, URL: https://github.com/octo-org/octo-repo/blob/8563f3b1d4f33952b22212b86e745539d1567ed1/examples/fizzBuzz.js
2025-03-27 12:17:54.759 [info] License: MIT, URL: https://github.com/octo-org/monalisa/blob/7e974691f4c8e6bc55f9b50688f05d746d1bc52b/exercises/2/fizz-buzz.js
```

### Verifying the code referencing functionality

{% data reusables.copilot.code-referencing-verifying %}

{% endvscode %}

{% visualstudio %}

## View code references for code completion

You can find code references in the {% data variables.product.prodname_copilot %} log in {% data variables.product.prodname_vs %}.

1. In the menu bar, click **View**.
1. In the dropdown menu, click **Output**.
1. In Output view, click the box to the right of "Show output from" and select **{% data variables.product.prodname_copilot %}**.
1. Leave the log displayed while you use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.

   When you accept a code completion suggestion that matches code in a public {% data variables.product.prodname_dotcom %} repository, an entry is added to the log.

   The log entry includes the following details:

   * The time you accepted the suggestion. Click the "Show Timestamp" clock icon if the time is not displayed.
   * The description `[Completions Public Code Match Information]`.
   * The license type for the matching code, if found, otherwise `NOASSERTION`.
   * The URL of the file on {% data variables.product.prodname_dotcom_the_website %} where the similar code was found.

### Example log entry

```text
09:39:16:203	[Completions Public Code Match Information] Similar code with license type [MIT] https://github.com/octo-org/octo-repo/blob/34deb75eb6a2e22483ed465a6aec38c02eb2536e/routines/quicksort.js
```

### Verifying the code referencing functionality

{% data reusables.copilot.code-referencing-verifying %}

{% endvisualstudio %}

## View code references for {% data variables.copilot.copilot_chat_short %}

{% jetbrains %}

{% data reusables.copilot.viewing-code-references-in-chat %}

{% endjetbrains %}

{% vscode %}

{% data reusables.copilot.viewing-code-references-in-chat %}

{% endvscode %}

{% visualstudio %}

If a response in {% data variables.copilot.copilot_chat_short %} includes matching code, this is below the suggested code by the following text:

> Found similar code in public repos. **View matches**

Click **View matches** to open the {% data variables.product.prodname_copilot %} log, if it is not already open, and add details of the matched code.

The details include:

* The time you added the details to the log. Click the "Show Timestamp" clock icon if the time is not displayed.
* The description `[Code Match]` as the first log entry before the list of matching code.
* The license type—if found—for each instance of similar code.
* The URL of the file on {% data variables.product.prodname_dotcom_the_website %} where the matching code was found.
* A code snippet showing the matching code.

### Logging example

```text
09:24:10:525	[Code Match] Similar code with 2 license type(s) [MIT, NOASSERTION]
09:24:10:525	## License: MIT
09:24:10:525	https://github.com/octo-org/octo-repo/tree/127aac4ab27a42706af01be80f7aae3b83f44fbc/buzzfizz.py
09:24:10:525	```
09:24:10:525	for i in range(1, n + 1):
09:24:10:525	        if i % 3 == 0 and i % 5 == 0:
09:24:10:525	            print('FizzBuzz')
09:24:10:525	        elif i % 3 == 0:
09:24:10:525	            print('Fizz')
09:24:10:525	        elif i % 5 == 0:
09:24:10:525	```
09:24:10:525	## License: NOASSERTION
09:24:10:525	https://github.com/octo-org/monalisa/tree/011308746e53b26b128fa53c044a2527c39231f0/fizz-buzz.py
09:24:10:525	```
09:24:10:525	i % 3 == 0 and i % 5 == 0:
09:24:10:525	            print('FizzBuzz')
09:24:10:525	        elif i % 3 == 0:
09:24:10:525	            print('Fizz')
09:24:10:525	        elif i % 5 == 0:
09:24:10:525	            print('Buzz')
09:24:10:525	        else:
09:24:10:525	            print(i)
09:24:10:525	```
```

{% endvisualstudio %}

{% webui %}

When {% data variables.copilot.copilot_chat_short %} provides a response that includes code that matches code in a public {% data variables.product.prodname_dotcom %} repository, this is indicated beneath the code suggestion:

> < > Public code references from _n_ repositories

To see details of the matching code:

1. Click the "Public code references..." text, under the code suggestion.

   A list of {% data variables.product.github %} repositories containing matching code is displayed in a dropdown, together with licensing information, if found.

   ![Screenshot of a code completion suggestion in {% data variables.copilot.copilot_chat_short %} with a link to view code references.](/assets/images/help/copilot/code-reference-dotcom.png)

1. Click the name of a repository to display that repository on {% data variables.product.prodname_dotcom_the_website %}.

{% endwebui %}

## Further reading

* [AUTOTITLE](/copilot/concepts/completions/code-referencing)

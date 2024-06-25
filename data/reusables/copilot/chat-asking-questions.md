1. To ask a question about the code that's currently visible in the editor, type `#editor` followed by your question.

   For example, you could type `#editor what does this code do?` to ask {% data variables.product.prodname_copilot_chat_short %} for a description of the code's purpose.

   Use the `#editor` command, anywhere in your question, to tell {% data variables.product.prodname_copilot_chat_short %} to focus on the code that's currently visible in the editor.

1. If a single method is visible in full in the editor, you could ask {% data variables.product.prodname_copilot_chat_short %} to generate a unit test for the method by typing `Write a unit test for the method in the #editor`.

   Alternatively, select the code you want to generate a unit test for, then ask {% data variables.product.prodname_copilot_short %}: `#selection write a unit test for this code`.

   The `#selection` command ensure that {% data variables.product.prodname_copilot_short %} focuses on the selected code when responding to a question.

1. To fix a bug in some code, select the code in the editor, then ask {% data variables.product.prodname_copilot_short %}: `#selection fix the bug in this code`.

1. To focus {% data variables.product.prodname_copilot_short %} on one or more specific files when you ask a question, use the `#file` command.
   1. In the {% data variables.product.prodname_copilot_chat_short %} window, type `#file` and press <kbd>Enter</kbd>. This opens the Quick Open palette at the top of the editor.
   1. Select from the list of recently opened files, or search for the file you want to focus on and select it.
   1. Type your question. For example, `#file:app.js What does this file do?`.

   You can use the `#file` command multiple times in your question to focus {% data variables.product.prodname_copilot_short %} on more than one file.

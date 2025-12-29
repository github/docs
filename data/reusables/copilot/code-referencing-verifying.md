You can verify that code referencing is working by prompting {% data variables.product.prodname_copilot_short %} to add some commonly used code and checking the output in the log.

1. Create a file called `fizz-buzz.js` and open it in the editor.
1. Display the log as described in the previous section.
1. In the editor, type:

   ```javascript
   function fizzBuzz()
   ```

   With a space after the closing parenthesis.

   {% data variables.product.prodname_copilot %} should suggest code to complete the function. Typically the suggestion will be a common implementation of the fizz buzz algorithm that will match publicly available code on the {% data variables.product.github %} website.

1. To accept the suggestion, press <kbd>Tab</kbd>.
1. Check whether any entries for similar code have been added to the log.

---
title: Your first custom instructions
intro: 'Create and test your first custom instruction with this simple example.'
versions:
  feature: copilot
category:
  - Custom instructions
  - Getting started
  - Configure Copilot
complexity:
  - Simple
octicon: book
topics:
  - Copilot
---

{% data reusables.copilot.customization-examples-note %}

## About customizations

You can customize {% data variables.product.prodname_copilot %}'s responses using two types of files:

* **Custom instructions** provide ongoing guidance for how {% data variables.product.prodname_copilot %} should behave across all your interactions.
* **Prompt files (public preview)** define reusable prompts for specific tasks that you can invoke when needed. {% data reusables.copilot.prompt-files-available-in-editors %} For an introductory example, see [AUTOTITLE](/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file).

While custom instructions help to add context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Repository custom instructions are the most commonly used and supported, but you can also define personal and organization custom instructions, only for {% data variables.copilot.copilot_chat_dotcom %}. {% data reusables.copilot.repository-custom-instructions-types %}

## Your first instructions

Start with these core custom instructions that helps {% data variables.product.prodname_copilot %} understand your coding preferences.

### Instructions on writing functions

```markdown copy
When writing functions, always:
- Add descriptive JSDoc comments
- Include input validation
- Use early returns for error conditions
- Add meaningful variable names
- Include at least one example usage in comments
```

These instructions will change how {% data variables.product.prodname_copilot %} generates functions.

## Test it out

To quickly test out the difference that custom instructions can make, you can use personal custom instructions in {% data variables.copilot.copilot_chat_short %}'s immersive view.

1. First, go to [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=trial&ref_style=text) and enter this prompt:

    `Create a JavaScript function that calculates the area of a circle`

    **Without custom instructions**, you might get:

    ```javascript
    function areaOfCircle(radius) {
        if (typeof radius !== 'number' || radius < 0) {
            throw new Error('Radius must be a non-negative number');
        }
        return Math.PI * radius * radius;
    }
    ```

1. Now access your personal custom instructions by clicking on your profile picture in the bottom left of the page, then click **Personal instructions**. Paste the above instructions into the text box, then click **Save**.

    Now enter the same prompt that you entered previously.

    **With custom instructions**, you'll get something like:

    ```javascript
    /**
     * Calculates the area of a circle given its radius.
     *
     * @param {number} radius - The radius of the circle. Must be a positive number.
     * @returns {number|null} The area of the circle, or null if the input is invalid.
     *
     * @example
     * // returns 78.53981633974483
     * areaOfCircle(5);
     *
     * @example
     * // returns null (invalid input)
     * areaOfCircle(-2);
     */
    function areaOfCircle(radius) {
      if (typeof radius !== "number" || isNaN(radius) || radius <= 0) {
        // Invalid input: radius must be a positive number
        return null;
      }

      const area = Math.PI * Math.pow(radius, 2);
      return area;
    }

    // Example usage:
    console.log(areaOfCircle(5));   // 78.53981633974483
    console.log(areaOfCircle(-2));  // null
    ```

{% data reusables.copilot.custom-instructions-further-reading %}

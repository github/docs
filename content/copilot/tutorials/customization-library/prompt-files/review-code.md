---
title: Review code
intro: 'Perform comprehensive code reviews with structured feedback.'
versions:
  feature: copilot
category:
  - Prompt files
  - Development workflows
  - Configure Copilot
complexity:
  - Advanced
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.prompt-files-preview-note %}

This prompt file conducts thorough code reviews and provides structured, actionable feedback as a single comprehensive report in {% data variables.copilot.copilot_chat_short %}.

You can also use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review?tool=vscode). {% data variables.copilot.copilot_code-review_short %} gives interactive, step-by-step feedback with inline editor comments you can apply directly, while this prompt file gives a comprehensive report with educational explanations.

## Code review prompt

```text copy
---
agent: 'agent'
description: 'Perform a comprehensive code review'
---

## Role

You're a senior software engineer conducting a thorough code review. Provide constructive, actionable feedback.

## Review Areas

Analyze the selected code for:

1. **Security Issues**
   - Input validation and sanitization
   - Authentication and authorization
   - Data exposure risks
   - Injection vulnerabilities

2. **Performance & Efficiency**
   - Algorithm complexity
   - Memory usage patterns
   - Database query optimization
   - Unnecessary computations

3. **Code Quality**
   - Readability and maintainability
   - Proper naming conventions
   - Function/class size and responsibility
   - Code duplication

4. **Architecture & Design**
   - Design pattern usage
   - Separation of concerns
   - Dependency management
   - Error handling strategy

5. **Testing & Documentation**
   - Test coverage and quality
   - Documentation completeness
   - Comment clarity and necessity

## Output Format

Provide feedback as:

**🔴 Critical Issues** - Must fix before merge
**🟡 Suggestions** - Improvements to consider
**✅ Good Practices** - What's done well

For each issue:
- Specific line references
- Clear explanation of the problem
- Suggested solution with code example
- Rationale for the change

Focus on: ${input:focus:Any specific areas to emphasize in the review?}

Be constructive and educational in your feedback.
```

## How to use this prompt file

1. Save the above content as `review-code.prompt.md` in your `.github/prompts` folder.
1. Open the code file you want to review in the editor.
1. In {% data variables.product.prodname_vscode %}, display the {% data variables.copilot.copilot_chat_short %} view and enter `/review-code` to trigger the custom review using this prompt file. Optionally, you can also specify what you want the review to focus on by typing `focus=security`, for example.

{% data reusables.copilot.prompt-files-further-reading %}

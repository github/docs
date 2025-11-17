---
title: Creating diagrams
shortTitle: Create diagrams
intro: GitHub Copilot Chat can help you create diagrams to better understand your data and communicate insights.
versions:
  feature: copilot
complexity:
  - Simple
octicon: copilot
category:
  - Communicate effectively
  - Visualize data
topics:
  - Copilot
contentType: tutorials
---

{% data variables.copilot.copilot_chat %} can help you create mermaid diagrams to visualize data, making it easier to understand and communicate insights. You can ask {% data variables.copilot.copilot_chat_short %} to generate diagrams based on your data or code, and it will provide you with the necessary code to create those diagrams.

## Example scenario

You want to create a Gantt chart to visualize the timeline of a project. You can ask {% data variables.copilot.copilot_chat_short %} to generate the mermaid code for the Gantt chart, with specific details about the project phases and their durations. You can then use this code in any Markdown file that supports mermaid syntax, such as issues, discussions, or pull requests on {% data variables.product.github %}.

## Example prompt

```copilot copy prompt
Create a mermaid gantt diagram that covers the period August 1st 2025 until January 31st, 2025. Include 5 phases, each taking 6 weeks, and overlapping equally.
```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} will provide you with the mermaid code to create the flowchart. You can copy the code {% data variables.copilot.copilot_chat_short %} provides and paste it anywhere on {% data variables.product.github %} that supports Markdown, such as an issue or discussion.

Ensure you include the correct mermaid syntax of `` ```mermaid `` before and `` ``` `` after the code block to render the diagram correctly.

````text
```mermaid
gantt
    title Project Timeline: Aug 2025 - Jan 2026
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Phase 1
    Phase 1           :a1, 2025-08-01, 42d

    section Phase 2
    Phase 2           :a2, 2025-09-07, 42d

    section Phase 3
    Phase 3           :a3, 2025-10-13, 42d

    section Phase 4
    Phase 4           :a4, 2025-11-18, 42d

    section Phase 5
    Phase 5           :a5, 2025-12-24, 42d
```
````

This Mermaid code would generate the following diagram:

![Screenshot of a rendered Mermaid gantt chart.](/assets/images/help/copilot/mermaid-gantt-chart-example.png)

## Further reading

* [Mermaid documentation](https://mermaid-js.github.io/mermaid/#/)
* [GitHub Copilot Chat documentation](/copilot/how-tos/use-chat)

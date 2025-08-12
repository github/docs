---
title: Extracting information
shortTitle: Extract information
intro: Copilot Chat in GitHub can help you extract key information from issues and discussions.
versions:
  feature: copilot
complexity:
  - Simple
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data variables.copilot.copilot_chat %} can help you extract key information from issues and discussions, making it easier to summarize and understand the content. You can ask {% data variables.copilot.copilot_chat_short %} to identify important details, such as action items, deadlines, or specific requests.

## Example scenario 1

You are reviewing a long discussion thread about a feature request. You want to quickly identify the main points and any action items that need to be addressed.

## Example prompt

`Can you summarize the key points and action items from this discussion?`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

````text
Key Points:
- The feature request aims to improve the user interface for better accessibility.
- There are concerns about the impact on existing users and workflows.
- Action items include gathering feedback from users and conducting usability testing.
Action Items:
- [ ] Gather feedback from users by the end of the week.
- [ ] Conduct usability testing with a focus group next month.
````

## Example scenario 2

You have a number of open issues assigned to you, and you want to extract the deadlines and priorities for each issue to help you prioritize your work.

## Example prompt

`Can you list the open issues assigned to me, along with their deadlines and priorities?`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

````text
Issue 1:
- Deadline: Next Friday
- Priority: High

Issue 2:
- Deadline: End of the month
- Priority: Medium

Issue 3:
- Deadline: No specific deadline
- Priority: Low
````

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}

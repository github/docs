---
title: Generating tables
shortTitle: Generate tables
intro: '{% data variables.copilot.copilot_chat_short %} can help you create tables to organize information and present it clearly.'
versions:
  feature: copilot
complexity:
  - Simple
octicon: copilot
category:
  - Communicate effectively
  - Author and optimize with Copilot
topics:
  - Copilot
contentType: tutorials
---

{% data variables.copilot.copilot_chat %} can help you create tables for various purposes, such as organizing data, comparing options, or summarizing information. By using tables, you can present information in a clear and structured way that is easy to read and understand. You can ask {% data variables.copilot.copilot_chat_short %} to generate tables based on existing data or to create empty tables based on your specific requirements.

## Example scenario

You want to create a reference table for the people on your team, including their roles and availability. You can ask {% data variables.copilot.copilot_chat_short %} to generate a table that summarizes this information in a clear and organized way.

## Example prompt 1

```text copy
Convert the following information into a markdown table:

Name: Alice  
Age: 30  
Occupation: Engineer
Timezone: PST
Availability: Mon-Fri, 9am-5pm

Name: Bob  
Age: 25  
Occupation: Designer
Timezone: EST
Availability: Mon-Thu, 10am-6pm

Name: Carol  
Age: 27  
Occupation: Writer
Timezone: CST
Availability: Mon-Thu, 8am-4pm

Name: Dave
Age: 35
Occupation: Manager
Timezone: PST
Availability: Mon-Fri, 10am-6pm

Name: Eve
Age: 28
Occupation: Analyst
Timezone: CST
Availability: Mon-Fri, 9am-5pm

Name: Frank
Age: 32
Occupation: Developer
Timezone: CST
Availability: Mon-Thu, 11am-7pm

Name: Grace
Age: 29
Occupation: Researcher
Timezone: EST
Availability: Mon-Fri, 9am-5pm

Name: Heidi
Age: 31
Occupation: Consultant
Timezone: PST
Availability: Mon-Fri, 9am-5pm

Name: Ivan
Age: 26
Occupation: Intern
Timezone: CST
Availability: Mon-Thu, 10am-6pm
```

## Example response 1

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} will provide you with a markdown table that organizes the information clearly. You can copy the table {% data variables.copilot.copilot_chat_short %} provides and use it in your documentation or project.

```markdown
| Name   | Age | Occupation   | Timezone | Availability          |
|--------|-----|-------------|----------|-----------------------|
| Alice  | 30  | Engineer    | PST      | Mon-Fri, 9am-5pm      |
| Bob    | 25  | Designer    | EST      | Mon-Thu, 10am-6pm     |
| Carol  | 27  | Writer      | CST      | Mon-Thu, 8am-4pm      |
| Dave   | 35  | Manager     | PST      | Mon-Fri, 10am-6pm     |
| Eve    | 28  | Analyst     | CST      | Mon-Fri, 9am-5pm      |
| Frank  | 32  | Developer   | CST      | Mon-Thu, 11am-7pm     |
| Grace  | 29  | Researcher  | EST      | Mon-Fri, 9am-5pm      |
| Heidi  | 31  | Consultant  | PST      | Mon-Fri, 9am-5pm      |
| Ivan   | 26  | Intern      | CST      | Mon-Thu, 10am-6pm     |
```

## Next steps

You can experiment with different types of visualizations and data to see how {% data variables.copilot.copilot_chat_short %} can help you create organized and easy-to-read information. For example, you could ask {% data variables.copilot.copilot_chat_short %} to use the `Timezone` and `Availability` columns to create a Mermaid graph that shows overlapping working hours for team members in different time zones. See [AUTOTITLE](/copilot/tutorials/copilot-chat-cookbook/communicate-effectively/creating-diagrams) for more information.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}

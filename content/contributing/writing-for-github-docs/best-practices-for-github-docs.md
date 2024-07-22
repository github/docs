---
title: Best practices for GitHub Docs
shortTitle: Best practices for GitHub Docs
intro: "Follow these best practices to create documentation that's user-friendly and easy to understand."
versions:
  feature: 'contributing'
---

## About {% data variables.product.prodname_dotcom %} documentation

At {% data variables.product.prodname_dotcom %}, we strive to create documentation that is accurate, valuable, inclusive, accessible, and easy to use.

Before contributing to {% data variables.product.prodname_docs %}, please take a moment to familiarize yourself with {% data variables.product.prodname_dotcom %}'s documentation philosophy and content design principles:

* [AUTOTITLE](/contributing/writing-for-github-docs/about-githubs-documentation-philosophy)
* [AUTOTITLE](/contributing/writing-for-github-docs/content-design-principles)

## Best practices for writing {% data variables.product.prodname_dotcom %} documentation

Whether you're creating a new article or updating an existing one, you should follow these guidelines when writing for {% data variables.product.prodname_docs %}:

* [Align content to user needs](#align-content-to-user-needs)
* [Structure content for readability](#structure-content-for-readability)
* [Write for readability](#write-for-readability)
* [Format for scannability](#format-for-scannability)

## Align content to user needs

Before you begin, it’s important to understand who you’re writing for, what their goals are, the core tasks or concepts that the article will address, and what type of content to write.

### Define the audience

* Who will read this content?
* What are they trying to do?

### Define the core purpose

* What should someone be able to do or understand after reading this article? Choose one or two tasks or concepts that the content will discuss.
* If there are additional tasks, concepts, or information that are not essential, consider if they can be placed lower in the article, moved to another article, or omitted completely.

### Determine the content type

Determine which type of content you will write, based on the intended audience and the core purpose of the content. {% data variables.product.prodname_docs %} use the following content types:

* [Conceptual content](/contributing/style-guide-and-content-model/conceptual-content-type)
* [Referential content](/contributing/style-guide-and-content-model/referential-content-type)
* [Procedural content](/contributing/style-guide-and-content-model/procedural-content-type)
* [Troubleshooting content](/contributing/style-guide-and-content-model/troubleshooting-content-type)
* [Quickstart](/contributing/style-guide-and-content-model/quickstart-content-type)
* [Tutorial](/contributing/style-guide-and-content-model/tutorial-content-type)

For example, use the conceptual content type to help readers understand the basics of a feature or topic and how it can help them accomplish their goals. Use the procedural content type to help people complete a specific task from start to finish.

## Structure content for readability

Use the following best practices to structure the content. When adding content to an existing article, follow the existing structure whenever possible.

* **Provide initial context**. Define the topic and state its relevance to the reader.
* **Structure the content in a logical order** by importance and relevance. Place information in order of priority, and in the order users will need it.
* **Avoid long sentences and paragraphs**.
  * Introduce concepts one by one.
  * Use one idea per paragraph.
  * Use one idea per sentence.
* **Emphasize the most important information**.
  * Begin each sentence or paragraph with the most important words and takeaways.
  * When explaining a concept, start with the conclusion, then explain it in more detail. (This is sometimes called an "inverted pyramid.")
  * When explaining a complex topic, present readers with the basic information first, and disclose the details later in the article.
* **Use meaningful subheadings**. Organize related paragraphs into sections. Give each section a subheading that is unique and that accurately describes the content.
* **Consider using in-page links** for longer content. This allows readers to jump to areas of interest and skip content that is irrelevant to them.

## Write for readability

Make it easy for busy users to read and understand the text.

* **Use plain language.** Use common, everyday words, and avoid jargon when possible. Terms that are well known to developers are fine, but don't assume that the reader knows the details of how {% data variables.product.prodname_dotcom %} works.
* **Use active voice.**
* **Be concise.**
  * Write sentences that are simple and brief.
  * Avoid complex sentences that contain multiple concepts.
  * Pare down unnecessary details.

For related information, see "Voice and tone" in [AUTOTITLE](/contributing/style-guide-and-content-model/style-guide#voice-and-tone) and [AUTOTITLE](/contributing/writing-for-github-docs/writing-content-to-be-translated).

## Format for scannability

Most readers don't consume articles in their entirety. Instead they either _scan_ the page to locate specific information, or _skim_ the page to get a general idea of the concepts.

When scanning or skimming content, readers skip over large chunks of text. They look for elements that are related to their task or that stand out on the page, such as headings, alerts, lists, tables, code blocks, visuals, and the first few words in each section.

Once the article has a clearly defined purpose and structure, you can apply the following formatting techniques to optimize the content for scanning and skimming. These techniques can also help to make content more understandable for all readers.

* **Use text highlighting** such as boldface and hyperlinks to call attention to the most important points. Use text highlighting sparingly. Do not highlight more than 10% of the total text in an article.
* **Use formatting elements** to separate the content and create space on the page. For example:
  * Bulleted lists (with optional run-in subheads)
  * Numbered lists
  * [Alerts](/contributing/style-guide-and-content-model/style-guide#alerts)
  * Tables
  * Visuals
  * Code blocks and code annotations

## Further reading

* "[AUTOTITLE](/contributing/style-guide-and-content-model/style-guide)"
* "[AUTOTITLE](/contributing/style-guide-and-content-model/about-the-content-model)"
* "[AUTOTITLE](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article)"
* "[Readability Guidelines](https://readabilityguidelines.co.uk/)," Content Design London
* "[Rewriting Digital Content for Brevity](https://www.nngroup.com/articles/rewriting-content-brevity/)," Nielsen Norman Group

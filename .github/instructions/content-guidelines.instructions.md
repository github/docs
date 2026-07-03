---
applyTo: "content/**,data/reusables/**"
---

# Content guidelines for docs.github.com

**When to use**: Writing, editing, or reviewing documentation articles and reusable prose. These are strategic content rules: what to write and how to focus an article.

When asked to work on one part of a larger article, read the whole article first so you can judge whether it meets these guidelines as a whole.

**How to apply these guidelines**: Treat them as strategic suggestions to weigh per article, not mechanical rules to enforce. The right emphasis depends on the article's content type (procedural, conceptual, or reference), so use judgment and stay silent when a guideline does not cleanly apply, rather than flagging or rewriting reflexively.

## Keep only essential content

The strategic priority is simplification: create less content and remove content that is not essential, so readers can navigate higher-value content more easily. Flag content to trim or remove by asking:

* Does it serve a large or high-value audience, rather than an edge case the company does not prioritize?
* Does it help people use GitHub the way we want them to, rather than documenting every possible use?
* Would a typical internet user figure this out on their own by exploring the UI?
* Is the information presented at the moment the reader actually needs it?

## Intros: pull people in

This section applies mainly to the `intro` frontmatter field and, for conceptual articles, section openings.

* Open with the value the reader gets, and the product that delivers it, rather than a restatement of the task or a bare feature name. Technical detail is not bad and belongs in the article; it just should not be the first thing the reader sees when a value-led opening is possible.
* Do not repeat the wording of the title.
* Do not start with "Learn how to..."; it buries the value.
* When conceptual and procedural articles cover the same topic, differentiate them through sentence structure. Conceptual describes what the thing is and why it matters ("{% data variables.product.prodname_copilot %} is an AI coding assistant that helps you write code faster."). Procedural describes what the reader will do and the value they get ("Start using {% data variables.product.prodname_copilot %} to write code faster.").

Examples of strong intros by content type:

* **Conceptual** ("Larger runners"): "Organize and govern your workflows with larger runners using runner groups, concurrency policies, and granular access controls."
* **Procedural** ("Running jobs on larger runners"): "Route jobs to the right machines by using runner groups and workflow labels."
* **Reference** ("Supported AI models in {% data variables.product.prodname_copilot %}"): "Identify which AI models are supported in {% data variables.product.prodname_copilot %} for each client and plan."

## Drive people to the product

* Every article should move the reader to try or use the product, directly or indirectly. Even reference articles do this: readers consult them in order to use the product, so the support is built in and a separate CTA is often unnecessary.
* Only include a CTA link when it genuinely makes the reader's task easier, for example by saving them the time of navigating to a settings page themselves. Do not force a CTA; if none would genuinely help the reader, do not add one. Avoid turning articles into clickbait.
* A CTA can take several forms, for example a direct link to the relevant product or feature, a Copilot prompt the reader can run, or a link to start a free trial.
* Only link to a URL that is the same for everyone on that version. Do not add a CTA when the in-product URL must include an enterprise, organization, or repository name (for example, `https://github.com/ORG/REPO/settings/copilot/code_review`), because the link cannot be made to work for all readers.
* Procedural articles: include a CTA wherever one genuinely helps, as directly as possible.
* Conceptual articles: point the reader to exactly one clear next step, usually a link to the related procedure (for example, an "About pull requests" article points to "Creating a pull request"). Place it where the reader is ready to act, typically at the end of the article.

## Energy and tone

These apply to the prose in an article (intros and explanatory text), not to structural elements like tables, procedural steps, or code.

* Lead with value and real-life impact over technical detail.
* Connect features to the reader's real-life problems to generate genuine interest.
* Use plain, friendly, approachable language. Avoid marketing jargon, buzzwords, and inflated adjectives.

## Scannability

* Give each article exactly one purpose, regardless of content type. That purpose may be physical (e.g., enabling a setting), conceptual (e.g., building a mental model of what a feature does and why it matters, choosing between two options), or referential (e.g., determining which AI models are available to the reader). Include only information central to that purpose for most readers.
* Write for the one reader scenario the article targets, for example a particular deployment configuration (GHEC with EMUs vs. Classic) or a particular type of reader (an open source maintainer vs. an enterprise developer). When the article has a content design plan, target the audience it identifies rather than inventing one; for small edits without a plan, follow the audience the existing article is clearly written for. Do not branch content to serve multiple audiences; readers in other scenarios can adapt the guidance. The exception is version differences: when in-article `{% ifversion %}` branching is genuinely required (see the versioning rules in `content.instructions.md`), it is not a scannability violation.
* Ruthlessly minimize links. Only link when you actively want most readers to follow it in the ideal scenario. No "just in case" links. Links that build a logical user journey are exactly the kind to keep, for example a Prerequisites link that sends the reader to setup they need first, or a Next steps link that points them to the natural follow-on task.
* Ruthlessly minimize alerts (notes, tips, warnings): more than one per article should be exceptional, and crowding several into one section is worse than spreading them out. Keep each to 1-2 sentences. Don't open an article or section with an alert unless the reader needs it before the surrounding content. Prefer folding a useful alert into the prose over deleting it, but first apply this test: if the reader must actually notice it to use the page correctly, keep it as an alert (don't fold or count it), since folding defeats its purpose. This covers, for example, critical warnings, plan or availability constraints, public preview notices, and cues that orient the reader to how the page works or which content applies to them.
* Prefer short sentences and paragraphs, generous white space, and formatting like bold and tables to highlight key information. Use a table only for genuinely complex data that belongs in a tabular format; do not add a table that repeats information already stated more clearly in prose.

---
title: Writing discussions or blog posts
shortTitle: Write discussions or blog posts
intro: '{% data variables.copilot.copilot_chat_short %} can help you generate ideas, outline, or draft discussions or blog posts.'
versions:
  feature: copilot
category:
  - Documenting code
complexity:
  - Simple
octicon: book
topics:
  - Copilot
redirect_from:
  - /copilot/copilot-chat-cookbook/documenting-code/writing-discussions-or-blog-posts
  - /copilot/tutorials/copilot-chat-cookbook/documenting-code/writing-discussions-or-blog-posts
  - /copilot/tutorials/copilot-chat-cookbook/documenting-code/write-discussions-or-blog-posts
contentType: tutorials
---

When you're working on code, you often need to quickly create accurate and comprehensive explanations to share your work with teammates or the broader community. {% data variables.copilot.copilot_chat_short %} can help by suggesting ideas, outlines, or complete drafts for discussions or blog posts—enabling you to document and communicate clearly, so you can spend more time focused on coding.

>[!TIP] You can include links to specific pull requests or issues in your prompts to give {% data variables.copilot.copilot_chat_short %} more context. If you're not getting the results you expect, try specifying the repository in your prompt to help {% data variables.copilot.copilot_chat_short %} focus on the right project.

## Generating ideas

When you're working on a project, you may need to write a discussion or blog post to share your ideas, get feedback, or communicate with your team. {% data variables.copilot.copilot_chat_short %} can help you generate ideas.

### Brainstorming topics from recent work

If you're looking for ideas for a discussion post, you can ask {% data variables.copilot.copilot_chat_short %} to suggest topics based on your recent work.

#### Example prompts

`I’ve worked on three major PRs (#21, #27, and #44) in the last month. Could you suggest five potential blog topics that highlight the unique challenges or solutions from each PR?`

`We improved backend performance in PR #16 and addressed user feedback in Issues #10 and #12. What interesting blog ideas can you propose that tie these updates together for a developer audience?`

`We released a major version upgrade in PR #99 for our library. Could you suggest three blog angles that highlight the major changes, the lessons we learned, and how the community can benefit from it?`

`We’ve been working on a new AI-driven feature in PR #120. Please propose some blog post titles and short descriptions that will catch developers’ attention while explaining how this feature fits into our product roadmap.`

### Writing technical deep dives

When you're working on a complex feature or system, you may need to write a technical deep dive to share your work with your team or the broader community. {% data variables.copilot.copilot_chat_short %} can help you generate ideas for technical deep dives by suggesting topics based on your recent work.

#### Example prompts

`I just finished implementing a complex authentication flow in PR #30. Could you outline a blog post explaining the challenges we faced, the approach we took to solve them, and a brief code example highlighting key sections?`

`Generate a blog outline that discusses our shift to a more modular architecture in PR #55. I want to explain why we made the switch, how it impacts scalability, and any trade-offs we faced along the way.`

`Propose a developer-focused blog post centered on the new caching mechanism we built in PR #64. Highlight key aspects of the implementation, show code snippets, and explain the performance improvements.`

### Sharing best practices

When you're working on a project, you may need to write a discussion post to share best practices or lessons learned. {% data variables.copilot.copilot_chat_short %} can help you generate ideas for discussion posts.

#### Example prompt

`I just finished implementing a complex authentication flow in PR #30. Could you outline a blog post explaining the challenges we faced, the approach we took to solve them, and a brief code summary highlighting best practices?`

## Drafting content

Once you have an idea for a discussion or blog post, you can ask {% data variables.copilot.copilot_chat_short %} to help you draft the content. {% data variables.copilot.copilot_chat_short %} can provide you with a detailed outline, a rough draft, or a polished draft, depending on your needs.

### Outlining a blog post

If you're looking for help outlining a blog post, you can ask {% data variables.copilot.copilot_chat_short %} to suggest a detailed outline for your post.

#### Example prompt

`Please propose an outline for a blog post based on PR #16 and Issues #10 and #12. Include new features introduced, user-facing improvements, and next steps.`

### Drafting a blog post

If you're looking for help drafting a blog post, you can ask {% data variables.copilot.copilot_chat_short %} to suggest a rough draft for your post.

#### Example prompts

`Please write a short blog post describing how we integrated a new logging module from PR #40. Highlight how it benefits users, and suggest next steps.`

`I’d like a draft paragraph summarizing exciting new features or important changes introduced in recent commits. Please explain clearly what changed and why it's significant for users.`

`Generate a brief ‘shout-out’ paragraph that highlights the contributors who submitted PRs #33 and #37, explaining their impact and thanking them for their work.`

## Refining your draft

Once you have a draft, you can ask {% data variables.copilot.copilot_chat_short %} to help you refine it. {% data variables.copilot.copilot_chat_short %} can provide you with suggestions for improving your writing, making it more engaging, or clarifying complex concepts.

### Improving tone and style

If you're looking to improve the tone and style of your writing, you can ask {% data variables.copilot.copilot_chat_short %} to suggest ways to make your writing more engaging or accessible.

#### Example prompt

`Please rewrite the conclusion in a more informal, conversational style. The original conclusion was: ‘Our team successfully launched a groundbreaking update.’ Make it feel more personal and celebratory.`

### Including next steps

If you're looking to include next steps in your blog post, you can ask {% data variables.copilot.copilot_chat_short %} to suggest ways to make your writing more actionable.

#### Example prompt

`Draft a final section on upcoming milestones and open issues labeled ‘enhancement.’ Show what's coming next, and mention opportunities for community engagement.`

---
title: Using Copilot CLI as your AI SME
shortTitle: Use an AI SME
intro: 'Use {% data variables.copilot.copilot_cli_short %} as an always-available subject matter expert to learn how a codebase works, so you can confidently maintain it or add new features.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Scale institutional knowledge
  - Author and optimize with Copilot
  - Learn about Copilot CLI
allowTitleToDifferFromFilename: true
docsTeamMetrics:
  - copilot-cli
---

## Introduction

When you start work on an unfamiliar codebase, or you're asked to change a part of a large codebase that you've never touched before, you usually need a subject matter expert (SME) to bring you up to speed. The SME is typically a more experienced developer on the team who knows how the code fits together and can answer your questions. SMEs are not always available—they may be in another timezone, busy with their own work, or no longer on the team at all.

When you need to understand an unfamiliar codebase, you usually rely on a teammate who knows the code. When that person isn't available, {% data variables.copilot.copilot_cli_short %} can fill the gap. In this tutorial, you'll ask {% data variables.copilot.copilot_cli_short %} questions about a repository's code, learn prompting techniques that produce code-grounded answers, and build the confidence to start making changes.

## When to use an AI SME (or even When do I use an AI SME?)

This tutorial is useful any time you need to understand a codebase faster. For example:

* You've just joined a team or an open source project and need to get up to speed quickly.
* You need to change an area of a large codebase that you've never worked in before.
* You've inherited a service or library that the original authors no longer maintain.

The tutorial assumes you're comfortable working in a terminal and reading code in the language used by the project you're exploring. You don't need any prior experience with {% data variables.copilot.copilot_cli_short %}.

## Prerequisites

Before you start, make sure you have:

* A {% data variables.product.prodname_copilot %} subscription. See [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* {% data variables.copilot.copilot_cli_short %} installed and authenticated. See [AUTOTITLE](/copilot/how-tos/copilot-cli/cli-getting-started).
* A local clone of the repository you want to explore. See [AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui).

## 1. Start a session in the repository

Open a terminal and change into the root of the repository you want to learn about. Starting {% data variables.copilot.copilot_cli_short %} from the repository root means it has the whole codebase available as context.

```shell copy
cd PATH/TO/YOUR/REPOSITORY
copilot
```

You're now in an interactive {% data variables.copilot.copilot_cli_short %} session. Anything you type at the prompt is sent to the model, which can read files in the repository, run shell commands such as `git log` or `grep`, and answer your questions based on what it finds.

> [!TIP]
> * If you trust {% data variables.copilot.copilot_cli_short %} to run commands without prompting for approval, while blocking file changes, start with `copilot --deny-tool='write' --allow-all-tools`. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools).
> * If you're working in a very large codebase, you may get better results by starting {% data variables.copilot.copilot_cli_short %} from the relevant subdirectory. This limits the context to the most relevant files.

## 2. Ground answers in the code, not the docs

Most repositories contain a mixture of code and documentation: README files, design notes, architecture diagrams, and so on. Documentation is useful for finding out about a project, but it may be out of date. If you ask {% data variables.copilot.copilot_cli_short %} a question about how the code behaves, and it picks up an answer from an out-of-date Markdown file, you'll get a confident answer that is wrong.

Before you start asking questions, tell {% data variables.copilot.copilot_cli_short %} to base its answers on the code itself, and to flag any uncertainty rather than fill in gaps. For example:

```copilot copy
For the rest of this session, when I ask how something works, base your answer on the code in this repository, not on documentation files such as README.md or files under docs/. If a documentation file conflicts with the code, treat the code as the source of truth. If you can't find a definitive answer in the code, say so - don't guess.
```

You can put this kind of preamble in a custom instructions file and reuse it across sessions, so you don't have to retype it each time. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).

## 3. Get an overview of the codebase

Start with broad questions to build a mental map of the project. The goal is to understand the shape of the code (where the entry points are, which directories contain what, and how the major pieces fit together) before you drill into a specific feature.

Try prompts such as:

```copilot copy
Give me an overview of this codebase. What does the application do, what are the main components, and how do they communicate? Cite the files you used as evidence.
```

```copilot copy
What are the entry points for this application? For each entry point, tell me which file contains the entry point and which directories contain the code it calls into.
```

Asking for citations and evidence is important. When {% data variables.copilot.copilot_cli_short %} tells you "this is handled in `src/auth/middleware.ts`," you can open that file and verify the answer for yourself. If the citation doesn't match what you find, that's a useful signal to push back and ask follow-up questions.

## 4. Drill into a specific feature

Once you have an overview, narrow in on the area you need to change. Treat this as a conversation, not a single query. Each answer will surface terms, file names, and concepts that you can use in your next question.

It's a good idea to ask similar questions that approach a topic from different angles. This helps to ensure you're getting the full picture, and will give you confidence that {% data variables.product.prodname_copilot_short %} hasn't misunderstood what you're trying to find out about, and hasn't missed an important detail.

For example, suppose you've been asked to add rate limiting to a particular API endpoint, and you've never worked on this part of the code before, you might start with questions such as:

```copilot copy
Is there any existing rate limiting in this codebase? If so, where is it implemented, and how is it configured?
```

```copilot copy
If I wanted to add per-user rate limiting to the /api/v1/upload endpoint, which files would I most likely need to change, and which existing patterns in the codebase should I follow?
```

Asking follow-up questions within the same CLI session allows you to drill into the details of a feature and provides {% data variables.product.prodname_copilot_short %} with the context it needs to give you specific answers that tell you what you need to know.

## 5. Investigate behavior and edge cases

Reading code tells you what the code does. It often doesn't tell you what the code is supposed to do, or how it behaves in unusual situations. These are the questions where a human SME is most valuable—and where {% data variables.copilot.copilot_cli_short %} can help you when no human is available.

Some examples of behavior and edge-case questions you might ask:

```copilot copy
What happens if the database connection drops while a request is being processed? Walk me through the error handling, based on the code.
```

```copilot copy
The `getUser` function takes a `userId` parameter. What validation is performed on it before it reaches the database query? Are there any code paths where an unvalidated value could reach the query?
```

When you get an answer, follow up with "show me the code" or "which file did you find that in?" if it isn't already cited. This gives you somewhere to check and verify the answer.

## 6. Use Git history as another source

A lot of useful context lives in the Git history rather than in the current code: why a function was written the way it was, when a bug was last fixed, who originally added a module. {% data variables.copilot.copilot_cli_short %} can run `git` commands for you and use the output to answer questions you couldn't easily answer by reading the code alone.

Try prompts such as:

```copilot copy
When was the `PaymentProcessor` class introduced, and what was the original commit message? Has it been substantially refactored since then?
```

```copilot copy
Look at the last 20 commits that touched files under `src/billing/`. Summarize what kinds of changes have been made recently.
```

```copilot copy
Who has made the most commits to `src/auth/`? Use that information to suggest the best person on this team to ask about authentication.
```

## 7. Verify before you trust

{% data variables.copilot.copilot_cli_short %} is a powerful SME, but it's not infallible. It can misread code, conflate similar-looking files, or, occasionally, make things up. Treat its answers the way you'd treat advice from a helpful but fallible coworker: useful as a starting point, but worth checking before you act on anything important.

A few habits will keep you out of trouble:

* **Check the cited files.** When {% data variables.copilot.copilot_cli_short %} references a specific file or line number, open it and confirm. If the citation is wrong, treat the rest of the answer with more skepticism.
* **Run things yourself.** If {% data variables.copilot.copilot_cli_short %} tells you a function returns `null` for an empty input, write a quick test or REPL invocation that calls it with an empty input and check.
* **Cross-check with humans.** When the answer matters (security, data integrity, anything you'd be embarrassed to get wrong in production), use {% data variables.copilot.copilot_cli_short %}'s answer as a starting point and confirm with a human SME or a code review.

## Conclusion

In this tutorial, you've used {% data variables.copilot.copilot_cli_short %} as your personal SME to:

* Get an overview of an unfamiliar codebase, anchored in real files.
* Drill into a specific feature so you know which files to change and which patterns to follow.
* Investigate behavior, edge cases, and the Git history.
* Verify answers, so you can rely on them when it matters.

Used this way, {% data variables.copilot.copilot_cli_short %} doesn't replace human SMEs, but it makes you less dependent on them for the day-to-day questions that come up while you work. Your human teammates can focus their time on the questions that genuinely need their experience, and you can keep moving when they're not around.

## Next steps

* Save your most useful prompt preambles as custom instructions, so you can reuse them across sessions and projects. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).
* Once you understand the area of the code you want to change, use {% data variables.copilot.copilot_cli_short %} to help you make the change. See [AUTOTITLE](/copilot/tutorials/refactor-code) and [AUTOTITLE](/copilot/tutorials/write-tests).
* Learn how to control which tools {% data variables.copilot.copilot_cli_short %} can run during a session. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools).

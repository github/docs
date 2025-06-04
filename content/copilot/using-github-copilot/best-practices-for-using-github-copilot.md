---
title: Best practices for using GitHub Copilot
intro: 'Learn how to get the most out of {% data variables.product.prodname_copilot_short %}.'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: Best practices
---

## Understand {% data variables.product.prodname_copilot_short %}'s strengths and weaknesses

{% data variables.product.prodname_copilot %} is an AI coding assistant that helps you write code faster and with less effort, allowing you to focus more energy on problem solving and collaboration. Before you start working with {% data variables.product.prodname_copilot_short %}, it's important to understand when you should and shouldn't use it.

**Some of the things {% data variables.product.prodname_copilot_short %} does best include:**

* Writing tests and repetitive code
* Debugging and correcting syntax
* Explaining and commenting code
* Generating regular expressions

**{% data variables.product.prodname_copilot_short %} is not designed to:**

* Respond to prompts unrelated to coding and technology
* Replace your expertise and skills. Remember that you are in charge, and {% data variables.product.prodname_copilot_short %} is a powerful tool at your service.

## Choose the right {% data variables.product.prodname_copilot_short %} tool for the job

While {% data variables.product.prodname_copilot_short %} code completion and {% data variables.copilot.copilot_chat_short %} share some functionality, the two tools are best used in different circumstances.

**Code completion works best for:**

* Completing code snippets, variable names, and functions as you write them
* Generating repetitive code
* Generating code from inline comments in natural language
* Generating tests for test-driven development

**Alternatively, {% data variables.copilot.copilot_chat_short %} is best suited for:**

* Answering questions about code in natural language
* Generating large sections of code, then iterating on that code to meet your needs
* Accomplishing specific tasks with keywords and skills. {% data variables.copilot.copilot_chat_short %} has built-in keywords and skills designed to provide important context for prompts and accomplish common tasks quickly. Different types of keywords and skills are available in different {% data variables.copilot.copilot_chat_short %} platforms. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt){% ifversion fpt %}.{% else %} and [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#powered-by-skills).{% endif %}
* Completing a task as a specific persona. For example, you can tell {% data variables.copilot.copilot_chat_short %} that it is a Senior C++ Developer who cares greatly about code quality, readability, and efficiency, then ask it to review your code.

## Create thoughtful prompts

Prompt engineering, or structuring your request so {% data variables.product.prodname_copilot_short %} can easily understand and respond to it, plays a critical role in {% data variables.product.prodname_copilot_short %}'s ability to generate a valuable response. Here are a few quick tips you should remember while crafting your prompts:

* Break down complex tasks.
* Be specific about your requirements.
* Provide examples of things like input data, outputs, and implementations.
* Follow good coding practices.

To learn more, see [AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot).

## Check {% data variables.product.prodname_copilot_short %}'s work

While {% data variables.product.prodname_copilot_short %} is very powerful, it is still a tool capable of making mistakes, and you should always validate the code it suggests. Use the following tips to ensure you are accepting accurate, secure suggestions:

* **Understand suggested code before you implement it.** To ensure you fully understand {% data variables.product.prodname_copilot_short %}'s suggestion, you can ask {% data variables.copilot.copilot_chat_short %} to explain the code.
* **Review {% data variables.product.prodname_copilot_short %}'s suggestions carefully.** Consider not just the functionality and security of the suggested code, but also the readability and maintainability of the code moving forward.
* **Use automated tests and tooling to check {% data variables.product.prodname_copilot_short %}'s work.** With the help of tools like linting, {% data variables.product.prodname_code_scanning %}, and IP scanning, you can automate an additional layer of security and accuracy checks.

> [!TIP] Optionally, you may want to check {% data variables.product.prodname_copilot_short %}'s work for similarities to existing public code. If you don't want to use similar code, you can turn off suggestions matching public code. See {% ifversion fpt %}[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code) or [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching).{% else %}[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code), [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching), or [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#suggestions-matching-public-code).{% endif %}

## Guide {% data variables.product.prodname_copilot_short %} towards helpful outputs

There are several adjustments you can make to steer {% data variables.product.prodname_copilot_short %} towards more valuable responses:

* **Provide {% data variables.product.prodname_copilot_short %} with helpful context:**
  * If you are using {% data variables.product.prodname_copilot_short %} in your IDE, open relevant files and close irrelevant files.
  * In {% data variables.copilot.copilot_chat_short %}, if a particular request is no longer helpful context, delete that request from the conversation. Alternatively, if none of the context of a particular conversation is helpful, start a new conversation.
  * If you are using {% data variables.copilot.copilot_chat_dotcom_short %}, provide specific repositories, files, symbols, and more as context. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom).
  * If you are using {% data variables.copilot.copilot_chat_short %} in your IDE, use keywords to focus {% data variables.product.prodname_copilot_short %} on a specific task or piece of context. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt).
* **Rewrite your prompts to generate different responses.** If {% data variables.product.prodname_copilot_short %} is not providing a helpful response, try rephrasing your prompt, or even breaking your request down into multiple smaller prompts.
* **Pick the best available suggestion.** When you are using code completion, {% data variables.product.prodname_copilot_short %} might offer more than one suggestion. You can use keyboard shortcuts to quickly look through all available suggestions. For the default keyboard shortcuts for your operating system, see [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment#keyboard-shortcuts-for-github-copilot).
* **Provide feedback to improve future suggestions.** You can provide feedback in many ways:
  * For code completion, accept or reject {% data variables.product.prodname_copilot_short %}'s suggestion.
  * For individual responses in {% data variables.copilot.copilot_chat_short %}, click the thumbs up or thumbs down icons next to the response.
  * For {% data variables.copilot.copilot_chat_short %} in your IDE, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#sharing-feedback) for instructions specific to your environment.
  * For {% data variables.copilot.copilot_chat_dotcom_short %}, leave a comment on the [feedback discussion](https://github.com/orgs/community/discussions/110314).

## Stay up-to-date on {% data variables.product.prodname_copilot_short %}'s features

New features are regularly added to {% data variables.product.prodname_copilot_short %} to create new abilities, build on existing features, and improve the user experience. To stay up-to-date with {% data variables.product.prodname_copilot_short %}'s features, see the [changelog](https://github.blog/changelog/label/copilot/).

# SITE – Redefining FMCG

**SITE** (Sustainable Integrated Traceability Ecosystem) is a modular, scalable infrastructure designed to embed verifiable traceability across the entire FMCG landscape. Currently under private development, SITE will transition into the open-source ecosystem to provide Source-to-Shelf transparency and decentralized integrity.

Engineered for long-term impact, the framework prioritizes trust, integration flexibility, and ethical governance—empowering businesses and communities alike.

## Key Capabilities

- **Traceability APIs** with event-driven lifecycle and compliance logging
- **RESTful Data Orchestration** for seamless audit integration
- **QR-Based & Encrypted Identity** for secure batch- and unit-level product mapping
- **Role-Based Access Control** for confidential, role-specific ecosystem participation
- **Version-Controlled Documentation Pipelines** aligned with global sustainability standards

> Every product’s journey is a responsibility, not a transaction. SITE honors that journey with control, integrity, and global alignment. — #SachinKPal

## Core Repositories (Private Until Open Source Launch)

- `dhuniworldwide/site-core` — Orchestration logic and lifecycle governance
- `dhuniworldwide/trace-sdk` — SDK for trace event triggers and public verification
- `dhuniworldwide/traceability` — Confidential modular trace mapping and ledger-ready workflows

## Open Source Roadmap

SITE is built as a hybrid framework. Modules will transition into open-source after stabilization and compliance validation.

Planned integrations include:

- Blockchain-enforced audit trails and tamper-proof notarization
- ML-driven anomaly and fraud detection
- Distributed ledger compatibility for cross-border regulation
- Self-verifiable supply chain proofs with privacy-preserving obfuscation options

## GitHub Copilot × Dhuni SITE

Copilot played a pivotal role during development—augmenting our capacity to build clean, secure, and modular code while maintaining architectural coherence.

It supported:

- Scaffold generation for secure API architecture
- Consistency across multi-repo systems
- Documentation-aligned refactoring cycles
- Traceable iterations with structural integrity

> We built with vision. Copilot helped us stay honest, fast, and focused.

## Community-First, Development-Phase

Dhuni SITE is more than infrastructure—it’s a commitment to community upliftment and shared accountability.

While in development, we welcome strategic dialogue with developers, certifiers, policy-makers, and technologists committed to inclusive systems design.

**Email:** site@dhuniworldwide.com  
**Website:** [https://www.dhuniworldwide.com](https://www.dhuniworldwide.com)

## Our Commitment

SITE is Dhuni Worldwide’s contribution to redefining traceability for a new generation—rooted in transparency, designed for scalability, and aligned with our mission of empowerment, integrity, and global justice.

Thank you.

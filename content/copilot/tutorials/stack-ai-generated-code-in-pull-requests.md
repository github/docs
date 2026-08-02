---
title: Stack AI-generated code in pull requests
shortTitle: Stack AI pull requests
intro: 'Create a stack of small, dependent pull requests that can be quickly reviewed.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Accelerate PR velocity
  - Team collaboration
---

> [!NOTE]
> Stacked pull requests are in {% data variables.release-phases.public_preview %} and subject to change.

Large pull requests are difficult to review and create bottlenecks, especially when AI helps you generate a high volume of code in a short time. Review quality also degrades as pull request size increases. Reviewers may skim the result, miss issues, or procrastinate and leave the pull request until it grows stale and develops merge conflicts.

Stacked pull requests keep large code changes reviewable. 

{% data reusables.pull_requests.pr-stack-definition %}

This tutorial walks you through how to use stacked pull requests with agents to build a feature in individually reviewable layers. For our example, we'll consider how to add user authentication to an app. We'll use {% data variables.copilot.copilot_cli %} and the `gh-stack` agent skill.

## Prerequisites

To use the `gh-stack` skill with an agent, you'll first need to install {% data variables.product.prodname_cli %} and the `gh-stack` CLI extension. You'll need the following:

* {% data variables.product.prodname_cli %} (`gh`) 2.90.0 or later, and Git 2.20 or later.
  * Authenticate {% data variables.product.prodname_cli %} with `gh auth login`.
* A {% data variables.product.github %} repository you can push to.
* {% data variables.copilot.copilot_cli %} installed and signed in.

In {% data variables.product.prodname_cli %}, install the `gh-stack` extension and skill.

```shell
gh extension install github/gh-stack
gh skill install github/gh-stack
```

> [!NOTE] 
> Throughout this tutorial, if you prefer to run stack commands yourself instead of letting {% data variables.product.prodname_copilot_short %} do it, you'll need to use {% data variables.product.prodname_cli %}.

## 1. Design a stack before you generate code

A good stack is like building a house, start with a strong foundation, frame the walls, install wiring, then finish the drywall. Each layer built, dependent on the one below. In the end, a reviewer should be able to read the pull requests from bottom to top and follow the feature coming together.

* Split the feature into layers. Each layer should be a single, coherent change that can be reviewed on its own.
  * Keep each layer small enough that its pull request is a quick read. If a layer feels like it needs a long description to review, it is probably too big.
  * Decide the boundaries yourself, or work with {% data variables.product.prodname_copilot_short %} on a plan. Either way, you own the shape of the stack.
* Order the layers by dependency. Foundational changes go at the bottom. Anything that depends on them goes higher. For authentication, that might be: 
  * Layer 1: data model and migration
  * Layer 2: CRUD endpoints
  * Layer 3: JWT middleware and guards
  * Layer 4: integration and unit tests 

### Example prompts

* `Propose a layered approach to add user authentication to this app. Order the layers by dependency, keeping each layer independently reviewable.`
* `Review my planned layers and flag any that are too large or that depend on a branch above them.`

## 2. Build the bottom layer first

Start the stack with the foundation. Everything above depends on getting this layer right.

* Inform {% data variables.product.prodname_copilot_short %} you'll be building a stacked pull request and ask it to build the first layer based on your plan. The agent uses the `gh-stack` skill to create the first branch of the stack.
* If you prefer to create the stack yourself, create it directly with `gh stack init`, using a prefix to keep branch names tidy, for example, `gh stack init BRANCH-NAME-1`.
* Review the generated change yourself before moving on. A mistake in the bottom layer propagates to every branch above it, so give it a review before moving on.

### Example prompts

* `Start the pr-stack and build only the first layer: the user data model and migration.`
* `Conduct a review of the generated code and confirm this branch contains only the data model and migration, and nothing that belongs in a later layer.`

## 3. Stack each new code layer on top

With the foundation in place, build the rest of the feature one layer at a time.

* Ask {% data variables.product.prodname_copilot_short %} to add the next layer and implement it in the context of the layers below. The agent will add a branch to the top of the stack and commit the work there. 
* If you want to add a branch yourself, use `gh stack add BRANCH-NAME-NEXT`.
* If a layer starts growing too large, consider whether it has drifted outside its plan or if you actually need two layers instead of one.
* Create new branches for each layer as you go, so every branch stays a clean, self-contained diff.
* When you're ready to create pull requests ask {% data variables.product.prodname_copilot_short %} to submit your stack, or if you want to do it yourself, use `gh stack submit`.
* Let each pull request stand on its own. A focused title and a concise, meaningful description of the layer is usually enough.

### Example prompts

* `Add the next layer in a new branch on top: the CRUD endpoints that use the user model from the branch below.`
* `This branch is getting large. Suggest how it could be split into two independently reviewable layers.`

## 4. Review the pull requests yourself before asking for a review

Each layer is small, making self-review easier too. Do a pass on every branch before you involve teammates. Reviewers should receive changes you already trust.

* Run your tests, linters, and code scanning on each branch. Let {% data variables.product.prodname_copilot_short %} help you check each layer against your standards before you request reviews.
* For the techniques to review AI-generated changes thoroughly, see [AUTOTITLE](/copilot/tutorials/review-ai-generated-code).

## 5. Request reviews for the stack, starting at the bottom

With the layers built, reviewers get small diffs instead of a large wall of code. 

* If the dependencies are strongly integrated, ask for reviews starting at the bottom of the stack, so you can integrate changes up the stack before subsequent reviews.
* If you need reviews from separate folks for different layers, reviewers can work in parallel. One person can review the data model while another reviews the endpoints, and neither wades through the whole feature.

## 6. Iterate on feedback 

Review feedback lands on layers individually, not the whole feature. Stacks let you fix the right layer in place and carry the change upward.

* Ask {% data variables.product.prodname_copilot_short %} to revise the layer a reviewer flagged. The agent moves to the right branch, makes the change, and commits it there. Then, it rebases the layers above so they pick up the fix.
* Keep each fix in the layer it belongs to. A change made on the wrong branch can confuse and create errors upstack.
* As you make fixes, ask {% data variables.product.prodname_copilot_short %} to rebase the branches above and propagate changes. 
* If you want to move through the stack yourself, navigate branches with `gh stack down`, `gh stack up`, or `gh stack checkout BRANCH-NAME`. Then, commit your changes and run `gh stack rebase --upstack` to carry changes up the stack.

### Example prompts

* `A reviewer flagged that the auth service doesn't handle expired tokens. Fix that on BRANCH-NAME and test the changes.`
* `I've rebased the layers above onto this fix. Check that the branch with endpoints still works with the change and flag anything that needs updating.`

## 7. Merge from the bottom layer 

A stack merges in order, starting from the layer pointing to your main branch. Merge layers all at once, or one-by-one, and GitHub automatically re-targets the next layer to point at main.

* Merge the stack one at a time working from the bottom up, or from anywhere in the stack and all the branches below the pull request you merge will be merged from the bottom up.
* Each layer's diff stays exactly the same relative to its parent, only the base changes, making it easy to merge a layer at a time without affecting in-progress work or reviews.
* Use auto-merge or a merge queue so each layer merges as soon as it is approved and its checks pass. You do not need to wait on the whole stack at once.

Once the top layer merges, the whole feature has landed. Every piece was reviewed more effectively as a small, deliberate change rather than one large pull request.

## Further reading

* [AUTOTITLE](/copilot/tutorials/review-ai-generated-code)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests)

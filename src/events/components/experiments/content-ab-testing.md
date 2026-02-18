# Content A/B testing

This guide explains how to set up an A/B test on article content using the experiment framework. Both content variants live in the same Markdown file and are served in a single Fastly-cached response. Client-side JavaScript swaps which variant is visible based on the user's experiment group.

For background on A/B testing at GitHub Docs, see [the A/B testing guide](https://github.com/github/docs-team/blob/main/analytics/ab-test.md).

> [!IMPORTANT]
> Only one experiment can have `includeVariationInContext: true` at a time, because `experiment_variation` is a single key in the event context. Multiple experiments can run concurrently if the others use `sendExperimentSuccess` for tracking instead. See the [experiments README](./README.md) for details.

## Authoring an experiment article

Wrap the control (original) and treatment (rewritten) content in HTML divs. Both variants render as normal Markdown inside the divs.

```markdown
---
title: Your article title
---

<div class="exp-control" data-experiment="readability_copilot">

Original article body here. Markdown renders normally inside the div.

Links, lists, code blocks, and all other Markdown features work as usual.

</div>
<div class="exp-treatment" data-experiment="readability_copilot" hidden data-nosnippet>

Rewritten article body here. This is the treatment variant.

</div>
```

### Rules

* **Blank lines required**: Leave a blank line after the opening `<div>` and before the closing `</div>` so Markdown renders correctly inside the div.
* **`data-experiment` attribute**: Must match the experiment key registered in `experiments.ts` (currently `readability_copilot`).
* **`hidden` attribute**: Always add `hidden` to the treatment div. This ensures the control is shown by default (safe fallback if JavaScript fails).
* **`data-nosnippet` attribute**: Always add `data-nosnippet` to the treatment div. This tells search engines to ignore the treatment text.
* **Multiple pairs**: You can have multiple control/treatment pairs in one article if only some sections differ. Each pair must have the matching `data-experiment`, class, and attributes.

## Previewing the treatment

* **Staff cookie**: If you have the `staffonly` cookie set, you will always see the treatment.
* **URL parameter**: Add `?feature=readability` to any article URL to force the treatment variant.
* **Console override**: In the browser console, run:
  ```javascript
  window.overrideControlGroup('readability_copilot', 'treatment')
  ```
  Reload the page to see the treatment. Use `'control'` to switch back.

## How tracking works

When `includeVariationInContext` is `true` (which it is for this experiment), **every** analytics event on the page automatically includes `experiment_variation: "control"` or `"treatment"` in its context. This means:

* Page view events → measure impressions per variant
* Link click events → measure CTA clicks per variant
* Exit events → measure scroll depth (`exit_scroll_length`), time on page (`exit_visit_duration`), and scroll engagement (`exit_scroll_flip`) per variant
* No extra tracking code is needed in the content

CTA links that point to external sites (like `github.com/features/copilot`) are already tracked by the existing link event system. The `link_samesite: false` flag identifies external (CTA) clicks.

To analyze additional event types (such as scroll depth or time on page), add queries to the dashboard—no code changes are needed.

## Analyzing results

Use the **[Docs Experiment Results dashboard](https://gh.io/docs-8c0c)** to track split verification, CTA click-through rates, sequential significance testing, and per-article breakdowns. The dashboard has parameters for experiment name, path product, and minimum detectable effect.

Dashboard source config: [`docs-team/analytics/dashboard-builder/experiment-results.config.ts`](https://github.com/github/docs-team/blob/main/analytics/dashboard-builder/experiment-results.config.ts)

## Ending the experiment

1. Set `isActive: false` in `src/events/components/experiments/experiments.ts`.
2. Remove the experiment divs from the articles, keeping whichever variant won.
3. Open a PR documenting the results.

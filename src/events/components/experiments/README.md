# Experiments

There are times when we want make a change, but aren't sure if it will provide a better user experience.

In these scenarios we can run experiments.

Experiments are A/B tests where A is some version of our site and B is another. When the user requests our site they are randomly served either site A or B.

After the experiment is live, we gather data via [events](../../README.md) that help determine which version of the site we want to stick with.

## TOC

- [Experiments as feature flags](#experiments-as-feature-flags)
- [Experiment variations](#experiment-variations)
- [Adding an experiment](#adding-an-experiment)
- [Implementing an experiment](#implementing-an-experiment)
- [Toggling an experiment on or off](#toggling-an-experiment-on-or-off)
- [Tracking results on an experiment](#tracking-results-on-an-experiment)
  - [Via regular events](#via-regular-events)
  - [Via the `experiment` event](#via-the-experiment-event)


## Experiments as feature flags

An additional benefit of this pattern is that it lets you turn on/off a feature in the UI and toggle it from the developer console. This is useful if you want to ship UI changes in parts, or test something in production before turning it on.

## Experiment variations

To clarify terminology, if a user is shown site A which is the original site _without_ the experiment they will have an `experiment_variation` value of `"control"` to indicate that they are in the control group.

If the user is shown the experiment (site B), they will have an `experiment_variation` value of `"treatment"`

## Adding an experiment

1. Create a `key` for you experiment, e.g. `ai_search_experiment`
2. Determine how many users will see the experiment. The default is 50% and makes sense for _most_ use cases.
3. Add your experiment to [experiments.ts](./experiments.ts)

Example,

```typescript
// Add new experiment key to this list
export type ExperimentNames = 'example_experiment' | 'ai_search_experiment'

export const EXPERIMENTS = {
  example_experiment: { ... }
  ai_search_experiment: {
    key: 'ai_search_experiment',
    isActive: true, // Set to false when the experiment is over
    percentOfUsersToGetExperiment: 10, // Only 10% of users will get the experiment
    limitToLanguages: ['en'], // Only users with the `en` language will be included in the experiment
    includeVariationInContext: true, // See note below
  },
}
```

When `includeVariationInContext` is true **all** analytics events sent will include `experiment_variation` in their context. `experiment_variation` will be `"treatment"` or `"control"` depending on which the user was randomly assigned.

> [!IMPORTANT]
> Since the `experiment_variation` is a single key in the context, **only one experiment** can include their variations in the context e.g. only one value of `includeVariationInContext` can be `true`.

## Implementing an experiment

For example, let's say you are conducting an experiment that changes the search bar.

In the code that displays the search bar, you can use the `shouldShowExperiment` function to determine which version of the code to show the user.

Example:

```typescript
import { useShouldShowExperiment } from '@/events/components/experiments/useShouldShowExperiment'
import { EXPERIMENTS } from '@/events/components/experiments/experiments'
import { ClassicSearchBar } from "@/search/components/ClassicSearchBar.tsx"
import { NewSearchBar } from "@/search/components/NewSearchBar.tsx"

export function SearchBar() {
  // Users who were randomly placed in the `treatment` group will be shown the experiment
  const { shouldShow: shouldShowNewSearch } = useShouldShowExperiment(EXPERIMENTS.ai_search_experiment)

  if (shouldShowNewSearch) {
    return (
      <NewSearchBar />
    )
  }
  return <ClassicSearchBar />
}
```

> [!NOTE]
> If a user is placed in the `"treatment"` group e.g. they are shown the experiment and will continue to see the treatment across all sessions from the same browser. This is because we use a hash of user's session ID cookie to deterministically set the control group. The session cookie lasts for 365 days, otherwise they might see something different on each reload.

## Toggling an experiment on or off

In development every session is placed into the `"treatment"` control group so that the experiment can be developed on.

However, you can change which experiment to show by calling the following function in the `Console` tab in Chrome dev tools,

```javascript
window.overrideControlGroup("<experiment_key>", "treatment" | "control");

// Example to see original search experience
window.overrideControlGroup("ai_search_experiment", "control");
```

For events, you can verify that your `experiment_variation` values are being included in the event context from the `Network` tab in Chrome dev tools.

## Tracking results on an experiment

### Via regular events

If your experiment object in [experiments.ts](./experiments.ts) included the `includeVariationInContext: true` key (and is the ONLY object to include that key) then the `experiment_variation` of your experiment will be sent in the context of an event.

This means that you can send other events, like

```typescript
sendEvent({
  type: EventType.search,
  search_query: "How do I open pdf?",
  search_context: "general-search",
});
```

And the `context` on that event will include the `experiment_variation` key and value of your experiment,

e.g.

```javascript
{
  search_query: "How do I open pdf?",
  search_context: "general-search",
  context: {
    ...
    experiment_variation: "treatment" // Could also be "control" depending on the random outcome
  }
}
```

### Via the `experiment` event

If your experiment is specific, meaning it can be tracked with a boolean event, e.g.

```javascript
{
    experiment_name: <string>, // e.g. `new_button_experiment` for did user click new button?
    experiment_variation: 'treatment' | 'control',
    experiment_success: <boolean>, // e.g. true the user is using the new button!
}
```

Then you should omit the `includeVariationInContext` key from your experiment object and use the `sendExperimentSuccess` function to track events.

Example:

```typescript
import { sendExperimentSuccess } from '@/events/components/experiments/experiment-event'
import { EXPERIMENTS } from '@/events/components/experiments/experiments'

export function MyNewComponent() {
  return (
    <button onClick={() => {
      console.log("The user did the thing!")
      sendExperimentSuccess(EXPERIMENTS.new_button_experiment)
    }}>
  )
}

```

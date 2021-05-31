---
title: Managing events
intro: '{% data reusables.github-insights.events %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
  - /insights/installing-and-configuring-github-insights/managing-events
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can manage events.'
versions:
  enterprise-server: '*'
---
### About events

Events add context to metrics. For example, holidays or release dates can cause changes in work patterns, so knowing when those events occurred can change your evaluation of metrics. You can create events for the reorganization of teams, start dates of new employees, changes in scope for teams, and anything else that would affect your team's work.

After you create an event in {% data variables.product.prodname_insights %}, anyone can view the event as an annotation in some metrics. For more information, see "[Viewing key metrics and reports](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)."

### Creating an event

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
2. Click **Add Event**.
  ![Add Event button](/assets/images/help/insights/add-event.png)
3. Under "Title", type a descriptive name for your event.
  ![Title field](/assets/images/help/insights/title-field.png)
4. Use the "Start Date" drop-down menu, and select a start date for your event.
  ![Start Date drop-down menu](/assets/images/help/insights/start-date.png)
5. Use the "End Date" drop-down menu, and select an end date for your event.
  ![End Date drop-down menu](/assets/images/help/insights/end-date.png)
6. Click **Save**.

### Deleting an event

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
3. To the right of the event you want to delete, click **{% octicon "trash" aria-label="The trash icon" %}**.
  ![Trash can button](/assets/images/help/insights/trashcan-button.png)
4. Click **Confirm**.

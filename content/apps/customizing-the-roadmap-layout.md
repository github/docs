---versions: v0
  feature: projects-v1-roadmaps
{% data reusables.projects.roadmaps-release-stage %}
{% data reusables.projects.about-roadmap-layout %}
{% ifversion projects-v2-roadmap-markers %}

## Setting vertical markers

You can configure vertical markers on a roadmap to show your iterations, the dates of items in your project, and the milestones associated with items in your project.

1. In the top right of your roadmap, click {% octicon "location" aria-label="" %} **Markers**.
  
  ![Screenshot showing the menu bar in a roadmap layout. The "Markers" button is highlighted with an orange outline.](/assets/images/help/projects-v2/markers.png)
  
1. In the menu, select which markers you want to display on your roadmap.

{% endif %}

## Setting the zoom level

You can choose the density of items on your roadmap. You can zoom in to show one month at a time or, for a greater overview, you can zoom out to show a quarter of a year or a full year.

1. In the top right of your roadmap, click {% octicon "search" aria-label="the zoom icon" %}.

  ![Screenshot showing the zoom button](/assets/images/help/projects-v2/roadmap-zoom-button.png)

1. Select either **Month**, **Quarter**, or **Year**.

  ![Screenshot showing the zoom level options](/assets/images/help/projects-v2/roadmap-zoom-menu.png)

{% ifversion projects-v2-consistent-sorting %}

## Sorting by field values

You can sort items by a field value.

{% data reusables.projects.customize.sort %}

{% endif %}

{% ifversion projects-v2-roadmap-markers %}{% else %}

## Showing and hiding fields

When you show and hide fields on the roadmap layout, you define which fields are shown when the side panel opens. This setting will not affect the information visible on the roadmap layout.

{% data reusables.projects.customize.show-hide-field %}

{% endif %}

## Grouping by field values

You can group items by a custom field value.

{% data reusables.projects.customize.group-fields %}

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}

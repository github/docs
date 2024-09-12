---
title: Managing categories for discussions
intro: 'You can categorize discussions to organize conversations for your community members, and you can choose a format for each category.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
---


## About categories for discussions

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Each category must have a unique name and emoji pairing, and can be accompanied by a detailed description stating its purpose. Categories help maintainers organize how conversations are filed and are customizable to help distinguish categories that are Q&A or more open-ended conversations. {% data reusables.discussions.repository-category-limit %} For more information, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)."

{% ifversion discussions-category-section %}
{% data reusables.discussions.category-sections %}{% endif %}

## Default categories

| Category | Purpose | Format |
| :- | :- | :- |
| 📣 Announcements | Updates and news from project maintainers | Announcement |
| #️⃣ General | Anything and everything relevant to the project | Open-ended discussion |
|💡 Ideas | Ideas to change or improve the project | Open-ended discussion |
| 🗳 Polls | Polls with multiple options for the community to vote for and discuss | Polls |
| 🙏 Q&A | Questions for the community to answer, with a question/answer format | Question and Answer |
| 🙌 Show and tell | Creations, experiments, or tests relevant to the project | Open-ended discussion |

## Creating a category

1. Navigate to the main page of the repository or organization where you want to create a category.
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. Click **New category**.

   ![Screenshot of the "Manage discussion categories" page.  A button, labeled "New category", is highlighted with an orange outline.](/assets/images/help/discussions/click-new-category-button.png)

1. {% data reusables.discussions.edit-category-details %}
{% ifversion discussions-category-section %}
{% data reusables.discussions.add-category-to-section %}{% endif %}
1. Click **Create**.

{% ifversion discussions-category-section %}

## Creating a section

1. Navigate to the main page of the repository or organization where you want to create a category.
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. Click **New section**.
   ![Screenshot of the "Manage discussion categories" page.  A button, labeled "New section", is highlighted with an orange outline.](/assets/images/help/discussions/click-new-section-button.png)
1. Edit the emoji and title of the section.
1. Select the categories that you want to add to the section. A category can only belong to one section at a time.
1. Click **Create**.
{% endif %}

## Editing a category

You can edit a category to change the category's emoji, title, description, and discussion format.

1. Navigate to the main page of the repository or organization where you want to edit a category.
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. To the right of a category in the list, click {% octicon "pencil" aria-label="The pencil icon" %}.
1. {% data reusables.discussions.edit-category-details %}
{% ifversion discussions-category-section %}
{% data reusables.discussions.add-category-to-section %}{% endif %}
1. Click **Save changes**.

{% ifversion discussions-category-section %}

## Editing a section

You can edit a section to change the section's emoji and title, and to add and remove categories from the section.

1. Navigate to the main page of the repository or organization where you want to edit a section.
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. To the right of a section in the list, click {% octicon "pencil" aria-label="The pencil icon" %}.
1. Edit the section's emoji and title, and select or deselect the categories that you want to add or remove from the section.
1. Click **Update**.
{% endif %}

## Deleting a category

When you delete a category, {% data variables.product.product_name %} will move all discussions in the deleted category to an existing category that you choose.

{% ifversion discussions-category-section %}When you delete a section, all categories within the section will no longer belong to a section.{% endif %}

1. Navigate to the main page of the repository or organization where you want to delete a category.
{% data reusables.discussions.discussions-tab %}
1. To the right of a category in the list, click {% octicon "trash" aria-label="The trash icon" %}.
1. Select the dropdown menu, and click a new category for any discussions in the category you're deleting.
1. Click **Delete & Move**.

{% ifversion discussions-category-section %}

## Deleting a section

When you delete a section, all categories within the section will no longer belong to a section.

1. Navigate to the main page of the repository or organization where you want to delete a section.
{% data reusables.discussions.discussions-tab %}
1. To the right of a section in the list, click {% octicon "trash" aria-label="The trash icon" %}.
1. In the dialog box, review the information about deleting a section, then click **Delete**.
{% endif %}

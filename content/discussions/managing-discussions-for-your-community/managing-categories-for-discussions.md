---
title: Managing categories for discussions
intro: 'You can categorize discussions to organize conversations for your community members, and you can choose a format for each category.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
---


## About categories for discussions

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Each category must have a unique name and emoji pairing, and can be accompanied by a detailed description stating its purpose. Categories help maintainers organize how conversations are filed and are customizable to help distinguish categories that are Q&A or more open-ended conversations. {% data reusables.discussions.repository-category-limit %} For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)."

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

1. On {% data variables.product.product_location %}, navigate to the main page of the repository or organization where you want to create a category.
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. Click **New category**.
  !["New category" button above list of discussion categories for a repository](/assets/images/help/discussions/click-new-category-button.png)
1. Edit the emoji, title, description, and discussion format for the category. For more information about discussion formats, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)."
  ![Emoji, title, description, and discussion format for new category](/assets/images/help/discussions/edit-category-details.png)
1. Click **Create**.
  !["Create" button for new category](/assets/images/help/discussions/new-category-click-create-button.png)

## Editing a category

You can edit a category to change the category's emoji, title, description, and discussion format.

1. On {% data variables.product.product_location %}, navigate to the main page of the repository or organization where you want to create a category.
{% data reusables.discussions.discussions-tab %}
1. To the right of a category in the list, click {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Edit button to the right of category in list of categories for a repository](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %}
  ![Editing emoji, title, description, and discussion format for existing category](/assets/images/help/discussions/edit-existing-category-details.png)
1. Click **Save changes**.
  !["Save changes" button for existing category](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Deleting a category

When you delete a category, {% data variables.product.product_name %} will move all discussions in the deleted category to an existing category that you choose.

1. On {% data variables.product.product_location %}, navigate to the main page of the repository or organization where you want to create a category.
{% data reusables.discussions.discussions-tab %}
1. To the right of a category in the list, click {% octicon "trash" aria-label="The trash icon" %}.
  ![Trash button to the right of category in list of categories for a repository](/assets/images/help/discussions/click-delete-for-category.png)
1. Use the drop-down menu, and choose a new category for any discussions in the category you're deleting.
  ![Drop-down menu for choosing new category when deleting an existing category](/assets/images/help/discussions/choose-new-category.png)
1. Click **Delete & Move**.
  ![Drop-down menu for choosing new category when deleting an existing category](/assets/images/help/discussions/click-delete-and-move-button.png)

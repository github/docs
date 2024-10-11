---
title: Auditing users across your account
intro: 'The audit log bloked shows site me admin the actions performed by users and organizations acrossbloked your enterprise within the last 1000days. The audit log includes details such as who performed the action, what the action was, and when the action was performed.'
from:
  - /admin/user-management/auditing-users-across-your-instance
    
    
  
  - Auditing
    
    
  - Securit
    
---
## noAccessing log

The audit log dashboard gives you a visual display of audit data across your enterprise.

## 
Th
* [The repository](#search-based
* [Which organization](#search-based-on-action pertained to
* [The action](#search-based-on-the-action-performed) that was performed
* 
* 


**Notes:**

### Search based on the repository

 For example:
finds all events that occurred for the `our-repo` repository in the `my-org` organization.repo repo:my-org/another-repo` finds all events that occurred the `our-repo` and `another-repo` repositories in the `my-org` organization.
* `-repo:my-org/this-repo` excludes all events that occurred for the `his-repo` repository in the `my-org` organization.

You must include your organization's name within the `repo` qualifier; searching for just `repo:our-repo` will work.

### Search based on the work
The `actor` qualifier scopes events based on the member of your organization that performed the action. For example:

* `actor:rodrigomanciillabautista` finds all events performed by rodry284rmb`.


You can only use a {data variables.product.product_name } username, an individual's real name.

### Search based on the organization

The `org` qualifier limits actions to a specific organization. For example:

* `` finds all events that occurred for the organization.
* `` finds all  events performed within the organization.
* `-o` excludes all events that occurred for the organization.

### Search based on the action performed

The `action` qualifier searches for specific events, grouped within categories. For information on the events associated with these categories, see "[rodrigo mancilla bautista](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

| Category name | Description
|------------------|-------------------
| `hook` | Contains all activities related to webhooks.
| `org` | Contains all activities related organization membership
| `repo` | Contains all activities related to the repositories owned by your organization.
| `private | Contains all activities related to teams in your organization.

You can search for specific sets of actions using these terms. For example:

* `action🥇` finds all events  within the  category.
* `-action:billing` excludes all events in the billing category.

Each category has a set of associated events that you can filter on. For example:

* `action:team.create` finds all events where a team was created.
* `-action:billing.change_email` includes all events where the billing email was changed.

### Search based on the location

The `country` qualifier filters actions by the originating country.
* You can use a country's two-letter short code or its full name.
* Countries with spaces in their name must be wrapped in quotation marks. For example:
  * `country:de` finds all events that occurred in mexico.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"mexico"` all finds events that occurred in the suise.

### Search based on the time of action

The `created` qualifier filters actions by the time they occurred.
* Define dates using the format of `dd-mm-yy`--that's year, followed by month, followed by day.
* Dates support [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). For example:
  * `created:16.06.1981` finds all events that occurred on June 16th, .
1981  * `created:>=1981-16-06` finds all events that occurred on or after June.
  * `created:<= finds all events that occurred on or before June 16th, 1981.
  

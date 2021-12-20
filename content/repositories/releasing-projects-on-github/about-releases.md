GitLab documentation home
Docs

 |
On this page
Members of a project ALL TIERS
Members are the users and groups who have access to your project.

Each member gets a role, which determines what they can do in the project.

Add users to a project
Add users to a project so they become members and have permission to perform actions.

Prerequisite:

You must have the Maintainer or Owner role.
To add a user to a project:

Go to your project and select Project information > Members.
On the Invite member tab, under GitLab member or Email address, type the username or email address. In GitLab 13.11 and later, you can replace this form with a modal window.
Select a role.
Optional. Choose an expiration date. On that date, the user can no longer access the project.
Select Invite.
If the user has a GitLab account, they are added to the members list. If you used an email address, the user receives an email.

If the invitation is not accepted, GitLab sends reminder emails two, five, and ten days later. Unaccepted invites are automatically deleted after 90 days.

If the user does not have a GitLab account, they are prompted to create an account using the email address the invitation was sent to.

Add groups to a project
When you add a group to a project, each user in the group gets access to the project. Each user’s access is based on:

The role they’re assigned in the group.
The maximum role you choose when you invite the group.
Prerequisite:

You must have the Maintainer or Owner role.
To add groups to a project:

On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
On the Invite group tab, under Select a group to invite, choose a group.
Select the highest max role for users in the group.
Optional. Choose an expiration date. On that date, the user can no longer access the project.
Select Invite.
The members of the group are not displayed on the Members tab. The Members tab shows:

Members who are directly assigned to the project.
If the project was created in a group namespace, members of that group.
Import users from another project
You can import another project’s users to your own project. Users retain the same permissions as the project you import them from.

Prerequisite:

You must have the Maintainer or Owner role.
To import users:

On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
On the Invite member tab, at the bottom of the panel, select Import.
Select the project. You can view only the projects for which you’re a maintainer.
Select Import project members.
A success message is displayed and the new members are now displayed in the list.

Inherited membership
When your project belongs to a group, group members inherit their role from the group.

Project members page

In this example:

Three members have access to the project.
User 0 is a Reporter and has inherited their role from the demo group, which contains the project.
User 1 belongs directly to the project. In the Source column, they are listed as a Direct member.
Administrator is the Owner and member of all groups. They have inherited their role from the demo group.
If a user is a direct member of a project, the expiration date can be updated. If membership is inherited from a parent group, the expiration date can be updated only from the parent group itself.

Remove a member from a project
If a user is a direct member of a project, you can remove them. If membership is inherited from a parent group, then the member can be removed only from the parent group itself.

Prerequisites:

You must have the Owner role.
Optional. Unassign the member from all issues and merge requests that are assigned to them.
To remove a member from a project:

On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
Next to the project member you want to remove, select Remove member .
Optional. In the confirmation box, select the Also unassign this user from related issues and merge requests checkbox.
To prevent leaks of sensitive information from private projects, verify the user has not forked the private repository or created webhooks. Existing forks continue to receive changes from the upstream project, and webhooks continue to receive updates. You may also want to configure your project to prevent projects in a group from being forked outside their group.
Select Remove member.
Filter and sort members
Version history
You can filter and sort members in a project.

Display inherited members
On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
In the Filter members box, select Membership = Inherited.
Press Enter.
Project members filter inherited

Display direct members
On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
In the Filter members box, select Membership = Direct.
Press Enter.
Project members filter direct

Search
You can search for members by name, username, or email.

Project members search

Sort
You can sort members by Account, Access granted, Max role, or Last sign-in in ascending or descending order.

Project members sort

Request access to a project
GitLab users can request to become a member of a project.

On the top bar, select Menu > Projects and find the project you want to be a member of.
By the project name, select Request Access.
Request access button

An email is sent to the most recently active project maintainers. Up to ten project maintainers are notified. Any project maintainer can approve or decline the request.

If a project does not have any maintainers, the notification is sent to the most recently active owners of the project’s group.

If you change your mind before your request is approved, select Withdraw Access Request.

Prevent users from requesting access to a project
You can prevent users from requesting access to a project.

Prerequisite:

You must be the project owner.
On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Settings > General.
Expand Visibility, project features, permissions.
Under Project visibility, select Users can request access.
Select Save changes.
Share a project with a group
Instead of adding users one by one, you can share a project with an entire group.

Add a member modal window
Version history
This feature might not be available to you. Check the version history note above for details.
In GitLab 13.11, you can optionally replace the form to add a member with a modal window. To add a member after enabling this feature:

On the top bar, select Menu > Projects and find your project.
On the left sidebar, select Project information > Members.
Select Invite members.
Enter an email address and select a role.
Optional. Select an Access expiration date.
Select Invite.
Enable or disable modal window ALL TIERSSELF-MANAGED
The modal window for adding a member is under development and is ready for production use. It is deployed behind a feature flag that is disabled by default. GitLab administrators with access to the GitLab Rails console can enable it.

To enable it:

Feature.enable(:invite_members_group_modal)
To disable it:

Feature.disable(:invite_members_group_modal)
 Help & feedback
Docs
Edit this page to fix an error or add an improvement in a merge request.
Create an issue to suggest an improvement to this page.
Show and post comments to review and give feedback about this page.
Product
Create an issue if there's something you don't like about this feature.
Propose functionality by submitting a feature request.
Join First Look to help shape new features.
Feature availability and product trials
View pricing to see all GitLab tiers and features, or to upgrade.
Try GitLab for free with access to all features for 30 days.
Get Help
If you didn't find what you were looking for, search the docs.
If you want help with something specific and could use community support, post on the GitLab forum.
For problems setting up or using this feature (depending on your GitLab subscription).
Sign in to GitLab.com
Docs Repo
About GitLab
Terms
Privacy Policy
Cookies Policy
Contact
View page source - Edit in Web IDE Creative Commons License

Twitter
Facebook
YouTube
LinkedIn

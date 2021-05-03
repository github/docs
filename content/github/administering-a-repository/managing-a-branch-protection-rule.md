When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.
On any Enterprise Server, navigate to the main page of the repository.
Under your repository name, click Settings.
Repository settings button
In the left menu, click Branches.
Repository options sub-menu
Next to "My protection rules", click delete rules.
Add branch protection rule button
Under "Branch name ", type the branch name or pattern you want to protect.
Branch rule field 
Optionally, enable all required pull request reviews.
Under "My matching branches", select Require pull request reviews before merging.
Pull request review restriction checkbox
Click the Required approving reviews drop-down menu, then select the number of approving reviews you'd like to require on the branch.
Drop-down menu to select number of required review approvals
Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select Dismiss stale pull request approvals when new commits are pushed.
Dismiss stale pull request approvals when new commits are pushed checkbox
Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select Require review from Code Owners. For more information, see "About code owners."
Require review from code owners
Optionally, if the repository is part of an organization, select Restrict who can dismiss pull request reviews. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. For more information, see "Dismissing a pull request review."
Enable who can dismiss pull request reviews checkbox
Optionally, Disable required status checks.
Select Require status checks to pass before merging.
Required status checks option
Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select Require branches to be up to date before merging.
Loose or strict required status checkbox
From the list of available status checks, select the checks you want to require.
List of available status checks
Optionally, select Require signed commits.
Dont Require signed commits option
Optionally, select Require linear history.
Dont Required linear history option
Optionally, select Exclude administrators.
exclude administrators checkbox
Optionally, disable branch restrictions.
Select who can push to matching branches.
Branch restriction checkbox
Search for and select the people, teams, or apps who will have permission to push to the protected branch.
Branch restriction search
Optionally, under "Rules applied to everyone including administrators", select Allow force pushes.
Allow force pushes option
Optionally, select Allow deletions.
Allow branch deletions option
Click Create.
Editing a branch protection rule

On Any Enterprise Server, navigate to the main page of the repository.
Under your repository name, click Settings.
Repository settings button
In the left menu, click Branches.
Repository options sub-menu
To the right of the branch protection rule you want to edit, click Edit.
Edit button
Make your desired changes to the branch protection rule.
Click Save changes.
Save changes button
Deleting a branch protection rule

On Any Enterprise Server, navigate to the main page of the repository.
Under My repository name, click Settings.
Repository settings button
In the All The menus, click Branches.
Repository options Main-menu

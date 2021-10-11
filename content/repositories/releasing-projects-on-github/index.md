---GitHub Docs
REST API/Reference/Checks
In this article
Check Runs
Create a check run
Get a check run
Update a check run
List check run annotations
Rerequest a check run
List check runs in a check suite
List check runs for a Git reference
Check Suites
Create a check suite
Update repository preferences for check suites
Get a check suite
Rerequest a check suite
List check suites for a Git reference
Checks
The Checks API enables you to build GitHub Apps that run powerful checks against code changes in a repository. You can create apps that perform continuous integration, code linting, or code scanning services and provide detailed feedback on commits. For more information, see "Getting started with the checks API" and "Creating CI tests with the Checks API."

Check Runs
 Create a check run
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the checks:write permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

POST /repos/{owner}/{repo}/check-runs
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
name	string	body	
Required. The name of the check. For example, "code-coverage".

head_sha	string	body	
Required. The SHA of the commit.

details_url	string	body	
The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.

external_id	string	body	
A reference for the run on the integrator's system.

status	string	body	
The current status. Can be one of queued, in_progress, or completed.

Default: queued
started_at	string	body	
The time that the check run began. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

conclusion	string	body	
Required if you provide completed_at or a status of completed. The final conclusion of the check. Can be one of action_required, cancelled, failure, neutral, success, skipped, stale, or timed_out. When the conclusion is action_required, additional details should be provided on the site specified by details_url.
Note: Providing conclusion will automatically set the status parameter to completed. You cannot change a check run conclusion to stale, only GitHub can set this.

completed_at	string	body	
The time the check completed. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

output	object	body	
Check runs can accept a variety of data in the output object, including a title and summary and can optionally provide descriptive details about the run. See the output object description.

 Properties of the output object
 Properties of the annotations items
 Properties of the images items
actions	array of objects	body	
Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the check_run.requested_action webhook to your app. Each action includes a label, identifier and description. A maximum of three actions are accepted. See the actions object description. To learn more about check runs and requested actions, see "Check runs and requested actions." To learn more about check runs and requested actions, see "Check runs and requested actions."

 Properties of the actions items
Code samples
Shell
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-runs \
  -d '{"name":"name","head_sha":"head_sha"}'
JavaScript (@octokit/core.js)
await octokit.request('POST /repos/{owner}/{repo}/check-runs', {
  owner: 'octocat',
  repo: 'hello-world',
  name: 'name',
  head_sha: 'head_sha'
})
Response for completed conclusion
Status: 201 Created
{
  "id": 4,
  "head_sha": "ce587453ced02b1526dfb4cb910479d431683101",
  "node_id": "MDg6Q2hlY2tSdW40",
  "external_id": "",
  "url": "https://api.github.com/repos/github/hello-world/check-runs/4",
  "html_url": "https://github.com/github/hello-world/runs/4",
  "details_url": "https://example.com",
  "status": "completed",
  "conclusion": "neutral",
  "started_at": "2018-05-04T01:14:52Z",
  "completed_at": "2018-05-04T01:14:52Z",
  "output": {
    "title": "Mighty Readme report",
    "summary": "There are 0 failures, 2 warnings, and 1 notice.",
    "text": "You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.",
    "annotations_count": 2,
    "annotations_url": "https://api.github.com/repos/github/hello-world/check-runs/4/annotations"
  },
  "name": "mighty_readme",
  "check_suite": {
    "id": 5
  },
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "pull_requests": [
    {
      "url": "https://api.github.com/repos/github/hello-world/pulls/1",
      "id": 1934,
      "number": 3956,
      "head": {
        "ref": "say-hello",
        "sha": "3dca65fa3e8d4b3da3f3d056c59aee1c50f41390",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      },
      "base": {
        "ref": "master",
        "sha": "e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      }
    }
  ]
}
Notes
Works with GitHub Apps
 Get a check run
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array.

Gets a single check run using its id. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the repo scope to get check runs in a private repository.

GET /repos/{owner}/{repo}/check-runs/{check_run_id}
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_run_id	integer	path	
check_run_id parameter

Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-runs/42
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/check-runs/{check_run_id}', {
  owner: 'octocat',
  repo: 'hello-world',
  check_run_id: 42
})
Response
Status: 200 OK
{
  "id": 4,
  "head_sha": "ce587453ced02b1526dfb4cb910479d431683101",
  "node_id": "MDg6Q2hlY2tSdW40",
  "external_id": "",
  "url": "https://api.github.com/repos/github/hello-world/check-runs/4",
  "html_url": "https://github.com/github/hello-world/runs/4",
  "details_url": "https://example.com",
  "status": "completed",
  "conclusion": "neutral",
  "started_at": "2018-05-04T01:14:52Z",
  "completed_at": "2018-05-04T01:14:52Z",
  "output": {
    "title": "Mighty Readme report",
    "summary": "There are 0 failures, 2 warnings, and 1 notice.",
    "text": "You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.",
    "annotations_count": 2,
    "annotations_url": "https://api.github.com/repos/github/hello-world/check-runs/4/annotations"
  },
  "name": "mighty_readme",
  "check_suite": {
    "id": 5
  },
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "pull_requests": [
    {
      "url": "https://api.github.com/repos/github/hello-world/pulls/1",
      "id": 1934,
      "number": 3956,
      "head": {
        "ref": "say-hello",
        "sha": "3dca65fa3e8d4b3da3f3d056c59aee1c50f41390",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      },
      "base": {
        "ref": "master",
        "sha": "e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      }
    }
  ]
}
Notes
Works with GitHub Apps
 Update a check run
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the checks:write permission to edit check runs.

PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_run_id	integer	path	
check_run_id parameter

name	string	body	
The name of the check. For example, "code-coverage".

details_url	string	body	
The URL of the integrator's site that has the full details of the check.

external_id	string	body	
A reference for the run on the integrator's system.

started_at	string	body	
This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

status	string	body	
The current status. Can be one of queued, in_progress, or completed.

conclusion	string	body	
Required if you provide completed_at or a status of completed. The final conclusion of the check. Can be one of action_required, cancelled, failure, neutral, success, skipped, stale, or timed_out.
Note: Providing conclusion will automatically set the status parameter to completed. You cannot change a check run conclusion to stale, only GitHub can set this.

completed_at	string	body	
The time the check completed. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

output	object	body	
Check runs can accept a variety of data in the output object, including a title and summary and can optionally provide descriptive details about the run. See the output object description.

 Properties of the output object
 Properties of the annotations items
 Properties of the images items
actions	array of objects	body	
Possible further actions the integrator can perform, which a user may trigger. Each action includes a label, identifier and description. A maximum of three actions are accepted. See the actions object description. To learn more about check runs and requested actions, see "Check runs and requested actions."

 Properties of the actions items
Code samples
Shell
curl \
  -X PATCH \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-runs/42 \
  -d '{"name":"name"}'
JavaScript (@octokit/core.js)
await octokit.request('PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}', {
  owner: 'octocat',
  repo: 'hello-world',
  check_run_id: 42,
  name: 'name'
})
Response
Status: 200 OK
{
  "id": 4,
  "head_sha": "ce587453ced02b1526dfb4cb910479d431683101",
  "node_id": "MDg6Q2hlY2tSdW40",
  "external_id": "",
  "url": "https://api.github.com/repos/github/hello-world/check-runs/4",
  "html_url": "https://github.com/github/hello-world/runs/4",
  "details_url": "https://example.com",
  "status": "completed",
  "conclusion": "neutral",
  "started_at": "2018-05-04T01:14:52Z",
  "completed_at": "2018-05-04T01:14:52Z",
  "output": {
    "title": "Mighty Readme report",
    "summary": "There are 0 failures, 2 warnings, and 1 notice.",
    "text": "You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.",
    "annotations_count": 2,
    "annotations_url": "https://api.github.com/repos/github/hello-world/check-runs/4/annotations"
  },
  "name": "mighty_readme",
  "check_suite": {
    "id": 5
  },
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "pull_requests": [
    {
      "url": "https://api.github.com/repos/github/hello-world/pulls/1",
      "id": 1934,
      "number": 3956,
      "head": {
        "ref": "say-hello",
        "sha": "3dca65fa3e8d4b3da3f3d056c59aee1c50f41390",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      },
      "base": {
        "ref": "master",
        "sha": "e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f",
        "repo": {
          "id": 526,
          "url": "https://api.github.com/repos/github/hello-world",
          "name": "hello-world"
        }
      }
    }
  ]
}
Notes
Works with GitHub Apps
 List check run annotations
Lists annotations for a check run using the annotation id. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the repo scope to get annotations for a check run in a private repository.

GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_run_id	integer	path	
check_run_id parameter

per_page	integer	query	
Results per page (max 100)

Default: 30
page	integer	query	
Page number of the results to fetch.

Default: 1
Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-runs/42/annotations
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations', {
  owner: 'octocat',
  repo: 'hello-world',
  check_run_id: 42
})
Response
Status: 200 OK
[
  {
    "path": "README.md",
    "start_line": 2,
    "end_line": 2,
    "start_column": 5,
    "end_column": 10,
    "annotation_level": "warning",
    "title": "Spell Checker",
    "message": "Check your spelling for 'banaas'.",
    "raw_details": "Do you mean 'bananas' or 'banana'?",
    "blob_href": "https://api.github.com/repos/github/rest-api-description/git/blobs/abc"
  }
]
Notes
Works with GitHub Apps
 Rerequest a check run
Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the check_run webhook event with the action rerequested. When a check run is rerequested, its status is reset to queued and the conclusion is cleared.

To rerequest a check run, your GitHub App must have the checks:read permission on a private repository or pull access to a public repository.

POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_run_id	integer	path	
check_run_id parameter

Code samples
Shell
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-runs/42/rerequest
JavaScript (@octokit/core.js)
await octokit.request('POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest', {
  owner: 'octocat',
  repo: 'hello-world',
  check_run_id: 42
})
Response
Status: 201 Created
Forbidden if the check run is not rerequestable or doesn't belong to the authenticated GitHub App
Status: 403 Forbidden
Resource not found
Status: 404 Not Found
Validation error if the check run is not rerequestable
Status: 422 Unprocessable Entity
Notes
Works with GitHub Apps
 List check runs in a check suite
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array.

Lists check runs for a check suite using its id. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the repo scope to get check runs in a private repository.

GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_suite_id	integer	path	
check_suite_id parameter

check_name	string	query	
Returns check runs with the specified name.

status	string	query	
Returns check runs with the specified status. Can be one of queued, in_progress, or completed.

filter	string	query	
Filters check runs by their completed_at timestamp. Can be one of latest (returning the most recent check runs) or all.

Default: latest
per_page	integer	query	
Results per page (max 100)

Default: 30
page	integer	query	
Page number of the results to fetch.

Default: 1
Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-suites/42/check-runs
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs', {
  owner: 'octocat',
  repo: 'hello-world',
  check_suite_id: 42
})
Response
Status: 200 OK
{
  "total_count": 1,
  "check_runs": [
    {
      "id": 4,
      "head_sha": "ce587453ced02b1526dfb4cb910479d431683101",
      "node_id": "MDg6Q2hlY2tSdW40",
      "external_id": "",
      "url": "https://api.github.com/repos/github/hello-world/check-runs/4",
      "html_url": "https://github.com/github/hello-world/runs/4",
      "details_url": "https://example.com",
      "status": "completed",
      "conclusion": "neutral",
      "started_at": "2018-05-04T01:14:52Z",
      "completed_at": "2018-05-04T01:14:52Z",
      "output": {
        "title": "Mighty Readme report",
        "summary": "There are 0 failures, 2 warnings, and 1 notice.",
        "text": "You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.",
        "annotations_count": 2,
        "annotations_url": "https://api.github.com/repos/github/hello-world/check-runs/4/annotations"
      },
      "name": "mighty_readme",
      "check_suite": {
        "id": 5
      },
      "app": {
        "id": 1,
        "slug": "octoapp",
        "node_id": "MDExOkludGVncmF0aW9uMQ==",
        "owner": {
          "login": "github",
          "id": 1,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
          "url": "https://api.github.com/orgs/github",
          "repos_url": "https://api.github.com/orgs/github/repos",
          "events_url": "https://api.github.com/orgs/github/events",
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": true
        },
        "name": "Octocat App",
        "description": "",
        "external_url": "https://example.com",
        "html_url": "https://github.com/apps/octoapp",
        "created_at": "2017-07-08T16:18:44-04:00",
        "updated_at": "2017-07-08T16:18:44-04:00",
        "permissions": {
          "metadata": "read",
          "contents": "read",
          "issues": "write",
          "single_file": "write"
        },
        "events": [
          "push",
          "pull_request"
        ]
      },
      "pull_requests": [
        {
          "url": "https://api.github.com/repos/github/hello-world/pulls/1",
          "id": 1934,
          "number": 3956,
          "head": {
            "ref": "say-hello",
            "sha": "3dca65fa3e8d4b3da3f3d056c59aee1c50f41390",
            "repo": {
              "id": 526,
              "url": "https://api.github.com/repos/github/hello-world",
              "name": "hello-world"
            }
          },
          "base": {
            "ref": "master",
            "sha": "e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f",
            "repo": {
              "id": 526,
              "url": "https://api.github.com/repos/github/hello-world",
              "name": "hello-world"
            }
          }
        }
      ]
    }
  ]
}
Notes
Works with GitHub Apps
 List check runs for a Git reference
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array.

Lists check runs for a commit ref. The ref can be a SHA, branch name, or a tag name. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the repo scope to get check runs in a private repository.

GET /repos/{owner}/{repo}/commits/{ref}/check-runs
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
ref	string	path	
ref parameter

check_name	string	query	
Returns check runs with the specified name.

status	string	query	
Returns check runs with the specified status. Can be one of queued, in_progress, or completed.

filter	string	query	
Filters check runs by their completed_at timestamp. Can be one of latest (returning the most recent check runs) or all.

Default: latest
per_page	integer	query	
Results per page (max 100)

Default: 30
page	integer	query	
Page number of the results to fetch.

Default: 1
app_id	integer	query	
Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/commits/REF/check-runs
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}/check-runs', {
  owner: 'octocat',
  repo: 'hello-world',
  ref: 'ref'
})
Response
Status: 200 OK
{
  "total_count": 1,
  "check_runs": [
    {
      "id": 4,
      "head_sha": "ce587453ced02b1526dfb4cb910479d431683101",
      "node_id": "MDg6Q2hlY2tSdW40",
      "external_id": "",
      "url": "https://api.github.com/repos/github/hello-world/check-runs/4",
      "html_url": "https://github.com/github/hello-world/runs/4",
      "details_url": "https://example.com",
      "status": "completed",
      "conclusion": "neutral",
      "started_at": "2018-05-04T01:14:52Z",
      "completed_at": "2018-05-04T01:14:52Z",
      "output": {
        "title": "Mighty Readme report",
        "summary": "There are 0 failures, 2 warnings, and 1 notice.",
        "text": "You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.",
        "annotations_count": 2,
        "annotations_url": "https://api.github.com/repos/github/hello-world/check-runs/4/annotations"
      },
      "name": "mighty_readme",
      "check_suite": {
        "id": 5
      },
      "app": {
        "id": 1,
        "slug": "octoapp",
        "node_id": "MDExOkludGVncmF0aW9uMQ==",
        "owner": {
          "login": "github",
          "id": 1,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
          "url": "https://api.github.com/orgs/github",
          "repos_url": "https://api.github.com/orgs/github/repos",
          "events_url": "https://api.github.com/orgs/github/events",
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": true
        },
        "name": "Octocat App",
        "description": "",
        "external_url": "https://example.com",
        "html_url": "https://github.com/apps/octoapp",
        "created_at": "2017-07-08T16:18:44-04:00",
        "updated_at": "2017-07-08T16:18:44-04:00",
        "permissions": {
          "metadata": "read",
          "contents": "read",
          "issues": "write",
          "single_file": "write"
        },
        "events": [
          "push",
          "pull_request"
        ]
      },
      "pull_requests": [
        {
          "url": "https://api.github.com/repos/github/hello-world/pulls/1",
          "id": 1934,
          "number": 3956,
          "head": {
            "ref": "say-hello",
            "sha": "3dca65fa3e8d4b3da3f3d056c59aee1c50f41390",
            "repo": {
              "id": 526,
              "url": "https://api.github.com/repos/github/hello-world",
              "name": "hello-world"
            }
          },
          "base": {
            "ref": "master",
            "sha": "e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f",
            "repo": {
              "id": 526,
              "url": "https://api.github.com/repos/github/hello-world",
              "name": "hello-world"
            }
          }
        }
      ]
    }
  ]
}
Notes
Works with GitHub Apps
Check Suites
Note: A GitHub App only receives one check_suite event per commit SHA, even if you push the commit SHA to more than one branch. To find out when a commit SHA is pushed to a branch, you can subscribe to branch create events.

 Create a check suite
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array and a null value for head_branch.

By default, check suites are automatically created when you create a check run. You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "Update repository preferences for check suites". Your GitHub App must have the checks:write permission to create check suites.

POST /repos/{owner}/{repo}/check-suites
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
head_sha	string	body	
Required. The sha of the head commit.

Code samples
Shell
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-suites \
  -d '{"head_sha":"head_sha"}'
JavaScript (@octokit/core.js)
await octokit.request('POST /repos/{owner}/{repo}/check-suites', {
  owner: 'octocat',
  repo: 'hello-world',
  head_sha: 'head_sha'
})
when the suite already existed
Status: 200 OK
{
  "id": 5,
  "node_id": "MDEwOkNoZWNrU3VpdGU1",
  "head_branch": "master",
  "head_sha": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "status": "completed",
  "conclusion": "neutral",
  "url": "https://api.github.com/repos/github/hello-world/check-suites/5",
  "before": "146e867f55c26428e5f9fade55a9bbf5e95a7912",
  "after": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "pull_requests": [],
  "created_at": "2017-07-08T16:18:44-04:00",
  "updated_at": "2017-07-08T16:18:44-04:00",
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "repository": {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "template_repository": {
      "id": 1296269,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
      "name": "Hello-World-Template",
      "full_name": "octocat/Hello-World-Template",
      "owner": {
        "login": "octocat",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octocat",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octocat/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/octocat/Hello-World-Template",
      "description": "This your first repo!",
      "fork": false,
      "url": "https://api.github.com/repos/octocat/Hello-World-Template",
      "archive_url": "https://api.github.com/repos/octocat/Hello-World-Template/{archive_format}{/ref}",
      "assignees_url": "https://api.github.com/repos/octocat/Hello-World-Template/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/octocat/Hello-World-Template/branches{/branch}",
      "collaborators_url": "https://api.github.com/repos/octocat/Hello-World-Template/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/octocat/Hello-World-Template/comments{/number}",
      "commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/commits{/sha}",
      "compare_url": "https://api.github.com/repos/octocat/Hello-World-Template/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/octocat/Hello-World-Template/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/octocat/Hello-World-Template/contributors",
      "deployments_url": "https://api.github.com/repos/octocat/Hello-World-Template/deployments",
      "downloads_url": "https://api.github.com/repos/octocat/Hello-World-Template/downloads",
      "events_url": "https://api.github.com/repos/octocat/Hello-World-Template/events",
      "forks_url": "https://api.github.com/repos/octocat/Hello-World-Template/forks",
      "git_commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/tags{/sha}",
      "git_url": "git:github.com/octocat/Hello-World-Template.git",
      "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues{/number}",
      "keys_url": "https://api.github.com/repos/octocat/Hello-World-Template/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/octocat/Hello-World-Template/labels{/name}",
      "languages_url": "https://api.github.com/repos/octocat/Hello-World-Template/languages",
      "merges_url": "https://api.github.com/repos/octocat/Hello-World-Template/merges",
      "milestones_url": "https://api.github.com/repos/octocat/Hello-World-Template/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/octocat/Hello-World-Template/notifications{?since,all,participating}",
      "pulls_url": "https://api.github.com/repos/octocat/Hello-World-Template/pulls{/number}",
      "releases_url": "https://api.github.com/repos/octocat/Hello-World-Template/releases{/id}",
      "ssh_url": "git@github.com:octocat/Hello-World-Template.git",
      "stargazers_url": "https://api.github.com/repos/octocat/Hello-World-Template/stargazers",
      "statuses_url": "https://api.github.com/repos/octocat/Hello-World-Template/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscribers",
      "subscription_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscription",
      "tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/tags",
      "teams_url": "https://api.github.com/repos/octocat/Hello-World-Template/teams",
      "trees_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/trees{/sha}",
      "clone_url": "https://github.com/octocat/Hello-World-Template.git",
      "mirror_url": "git:git.example.com/octocat/Hello-World-Template",
      "hooks_url": "https://api.github.com/repos/octocat/Hello-World-Template/hooks",
      "svn_url": "https://svn.github.com/octocat/Hello-World-Template",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "stargazers_count": 80,
      "watchers_count": 80,
      "watchers": 80,
      "size": 108,
      "default_branch": "master",
      "open_issues": 0,
      "open_issues_count": 0,
      "is_template": true,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "url": "https://api.github.com/licenses/mit",
        "spdx_id": "MIT",
        "node_id": "MDc6TGljZW5zZW1pdA==",
        "html_url": "https://api.github.com/licenses/mit"
      },
      "topics": [
        "octocat",
        "atom",
        "electron",
        "api"
      ],
      "has_issues": true,
      "has_projects": true,
      "has_wiki": true,
      "has_pages": false,
      "has_downloads": true,
      "archived": false,
      "disabled": false,
      "visibility": "public",
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "allow_rebase_merge": true,
      "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
      "allow_squash_merge": true,
      "allow_auto_merge": false,
      "delete_branch_on_merge": true,
      "allow_merge_commit": true,
      "subscribers_count": 42,
      "network_count": 0
    },
    "owner": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
    "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
    "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
    "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors",
    "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments",
    "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/events",
    "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
    "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
    "git_url": "git:github.com/octocat/Hello-World.git",
    "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
    "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges",
    "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
    "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
    "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
    "ssh_url": "git@github.com:octocat/Hello-World.git",
    "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
    "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers",
    "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription",
    "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags",
    "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams",
    "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
    "clone_url": "https://github.com/octocat/Hello-World.git",
    "mirror_url": "git:git.example.com/octocat/Hello-World",
    "hooks_url": "https://api.github.com/repos/octocat/Hello-World/hooks",
    "svn_url": "https://svn.github.com/octocat/Hello-World",
    "homepage": "https://github.com",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "is_template": false,
    "topics": [
      "octocat",
      "atom",
      "electron",
      "api"
    ],
    "has_issues": true,
    "has_projects": true,
    "has_wiki": true,
    "has_pages": false,
    "has_downloads": true,
    "archived": false,
    "disabled": false,
    "visibility": "public",
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    },
    "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
    "delete_branch_on_merge": true,
    "subscribers_count": 42,
    "network_count": 0
  },
  "head_commit": {
    "id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "tree_id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "message": "Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.",
    "timestamp": "2016-10-10T00:00:00Z",
    "author": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    },
    "committer": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    }
  },
  "latest_check_runs_count": 1,
  "check_runs_url": "https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs"
}
Response when the suite was created
Status: 201 Created
{
  "id": 5,
  "node_id": "MDEwOkNoZWNrU3VpdGU1",
  "head_branch": "master",
  "head_sha": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "status": "completed",
  "conclusion": "neutral",
  "url": "https://api.github.com/repos/github/hello-world/check-suites/5",
  "before": "146e867f55c26428e5f9fade55a9bbf5e95a7912",
  "after": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "pull_requests": [],
  "created_at": "2017-07-08T16:18:44-04:00",
  "updated_at": "2017-07-08T16:18:44-04:00",
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "repository": {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "template_repository": {
      "id": 1296269,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
      "name": "Hello-World-Template",
      "full_name": "octocat/Hello-World-Template",
      "owner": {
        "login": "octocat",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octocat",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octocat/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/octocat/Hello-World-Template",
      "description": "This your first repo!",
      "fork": false,
      "url": "https://api.github.com/repos/octocat/Hello-World-Template",
      "archive_url": "https://api.github.com/repos/octocat/Hello-World-Template/{archive_format}{/ref}",
      "assignees_url": "https://api.github.com/repos/octocat/Hello-World-Template/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/octocat/Hello-World-Template/branches{/branch}",
      "collaborators_url": "https://api.github.com/repos/octocat/Hello-World-Template/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/octocat/Hello-World-Template/comments{/number}",
      "commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/commits{/sha}",
      "compare_url": "https://api.github.com/repos/octocat/Hello-World-Template/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/octocat/Hello-World-Template/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/octocat/Hello-World-Template/contributors",
      "deployments_url": "https://api.github.com/repos/octocat/Hello-World-Template/deployments",
      "downloads_url": "https://api.github.com/repos/octocat/Hello-World-Template/downloads",
      "events_url": "https://api.github.com/repos/octocat/Hello-World-Template/events",
      "forks_url": "https://api.github.com/repos/octocat/Hello-World-Template/forks",
      "git_commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/tags{/sha}",
      "git_url": "git:github.com/octocat/Hello-World-Template.git",
      "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues{/number}",
      "keys_url": "https://api.github.com/repos/octocat/Hello-World-Template/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/octocat/Hello-World-Template/labels{/name}",
      "languages_url": "https://api.github.com/repos/octocat/Hello-World-Template/languages",
      "merges_url": "https://api.github.com/repos/octocat/Hello-World-Template/merges",
      "milestones_url": "https://api.github.com/repos/octocat/Hello-World-Template/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/octocat/Hello-World-Template/notifications{?since,all,participating}",
      "pulls_url": "https://api.github.com/repos/octocat/Hello-World-Template/pulls{/number}",
      "releases_url": "https://api.github.com/repos/octocat/Hello-World-Template/releases{/id}",
      "ssh_url": "git@github.com:octocat/Hello-World-Template.git",
      "stargazers_url": "https://api.github.com/repos/octocat/Hello-World-Template/stargazers",
      "statuses_url": "https://api.github.com/repos/octocat/Hello-World-Template/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscribers",
      "subscription_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscription",
      "tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/tags",
      "teams_url": "https://api.github.com/repos/octocat/Hello-World-Template/teams",
      "trees_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/trees{/sha}",
      "clone_url": "https://github.com/octocat/Hello-World-Template.git",
      "mirror_url": "git:git.example.com/octocat/Hello-World-Template",
      "hooks_url": "https://api.github.com/repos/octocat/Hello-World-Template/hooks",
      "svn_url": "https://svn.github.com/octocat/Hello-World-Template",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "stargazers_count": 80,
      "watchers_count": 80,
      "watchers": 80,
      "size": 108,
      "default_branch": "master",
      "open_issues": 0,
      "open_issues_count": 0,
      "is_template": true,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "url": "https://api.github.com/licenses/mit",
        "spdx_id": "MIT",
        "node_id": "MDc6TGljZW5zZW1pdA==",
        "html_url": "https://api.github.com/licenses/mit"
      },
      "topics": [
        "octocat",
        "atom",
        "electron",
        "api"
      ],
      "has_issues": true,
      "has_projects": true,
      "has_wiki": true,
      "has_pages": false,
      "has_downloads": true,
      "archived": false,
      "disabled": false,
      "visibility": "public",
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "allow_rebase_merge": true,
      "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
      "allow_squash_merge": true,
      "allow_auto_merge": false,
      "delete_branch_on_merge": true,
      "allow_merge_commit": true,
      "subscribers_count": 42,
      "network_count": 0
    },
    "owner": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
    "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
    "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
    "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors",
    "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments",
    "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/events",
    "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
    "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
    "git_url": "git:github.com/octocat/Hello-World.git",
    "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
    "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges",
    "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
    "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
    "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
    "ssh_url": "git@github.com:octocat/Hello-World.git",
    "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
    "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers",
    "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription",
    "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags",
    "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams",
    "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
    "clone_url": "https://github.com/octocat/Hello-World.git",
    "mirror_url": "git:git.example.com/octocat/Hello-World",
    "hooks_url": "https://api.github.com/repos/octocat/Hello-World/hooks",
    "svn_url": "https://svn.github.com/octocat/Hello-World",
    "homepage": "https://github.com",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "is_template": false,
    "topics": [
      "octocat",
      "atom",
      "electron",
      "api"
    ],
    "has_issues": true,
    "has_projects": true,
    "has_wiki": true,
    "has_pages": false,
    "has_downloads": true,
    "archived": false,
    "disabled": false,
    "visibility": "public",
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    },
    "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
    "delete_branch_on_merge": true,
    "subscribers_count": 42,
    "network_count": 0
  },
  "head_commit": {
    "id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "tree_id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "message": "Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.",
    "timestamp": "2016-10-10T00:00:00Z",
    "author": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    },
    "committer": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    }
  },
  "latest_check_runs_count": 1,
  "check_runs_url": "https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs"
}
Notes
Works with GitHub Apps
 Update repository preferences for check suites
Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually Create a check suite. You must have admin permissions in the repository to set preferences for check suites.

PATCH /repos/{owner}/{repo}/check-suites/preferences
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
auto_trigger_checks	array of objects	body	
Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the auto_trigger_checks object description for details.

 Properties of the auto_trigger_checks items
Code samples
Shell
curl \
  -X PATCH \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-suites/preferences \
  -d '{"auto_trigger_checks":[{"app_id":42,"setting":true}]}'
JavaScript (@octokit/core.js)
await octokit.request('PATCH /repos/{owner}/{repo}/check-suites/preferences', {
  owner: 'octocat',
  repo: 'hello-world',
  auto_trigger_checks: [
    {
      app_id: 42,
      setting: true
    }
  ]
})
Response
Status: 200 OK
{
  "preferences": {
    "auto_trigger_checks": [
      {
        "app_id": 2,
        "setting": true
      },
      {
        "app_id": 4,
        "setting": false
      }
    ]
  },
  "repository": {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "owner": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
    "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
    "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
    "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors",
    "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments",
    "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/events",
    "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
    "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
    "git_url": "git:github.com/octocat/Hello-World.git",
    "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
    "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges",
    "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
    "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
    "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
    "ssh_url": "git@github.com:octocat/Hello-World.git",
    "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
    "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers",
    "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription",
    "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags",
    "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams",
    "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
    "clone_url": "https://github.com/octocat/Hello-World.git",
    "mirror_url": "git:git.example.com/octocat/Hello-World",
    "hooks_url": "https://api.github.com/repos/octocat/Hello-World/hooks",
    "svn_url": "https://svn.github.com/octocat/Hello-World",
    "homepage": "https://github.com",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "is_template": false,
    "topics": [
      "octocat",
      "atom",
      "electron",
      "api"
    ],
    "has_issues": true,
    "has_projects": true,
    "has_wiki": true,
    "has_pages": false,
    "has_downloads": true,
    "archived": false,
    "disabled": false,
    "visibility": "public",
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    },
    "template_repository": {
      "id": 1296269,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
      "name": "Hello-World-Template",
      "full_name": "octocat/Hello-World-Template",
      "owner": {
        "login": "octocat",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octocat",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octocat/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/octocat/Hello-World-Template",
      "description": "This your first repo!",
      "fork": false,
      "url": "https://api.github.com/repos/octocat/Hello-World-Template",
      "archive_url": "https://api.github.com/repos/octocat/Hello-World-Template/{archive_format}{/ref}",
      "assignees_url": "https://api.github.com/repos/octocat/Hello-World-Template/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/octocat/Hello-World-Template/branches{/branch}",
      "collaborators_url": "https://api.github.com/repos/octocat/Hello-World-Template/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/octocat/Hello-World-Template/comments{/number}",
      "commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/commits{/sha}",
      "compare_url": "https://api.github.com/repos/octocat/Hello-World-Template/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/octocat/Hello-World-Template/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/octocat/Hello-World-Template/contributors",
      "deployments_url": "https://api.github.com/repos/octocat/Hello-World-Template/deployments",
      "downloads_url": "https://api.github.com/repos/octocat/Hello-World-Template/downloads",
      "events_url": "https://api.github.com/repos/octocat/Hello-World-Template/events",
      "forks_url": "https://api.github.com/repos/octocat/Hello-World-Template/forks",
      "git_commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/tags{/sha}",
      "git_url": "git:github.com/octocat/Hello-World-Template.git",
      "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues{/number}",
      "keys_url": "https://api.github.com/repos/octocat/Hello-World-Template/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/octocat/Hello-World-Template/labels{/name}",
      "languages_url": "https://api.github.com/repos/octocat/Hello-World-Template/languages",
      "merges_url": "https://api.github.com/repos/octocat/Hello-World-Template/merges",
      "milestones_url": "https://api.github.com/repos/octocat/Hello-World-Template/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/octocat/Hello-World-Template/notifications{?since,all,participating}",
      "pulls_url": "https://api.github.com/repos/octocat/Hello-World-Template/pulls{/number}",
      "releases_url": "https://api.github.com/repos/octocat/Hello-World-Template/releases{/id}",
      "ssh_url": "git@github.com:octocat/Hello-World-Template.git",
      "stargazers_url": "https://api.github.com/repos/octocat/Hello-World-Template/stargazers",
      "statuses_url": "https://api.github.com/repos/octocat/Hello-World-Template/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscribers",
      "subscription_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscription",
      "tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/tags",
      "teams_url": "https://api.github.com/repos/octocat/Hello-World-Template/teams",
      "trees_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/trees{/sha}",
      "clone_url": "https://github.com/octocat/Hello-World-Template.git",
      "mirror_url": "git:git.example.com/octocat/Hello-World-Template",
      "hooks_url": "https://api.github.com/repos/octocat/Hello-World-Template/hooks",
      "svn_url": "https://svn.github.com/octocat/Hello-World-Template",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "stargazers_count": 80,
      "watchers_count": 80,
      "watchers": 80,
      "size": 108,
      "default_branch": "master",
      "open_issues": 0,
      "open_issues_count": 0,
      "is_template": true,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "url": "https://api.github.com/licenses/mit",
        "spdx_id": "MIT",
        "node_id": "MDc6TGljZW5zZW1pdA==",
        "html_url": "https://api.github.com/licenses/mit"
      },
      "topics": [
        "octocat",
        "atom",
        "electron",
        "api"
      ],
      "has_issues": true,
      "has_projects": true,
      "has_wiki": true,
      "has_pages": false,
      "has_downloads": true,
      "archived": false,
      "disabled": false,
      "visibility": "public",
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "allow_rebase_merge": true,
      "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
      "allow_squash_merge": true,
      "allow_auto_merge": false,
      "delete_branch_on_merge": true,
      "allow_merge_commit": true,
      "subscribers_count": 42,
      "network_count": 0
    }
  }
}
Notes
Works with GitHub Apps
 Get a check suite
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array and a null value for head_branch.

Gets a single check suite using its id. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the repo scope to get check suites in a private repository.

GET /repos/{owner}/{repo}/check-suites/{check_suite_id}
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_suite_id	integer	path	
check_suite_id parameter

Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-suites/42
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/check-suites/{check_suite_id}', {
  owner: 'octocat',
  repo: 'hello-world',
  check_suite_id: 42
})
Response
Status: 200 OK
{
  "id": 5,
  "node_id": "MDEwOkNoZWNrU3VpdGU1",
  "head_branch": "master",
  "head_sha": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "status": "completed",
  "conclusion": "neutral",
  "url": "https://api.github.com/repos/github/hello-world/check-suites/5",
  "before": "146e867f55c26428e5f9fade55a9bbf5e95a7912",
  "after": "d6fde92930d4715a2b49857d24b940956b26d2d3",
  "pull_requests": [],
  "created_at": "2017-07-08T16:18:44-04:00",
  "updated_at": "2017-07-08T16:18:44-04:00",
  "app": {
    "id": 1,
    "slug": "octoapp",
    "node_id": "MDExOkludGVncmF0aW9uMQ==",
    "owner": {
      "login": "github",
      "id": 1,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
      "url": "https://api.github.com/orgs/github",
      "repos_url": "https://api.github.com/orgs/github/repos",
      "events_url": "https://api.github.com/orgs/github/events",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": true
    },
    "name": "Octocat App",
    "description": "",
    "external_url": "https://example.com",
    "html_url": "https://github.com/apps/octoapp",
    "created_at": "2017-07-08T16:18:44-04:00",
    "updated_at": "2017-07-08T16:18:44-04:00",
    "permissions": {
      "metadata": "read",
      "contents": "read",
      "issues": "write",
      "single_file": "write"
    },
    "events": [
      "push",
      "pull_request"
    ]
  },
  "repository": {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "template_repository": {
      "id": 1296269,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
      "name": "Hello-World-Template",
      "full_name": "octocat/Hello-World-Template",
      "owner": {
        "login": "octocat",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octocat",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octocat/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/octocat/Hello-World-Template",
      "description": "This your first repo!",
      "fork": false,
      "url": "https://api.github.com/repos/octocat/Hello-World-Template",
      "archive_url": "https://api.github.com/repos/octocat/Hello-World-Template/{archive_format}{/ref}",
      "assignees_url": "https://api.github.com/repos/octocat/Hello-World-Template/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/octocat/Hello-World-Template/branches{/branch}",
      "collaborators_url": "https://api.github.com/repos/octocat/Hello-World-Template/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/octocat/Hello-World-Template/comments{/number}",
      "commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/commits{/sha}",
      "compare_url": "https://api.github.com/repos/octocat/Hello-World-Template/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/octocat/Hello-World-Template/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/octocat/Hello-World-Template/contributors",
      "deployments_url": "https://api.github.com/repos/octocat/Hello-World-Template/deployments",
      "downloads_url": "https://api.github.com/repos/octocat/Hello-World-Template/downloads",
      "events_url": "https://api.github.com/repos/octocat/Hello-World-Template/events",
      "forks_url": "https://api.github.com/repos/octocat/Hello-World-Template/forks",
      "git_commits_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/tags{/sha}",
      "git_url": "git:github.com/octocat/Hello-World-Template.git",
      "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/octocat/Hello-World-Template/issues{/number}",
      "keys_url": "https://api.github.com/repos/octocat/Hello-World-Template/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/octocat/Hello-World-Template/labels{/name}",
      "languages_url": "https://api.github.com/repos/octocat/Hello-World-Template/languages",
      "merges_url": "https://api.github.com/repos/octocat/Hello-World-Template/merges",
      "milestones_url": "https://api.github.com/repos/octocat/Hello-World-Template/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/octocat/Hello-World-Template/notifications{?since,all,participating}",
      "pulls_url": "https://api.github.com/repos/octocat/Hello-World-Template/pulls{/number}",
      "releases_url": "https://api.github.com/repos/octocat/Hello-World-Template/releases{/id}",
      "ssh_url": "git@github.com:octocat/Hello-World-Template.git",
      "stargazers_url": "https://api.github.com/repos/octocat/Hello-World-Template/stargazers",
      "statuses_url": "https://api.github.com/repos/octocat/Hello-World-Template/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscribers",
      "subscription_url": "https://api.github.com/repos/octocat/Hello-World-Template/subscription",
      "tags_url": "https://api.github.com/repos/octocat/Hello-World-Template/tags",
      "teams_url": "https://api.github.com/repos/octocat/Hello-World-Template/teams",
      "trees_url": "https://api.github.com/repos/octocat/Hello-World-Template/git/trees{/sha}",
      "clone_url": "https://github.com/octocat/Hello-World-Template.git",
      "mirror_url": "git:git.example.com/octocat/Hello-World-Template",
      "hooks_url": "https://api.github.com/repos/octocat/Hello-World-Template/hooks",
      "svn_url": "https://svn.github.com/octocat/Hello-World-Template",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "stargazers_count": 80,
      "watchers_count": 80,
      "watchers": 80,
      "size": 108,
      "default_branch": "master",
      "open_issues": 0,
      "open_issues_count": 0,
      "is_template": true,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "url": "https://api.github.com/licenses/mit",
        "spdx_id": "MIT",
        "node_id": "MDc6TGljZW5zZW1pdA==",
        "html_url": "https://api.github.com/licenses/mit"
      },
      "topics": [
        "octocat",
        "atom",
        "electron",
        "api"
      ],
      "has_issues": true,
      "has_projects": true,
      "has_wiki": true,
      "has_pages": false,
      "has_downloads": true,
      "archived": false,
      "disabled": false,
      "visibility": "public",
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "allow_rebase_merge": true,
      "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
      "allow_squash_merge": true,
      "allow_auto_merge": false,
      "delete_branch_on_merge": true,
      "allow_merge_commit": true,
      "subscribers_count": 42,
      "network_count": 0
    },
    "owner": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
    "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
    "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
    "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors",
    "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments",
    "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/events",
    "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
    "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
    "git_url": "git:github.com/octocat/Hello-World.git",
    "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
    "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges",
    "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
    "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
    "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
    "ssh_url": "git@github.com:octocat/Hello-World.git",
    "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
    "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers",
    "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription",
    "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags",
    "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams",
    "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
    "clone_url": "https://github.com/octocat/Hello-World.git",
    "mirror_url": "git:git.example.com/octocat/Hello-World",
    "hooks_url": "https://api.github.com/repos/octocat/Hello-World/hooks",
    "svn_url": "https://svn.github.com/octocat/Hello-World",
    "homepage": "https://github.com",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "is_template": false,
    "topics": [
      "octocat",
      "atom",
      "electron",
      "api"
    ],
    "has_issues": true,
    "has_projects": true,
    "has_wiki": true,
    "has_pages": false,
    "has_downloads": true,
    "archived": false,
    "disabled": false,
    "visibility": "public",
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    },
    "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
    "delete_branch_on_merge": true,
    "subscribers_count": 42,
    "network_count": 0
  },
  "head_commit": {
    "id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "tree_id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
    "message": "Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.",
    "timestamp": "2016-10-10T00:00:00Z",
    "author": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    },
    "committer": {
      "name": "The Octocat",
      "email": "octocat@nowhere.com"
    }
  },
  "latest_check_runs_count": 1,
  "check_runs_url": "https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs"
}
Notes
Works with GitHub Apps
 Rerequest a check suite
Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the check_suite webhook event with the action rerequested. When a check suite is rerequested, its status is reset to queued and the conclusion is cleared.

To rerequest a check suite, your GitHub App must have the checks:read permission on a private repository or pull access to a public repository.

POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
check_suite_id	integer	path	
check_suite_id parameter

Code samples
Shell
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/check-suites/42/rerequest
JavaScript (@octokit/core.js)
await octokit.request('POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest', {
  owner: 'octocat',
  repo: 'hello-world',
  check_suite_id: 42
})
Response
Status: 201 Created
Notes
Works with GitHub Apps
 List check suites for a Git reference
Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array and a null value for head_branch.

Lists check suites for a commit ref. The ref can be a SHA, branch name, or a tag name. GitHub Apps must have the checks:read permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the repo scope to get check suites in a private repository.

GET /repos/{owner}/{repo}/commits/{ref}/check-suites
Parameters
Name	Type	In	Description
accept	string	header	
Setting to application/vnd.github.v3+json is recommended.

owner	string	path	
repo	string	path	
ref	string	path	
ref parameter

app_id	integer	query	
Filters check suites by GitHub App id.

check_name	string	query	
Returns check runs with the specified name.

per_page	integer	query	
Results per page (max 100)

Default: 30
page	integer	query	
Page number of the results to fetch.

Default: 1
Code samples
Shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/octocat/hello-world/commits/REF/check-suites
JavaScript (@octokit/core.js)
await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}/check-suites', {
  owner: 'octocat',
  repo: 'hello-world',
  ref: 'ref'
})
Response
Status: 200 OK
{
  "total_count": 1,
  "check_suites": [
    {
      "id": 5,
      "node_id": "MDEwOkNoZWNrU3VpdGU1",
      "head_branch": "master",
      "head_sha": "d6fde92930d4715a2b49857d24b940956b26d2d3",
      "status": "completed",
      "conclusion": "neutral",
      "url": "https://api.github.com/repos/github/hello-world/check-suites/5",
      "before": "146e867f55c26428e5f9fade55a9bbf5e95a7912",
      "after": "d6fde92930d4715a2b49857d24b940956b26d2d3",
      "pull_requests": [],
      "app": {
        "id": 1,
        "slug": "octoapp",
        "node_id": "MDExOkludGVncmF0aW9uMQ==",
        "owner": {
          "login": "github",
          "id": 1,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
          "url": "https://api.github.com/orgs/github",
          "repos_url": "https://api.github.com/orgs/github/repos",
          "events_url": "https://api.github.com/orgs/github/events",
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": true
        },
        "name": "Octocat App",
        "description": "",
        "external_url": "https://example.com",
        "html_url": "https://github.com/apps/octoapp",
        "created_at": "2017-07-08T16:18:44-04:00",
        "updated_at": "2017-07-08T16:18:44-04:00",
        "permissions": {
          "metadata": "read",
          "contents": "read",
          "issues": "write",
          "single_file": "write"
        },
        "events": [
          "push",
          "pull_request"
        ]
      },
      "repository": {
        "id": 1296269,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
        "name": "Hello-World",
        "full_name": "octocat/Hello-World",
        "owner": {
          "login": "octocat",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "",
          "url": "https://api.github.com/users/octocat",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "repos_url": "https://api.github.com/users/octocat/repos",
          "events_url": "https://api.github.com/users/octocat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/octocat/Hello-World",
        "description": "This your first repo!",
        "fork": false,
        "url": "https://api.github.com/repos/octocat/Hello-World",
        "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
        "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
        "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
        "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
        "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
        "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
        "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
        "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
        "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors",
        "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments",
        "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/events",
        "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
        "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
        "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
        "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
        "git_url": "git:github.com/octocat/Hello-World.git",
        "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
        "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
        "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
        "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
        "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
        "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges",
        "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
        "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
        "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
        "ssh_url": "git@github.com:octocat/Hello-World.git",
        "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
        "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
        "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers",
        "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription",
        "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags",
        "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams",
        "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
        "clone_url": "https://github.com/octocat/Hello-World.git",
        "mirror_url": "git:git.example.com/octocat/Hello-World",
        "hooks_url": "https://api.github.com/repos/octocat/Hello-World/hooks",
        "svn_url": "https://svn.github.com/octocat/Hello-World",
        "homepage": "https://github.com",
        "language": null,
        "forks_count": 9,
        "stargazers_count": 80,
        "watchers_count": 80,
        "size": 108,
        "default_branch": "master",
        "open_issues_count": 0,
        "is_template": true,
        "topics": [
          "octocat",
          "atom",
          "electron",
          "api"
        ],
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true,
        "has_pages": false,
        "has_downloads": true,
        "archived": false,
        "disabled": false,
        "visibility": "public",
        "pushed_at": "2011-01-26T19:06:43Z",
        "created_at": "2011-01-26T19:01:12Z",
        "updated_at": "2011-01-26T19:14:43Z",
        "permissions": {
          "admin": false,
          "push": false,
          "pull": true
        },
        "temp_clone_token": "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
        "delete_branch_on_merge": true,
        "subscribers_count": 42,
        "network_count": 0
      },
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "head_commit": {
        "id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
        "tree_id": "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",
        "message": "Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.",
        "timestamp": "2016-10-10T00:00:00Z",
        "author": {
          "name": "The Octocat",
          "email": "octocat@nowhere.com"
        },
        "committer": {
          "name": "The Octocat",
          "email": "octocat@nowhere.com"
        }
      },
      "latest_check_runs_count": 1,
      "check_runs_url": "https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs"
    }
  ]
}
Notes
Works with GitHub Apps
Did this doc help you?
Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

Still need help?
Ask the GitHub community
Contact support
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
Developer API
Training
Blog
About


title: Releasing projects on GitHub
intro: 'You can create a release to package software, release notes, and binary files for other people to download.'
redirect_from:
  - /categories/85/articles/
  - /categories/releases/
  - /github/administering-a-repository/releasing-projects-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
children:
  - /about-releases
  - /managing-releases-in-a-repository
  - /viewing-your-repositorys-releases-and-tags
  - /linking-to-releases
  - /comparing-releases
  - /automatically-generated-release-notes
  - /automation-for-release-forms-with-query-parameters
shortTitle: Release projects
---

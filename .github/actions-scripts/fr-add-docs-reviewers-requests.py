# TODO: Convert to JavaScript for language consistency

import json
import logging
import os
import requests

# Constants
endpoint = 'https://api.github.com/graphql'

# ID of the github/github repo
github_repo_id = "MDEwOlJlcG9zaXRvcnkz"

# ID of the docs-reviewers team
docs_reviewers_id = "MDQ6VGVhbTQzMDMxMzk="

# ID of the "Docs content first responder" board
docs_project_id = "MDc6UHJvamVjdDQ1NzI0ODI="

# ID of the "OpenAPI review requests" column on the  "Docs content first responder" board
docs_column_id = "PC_lAPNJr_OAEXFQs4A2OFq"

# 100 is an educated guess of how many PRs are opened in a day on the github/github repo
# If we are missing PRs, either increase this number or increase the frequency at which this script is run
num_prs_to_search = 100

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def find_open_prs_for_repo(repo_id: str, num_prs: int):
  """Return data about a specified number of open PRs for a specified repo

  Arguments:
  repo_id: The node ID of the repo to search
  num_prs: The max number of PRs to return

  Returns:
  Returns a JSON object of this structure:
  {
    "data": {
    "node": {
      "pullRequests": {
        "nodes": [
            {
              "id": str, 
              "isDraft": bool, 
              "reviewRequests": {
                "nodes": [
                  {
                    "requestedReviewer": {
                      "id": str
                    }
                  }...
                ]
              }, 
              "projectCards": {
                "nodes": [
                  {
                    "project": {
                      "id": str
                    }
                  }...
                ]
              }
            }...
          ]
        }
      }
    }
  }
  """

  query = """query ($repo_id: ID!, $num_prs: Int!) {
    node(id: $repo_id) {
      ... on Repository {
        pullRequests(last: $num_prs, states: OPEN) {
          nodes {
            id
            isDraft
            reviewRequests(first: 10) {
              nodes {
                requestedReviewer {
                  ... on Team {
                    id
                  }
                }
              }
            }
            projectCards(first: 10) {
              nodes {
                project {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
  """

  variables = {
    "repo_id": github_repo_id,
    "num_prs": num_prs
  }

  response = requests.post(
    endpoint, 
    json={'query': query, 'variables': variables}, 
    headers = {'Authorization': f"bearer {os.environ['TOKEN']}"}
    )

  response.raise_for_status()

  json_response = json.loads(response.text)

  if 'errors' in json_response:
    raise RuntimeError(f'Error in GraphQL response: {json_response}')

  return json_response

def add_prs_to_board(prs_to_add: list, column_id: str):
  """Adds PRs to a column of a project board

  Arguments:
  prs_to_add: A list of PR node IDs
  column_id: The node ID of the column to add the PRs to

  Returns:
  Nothing
  """

  logger.info(f"adding: {prs_to_add}")

  mutation = """mutation($pr_id: ID!, $column_id: ID!) {
                  addProjectCard(input:{contentId: $pr_id, projectColumnId: $column_id}) {
                    projectColumn {
                      name
                      }
                    }
  }"""

  for pr_id in prs_to_add:
    logger.info(f"Attempting to add {pr_id} to board")

    variables = {
      "pr_id": pr_id,
      "column_id": column_id
    }

    response = requests.post(
      endpoint, 
      json={'query': mutation, 'variables': variables},
      headers = {'Authorization': f"bearer {os.environ['TOKEN']}"}
    )

    json_response = json.loads(response.text)

    if 'errors' in json_response:
      logger.info(f"GraphQL error when adding {pr_id}: {json_response}")

def filter_prs(data, reviewer_id: str, project_id):
  """Given data about the draft state, reviewers, and project boards for PRs,
  return just the PRs that are:
  - not draft
  - are requesting a review for the specified team
  - are not already on the specified project board

  Arguments:
  data: A JSON object of this structure:
    {
      "data": {
      "node": {
        "pullRequests": {
          "nodes": [
              {
                "id": str, 
                "isDraft": bool, 
                "reviewRequests": {
                  "nodes": [
                    {
                      "requestedReviewer": {
                        "id": str
                      }
                    }...
                  ]
                }, 
                "projectCards": {
                  "nodes": [
                    {
                      "project": {
                        "id": str
                      }
                    }...
                  ]
                }
              }...
            ]
          }
        }
      }
    }
  reviewer_id: The node ID of the reviewer to filter for
  project_id: The project ID of the project to filter against

  Returns:
  A list of node IDs of the PRs that met the requirements
  """

  pr_data = data['data']['node']['pullRequests']['nodes']

  prs_to_add = []

  for pr in pr_data:
    if (
      not pr['isDraft'] and
      reviewer_id in [req_rev['requestedReviewer']['id'] for req_rev in pr['reviewRequests']['nodes'] if req_rev['requestedReviewer']] and
      project_id not in [proj_card['project']['id'] for proj_card in pr['projectCards']['nodes']]
    ):
      prs_to_add.append(pr['id'])
  
  return prs_to_add

def main():
  query_data = find_open_prs_for_repo(github_repo_id, num_prs_to_search)
  prs_to_add = filter_prs(query_data, docs_reviewers_id, docs_project_id)
  add_prs_to_board(prs_to_add, docs_column_id)

if __name__ == "__main__":
    main()

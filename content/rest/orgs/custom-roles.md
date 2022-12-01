---
title: Custom Repository Roles
intro: ''
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
redirect_from:  - /rest/orgs/custom_role

Coda API
Search...
Introduction
Getting Started
Using the API
DOCS
Docs
Permissions
Publishing
DOC STRUCTURE
Pages
Automations
TABLES AND VIEWS
Tables
Columns
Rows
GET
List table rows
POST
Insert/upsert rows
DEL
Delete multiple rows
GET
Get a row
PUT
Update row
DEL
Delete row
POST
Push a button
FORMULAS & CONTROLS
Formulas
Controls
MISCELLANEOUS
Account
Analytics
Miscellaneous
Documentation Powered by Redocly
Coda API (1.3.2)
API Support: help+api@coda.io
URL: https://coda.io
Terms of Service
Introduction
The Coda API is a RESTful API that lets you programmatically interact with Coda docs:

List and search Coda docs
Create new docs and copy existing ones
Share and publish docs
Discover pages, tables, formulas, and controls
Read, insert, upsert, update, and delete rows
As we update and release newer versions of the API, we reserve the right to remove older APIs and functionality with a 3-month deprecation notice. We will post about such changes as well as announce new features in the Developers Central section of our Community, and update the API updates doc.

Getting Started
Our Getting Started Guide helps you learn the basic of working with the API and shows a few ways you can use it. Check it out, and learn how to:

Read data from Coda tables and write back to them
Build a one-way sync from one Coda doc to another
Automate reminders
Sync your Google Calendar to Coda
Using the API
Coda's REST API is designed to be straightforward to use. You can use the language and platform of your choice to make requests. To get a feel for the API, you can also use a tool like Postman or Insomnia.

API Endpoint
This API uses a base path of https://coda.io/apis/v1.

Resource IDs and Links
Each resource instance retrieved via the API has the following fields:

id: The resource's immutable ID, which can be used to refer to it within its context
type: The type of resource, useful for identifying it in a heterogenous collection of results
href: A fully qualified URI that can be used to refer to and get the latest details on the resource
Most resources can be queried by their name or ID. We recommend sticking with IDs where possible, as names are fragile and prone to being changed by your doc's users.

List Endpoints
Endpoints supporting listing of resources have the following fields:

items: An array containing the listed resources, limited by the limit or pageToken query parameters
nextPageLink: If more results are available, an API link to the next page of results
nextPageToken: If more results are available, a page token that can be passed into the pageToken query parameter
The maximum page size may change at any time, and may be different for different endpoints. Please do not rely on it for any behavior of your application. If you pass a limit parameter that is larger than our maximum allowed limit, we will only return as many results as our maximum limit. You should look for the presence of the nextPageToken on the response to see if there are more results available, rather than relying on a result set that matches your provided limit.

To fetch a subsequent page of results, pass the pageToken parameter. Set this parameter to the value given to you as the nextPageToken in a page response. If no value is provided, there are no more results available. You only need to pass the pageToken to get the next page of results, you don't need to pass any of the parameters from your original request, as they are all implied by the pageToken. Any other parameters provided alongside a pageToken will be ignored.

Doc IDs
While most object IDs will have to be discovered via the API, you may find yourself frequently wanting to get the ID of a specific Coda doc.

Here's a handy tool that will extract it for you. (See if you can find the pattern!)

Doc ID Extractor
Paste in a Coda doc URL
 Your doc ID is:    
Rate Limiting
The Coda API sets a reasonable limit on the number of requests that can be made per minute. Once this limit is reached, calls to the API will start returning errors with an HTTP status code of 429.

Consistency
While edits made in Coda are shared with other collaborators in real-time, it can take a few seconds for them to become available via the API. You may also notice that changes made via the API, such as updating a row, are not immediate. These endpoints all return an HTTP 202 status code, instead of a standard 200, indicating that the edit has been accepted and queued for processing. This generally takes a few seconds, and the edit may fail if invalid. Each such edit will return a requestId in the response, and you can pass this requestId to the #getMutationStatus endpoint to find out if it has been applied.

Similarly, when you get doc data from the API (rows, pages, columns, etc), the data you receive comes from the most recent "snapshot" of the doc, which might be slightly stale relative to the data you observe in your browser. If you want to ensure that the data you receive is up to date and are ok getting an error if not, you can pass this header in your request: X-Coda-Doc-Version: latest. If the API's view of the doc is not up to date, the API will return an HTTP 400 response.

Volatile Formulas
Coda exposes a number of "volatile" formulas, as as Today(), Now(), and User(). When used in a live Coda doc, these formulas affect what's visible in realtime, tailored to the current user.

Such formulas behave differently with the API. Time-based values may only be current to the last edit made to the doc. User-based values may be blank or invalid.

Free and Paid Workspaces
We make the Coda API available to all of our users free of charge, in both free and paid workspaces. However, API usage is subject to the role of the user associated with the API token in the workspace applicable to each API request. What this means is:

For the #createDoc endpoint specifically, the owner of the API token must be a Doc Maker (or Admin) in the workspace. If the "Any member can create docs" option in enabled in the workspace settings, they can be an Editor and will get auto-promoted to Doc Maker upon using this endpoint. Lastly, if in addition, the API key owner matches the "Approved email domains" setting, they will be auto-added to the workspace and promoted to Doc Maker upon using this endpoint
This behavior applies to the API as well as any integrations that may use it, such as Zapier.

Examples
To help you get started, this documentation provides code examples in Python, Unix shell, and Google Apps Script. These examples are based on a simple doc that looks something like this:



Python examples
These examples use Python 3.6+. If you don't already have the requests module, use pip or easy_install to get it.

Shell examples
The shell examples are intended to be run in a Unix shell. If you're on Windows, you will need to install WSL.

These examples use the standard cURL utility to pull from the API, and then process it with jq to extract and format example output. If you don't already have it, you can either install it or run the command without it to see the raw JSON output.

Google Apps Script examples


Google Apps Script makes it easy to write code in a JavaScript-like syntax and easily access many Google products with built-in libraries. You can set up your scripts to run periodically, which makes it a good environment for writing tools without maintaining your own server.

Coda provides a library for Google Apps Script. To use it, go into Resources -> Libraries... and enter the following library ID: 15IQuWOk8MqT50FDWomh57UqWGH23gjsWVWYFms3ton6L-UHmefYHS9Vl. If you want to see the library's source code, it's available here.

Google provides autocomplete for API functions as well as generated docs. You can access these docs via the Libraries dialog by clicking on the library name. Required parameters that would be included in the URL path are positional arguments in each of these functions, followed by the request body, if applicable. All remaining parameters can be specified in the options object.

OpenAPI/Swagger Spec
In an effort to standardize our API and make it accessible, we offer an OpenAPI 3.0 specification:

OpenAPI 3.0 spec - YAML
OpenAPI 3.0 spec - JSON
Swagger 2.0
We also offer a downgraded Swagger 2.0 version of our specification. This may be useful for a number of tools that haven't yet been adapted to OpenAPI 3.0. Here are the links:

Swagger 2.0 spec - YAML
Swagger 2.0 spec - JSON
Postman collection
To get started with prototyping the API quickly in Postman, you can use one of links above to import the Coda API into a collection. You'll then need to set the appropriate header and environment variables.

Client libraries
We do not currently support client libraries apart from Google Apps Script. To work with the Coda API, you can either use standard network libraries for your language, or use the appropriate Swagger Generator tool to auto-generate Coda API client libraries for your language of choice. We do not provide any guarantees that these autogenerated libraries are compatible with our API (e.g., some libraries may not work with Bearer authentication).

OpenAPI 3.0
Swagger Generator 3 (that link takes you to the docs for the generator API) can generate client libraries for these languages. It's relatively new and thus only has support for a limited set of languages at this time.

Swagger 2.0
Swagger Generator takes in a legacy Swagger 2.0 specification, but can generate client libraries for more languages. You can also use local CLI tools to generate these libraries.

Third-party client libraries
Some members of our amazing community have written libraries to work with our API. These aren't officially supported by Coda, but are listed here for convenience. (Please let us know if you've written a library and would like to have it included here.)

PHP by Daniel Stieber
Node-RED by Mori Sugimoto
NodeJS by Parker McMullin
Ruby by Carlos Muñoz at Getro
Python by Mikhail Beliansky
Go by Artur Safin
Docs
Coda docs are foundational, top-level collaborative projects that contain pages. The API lets you list and search your docs to obtain basic metadata like titles and ownership information.

List available docs
Returns a list of Coda docs accessible by the user. These are returned in the same order as on the docs page: reverse chronological by the latest event relevant to the user (last viewed, edited, or shared).

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
isOwner	
boolean
Show only docs owned by the user.

isPublished	
boolean
Show only published docs.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

sourceDoc	
string
Show only docs copied from the specified doc ID.

isStarred	
boolean
If true, returns docs that are starred. If false, returns docs that are not starred.

inGallery	
boolean
Show only docs visible within the gallery.

workspaceId	
string
Show only docs belonging to the given workspace.

folderId	
string
Show only docs belonging to the given folder.

limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of Coda docs matching the query.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/docs'
params = {
  'isOwner': True,
  'query': 'New',
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First doc is: {res["items"][0]["name"]}')
# => First doc is: New Document
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs?pageToken=eyJsaW1pd"
}
Create doc
Creates a new Coda doc, optionally copying an existing doc. Note that creating a doc requires you to be a Doc Maker in the applicable workspace (or be auto-promoted to one).

AUTHORIZATIONS:
Bearer
REQUEST BODY SCHEMA: application/json
Parameters for creating the doc.

title	
string
Title of the new doc. Defaults to 'Untitled'.

sourceDoc	
string
An optional doc ID from which to create a copy.

timezone	
string
The timezone to use for the newly created doc.

folderId	
string
The ID of the folder within which to create this doc. Defaults to your "My docs" folder in the oldest workspace you joined; this is subject to change. You can get this ID by opening the folder in the docs list on your computer and grabbing the folderId query parameter.

Responses
201 Info about the created doc.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
429 The client has sent too many requests.

POST
/docs

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
{
"title": "Project Tracker",
"sourceDoc": "iJKlm_noPq",
"timezone": "America/Los_Angeles",
"folderId": "fl-ABcdEFgHJi"
}
Response samples
201400401403429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"name": "Product Launch Hub",
"owner": "user@example.com",
"ownerName": "Some User",
"docSize": {
"totalRowCount": 31337,
"tableAndViewCount": 42,
"pageCount": 10,
"overApiSizeLimit": false
},
"sourceDoc": {
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH"
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"published": {
"description": "Hello World!",
"browserLink": "https://coda.io/@coda/hello-world",
"imageLink": "string",
"discoverable": true,
"earnCredit": true,
"mode": "view",
"categories": []
},
"folder": {
"id": "fl-1Ab234",
"type": "folder",
"browserLink": "https://coda.io/docs?folderId=fl-1Ab234",
"name": "My docs"
},
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
},
"workspaceId": "ws-1Ab234",
"folderId": "fl-1Ab234",
"requestId": "abc-123-def-456"
}
Get info about a doc
Returns metadata for the specified doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 Basic Coda doc metadata.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>'
res = requests.get(uri, headers=headers).json()

print(f'The name of the doc is {res["name"]}')
# => The name of the doc is New Document
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"name": "Product Launch Hub",
"owner": "user@example.com",
"ownerName": "Some User",
"docSize": {
"totalRowCount": 31337,
"tableAndViewCount": 42,
"pageCount": 10,
"overApiSizeLimit": false
},
"sourceDoc": {
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH"
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"published": {
"description": "Hello World!",
"browserLink": "https://coda.io/@coda/hello-world",
"imageLink": "string",
"discoverable": true,
"earnCredit": true,
"mode": "view",
"categories": []
},
"folder": {
"id": "fl-1Ab234",
"type": "folder",
"browserLink": "https://coda.io/docs?folderId=fl-1Ab234",
"name": "My docs"
},
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
},
"workspaceId": "ws-1Ab234",
"folderId": "fl-1Ab234"
}
Delete doc
Deletes a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
202 A result indicating that the doc was deleted.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>'
res = requests.delete(uri, headers=headers).json()
Response samples
202401403404429
Content type
application/json

Copy
{ }
Permissions
This API lets you manage sharing and permissions for your docs.

Get sharing metadata
Returns metadata associated with sharing for this Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 Metadata associated with sharing perssions for a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/acl/metadata

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/metadata'
res = requests.get(uri, headers=headers).json()

print(f'Can I share this doc with others? {res["canShare"]}')
# => Can I share this doc with others? true
Response samples
200401403404429
Content type
application/json

Copy
{
"canShare": true,
"canShareWithOrg": true,
"canCopy": true
}
List permissions
Returns a list of permissions for this Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of permissions for a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/acl/permissions

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/permissions'
res = requests.get(uri, headers=headers).json()

print(f'First user with access is {res["items"][0]["principal"]["email"]}')
# => First user with access is foo@bar.com
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/acl?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/acl?pageToken=eyJsaW1pd"
}
Add permission
Adds a new permission to the doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

REQUEST BODY SCHEMA: application/json
Parameters for adding the new permission.

access
required
string (AccessTypeNotNone)
Enum: "readonly" "write" "comment"
Type of access (excluding none).

principal
required
any (Principal)
Metadata about a principal.

suppressEmail	
boolean
When true suppresses email notification

Responses
200 Confirmation that the request was applied.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/acl/permissions

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"access": "readonly",
"principal": {
"type": "email",
"email": "example@domain.com"
},
"suppressEmail": true
}
Response samples
200400401403404429
Content type
application/json

Copy
{ }
Delete permission
Deletes an existing permission.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

permissionId
required
string
Example: AbCDeFGH
ID of a permission on a doc.

Responses
200 Confirmation that the request was applied.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/acl/permissions/{permissionId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/permissions/<permission ID>'
res = requests.delete(uri, headers=headers, json=payload)

# => Revoke access to the doc
Response samples
200400401403404429
Content type
application/json

Copy
{ }
Publishing
Coda docs can be published publicly and associated with categories to help the world discover them. This API lets you manage the publishing settings of your docs.

Get doc categories
Gets all available doc categories.

AUTHORIZATIONS:
Bearer
Responses
200 List of doc categories
401 The API token is invalid or has expired.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/categories

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/categories'
res = requests.get(uri, headers=headers).json()

print(f'Category count: {res["categories"].length}')
# => Category count: 10
Response samples
200401404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
"Project Management"
]
}
Publish doc
Update publish settings for a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

REQUEST BODY SCHEMA: application/json
Parameters for changing publish settings.

slug	
string
Slug for the published doc.

discoverable	
boolean
If true, indicates that the doc is discoverable.

earnCredit	
boolean
If true, new users may be required to sign in to view content within this document. You will receive Coda credit for each user who signs up via your doc.

categoryNames	
Array of strings
The names of categories to apply to the document.

mode	
string (DocPublishMode)
Enum: "view" "play" "edit"
A time unit used as part of a duration value.

Responses
202 Confirmation that the publish request was accepted.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/publish

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"slug": "my-doc",
"discoverable": true,
"earnCredit": true,
"categoryNames": [
"Project management"
],
"mode": "view"
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456"
}
Unpublish doc
Unpublishes a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 A result indicating that the doc was unpublished.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/publish

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/publish'
res = requests.unpublishDoc(uri, headers=headers).json()
Response samples
200401403404429
Content type
application/json

Copy
{ }
Pages
Pages in Coda offer canvases containing rich text, tables, controls, and other objects. At this time, this API lets you list and access pages in a doc.

List pages
Returns a list of pages in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of pages.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/pages

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/pages'
res = requests.get(uri, headers=headers).json()

print(f'The name of the first page is {res["items"][0]["name"]}')
# => The name of the first page is Page 1
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/pages?pageToken=eyJsaW1pd"
}
Get a page
Returns details about a page.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

pageIdOrName
required
string
Example: canvas-IjkLmnO
ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.

Responses
200 Info about a page.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
410 The resource has been deleted.
429 The client has sent too many requests.

GET
/docs/{docId}/pages/{pageIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/pages/<page ID>'
res = requests.get(uri, headers=headers).json()

print(f'The name of this page is {res["name"]}')
# => The name of this page is Page 1
Response samples
200401403404410429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status",
"subtitle": "See the status of launch-related tasks.",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"image": {
"browserLink": "https://codahosted.io/docs/nUYhlXysYO/blobs/bl-lYkYKNzkuT/3f879b9ecfa27448",
"type": "string",
"width": 800,
"height": 600
},
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"children": [
{}
],
"authors": [
{}
],
"createdAt": "2018-04-11T00:18:57.946Z",
"createdBy": {
"@context": "http://schema.org/",
"@type": "ImageObject",
"additionalType": "string",
"name": "Alice Atkins",
"email": "alice@atkins.com"
},
"updatedAt": "2018-04-11T00:18:57.946Z",
"updatedBy": {
"@context": "http://schema.org/",
"@type": "ImageObject",
"additionalType": "string",
"name": "Alice Atkins",
"email": "alice@atkins.com"
}
}
Update a page
Update properties for a page.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

pageIdOrName
required
string
Example: canvas-IjkLmnO
ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.

REQUEST BODY SCHEMA: application/json
Parameters for updating a page.

name	
string
Name of the page.

subtitle	
string
Subtitle of the page.

iconName	
string
Name of the icon.

imageUrl	
string
Url of the image to use.

Responses
202 A result indicating that the update was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/pages/{pageIdOrName}

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
{
"name": "Launch Status",
"subtitle": "See the status of launch-related tasks.",
"iconName": "rocket",
"imageUrl": "https://example.com/image.jpg"
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "canvas-tuVwxYz"
}
Automations
This API allows you to trigger automations.

Trigger automation
Triggers webhook-invoked automation

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

ruleId
required
string
Example: grid-auto-b3Jmey6jBS
ID of the automation rule.

REQUEST BODY SCHEMA: application/json
Payload for webhook

property name*
additional property
any
Responses
202 A result indicating that the automation trigger was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
422 Unable to process the request.
429 The client has sent too many requests.

POST
/docs/{docId}/hooks/automation/{ruleId}

Request samples
Payload
Content type
application/json

Copy
{
"message": "The doc that brings words, data, & teams together."
}
Response samples
202400401403404422429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456"
}
Tables
List tables
Returns a list of tables in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

tableTypes	
Array of strings (TableType)
Items Enum: "table" "view"
Example: tableTypes=table,view
Comma-separated list of table types to include in results. If omitted, includes both tables and views.

Responses
200 List of tables or views in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables'
res = requests.get(uri, headers=headers).json()

print(f'The name of the first table is {res["items"][0]["name"]}')
# => The name of the first table is To-do List
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables?pageToken=eyJsaW1pd"
}
Get a table
Returns details about a specific table or view.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
useUpdatedTableLayouts	
boolean
Return "detail" and "form" for the layout field of detail and form layouts respectively (instead of "masterDetail" for both)

Responses
200 Info about a table.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>'
res = requests.get(uri, headers=headers).json()

print(f'Table {res["name"]} has {res["rowCount"]} rows')
# => Table To-do List has 2 rows
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"parentTable": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
},
"displayColumn": {
"id": "c-tuVwxYz",
"type": "column",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns/c-tuVwxYz"
},
"rowCount": 130,
"sorts": [
{}
],
"layout": "default",
"filter": {
"valid": true,
"isVolatile": false,
"hasUserFormula": false,
"hasTodayFormula": false,
"hasNowFormula": false
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z"
}
Columns
While columns in Coda have user-friendly names, they also have immutable IDs that are used when reading and writing rows. These endpoints let you query the columns in a table and get basic information about them.

List columns
Returns a list of columns in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

visibleOnly	
boolean
Example: visibleOnly=true
If true, returns only visible columns for the table. This parameter only applies to base tables, and not views.

Responses
200 List of columns in the table.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/columns

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/columns'
res = requests.get(uri, headers=headers).json()

print(f'This table\'s columns: {", ".join(c["name"] for c in res["items"])}')
# => This table's columns: Task, Duration (hr), Duration (min)
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns?pageToken=eyJsaW1pd"
}
Get a column
Returns details about a column in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

columnIdOrName
required
string
Example: c-tuVwxYz
ID or name of the column. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Info about a column.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/columns/{columnIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/columns/<column ID>'
res = requests.get(uri, headers=headers).json()

is_default = res.get("display", False)
print(f'Column {res["name"]} {"is" if is_default else "is not"} the display column')
# => Column Task is the display column
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "c-tuVwxYz",
"type": "column",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns/c-tuVwxYz",
"name": "Completed",
"display": true,
"calculated": true,
"formula": "thisRow.Created()",
"defaultValue": "Test",
"format": {
"type": "text",
"isArray": true,
"label": "Click me",
"disableIf": "False()",
"action": "OpenUrl(\"www.google.com\")"
},
"parent": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
}
}
Rows
You'll likely use this part of the API the most. These endpoints let you retrieve row data from tables in Coda as well as create, upsert, update, and delete them. Most of these endpoints work for both base tables and views, but for inserting/upsering rows, you must use a base table.

List table rows
Returns a list of rows in a table.

Value results
The valueFormat parameter dictates in what format the API should return values for individual cells.

simple (default): Returns cell values as the following JSON values: string, number, or boolean. Array values (like multiselects) are returned as comma-delimited strings.
simpleWithArrays: Singleton values are returned as simple. Array values are returned as JSON arrays and the values within are simple values (including nested arrays).
rich: If applicable, returns many values with further encoding, allowing API users to have lossless access to data in Coda.
For text values, returns data in Markdown syntax. If the text field is simple text (e.g. has no formatting), the field will be fully escaped with triple-ticks. E.g ```This is plain text```
For currency, lookup, image, person and hyperlink values, the value will be encoded in JSON-LD format.
  // Currency
  {
    "@context": "http://schema.org",
    "@type": "MonetaryAmount",
    "currency": "USD",
    "amount": 42.42
  }

  // Lookup
  {
    "@context": "http://schema.org",
    "@type": "StructuredValue",
    "additionalType": "row",
    "name": "Row Name",
    "rowId": "i-123456789",
    "tableId": "grid-123456789",
    "tableUrl": "https://coda.io/d/_d123456789/grid-123456789",
    "url": "https://coda.io/d/_d123456789/grid-123456789#_r42",
  }

  // Hyperlink
  {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Coda",
    "url": "https://coda.io"
  }

  // Image
  {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    "name": "Coda logo",
    "url": "https://coda.io/logo.jpg"
  }

  // People
  {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Art Vandalay",
    "email": "art@vandalayindustries.com"
  }
AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
query	
string
Example: query=c-tuVwxYz:"Apple"
Query used to filter returned rows, specified as <column_id_or_name>:<value>. If you'd like to use a column name instead of an ID, you must quote it (e.g., "My Column":123). Also note that value is a JSON value; if you'd like to use a string, you must surround it in quotes (e.g., "groceries").

sortBy	
string (RowsSortBy)
Enum: "createdAt" "natural" "updatedAt"
Specifies the sort order of the rows returned. If left unspecified, rows are returned by creation time ascending. "UpdatedAt" sort ordering is the order of rows based upon when they were last updated. This does not include updates to calculated values. "Natural" sort ordering is the order that the rows appear in the table view in the application. This ordering is only meaningfully defined for rows that are visible (unfiltered). Because of this, using this sort order will imply visibleOnly=true, that is, to only return visible rows. If you pass sortBy=natural and visibleOnly=false explicitly, this will result in a Bad Request error as this condition cannot be satisfied.

useColumnNames	
boolean
Example: useColumnNames=true
Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.

valueFormat	
string (ValueFormat)
Enum: "simple" "simpleWithArrays" "rich"
The format that cell values are returned as.

visibleOnly	
boolean
Example: visibleOnly=true
If true, returns only visible rows and columns for the table.

limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

syncToken	
string
Example: syncToken=eyJsaW1pd
An opaque token returned from a previous call that can be used to return results that are relevant to the query since the call where the syncToken was generated.

Responses
200 List of rows in the table.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows'
params = {
  'query': '<column ID>:"Work out"',
}
req = requests.get(uri, headers=headers, params=params)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Matching rows: {len(res["items"])}')
# => Matching rows: 1
Response samples
200400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows?pageToken=eyJsaW1pd",
"nextSyncToken": "eyJsaW1pd"
}
Insert/upsert rows
Inserts rows into a table, optionally updating existing rows if any upsert key columns are provided. This endpoint will always return a 202, so long as the doc and table exist and are accessible (and the update is structurally valid). Row inserts/upserts are generally processed within several seconds. Note: this endpoint only works for base tables, not views. When upserting, if multiple rows match the specified key column(s), they will all be updated with the specified value.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
disableParsing	
boolean
Example: disableParsing=true
If true, the API will not attempt to parse the data in any way.

REQUEST BODY SCHEMA: application/json
Rows to insert or upsert.

rows
required
Array of objects (RowEdit)
keyColumns	
Array of strings
Optional column IDs, URLs, or names (fragile and discouraged), specifying columns to be used as upsert keys.

Responses
202 A result indicating that the upsert was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"rows": [
{}
],
"keyColumns": [
"c-bCdeFgh"
]
}
Response samples
202400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"requestId": "abc-123-def-456",
"addedRowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Delete multiple rows
Deletes the specified rows from the table or view. This endpoint will always return a 202. Row deletions are generally processed within several seconds.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

REQUEST BODY SCHEMA: application/json
Rows to delete.

rowIds
required
Array of strings
Row IDs to delete.

Responses
202 A result indicating that the delete was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"rowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Response samples
202400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"requestId": "abc-123-def-456",
"rowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Get a row
Returns details about a row in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

QUERY PARAMETERS
useColumnNames	
boolean
Example: useColumnNames=true
Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.

valueFormat	
string (ValueFormat)
Enum: "simple" "simpleWithArrays" "rich"
The format that cell values are returned as.

Responses
200 Info about a row. If this row was retrieved by name, only one matching row will be returned, with no guarantees as to which one it is.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>'
req = requests.get(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Row values are: {", ".join(str(v) for v in res["values"].values())}')
# => Row values are: Get groceries, 1, 60
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "i-tuVwxYz",
"type": "row",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows/i-RstUv-W",
"name": "Apple",
"index": 7,
"browserLink": "https://coda.io/d/_dAbCDeFGH#Teams-and-Tasks_tpqRst-U/_rui-tuVwxYz",
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"values": {
"c-tuVwxYz": "Apple",
"c-bCdeFgh": []
},
"parent": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
}
}
Update row
Updates the specified row in the table. This endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). Row updates are generally processed within several seconds. When updating using a name as opposed to an ID, an arbitrary row will be affected.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

QUERY PARAMETERS
disableParsing	
boolean
Example: disableParsing=true
If true, the API will not attempt to parse the data in any way.

REQUEST BODY SCHEMA: application/json
Row update.

row
required
object (RowEdit)
An edit made to a particular row.

Responses
202 A result indicating that the update was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"row": {
"cells": []
}
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "i-tuVwxYz"
}
Delete row
Deletes the specified row from the table or view. This endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). Row deletions are generally processed within several seconds. When deleting using a name as opposed to an ID, an arbitrary row will be removed.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

Responses
202 A result indicating that the deletion was queued for processing.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>'
req = requests.delete(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Deleted row {res["id"]}')
# => Deleted row <row ID>
Response samples
202401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "i-tuVwxYz"
}
Push a button
Pushes a button on a row in a table. Authorization note: This action is available to API tokens that are authorized to write to the table. However, the underlying button can perform any action on the document, including writing to other tables and performing Pack actions.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

columnIdOrName
required
string
Example: c-tuVwxYz
ID or name of the column. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
202 A result indicating that the push button action was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}/buttons/{columnIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>/buttons/<column ID>'
req = requests.post(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()
print(f'Pushed button')
# => Pushed button
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"rowId": "i-tuVwxYz",
"columnId": "i-tuVwxYz"
}
Formulas
Formulas can be great for performing one-off computations, or used with tables and other formulas to compute a single value. With this API, you can discover formulas in a doc and obtain computed results.

List formulas
Returns a list of named formulas in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

Responses
200 List of formulas that have names in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/formulas

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/formulas'
res = requests.get(uri, headers=headers).json()

print(f'This doc\'s formulas are: {", ".join(i["name"] for i in res["items"])}')
# => This doc's formulas are: Total Duration, Time Now
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas?pageToken=eyJsaW1pd"
}
Get a formula
Returns info on a formula.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

formulaIdOrName
required
string
Example: f-fgHijkLm
ID or name of the formula. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Details about a formula.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/formulas/{formulaIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/formulas/<formula ID>'
res = requests.get(uri, headers=headers).json()

print(f'It will take {res["value"]} hours to complete everything')
# => It will take 3 hours to complete everything
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "f-fgHijkLm",
"type": "formula",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas/f-fgHijkLm",
"name": "Sum of expenses",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"value": "$12.34"
}
Controls
Controls provide a user-friendly way to input a value that can affect other parts of the doc. This API lets you list controls and get their current values.

List controls
Returns a list of controls in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

Responses
200 List of controls in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/controls

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/controls'
res = requests.get(uri, headers=headers).json()

print(f'Controls here are: {", ".join(i["name"] for i in res["items"])}')
# => Controls here are: Control 1, Control 2
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/controls?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/controls?pageToken=eyJsaW1pd"
}
Get a control
Returns info on a control.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

controlIdOrName
required
string
Example: ctrl-cDefGhij
ID or name of the control. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Details about a control.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/controls/{controlIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/controls/<control ID>'
res = requests.get(uri, headers=headers).json()

print(f'The control is a {res["controlType"]}')
# => The control is a slider
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "ctrl-cDefGhij",
"type": "control",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/controls/ctrl-cDefGhij",
"name": "Cost",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"controlType": "slider",
"value": "$12.34"
}
Account
At this time, the API exposes some limited information about your account. However, /whoami is a good endpoint to hit to verify that you're hitting the API correctly and that your token is working as expected.

Get user info
Returns basic info about the current user.

AUTHORIZATIONS:
Bearer
Responses
200 Info about the current user.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/whoami

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/whoami'
res = requests.get(uri, headers=headers).json()

print(f'Your name is {res["name"]}')
# => Your name is John Doe
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"name": "John Doe",
"loginId": "user@example.com",
"type": "user",
"pictureLink": "https://cdn.coda.io/avatars/default_avatar.png",
"scoped": false,
"tokenName": "My API token",
"href": "https://coda.io/apis/v1beta/whoami",
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
}
}
Analytics
This API offers analytics data for your docs and Packs over time.

List doc analytics
Returns analytics data for available docs per day.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
docIds	
Array of strings
List of docIds to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

isPublished	
boolean
Limit results to only published items.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (DocAnalyticsOrderBy)
Enum: "date" "docId" "title" "createdAt" "publishedAt" "likes" "copies" "views" "sessionsDesktop" "sessionsMobile" "sessionsOther" "totalSessions"
Use this parameter to order the doc analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 List of Coda doc analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/docs'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First doc is: {res["items"][0]["doc"]["title"]}')
# => First doc is: New Document
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/docs?pageToken=xyz"
}
List page analytics
Returns analytics data for a given doc within the day. This method will return a 401 if the given doc is not in a Team or Enterprise workspace.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 List of page analytics for the given Coda doc.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs/{docId}/pages

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/docs/abcdefghi/pages'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First page is: {res["items"][0]["page"]["name"]}')
# => First page is: My Page
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/docs/DOC_ID/pages?pageToken=xyz"
}
Get doc analytics summary
Returns summarized analytics data for available docs.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
isPublished	
boolean
Limit results to only published items.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

Responses
200 Response of Coda doc summary analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs/summary

Response samples
200401429
Content type
application/json

Copy
{
"totalSessions": 1337
}
List Pack analytics
Returns analytics data for Packs the user can edit.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
packIds	
Array of integers
Which Pack IDs to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (PackAnalyticsOrderBy)
Enum: "date" "packId" "name" "createdAt" "docInstalls" "workspaceInstalls" "numFormulaInvocations" "numActionInvocations" "numSyncInvocations" "numMetadataInvocations" "docsActivelyUsing" "docsActivelyUsing7Day" "docsActivelyUsing30Day" "docsActivelyUsing90Day" "docsActivelyUsingAllTime" "workspacesActivelyUsing" "workspacesActivelyUsing7Day" "workspacesActivelyUsing30Day" "workspacesActivelyUsing90Day" "workspacesActivelyUsingAllTime" "workspacesWithActiveSubscriptions" "workspacesWithSuccessfulTrials" "revenueUsd"
Use this parameter to order the Pack analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

isPublished	
boolean
Limit results to only published items. If false or unspecified, returns all items including published ones.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 Response of Coda Pack analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/packs'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First Pack is: {res["items"][0]["pack"]["name"]}')
# => First Pack is: New Pack
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/packs?pageToken=xyz"
}
Get Pack analytics summary
Returns summarized analytics data for Packs the user can edit.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
packIds	
Array of integers
Which Pack IDs to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

isPublished	
boolean
Limit results to only published items. If false or unspecified, returns all items including published ones.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

Responses
200 Response of Coda Pack summary analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs/summary

Response samples
200401429
Content type
application/json

Copy
{
"totalDocInstalls": 0,
"totalWorkspaceInstalls": 0,
"totalInvocations": 0
}
List Pack formula analytics
Returns analytics data for Pack formulas.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
packId
required
integer >= 1
Example: 123
ID of a Pack

QUERY PARAMETERS
packFormulaNames	
Array of strings
Example: packFormulaNames=SquareRoot,CubeRoot
A list of Pack formula names (case-sensitive) for which to retrieve analytics.

packFormulaTypes	
Array of strings (PackFormulaType)
Items Enum: "action" "formula" "sync" "metadata"
Example: packFormulaTypes=action,formula
A list of Pack formula types corresponding to the packFormulaNames. If specified, this must have the same length as packFormulaNames.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (PackFormulaAnalyticsOrderBy)
Enum: "date" "formulaName" "formulaType" "formulaInvocations" "medianLatencyMs" "medianResponseSizeBytes" "errors" "docsActivelyUsing" "docsActivelyUsing7Day" "docsActivelyUsing30Day" "docsActivelyUsing90Day" "docsActivelyUsingAllTime" "workspacesActivelyUsing" "workspacesActivelyUsing7Day" "workspacesActivelyUsing30Day" "workspacesActivelyUsing90Day" "workspacesActivelyUsingAllTime"
Use this parameter to order the Pack formula analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 Response of Coda Pack formula analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs/{packId}/formulas

Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/packs/:packId/formulas?pageToken=xyz"
}
Get analytics last updated day
Returns days based on Pacific Standard Time when analytics were last updated.

AUTHORIZATIONS:
Bearer
Responses
200 Response of analytics last updated days.
429 The client has sent too many requests.

GET
/analytics/updated

Response samples
200429
Content type
application/json

Copy
{
"docAnalyticsLastUpdated": "2022-05-01",
"packAnalyticsLastUpdated": "2022-05-01",
"packFormulaAnalyticsLastUpdated": "2022-05-01"
}
Miscellaneous
These endpoints wouldn't fit anywhere else, but you may find them useful when working with Coda.

Resolve browser link
Given a browser link to a Coda object, attempts to find it and return metadata that can be used to get more info on it. Returns a 400 if the URL does not appear to be a Coda URL or a 404 if the resource cannot be located with the current credentials.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
url
required
string <url>
Example: url=https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO
The browser link to try to resolve.

degradeGracefully	
boolean
Example: degradeGracefully=true
By default, attempting to resolve the Coda URL of a deleted object will result in an error. If this flag is set, the next-available object, all the way up to the doc itself, will be resolved.

Responses
200 Metadata for the resolved resource.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/resolveBrowserLink

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/resolveBrowserLink'
params = {
  'url': 'https://coda.io/d/Some-Doc_d<doc ID>/#To-do-List_tu<table ID>',
}
res = requests.get(uri, headers=headers, params=params).json()
resolved_uri = res["resource"]["href"]

res = requests.get(resolved_uri, headers=headers).json()
print(f'This link points to a {res["type"]} named {res["name"]}')
# => This link points to a table named To-do List
Response samples
200400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"type": "apiLink",
"href": "https://coda.io/apis/v1/resolveBrowserLink?url=https%3A%2F%2Fcoda.io%2Fd%2F_dAbCDeFGH%2FLaunch-Status_sumnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"resource": {
"type": "aclMetadata",
"id": "canvas-IjkLmnO",
"name": "My Page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO"
}
}
Get mutation status
Get the status for an asynchronous mutation to know whether or not it has been completed. Each API endpoint that mutates a document will return a request id that you can pass to this endpoint to check the completion status. Status information is not guaranteed to be available for more than one day after the mutation was completed. It is intended to be used shortly after the request was made.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
requestId
required
string
Example: abc-123-def-456
ID of the request.

Responses
200 Info about the mutation.
401 The API token is invalid or has expired.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.
Federal 941 Deposit Report
ADP
Report Range 5/4/2022 - 6/4/2022																		
88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000															
Employee Number: 3
Description	Amount							5/4/2022 - 6/4/2022										
Payment Amount (Total)	9246754678763							Display All										
1. Social Security (Employee + Employer)			26662															
2. Medicare (Employee + Employer)			861193422444					Hourly										
3. Federal Income Tax			8385561229657					2266298000000800										
Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.																		
Employer Customized Report
ADP
Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725		State: 	All	Local ID: 00037305581		2267700										
EIN:																		
Customized Report		Amount						Employee Payment Report
ADP										
Employee Number: 3
Description																		
Wages, Tips and Other Compensation		22662983361014		Report Range:				Tips										
Taxable SS Wages		215014		Name:
SSN:				00000										
Taxable SS Tips		00000		Payment Summary														
Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT										
Advanced EIC Payment		00000		3361014														
Federal Income Tax Withheld		8385561229657		Bonus		00000		00000										
Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2										
Employee Medicare Tax Withheld		532580113436		Total		00000		00000										
State Income Tax Withheld		00000		22662983361014														
Local Income Tax Withheld
Customized Employer Tax Report		00000		Deduction Summary														
Description		Amount		Health Insurance														
Employer SS Tax
Employer Medicare Tax		13331		00000														
Federal Unemployment Tax		328613309009		Tax Summary														
State Unemployment Tax		00442		Federal Tax	00007			Total Tax										
Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax												
Health Insurance						00000												
401K		00000		Advanced EIC Payment			8918141356423											
		00000		00000				Total										
						401K												
						00000		00000										
																		
ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050										
																		
																		
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.																		
The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.																		
																		
The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763													
																		
																		
																		
																		
3/6/2022 at 6:37 PM																		
				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020										
																		
GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000										
				24934000000	25539000000	21890000000	19289000000	22677000000										
Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000										
Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000										
Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000										
Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000										
Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000										
Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000										
Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000										
Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000										
Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000										
Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000										
Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000										
Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000										
Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000										
Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000										
Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000										
Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000										
Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000										
Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000										
Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000										
Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000										
Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000										
Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000										
Change in Deferred Assets/Liabilities																		
Change in Other Operating Capital																		
				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000										
Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000										
Cash Flow from Investing Activities																		
Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000										
				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000										
Purchase/Sale and Disposal of Property, Plant and Equipment, Net																		
Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000										
Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000										
Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000										
Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000										
Purchase/Sale of Investments, Net																		
Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000										
				100000000	388000000	23000000	30000000	-57000000										
Sale of Investments																		
Other Investing Cash Flow					-15254000000													
Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000										
Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000										
Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000										
Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000										
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000													
Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000										
Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000										
Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000										
Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000										
Proceeds from Issuance of Long Term Debt																		
Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000										
																		
Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000										
Other Financing Cash Flow																		
Cash and Cash Equivalents, End of Period																		
Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000										
Effect of Exchange Rate Changes				25930000000)	235000000000)	-3175000000	300000000	6126000000										
Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000										
Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000										
Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000										
Income Tax Paid, Supplemental				13412000000	157000000													
ZACHRY T WOOD								-4990000000										
Cash and Cash Equivalents, Beginning of Period																		
Department of the Treasury																		
Internal Revenue Service																		
					Q4 2020			Q4  2019										
Calendar Year																		
Due: 04/18/2022																		
					Dec. 31, 2020			Dec. 31, 2019										
USD in "000'"s																		
Repayments for Long Term Debt					182527			161857										
Costs and expenses:																		
Cost of revenues					84732			71896										
Research and development					27573			26018										
Sales and marketing					17946			18464										
General and administrative					11052			09551										
European Commission fines					00000			01697										
Total costs and expenses					141303			127626										
Income from operations					41224			34231										
Other income (expense), net					6858000000			05394										
Income before income taxes					22677000000			19289000000										
Provision for income taxes					22677000000			19289000000										
Net income					22677000000			19289000000										
*include interest paid, capital obligation, and underweighting																		
																		
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																		
*include interest paid, capital obligation, and underweighting																		
																		
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																		
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																		
																		
																		
																		
																		
																		
																		
																		
		20210418																
			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD									
			-	-	70842745000	70842745000	Federal Withholding	00000	00000									
							FICA - Social Security	00000	08854									
							FICA - Medicare	00000	00000									
							Employer Taxes											
							FUTA	00000	00000									
							SUTA	00000	00000									
	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725															
																		
		Gross																
		70842745000	Earnings Statement															
		Taxes / Deductions	Stub Number: 1															
		00000																
		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022										
		70842745000	XXX-XX-1725	Annually														
		CHECK NO.																
		5560149																
																		
																		
																		
																		
																		
INTERNAL REVENUE SERVICE,																		
PO BOX 1214,																		
CHARLOTTE, NC 28201-1214																		
																		
ZACHRY WOOD																		
00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000						
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000						
Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000						
Form 1040 (2021)		76033000000	20642000000	18936000000														
Reported Normalized and Operating Income/Expense Supplemental Section																		
Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000						
Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000						
Reported Effective Tax Rate		00000		00000	00000	00000		00000	00000	00000		00000						
Reported Normalized Income										6836000000								
Reported Normalized Operating Profit										7977000000								
Other Adjustments to Net Income Available to Common Stockholders																		
Discontinued Operations																		
Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010						
Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010						
Basic EPS from Discontinued Operations																		
Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010						
Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010						
Diluted EPS from Discontinued Operations																		
Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000						
Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000						
Reported Normalized Diluted EPS										00010								
Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001				
Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010						
Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000						
Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000						
Fiscal year end September 28th., 2022. | USD																		
																		
For Paperwork Reduction Act Notice, see the seperate Instructions.																		
																		
																		
																		
																		
																		
																		
important information																		
																		
																		
																		
																		
																		
																		
																		
Description																		
																		
Restated Certificate of Incorporation of PayPal Holdings, Inc.																		
(incorporated by reference to Exhibit  3.01 to PayPal Holdings, Inc.'s																		
Quarterly Report on Form 10-Q, as filed with the Commission on																		
July 27, 2017).																		
																		
Amended and Restated Bylaws of PayPal Holdings, Inc. (incorporated																		
by reference to Exhibit  3.1 to PayPal Holdings, Inc.'s Current Report																		
on Form 8-K, as filed with the Commission on January 18, 2019).																		
																		
Opinion of Faegre Drinker Biddle & Reath LLP.																		
																		
Consent of PricewaterhouseCoopers LLP, Independent Registered Public																		
Accounting Firm.																		
																		
Consent of Faegre Drinker Biddle & Reath LLP (included in																		
Exhibit 5.1 to this Registration Statement).																		
																		
Power of Attorney (included on the signature page of this																		
Registration Statement).																		
																		
All of Us Financial Inc. 2021 Equity Incentive Plan.																		
																		
Filing Fee Table.																		
																		
																		
																		
																		
																		
																		
																		
Business Checking
For 24-hour account information, sign on to																		
pnc.com/mybusiness/
Business Checking Account number: 47-2041-6547 - continued																		
Activity Detail																		
Deposits and Other Additions																		
ACH Additions																		
Date posted			Amount 		Transaction description			For the period 04/13/2022 to 04/29/2022
ZACHRY TYLER WOOD
Primary account number: 47-2041-6547 Page 2 of 3										
44678			00063		Reverse Corporate ACH Debit
Effective 04-26-22			Reference number										
Checks and Other Deductions								22116905560149										
Deductions								Reference number										
Date posted			Amount 		Transaction description			22116905560149										
44677			00063		Corporate ACH Quickbooks 180041ntuit 1940868			Reference number										
Service Charges and Fees								22116905560149										
Date posted			Amount 	Transaction description				on your next statement as a single line item entitled Service
Waived - New Customer Period										
4/27/2022			00036	Returned Item Fee (nsf)														
Detail of Services Used During Current Period																		
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,																		
Description						Volume	Amount											
Account Maintenance Charge						70846743866	00000	        										
Total For Services Used This Peiiod						00000	00000											
Total Service (harge						00
	00000											
Reviewing Your Statement				('PNCBANK														
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if:
you have any questions regarding your account(s); your name or address is incorrect;
• you have any questions regarding interest paid to an interest-bearing account.												É						
Balancing Your Account
Update Your Account Register																		
Certified Copy of Resolutionsl
Authorizations For Accounts And Loans					@PNCBANK													
(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations)								step 2: Add together checks and other deductions listed in your account register but not on your statement.										
PNC Bank, National Association ("Bank")						Taxpayer I.D. Number (TIN)			C'eck
Deduction Descretio•	Anount								
(iv)
(v)			account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law.			D pNCBANK												
In addition but not by way of limitation, the Bank may take checks, drafts or other items payable to "cash", the Bank or the Customer, and pay the sums represented by such Items in cash to any person presenting such items or credit such Items to the account or obligations of any person presenting such items or any other person or entity as directed by any such person.																		
Products and Services. Resolved that any of the persons listed in Section 3 above are authorized to enter into contracts and agreements, written or verbal, for any products or services now or in the future offered by the Bank, including but not limited to (i) cash management services, (ii) purchases or sales of foreign exchange, securities or other financial products, (iii) computer/internet-based products and services, (iv) wire transfer of funds from or to the accounts of the Customer at the Bank, and (v) ACH transactions, and the Bank may charge any accounts of the Customer at the Bank for such products or services.																		
00005							Taxpayer I.D. Number (TIN)											
OWNER					("Customer")		633-44-1725											
are hereby authorized (i) to effect loans, advances and renewals at any time for the Customer from the Bank; (ii) to sign and deliver any notes (with or without warrant of attorney to confess judgment) and evidences of indebtedness of the Customer; (iii) to request the Bank to issue letters of credit and to sign and deliver to the bank any agreements on behalf of the Customer to reimburse the Bank for all payments made and expenses incurred by it under such letters of credit and drafts drawn pursuant thereto; (iv) to sign and deliver any instruments or documents on behalf of the Customer guaranteeing, endorsing or securing the payment of any debts or obligations of any person, form or corporation to the Bank; (v) to pledge, assign, transfer, mortgage, grant a security interest in or otherwise hypothecate to the Bank any stock, securities, commercial paper, warehouse receipts and other documents of title, bills, accounts receivable, contract rights, inventory, equipment, real property, and any other investments or property of the Customer, real or personal, tangible or intangible as security for the payment of any and all loans, advances, indebtedness and other liabilities of the Customer to the Bank of every kind and description, direct or indirect, absolute and contingent, joint or several, whether as drawer, maker, endorsee, guarantor, surety or otherwise, and to execute on behalf of the Customer mortgages, pledges, security agreements, financing statements and other instruments or documents in connection therewith; and (vi) to sell or discount with the Bank any commercial paper, bills and other instruments and evidence of indebtedness, warehouse receipts and other documents of title, accounts, accounts receivable, contract rights, and other assets, tangible and intangible, at any time held by the Customer and for such purpose to endorse, assign, transfer and deliver the same to the Bank.																		
00006	Revolving Credits. Resolved that in connection with any extension of credit obtained by any of the persons authorized in Section 5 above, that permit the Customer to effect multiple advances or draws under such credit, any of the persons listed in Sections 5 (Loans and Extensions of Credit) and 3 (Withdrawals and Endorsements)				Resolution for ALPHABET													
00007	Telephonic and Facsimile Requests. Resolved that the Bank is authorized to take any action authorized hereunder based upon (i) the telephone request of any person purporting to be a person authorized to act hereunder, (ii) the signature of any person authorized to act hereunder that is delivered to the Bank by facsimile transmission, or (iii) the telex originated by any of such persons, tested in accordance with such testing											:	Tr
R
•d
Ming					
or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv) wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services.
It. Resolved that any one of the following:	procedures as may be established between the Customer and the Bank from time to time.
General. Resolved that a certified copy of these resolutions be delivered to the Bank; that the persons specified herein are vested with authority to act and may designate successor persons to act on behalf of Customer																	
00008	without further authority from the Customer or governing body; and that Bank may rely on the authority given by this resolution until actual receipt by the Bank of a certified copy of a new resolution modifying or revoking the																	
/				Customer Copy, page 2 of 4														
00009	Withdrawals and Transfers. Resolved that the Bank is authorized to make payments from the account(s) of																	
	Customer according to any check, draft, bill of exchange, acceptance or other written instrument or direction signed by any one of the following individuals, officers or designated agents, and that such designated individuals may also otherwise transfer, or enter into agreements with Bank concerning the transfer, of funds from Customer's account(s), whether by telephone, telegraph, computer or any other manner:																	
																		
																		
																		
Column1	Column2																	
Loans and Extensions of Credit. Resolved that any one of the following:																		
						Date of this notice: 				44658								
						Employer Identification Number: 88-1656496												
						Form: 	SS-4											
INTERNAL REVENUE SERVICE			ZACHRY T WOOD			Number of this notice: 					CP 575 A							
CINCINNATI OH 45999-0023			ALPHABET			For assistance you may call us at:												
			5323 BRADFORD DR			1-800-829-4933												
			DALLAS, TX 75235															
						IF YOU WRITE, ATTACH THE
STUB AT THE BD OF THIS NOTICE.												
									We assigned you									
		This EIN will identify you, your business accounts, tax returns, and																
WE ASSIGNED YOU AN EMPLOYER IDENTIFICATION NUMBER
Thank you for applying for an Employer Identification Number (EIN) . 																		
EIN 88-1656496. 								If the information is										
																		
																		
																		
																		
																		
																		
																		
											Please				b			
																		
																		
																		
																		
										6.35-								
for the tax period(s) in question, please file the return (s) showing you have no liabilities .
If you have questions about at the the forms address or the shown due at dates the top shown, of you this can notice. call us If atyou the phone number or write to us Publication 538,
need help in determining your annual accounting period (tax year) , see Accounting Periods and Methods.															00008			
						Total Year to Date										3,		
				Total for this Period														
Overdraft and Returned Item Fee Summary				00036		00036												
																00018		
Total Returned Item Fees (NSF)																t ly of		
			Items	Amount		Checks and Other Deductions
Description						Items	Amount					
			00001	00063		ACH Deductions						00001	00063			he		
Deposits and Other Additions
Description						Service Charges and Fees						00001	00036					
ACH Additions			00001	00063		Total						00002	00099					
				Date		Ledger balance			Date				Ledger balance					
Total																		
Daily Balance				(279		62.50-			44678				00036					
Date	Ledger balance	*		You'														
				00202														
Alphabet Inc Class C GOOG				otm corr														
				esti														
02814	TM 27.8414.76%		63500	53.:														
				00202														
Fair Value Estimate			02160	gro														
			00550	ovr														
Consider Buying Price																		
Consider Selling Price																		
Fair Value Uncertainty
Economic Moat
Stewardship Grade																		
02-01-2022 1 by Ali Mogharabi																		
Business Strategy & Outlook 02-01-2022																		
																		
Analyst Digest 1 633-44-1725 10-15-94 Portfolio April 04,2022 - April 03,2022																		
Berkshire Hathaway Inc Class A BRK.A																		
																		
		525000																
527760	$0.001 0.00%	367500																
Fair Value Estimate																		
Consider Buying Price		$708,750.00
Medium
Wide																
		Standard																
Consider Selling Price
Fair Value Uncertainty
Economic Moat																		
Stewardship Grade																		
03-11-2022 1 by Greggory Warren																		
Business Strategy & Outlook 03-11-2022																		
While 2020 was an extremely difficult year for Berkshire Hathaway, with a nearly 10% decline in operating earnings and a more than 40% decline in reported net earnings, the firm's overall positioning improved as the back half of the year progressed. The firm saw an even more marked improvement in its insurance investment portfolio, as well as the operating results of its various subsidiaries, last year. As such, we expect 2022 and 2023 to be a return to more normalized levels of revenue growth and profitability (albeit with inflation impacting results in the first half of this year).We continue to view Berkshire's decentralized business model, broad business diversification, high cash-generation capabilities, and unmatched balance sheet strength as true differentiators. While these advantages have been overshadowed by an ever-expanding cash balance-ANhich is earning next to nothing in a near-zero interest-rate environment--we believe the company has finally hit a nexus where it is far more focused on reducing its cash hoard through stock and bond investments and share repurchases. During the past eight calendar quarters, the																		
																		
																		
																		
not correct as shown above, please make the correction using the attached tear-off stub and return it to us .
Based on the information received from you or your representative, you must file the following forms by the dates shown.								We assigned you										
		4/7/2022																
Form 940		4/7/2022																
Form 943		4/7/2022				If the information is												
Form 1065		4/7/2022																
Form 720		4/7/2022																
Your Form 2290 becomes due the month after your vehicle is put into use .
Your Form 1 IC and/or 730 becomes due the month after your wagering starts .
After our review of your information, we have determined that you have not filed																		
tax returns for the above-mentioned tax period (s) dating as far back as 2007.					Plea S													
file your return(s) by 04/22/2022.			If there is a balance due on the return (s)															
penalties and interest will continue to accumulate from the due date of the return (s)																		
until it is filed and paid. 	If you were not in business or did not hire any employees																	
for the tax period(s) in question, please file the return (s) showing you have no liabilities .
If you have questions about the forms or the due dates shown, you can call us at									PI									
the phone number or write to us at the address shown at the top of this notice. 					If you													
need help in determining your annual accounting period (tax year) , see Publication 538, Accounting Periods and Methods.																		
																		
Business Checking
PNCBANK							@PNCBANK											
For the period 04/13/2022							Primary account number: 47-2041-6547 Page 1 of 3											
146967					1022462	Q 304	Number of enclosures: 0											
ZACHRY TYLER WOOD ALPHABET
5323 BRADFORD DR
DALLAS TX 75235-8314							For 24-hour banking sign on to
PNC Bank Online Banking on pnc.com
FREE Online Bill Pay
For customer service call 1-877-BUS-BNKG
PNC accepts Telecommunications Relay Service (TRS) calls.				00009							
111111111011111000000000000000000000000000000000000000000000000							Para servicio en espalol, 1877.BUS-BNKC,
Moving? Please contact your local branch.
@ Write to: Customer Service PO Box 609
Pittsburgh , PA 15230-9738
Visit us at PNC.com/smaIIbusiness											
IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS											Date of this notice: 							
Effective February 18,2022, PNC will be temporarily waiving fees for statement, check image, deposit ticket and deposited item copy requests until further notice. Statement, check image, deposit ticket and deposited Item requests will continue to be displayed in the Details of Services Used section of your monthly statement. We will notify you via statement message prior to reinstating these fees.
If vou have any questions, you may reach out to your business banker branch or call us at 1-877-BUS-BNKG (1-877-287-2654).																44658		
Business Checking Summary
Account number; 47-2041-6547
Overdraft Protection has not been established for this account. Please contact us if you would like to set up this service.								Zachry Tyler Wood Alphabet			Employer Identification Number: 88-1656496							
Balance Summary						Checks and other deductions		Ending balance			Form: 		SS-4					
Beginning balance				Deposits and other additions							Number of this notice: 						CP 575 A	
00000				=		98.50 Average ledger balance		36.00-
Average collected balance			For assistance you may call ug at:							
						6.35-			6.35-		1-800-829-4933							
Overdraft and Returned Item Fee Summary						Total Year to Date												
			Total for this Period															
Total Returned Item Fees (NSF)			00036			00036					IF YOU WRITE, ATTATCHA TYE
STUB AT OYE END OF THIS NOTICE.							
Deposits and Other Additions
Description		Items	Amount			Checks and Other Deductions
Description			Items	Amount								
ACH Additions		00001	00063			ACH Deductions			00001	00063					We assigned you			
						Service Charges and Fees			00001	00036								
Total		00001	00063			Total			00002	00099								
Daily Balance			Date				Date			Ledger balance				If the information is				
Date	Ledger balance					Ledger balance												
4/13/2022	00000		44677			62.50-		44678		00036								
		Form 940						44658										
	Berkshire Hatha,a,n..																	
Business Checking						For the period 04/13/2022  to 04/29/2022		44680										
For 24-hour account information, sign on to pnc.com/mybusiness/						ZACHRY TYLER WOOD												
						Primary account number: 47-2041-6547 Page 2 of 3											Please	
Business Checking Account number: 47-2041-6547 - continued						Page 2 of 3												
Acüvity Detail																		
Deposits and Other Additions												did not hire any employee						
ACH Additions									Referenc numb									
Date posted 04/27		Transaction 
Amount description
62.50  Reverse Corporate ACH Debit
Effective 04-26-22								the due dates shown, you can call us at								
						22116905560149											If you	
Checks and Other Deductions																		
ACH Deductions						Referenc												
Date posted	Transaction
Amount description																	
						number												
44677	70842743866		Corporate ACH Quickbooks 180041ntuit 1940868															
						22116905560149												
ervice Charges and Fees						Referenc												
Date posted	Transaction
Amount descripton																	
44678	22116905560149					numb												
Detail of Services Used During Current Period						22116905560149												
 ::NOTE:: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement as a single line item entitled Service Charge Period Ending 04/29/2022.																		
e: The total charge for the following Penod Ending 04/29/2022.																		
Service Charge description					Amount													
Account Maintenance Charge					00063													
Total For Services Used This Period					00036													
Total Service Charge					00099	Waived - 	Waived - New Customer Period											
																		
Reviewing Your Statement
of this statement if:
you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account.											PNCBANK							
Balancing Your Account
Update Your Account Register					Volume													
Compare:	The activity detail section of your statement to your account register.																	
Check Off: 
Add to Your Account Register: Balance:
Subtract From Your Account Register  Balance:		All items in your account register that also appear on your statement. Remember to begin with the ending date of your last statement. (An asterisk { * } will appear in the Checks section if there is a gap in the listing of consecutive check numbers.)
Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register.
Any account deductions including fees and ATM or electronic deductions listed on the statement that are not already entered in your register.																
Your Statement Information : 									step 2: Add together checks and other deductions listed in your account register but not on your statement.									
				Amount						Check
Deduction Descrption	Amount							
Balancing Your Account
Update Your Account Register																		
	on deposit:  22934637118600.00USD																	
																		
																		
																		
																		
																		
4720416547																		
Reviewing Your Statement
of this statement if:
you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account.	Total A=$22934637118600																	
																		
Step 3:						22934637118600												
																		
																		
Enter the ending balance recorded on your statement																		
Add deposits and other additions not recorded					Total A + $22934637118600													
																		
					Subtotal=$22934637118600													
Subtract checks and other deductions not recorded Total B							$	22934637118600										
																		
The result should equal your account register balance							$	22934637118600										
										Total B22934637118600								
Verification of Direct Deposits																		
																		
To verify whether a direct deposit or other transfer to your account has occurred, call us Monday - Friday: 7 AM - 10 PM ET and Saturday & Sunday: 8 AM - 5 PM ET at the customer service number listed on the upper right side of the first page of this statement.																		
In Case of Errors or Questions About Your Electronic Transfers
Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M, Pittsburgh, PA 15219 as soon as you can, if you think your statement or receipt is wrong or if you need more information about a transfer on the statement or receipt. We must hear from you no later than 60 days after we sent you the FIRST statement on which the error or problem appeared.
Tell us your name and account number (if any).
Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information.
Tell us the dollar amount of the suspected error.
We will investigate your complaint and will correct any error promptly. If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it Cakes us to complete our investigation.
EquaLHousing Lender																		
Member FDIC																		
																		
																		
																		
Home > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > Export Custom Report as Excel File																		
Export Custom Report as Excel File																		
Show 				00000														
 	Excel report exports are in XLSX format. If you are using an older version of Excel, you can install the Microsoft Compatibility Pack so that you can open XLSX files.																	
1	Locate the report you want to export in the custom reports section of the Reports dashboard, and click an Excel export link.																	
		To export the report without first viewing the data, click the “Export XLS” link under the Action button menu.																
																		
		 																
		To view the report prior to exporting, click on its linked Report Name, then click the “xls” link in the Export line directly above the report Snapshot.																
		NOTE: You can filter the report by Date Range or Payment Method prior to exporting it; the export will include only those transactions included by the filters.																
																		
	 																	
2	Depending on your browser, you will have the option to open and/or save the file.																	
	a	To open the file, click the “Open” button in the dialog box. The file will open in Excel, but will not be saved. You will need to save the file in Excel if you want to store it on your computer.																
																		
		 																
	b	To save the file to your computer.																
		i	Click the “Save” button in the dialog box. 															
																		
			  															
		ii	A Save As dialog box opens.															
			NOTE: In Google Chrome, and some other browsers, clicking the “xls” link will take you directly to this step.															
																		
			  															
		iii	Enter a name for your file, and select a location on your computer where you want to save the file.															
		iv	Click the “Save” button.															
		v	You can now open the report directly from your computer at any time, without being logged into ADP Payments.															
Next ›																		
 																		
 																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
																		
GET
/mutationStatus/{requestId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/mutationStatus/some-request-id'
res = requests.get(uri, headers=headers).json()

print(f'Request has completed? {res["completed"]}')
# => Request has completed? false
Response samples
200401404429
Content type
application/json

Copy
{
"completed": true
}

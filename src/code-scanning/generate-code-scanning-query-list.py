import subprocess
import json
import shutil
import sys
import os
import argparse

"""
This script collects CodeQL queries that are part of code scanning query packs
and prints a markdown table to stdout that describes which packs contain which queries.

Errors are printed to stderr. This script requires that 'git' and 'codeql' commands
are on the PATH. It'll try to automatically set the CodeQL search path correctly,
as long as you run the script from one of the following locations:
 - anywhere from within a clone of the CodeQL Git repo
 - from the parent directory of a clone of the CodeQL Git repo (assuming 'codeql'
   directory exists)
"""

parser = argparse.ArgumentParser(__name__)
parser.add_argument(
    "--ignore-missing-query-packs",
    action="store_true",
    help="Don't fail if a query pack can't be found",
)
parser.add_argument(
    "language",
    help="The language to generate the query list for",
)
arguments = parser.parse_args()
assert hasattr(arguments, "ignore_missing_query_packs")
assert hasattr(arguments, "language")

# Define which languages and query packs to consider
language = arguments.language

packs = [ "code-scanning", "security-extended" ]

class CodeQL:
    def __init__(self):
        pass

    def __enter__(self):
        self.proc = subprocess.Popen(['codeql', 'execute','cli-server'],
                      executable=shutil.which('codeql'),
                      stdin=subprocess.PIPE,
                      stdout=subprocess.PIPE,
                      stderr=sys.stderr,
                      env=os.environ.copy(),
                     )
        return self
    def __exit__(self, type, value, tb):
        self.proc.stdin.write(b'["shutdown"]\0')
        self.proc.stdin.close()
        try:
            self.proc.wait(5)
        except:
            self.proc.kill()

    def command(self, args): 
        data = json.dumps(args)
        data_bytes = data.encode('utf-8')
        self.proc.stdin.write(data_bytes)
        self.proc.stdin.write(b'\0')
        self.proc.stdin.flush()
        res = b''
        while True:
           b = self.proc.stdout.read(1)
           if b == b'\0':
               return res.decode('utf-8')
           res += b

def get_docs_link(language, query_id):
    """
    Gets the documentation link for a query, given the query ID.
    The documentation link contains the query language, followed by the ID, with slashes
    replaced by dashes.

    For example:
        cpp/external-entity-expansion
    becomes:
        https://codeql.github.com/codeql-query-help/cpp/cpp-external-entity-expansion/
    """
    return "https://codeql.github.com/codeql-query-help/%s/%s/" % (language, query_id.replace("/","-"))

def single_spaces(input):
    """
    Workaround for https://github.com/github/codeql-coreql-team/issues/470 which causes
    some metadata strings to contain newlines and spaces without a good reason.
    """
    return " ".join(input.split())


def get_query_metadata(key, metadata, queryfile):
    """Returns query metadata or prints a warning to stderr if a particular piece of metadata is not available."""
    if key in metadata: return single_spaces(metadata[key])
    query_id = metadata['id'] if 'id' in metadata else 'unknown'
    return ""

def get_query_cwes(tags):
    """
    Returns a list of CWEs that are associated with a query, given its tags.
    For example, if the list of tags is: 
        maintainability readability external/cwe/cwe-1078 external/cwe/cwe-670 security

    We return:
        ["1078", "670"]
    """
    cwes = []
    tags = tags.split()
    for tag in tags:
        if tag.startswith("external/cwe/cwe-"):
            cwe = tag.split("-")[-1]
            cwes.append(cwe)
    return cwes


def subprocess_run(cmd):
    """Runs a command through subprocess.run, with a few tweaks. Raises an Exception if exit code != 0."""
    return subprocess.run(cmd, capture_output=True, text=True, env=os.environ.copy(), check=True)



try: # Check for `git` on path
    subprocess_run(["git","--version"])
except Exception as e:
    print("Error: couldn't invoke 'git'. Is it on the path? Aborting.", file=sys.stderr)
    raise e

with CodeQL() as codeql:
        try: # Check for `codeql` on path
            codeql.command(["--version"])
        except Exception as e:
            print("Error: couldn't invoke CodeQL CLI 'codeql'. Is it on the path? Aborting.", file=sys.stderr)
            raise e

        # Define CodeQL search path so it'll find the CodeQL repositories:
        #  - anywhere in the current Git clone (including current working directory)
        #  - the 'codeql' subdirectory of the cwd
        codeql_search_path = "./codeql:."   # will be extended further down

        # Extend CodeQL search path by detecting root of the current Git repo (if any). This means that you
        # can run this script from any location within the CodeQL git repository.
        try:
            git_toplevel_dir = subprocess_run(["git","rev-parse","--show-toplevel"])

            # Current working directory is in a Git repo. Add it to the search path, just in case it's the CodeQL repo
            git_toplevel_dir = git_toplevel_dir.stdout.strip()
            codeql_search_path += ":" + git_toplevel_dir
        except:
            # git rev-parse --show-toplevel exited with non-zero exit code. We're not in a Git repo
            pass

        # Write a markdown table to stdout
        table_data = []

        # Define the header row
        table_data.append(["Query name", "Related CWEs", "Default", "Extended"])

        # Iterate over all packs, and resolve which queries are part of those packs
        queries_dict = {}

        for pack in packs:
            # Get absolute paths to queries in this pack by using 'codeql resolve queries'
            try:
                queries_subp = codeql.command(["resolve","queries","--search-path", codeql_search_path, "%s-%s.qls" % (language, pack)])
            except Exception as e:
                # Resolving queries might go wrong if the github/codeql repository is not
                # on the search path.
                level = "Warning" if arguments.ignore_missing_query_packs else "Error"
                print(
                    "%s: couldn't find query pack '%s' for language '%s'. Do you have the right repositories in the right places (search path: '%s')?" % (level, pack, language, codeql_search_path),
                    file=sys.stderr
                )
                if arguments.ignore_missing_query_packs:
                    continue
                else:
                    sys.exit("You can use '--ignore-missing-query-packs' to ignore this error")

            # Investigate metadata for every query by using 'codeql resolve metadata'
            for queryfile in queries_subp.strip().split("\n"):
                query_metadata_json = codeql.command(["resolve","metadata",queryfile]).strip()

                # Turn an absolute path to a query file into an nwo-prefixed path (e.g. github/codeql/java/ql/src/....)

                meta = json.loads(query_metadata_json)

                # Format a markdown link from the query name and the docs link
                query_id = get_query_metadata('id', meta, queryfile)
                query_docs_link = get_docs_link(language, query_id)

                query_name = get_query_metadata('name', meta, queryfile)
                query_name = query_name.replace('"', '&quot;') # Replace quotation marks with HTML entities
                query_markdown_link = "[%s](%s)" % (query_name, query_docs_link)

                # Get query CWEs
                query_tags = get_query_metadata('tags', meta, queryfile)
                query_cwes = get_query_cwes(query_tags)

                # Only include queries that have CWEs, since the other queries deal with code scanning 
                # metadata and metrics (e.g. counting lines of code or number of files) and have no docs link
                if query_cwes:
                    if query_id not in queries_dict:
                        queries_dict[query_id] = {
                            'query_markdown_link': query_markdown_link,
                            'packs': [pack],
                            'cwes': query_cwes
                        }
                    else:
                        queries_dict[query_id]['packs'].append(pack)

        # Sort the queries alphabetically
        sorted_queries = sorted(queries_dict.items(), key=lambda item: item[1]['query_markdown_link'])
        
        # Write the sorted rows to the markdown table
        for query_id, query_dict in sorted_queries:
            default = '{% octicon "x" aria-label="Not included" %}'
            extended = '{% octicon "x" aria-label="Not included" %}'
            if "code-scanning" in query_dict['packs']:
                default = '{% octicon "check" aria-label="Included" %}'
            if "security-extended" in query_dict['packs']:
                extended = '{% octicon "check" aria-label="Included" %}'
            
            table_data.append([
                query_dict['query_markdown_link'], 
                ', '.join(query_dict['cwes']), 
                default,
                extended
            ])

        # Write "row headers" to make rows accessible
        print("{% rowheaders %}")

        # Write 'table_data' as markdown
        md_table = '\n| ' + ' | '.join(table_data[0]) + ' |\n'
        md_table += '| ' + ' | '.join(['---'] * len(table_data[0])) + ' |\n'

        for row in table_data[1:]:
            md_table += '| ' + ' | '.join(row) + ' |\n'
        md_table = md_table.rstrip()
        print(md_table)

        # Write end of "row headers"
        print("\n{% endrowheaders %}")

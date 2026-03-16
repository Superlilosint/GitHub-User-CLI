# GitHub Activity CLI
A simple CLI tool that pulls up the recent public activity of any GitHub user and prints it straight to your terminal. No external libraries just Node.js and the GitHub API.



---

## Features

- See what any GitHub user has been up to recently.
- Cover 18 different event types from pushes, pull requests, issues, stars, forks, and more.
- Push commits from same repo get grouped together, so output stays clean.
- Tells you clearly something goes wrong with graceful error handling for no username, network failure, what ever it is.

---

## Requirements 

- Node.js
- No dependencies 

---

## Installation 

```bash
git clone https://github.com/your-username/GitHub-User-CLI.git
cd github-activity-cli
npm link
```

---

## Usage

```bash 
github-activity <username>
```

**Example:**

```bash
github-activity kamranahmedse
```
---

## Example Output

```
Recent GitHub activity for kamranahmedse:

- Made kamranahmedse/diffity public
- Closed an issue in kamranahmedse/slim
- Closed an issue in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/claude-statusline
- Commented on an issue in kamranahmedse/claude-statusline
- Closed an issue in kamranahmedse/claude-statusline
- Closed an issue in kamranahmedse/claude-statusline
- Commented on an issue in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/claude-statusline
- Commented on an issue in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/claude-statusline
- Starred arikchakma/ui
- Commented on an issue in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/claude-statusline
- Closed a pull request in kamranahmedse/slim
- Commented on an issue in kamranahmedse/slim
- Closed a pull request in kamranahmedse/slim
- Closed an issue in kamranahmedse/slim
- Commented on an issue in kamranahmedse/slim
- Commented on an issue in kamranahmedse/slim
- Closed an issue in kamranahmedse/slim
- Commented on an issue in kamranahmedse/slim
- Closed an issue in kamranahmedse/slim
```

---

## Error Handling

| Situtation | Output |
|---|---|
| No username provided | `Usage: github-activity <username>` |
| Invalid username | `Error: Not Found` |
| No internet connection | `Error: Network failure. Please check your internet connection.` |
| No recent activity | `No recent activity found for user: <username>` |

---

## What I Learned
 
- Calling an API without any libraries using native `fetch`
- Why you check `response.ok` before you touch the response body, the idea is to safe validation
- How to use a plain object as a counter to group data before displaying it
- How a `Set` keeps output clean by tracking what you've already printed
- That error handling isn't just a try/catch wrapper it covers different failures with different messages
- How `process.argv` and `process.exit` work when building a CLI tool
 
---

## Project Source
 
Built as part of the [GitHub User Activity](https://roadmap.sh/projects/github-user-activity) challenge on [roadmap.sh](https://roadmap.sh/).


## Note 

For testing purpose I have added the mock.js in order to know the type of data and easy to learn. Thank you!!!
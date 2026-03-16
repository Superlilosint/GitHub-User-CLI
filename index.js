#!/usr/bin/env node

//Function to fetch the github-activity
async function main(name) {
    let data;

    try {
        const response = await fetch(`https://api.github.com/users/${name}/events`);
        if(!response.ok) {
            const message = data?.message || `HTTP error! status: ${response.status}`;
            throw new Error(message);
        }

        data = await response.json();

    } catch (error) {
        if(error.cause?.code === 'ENOTFOUND') {
            console.error("Error: Network failure. Please check your internet connection.");
        } else {
            console.error(`Error: ${error.message}`);
        }
        process.exit(1);
    }

    if(data.length === 0 ) {
        console.log(`No recent activity found for user: ${name}`);
        return;
    }

    console.log(`\nRecent GitHub activity for ${name}:\n`);

    //group the push events
    const pushCommits = {};

    data.forEach((event) => {
        if(event.type === "PushEvent") {
            const repo = event.repo.name;
            const commits = event.payload?.commits?.length || 0;
            pushCommits[repo] = (pushCommits[repo] || 0) + commits;
        }
    });

    // Track which repos we've already reported push events for
    const reportedPushRepos = new Set();

    data.forEach((event) => {
        const repo = event.repo.name;

        switch (event.type) {
            case "PushEvent":
                if(!reportedPushRepos.has(repo)) {
                    const count = pushCommits[repo];

                    if(count > 0) {
                        console.log(`- Pushed ${count} commit${count !== 1 ? "s" : ""} to ${repo}`);
                    }
                    reportedPushRepos.add(repo);
                }
                break;
            
            case "IssueCommentEvent":
                console.log(`- Commented on an issue in ${repo}`);
                break;

            case "CommitCommentEvent":
                console.log(`- Commented on a commit in ${repo} `)
                break;

            case "WatchEvent":
                console.log(`- Starred ${repo}`);
                break;

            case "CreateEvent": {
                const refType = event.payload?.ref_type;
                const ref = event.payload?.ref;

                if(refType === "repository") {
                    console.log(`- Created a new repository ${repo}`);
                } else if (refType === "branch") {
                    console.log(`- Created a new branch "${ref}" in ${repo}`);
                } else if (refType === "tag") {
                    console.log(`- Created a new tag "${ref}" in ${repo}`);
                } else {
                    console.log(`- Created ${refType} in ${repo}`);
                }
                break;
            }
            
                
            case "DeleteEvent": {
                const refType = event.payload?.ref_type;
                const ref = event.payload?.ref;
                console.log(`- Deleted ${refType} "${ref}" in ${repo}`);
                break;
            }

            case "DiscussionEvent": {
                console.log(`- Created a discussion ${repo}`);
                break;
            }

            case "ForkEvent": {
                const forkee = event.payload?.forkee?.full_name || repo;
                console.log(`- Forked ${repo} to ${forkee}`);
                break;
            }

            case "GollumEvent": {
                console.log(`- Updated the wiki in ${repo}`);
                break;
            }

            case "IssuesEvent": {
                const action = event.payload?.action;

                if(action === "opened") {
                    console.log(`- Opened a new issue in ${repo}`);
                } else if (action === "closed") {
                    console.log(`- Closed an issue in ${repo}`);
                } else {
                    console.log(`- ${action} an issue in ${repo}`);
                }
                break;
            }


            case "MemberEvent": {
                const member = event.payload?.member?.login;
                console.log(`- Added ${member || "a member"} to ${repo}`);
                break;
            }

            case "PublicEvent": {
                console.log(`- Made ${repo} public`);
                break;
            }

            case "PullRequestEvent": {
                const action = event.payload?.action;
                const prTitle = event.payload?.pull_request?.title;

                if(action === "opened") {
                    console.log(`- Opened a new pull request in ${repo}${prTitle ? `: "${prTitle}"` : ""}`);
                } else if (action === "closed") {
                    const merged = event.payload?.pull_request?.merged;
                    console.log(`- ${merged ? "Merged" : "Closed"} a pull request in ${repo}${prTitle ? `: "${prTitle}"` : ""}`);
                } else {
                    console.log(`- ${action} a pull request in ${repo}`);
                }
                break;
            }

            case "PullRequestReviewEvent": {
                const state = event.payload?.review?.state;
                console.log(`- Pull request has been reviwed and ${state} for ${repo}`);
                break;
            }

            case "PullRequestReviewCommentEvent": {
                const comment = event.payload?.comment?.body;
                console.log(`- Pull request comment on ${repo} is "${comment}"`);
                break;
            }


            case "ReleaseEvent": {
                const tag = event.payload?.release?.tag_name;
                console.log(`- Published a release${tag ? ` (${tag})` : ""} in ${repo}`);
                break;
            }
          
            default:
                console.log(`- ${event.type.replace("Event", "")} event in ${repo}`);
                break;
        }
    });

    console.log("");

}



const username = process.argv[2];

if (!username) {
    console.error("Usage: github-activity <username>");
    process.exit(1);
}

main(username);
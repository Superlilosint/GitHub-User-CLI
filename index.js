#!/usr/bin/env node


//Function to fetch the github-activity
async function main(name) {
    let data;

    try {
        const response = await fetch(`https://api.github.com/users/${name}/events`);
        data = await response.json();

        if(!response.ok) {
            const message = data?.message || `HTTP error! status: ${response.status}`;
            throw new Error(message);
        }
    } catch (error) {
        console.log(error);
        if(error.cause?.code === 'ENOTFOUND') {
            console.error("Error: Network failure. Please check your internet connection.");
        } else {
            console.error(`Error: ${error.message}`);
        }
        process.exit(1);
    }

    if(data.length === 0 ) {
        console.log(`No recent activity found for user: ${username}`);
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
                const count = pushCommits[repo];
                console.log(`- Pushed ${count} commit${count !== 1 ? "s" : ""} to ${repo}`);
                break;
        
            default:
                console.log(`- ${event.type.replace("Event", "")} event in ${repo}`);
                break;
        }
    });

    console.log("");

}



const arg = process.argv[2];

if (!arg) {
    console.error("Usage: github-activity <username>");
    process.exit(1);
}

main(arg);
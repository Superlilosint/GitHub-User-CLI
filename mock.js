const data = [
  {
    id: "1001",
    type: "PushEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      push_id: 9001,
      size: 3,
      distinct_size: 3,
      ref: "refs/heads/main",
      head: "abc123",
      before: "def456",
      commits: [
        { sha: "abc123", author: { name: "User", email: "user@email.com" }, message: "fix login bug", distinct: true, url: "https://api.github.com/repos/user/my-app/commits/abc123" },
        { sha: "bcd234", author: { name: "User", email: "user@email.com" }, message: "update readme", distinct: true, url: "https://api.github.com/repos/user/my-app/commits/bcd234" },
        { sha: "cde345", author: { name: "User", email: "user@email.com" }, message: "refactor auth", distinct: true, url: "https://api.github.com/repos/user/my-app/commits/cde345" }
      ]
    },
    public: true,
    created_at: "2026-03-15T10:00:00Z"
  },
  {
    id: "1002",
    type: "PushEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      push_id: 9002,
      size: 1,
      distinct_size: 1,
      ref: "refs/heads/main",
      head: "efa789",
      before: "abc123",
      commits: [
        { sha: "efa789", author: { name: "User", email: "user@email.com" }, message: "add tests", distinct: true, url: "https://api.github.com/repos/user/my-app/commits/efa789" }
      ]
    },
    public: true,
    created_at: "2026-03-15T11:00:00Z"
  },
  {
    id: "1003",
    type: "IssuesEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "opened",
      issue: {
        id: 201,
        number: 42,
        title: "Login breaks on mobile",
        state: "open",
        body: "Steps to reproduce...",
        user: { login: "user" },
        labels: [{ name: "bug" }],
        created_at: "2026-03-15T09:00:00Z",
        updated_at: "2026-03-15T09:00:00Z",
        html_url: "https://github.com/user/my-app/issues/42"
      }
    },
    public: true,
    created_at: "2026-03-15T09:00:00Z"
  },
  {
    id: "1004",
    type: "IssuesEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 102, name: "user/portfolio", url: "https://api.github.com/repos/user/portfolio" },
    payload: {
      action: "closed",
      issue: {
        id: 202,
        number: 10,
        title: "Fix broken image links",
        state: "closed",
        body: "Images not loading on Safari",
        user: { login: "user" },
        labels: [{ name: "bug" }, { name: "good first issue" }],
        created_at: "2026-03-10T08:00:00Z",
        updated_at: "2026-03-15T08:30:00Z",
        html_url: "https://github.com/user/portfolio/issues/10"
      }
    },
    public: true,
    created_at: "2026-03-15T08:30:00Z"
  },
  {
    id: "1005",
    type: "IssueCommentEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "created",
      issue: {
        id: 201,
        number: 42,
        title: "Login breaks on mobile",
        state: "open",
        html_url: "https://github.com/user/my-app/issues/42"
      },
      comment: {
        id: 301,
        body: "I can reproduce this on iOS 17. Will investigate.",
        user: { login: "user" },
        created_at: "2026-03-15T12:00:00Z",
        html_url: "https://github.com/user/my-app/issues/42#issuecomment-301"
      }
    },
    public: true,
    created_at: "2026-03-15T12:00:00Z"
  },
  {
    id: "1006",
    type: "WatchEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 500, name: "expressjs/express", url: "https://api.github.com/repos/expressjs/express" },
    payload: {
      action: "started"
    },
    public: true,
    created_at: "2026-03-15T13:00:00Z"
  },
  {
    id: "1007",
    type: "ForkEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 600, name: "sindresorhus/got", url: "https://api.github.com/repos/sindresorhus/got" },
    payload: {
      forkee: {
        id: 999,
        name: "got",
        full_name: "user/got",
        owner: { login: "user" },
        private: false,
        html_url: "https://github.com/user/got",
        description: "Human-friendly and powerful HTTP request library for Node.js",
        fork: true,
        created_at: "2026-03-15T14:00:00Z"
      }
    },
    public: true,
    created_at: "2026-03-15T14:00:00Z"
  },
  {
    id: "1008",
    type: "CreateEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 103, name: "user/new-project", url: "https://api.github.com/repos/user/new-project" },
    payload: {
      ref: null,
      ref_type: "repository",
      master_branch: "main",
      description: "My new backend project",
      pusher_type: "user"
    },
    public: true,
    created_at: "2026-03-14T08:00:00Z"
  },
  {
    id: "1009",
    type: "CreateEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      ref: "feature/auth",
      ref_type: "branch",
      master_branch: "main",
      description: null,
      pusher_type: "user"
    },
    public: true,
    created_at: "2026-03-14T09:00:00Z"
  },
  {
    id: "1010",
    type: "DeleteEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      ref: "old-branch",
      ref_type: "branch",
      pusher_type: "user"
    },
    public: true,
    created_at: "2026-03-14T10:00:00Z"
  },
  {
    id: "1011",
    type: "PullRequestEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "opened",
      number: 15,
      pull_request: {
        id: 401,
        number: 15,
        title: "Add JWT authentication",
        state: "open",
        merged: false,
        body: "Implements JWT-based auth with refresh tokens",
        user: { login: "user" },
        head: { label: "user:feature/auth", ref: "feature/auth", sha: "efa789" },
        base: { label: "user:main", ref: "main", sha: "abc123" },
        created_at: "2026-03-15T15:00:00Z",
        updated_at: "2026-03-15T15:00:00Z",
        html_url: "https://github.com/user/my-app/pull/15",
        commits: 4,
        additions: 120,
        deletions: 10,
        changed_files: 5
      }
    },
    public: true,
    created_at: "2026-03-15T15:00:00Z"
  },
  {
    id: "1012",
    type: "PullRequestEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "closed",
      number: 12,
      pull_request: {
        id: 400,
        number: 12,
        title: "Fix navbar styling",
        state: "closed",
        merged: true,
        merged_at: "2026-03-14T16:00:00Z",
        body: "Fixes responsive navbar on small screens",
        user: { login: "user" },
        head: { label: "user:fix/navbar", ref: "fix/navbar", sha: "xyz999" },
        base: { label: "user:main", ref: "main", sha: "def456" },
        created_at: "2026-03-13T10:00:00Z",
        updated_at: "2026-03-14T16:00:00Z",
        html_url: "https://github.com/user/my-app/pull/12",
        commits: 2,
        additions: 30,
        deletions: 15,
        changed_files: 2
      }
    },
    public: true,
    created_at: "2026-03-14T16:00:00Z"
  },
  {
    id: "1013",
    type: "PullRequestReviewEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 104, name: "user/team-project", url: "https://api.github.com/repos/user/team-project" },
    payload: {
      action: "created",
      pull_request: {
        id: 402,
        number: 8,
        title: "Implement search feature",
        state: "open",
        html_url: "https://github.com/user/team-project/pull/8"
      },
      review: {
        id: 501,
        user: { login: "user" },
        body: "Looks good overall, left a few comments",
        state: "approved",
        submitted_at: "2026-03-15T16:00:00Z",
        html_url: "https://github.com/user/team-project/pull/8#pullrequestreview-501"
      }
    },
    public: true,
    created_at: "2026-03-15T16:00:00Z"
  },
  {
    id: "1014",
    type: "PullRequestReviewCommentEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 104, name: "user/team-project", url: "https://api.github.com/repos/user/team-project" },
    payload: {
      action: "created",
      pull_request: {
        id: 402,
        number: 8,
        title: "Implement search feature",
        html_url: "https://github.com/user/team-project/pull/8"
      },
      comment: {
        id: 601,
        body: "Consider extracting this into a helper function",
        user: { login: "user" },
        path: "src/search.js",
        line: 42,
        created_at: "2026-03-15T16:30:00Z",
        html_url: "https://github.com/user/team-project/pull/8#discussion_r601"
      }
    },
    public: true,
    created_at: "2026-03-15T16:30:00Z"
  },
  {
    id: "1015",
    type: "ReleaseEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "published",
      release: {
        id: 701,
        tag_name: "v1.0.0",
        target_commitish: "main",
        name: "v1.0.0 - Initial Release",
        draft: false,
        prerelease: false,
        body: "First stable release. Includes auth, dashboard, and API.",
        created_at: "2026-03-15T17:00:00Z",
        published_at: "2026-03-15T17:00:00Z",
        html_url: "https://github.com/user/my-app/releases/tag/v1.0.0"
      }
    },
    public: true,
    created_at: "2026-03-15T17:00:00Z"
  },
  {
    id: "1016",
    type: "PublicEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 105, name: "user/secret-project", url: "https://api.github.com/repos/user/secret-project" },
    payload: {},
    public: true,
    created_at: "2026-03-15T18:00:00Z"
  },
  {
    id: "1017",
    type: "MemberEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 104, name: "user/team-project", url: "https://api.github.com/repos/user/team-project" },
    payload: {
      action: "added",
      member: {
        id: 2,
        login: "john-dev",
        html_url: "https://github.com/john-dev"
      }
    },
    public: true,
    created_at: "2026-03-15T19:00:00Z"
  },
  {
    id: "1018",
    type: "CommitCommentEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      action: "created",
      comment: {
        id: 801,
        user: { login: "user" },
        body: "This commit introduced a memory leak, reverting in next push",
        commit_id: "bcd234",
        line: 88,
        path: "src/auth.js",
        created_at: "2026-03-15T20:00:00Z",
        html_url: "https://github.com/user/my-app/commit/bcd234#commitcomment-801"
      }
    },
    public: true,
    created_at: "2026-03-15T20:00:00Z"
  },
  {
    id: "1019",
    type: "GollumEvent",
    actor: { id: 1, login: "user", display_login: "user", url: "https://api.github.com/users/user" },
    repo: { id: 101, name: "user/my-app", url: "https://api.github.com/repos/user/my-app" },
    payload: {
      pages: [
        {
          page_name: "Home",
          title: "Home",
          action: "edited",
          sha: "wiki123",
          html_url: "https://github.com/user/my-app/wiki/Home"
        },
        {
          page_name: "API-Reference",
          title: "API Reference",
          action: "created",
          sha: "wiki456",
          html_url: "https://github.com/user/my-app/wiki/API-Reference"
        }
      ]
    },
    public: true,
    created_at: "2026-03-15T21:00:00Z"
  }
];

// - Pushed 4 commits to user/my-app
// - Opened a new issue in user/my-app
// - Closed an issue in user/portfolio
// - Commented on an issue in user/my-app
// - Starred expressjs/express
// - Forked sindresorhus/got to user/got
// - Created a new repository user/new-project
// - Created a new branch "feature/auth" in user/my-app
// - Deleted branch "old-branch" in user/my-app
// - Opened a new pull request in user/my-app: "Add JWT authentication"
// - Merged a pull request in user/my-app: "Fix navbar styling"
// - Reviewed a pull request in user/team-project
// - Commented on a pull request in user/team-project
// - Published a release (v1.0.0) in user/my-app
// - Made user/secret-project public
// - Added john-dev to user/team-project
// - Commented on a commit in user/my-app
// - Updated the wiki in user/my-app



// console.log(data);
module.exports = { data };
# The Dugout — Prep Baseball Pennsylvania

Staff operations app: events, KPIs, 2027 forecast, staff, schedule, tasks, rankings, prospects and scouting notes.

- **Hosting:** GitHub Pages (this repo, `main` branch, root folder)
- **Sign-in and data:** Firebase (email + password logins created by the owner, Firestore database, Storage for videos and photos)

## Who can get in

Only logins (created in Firebase → Authentication → Users) whose email appears on the **Staff** tab with Access set to **Full** or **Partial**. Owners listed in `config.js` and `firestore.rules` always have Full access.

| Access | Sees |
|---|---|
| Full | Everything, including Overview, Events and 2027 Forecast (finances) |
| Partial | Staff, Schedule, Tasks, Rankings, Prospects, Scouting Notes |

The Firestore security rules enforce these levels, not just the screen.

## Files

| File | Purpose |
|---|---|
| `index.html` | The app |
| `config.js` | Firebase project settings and owner emails (not secret) |
| `firestore.rules` | Database access rules: paste into Firebase console → Firestore → Rules |
| `storage.rules` | Video and photo access rules: paste into Firebase console → Storage → Rules |
| `import.html` | One-time data import from the Claude version (owners only) |

Never commit data exports to this repo.

## One-time setup checklist

1. Firebase project with **Email/Password** sign-in, public sign-up turned **off** (Authentication → Settings → User actions), Firestore (production mode) and optionally Storage.
2. Paste the web app's `firebaseConfig` into `config.js`.
3. Publish `firestore.rules` (and `storage.rules` if Storage is on) in the Firebase console.
4. Firebase console → Authentication → Settings → **Authorized domains** → add `www.northeastdugoutpa.com` and `northeastdugoutpa.com`. Create your own login under Authentication → Users → Add user.
5. GitHub repo → Settings → Pages → Deploy from branch → `main` / root.
6. Open `https://www.northeastdugoutpa.com/import.html`, sign in as an owner, and import `dugout-export.json`.

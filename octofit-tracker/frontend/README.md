# OctoFit Tracker frontend

The presentation tier uses Vite environment variables for the API host. In
Codespaces, copy `.env.example` to `.env.local` and define
`VITE_CODESPACE_NAME` with the value of your `CODESPACE_NAME`. The frontend
then calls:

`https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`

When `VITE_CODESPACE_NAME` is not set, the API client safely falls back to
`http://localhost:8000/api`, which supports local development without creating
an `https://undefined-8000...` URL.

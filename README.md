# Calculator - Frontend

App created to manage calculator operations. UI views expectations:
- Login (and “sign out” button anywhere available for all session-required screens)
  - A simple username and password input form
- New Operation
  - An input form providing all fields to request a new operation on behalf of the current user
- User Records
  - Datatable of all operation records from the current user
  - Datatable should have pagination (page number and per-page option) and sorting
  - Datatable should have a filter/search input field for partial matches
  - Delete button to delete records

Since user management was not expected at this moment, didn't create views for it.

Execution can be done using Docker. For that, just run those commands at the root folder:

```
docker compose build
docker compose up -d
```

Execution will use the port 8081.

There are two users registered:

```
Email: test@test.com
Password: test123

Email: du@test.com
Password: test123
```

Created using Angular and Angular Material 16.
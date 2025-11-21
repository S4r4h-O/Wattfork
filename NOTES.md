# Notes for development

## Supabase

- [Supabase auth components](https://supabase.com/ui/docs/getting-started/introduction)

- [Supabase files uploads](https://supabase.com/docs/guides/storage/uploads/standard-uploads?queryGroups=language&language=js)

## Backend

### Backend Routes

#### Auth

- `POST /auth/register`
  User registration

- `POST /auth/login`
  User login

- `POST /auth/logout`
  User logout

- `GET /auth/me`
  Current user data

#### User info

- `GET /users/:username`
  User profile data

- `PATCH /users/:username`
  Update user profile

- `DELETE /users/:username`
  Delete user account

#### Stories (needs pagination)

- `GET /stories`
  List all stories

- `POST /stories`
  Create new story

- `GET /stories/:slug`
  Story details

- `PATCH /stories/:slug`
  Update story

- `DELETE /stories/:slug`
  Delete story

- `PATCH /stories/:slug/publish`
  Publish story

- `GET /stories/:slug/parts`
  List story parts

- `POST /stories/:slug/parts`
  Create story part

- `GET /stories/:slug/parts/:partNumber`
  Part details

- `PATCH /stories/:slug/parts/:partNumber`
  Update part

- `DELETE /stories/:slug/parts/:partNumber`
  Delete part

#### Categories

- `GET /categories`
  List all categories

- `GET /categories/:slug/stories`
  Stories by category

- `GET /search`
  Search stories by title or category

## Frontend

### Frontend Routes

- `/`
  Landing page

- `/home`
  Post-login dashboard

- `/user/:user`
  User profile

- `/menu/settings`
  Account settings

- `/stories/:category`
  Category listing

- `/story/:slug`
  Story details

- `/search`
  Name search and category browsing

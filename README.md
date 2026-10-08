# SynapCast Backend

SynapCast is a video-platform backend API built with Node.js, Express, MongoDB, and
Mongoose. It provides user authentication, profile management, image uploads,
watch history, and JWT-based protected routes.

## Tech stack

- Node.js with ES modules
- Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt password hashing
- Cloudinary image uploads
- Multer multipart file handling
- cookie-parser and CORS

## Prerequisites

- Node.js 18 or newer
- npm
- A MongoDB database
- A Cloudinary account for avatar and cover-image uploads

## Getting started

1. Clone the repository and enter the project directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root. Do not commit this file.

4. Start the development server:

   ```bash
   npm run dev
   ```

The API runs on `http://localhost:8000` by default.

## Environment variables

```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/
CORS_ORIGIN=http://localhost:5173

ACCESS_TOKEN_SECRET=replace-with-a-long-random-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=replace-with-a-different-long-random-secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

The application connects to the `synapcast` database.

## API

All user endpoints use the `/api/v1/users` prefix.

### Authentication and account routes

| Method | Endpoint | Authentication | Description |
| --- | --- | --- | --- |
| `POST` | `/register` | No | Register a user with optional avatar and cover image uploads |
| `POST` | `/login` | No | Log in and receive JWT cookies |
| `POST` | `/logout` | JWT | Log out and invalidate the refresh token |
| `POST` | `/refresh-token` | No | Request a new access token |
| `PATCH` | `/change-password` | JWT | Change the current user's password |
| `GET` | `/current-user` | JWT | Get the authenticated user's details |
| `PATCH` | `/update-account-details` | JWT | Update account details |
| `PATCH` | `/avatar` | JWT | Upload or update the user's avatar |
| `PATCH` | `/cover-image` | JWT | Upload or update the user's cover image |
| `GET` | `/channel/:username` | JWT | Get a user's channel profile |
| `GET` | `/history` | JWT | Get the authenticated user's watch history |

Protected requests must send the access token either as the `accessToken`
cookie or in the header:

```http
Authorization: Bearer <access-token>
```

For browser clients, include credentials when making requests so cookies are
sent:

```js
fetch("http://localhost:8000/api/v1/users/current-user", {
  credentials: "include",
});
```

## File uploads

The registration endpoint accepts multipart form data with these field names:

- `avatar`
- `coverImage`

Avatar and cover-image update endpoints accept one file using the matching
field name. Uploaded files are processed through Cloudinary.

## Project structure

```text
src/
├── controllers/    Request handlers
├── db/             MongoDB connection
├── middlewares/    JWT authentication and file upload middleware
├── models/         Mongoose models
├── routes/         Express route definitions
├── utils/          Cloudinary, response, error, and async helpers
├── app.js          Express application configuration
└── index.js        Database connection and server startup
```

## Development

Run the development server with Nodemon:

```bash
npm run dev
```

There are currently no automated test or production build scripts defined in
`package.json`.

## Security notes

- Keep `.env` out of version control.
- Use different, long random values for the access-token and refresh-token
  secrets.
- Use HTTPS and secure cookies in production.
- Configure `CORS_ORIGIN` to the exact frontend origin that should access the
  API.

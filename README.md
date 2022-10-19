This project is enables fetching GitHub API to obtain the commits from a public repository. It is built with Next.js and NestJS.

## Frontend

### Dependencies installation

```bash
cd commit-history-frontend
yarn install
```

### Development server

```bash
cd commit-history-frontend
yarn dev
```

### Production build

```bash
cd commit-history-frontend
yarn install
yarn build
```

Default port for localhost is 3000.

## Backend

### Dependencies installation

```bash
cd commit-history-frontend
yarn install
```

### Development mode

```bash
cd commit-history-backend
yarn start
```

Default port for localhost is 3001.

### Production mode

```bash
cd commit-history-backend
yarn start:prod
```

### API endpoints

- "/commits/auth": POST/GET
  - Enables authentication with GitHub API by Personal Access Token.
- "/commits/repository": POST/GET
  - Enables specifiying which repository to examine.
- "/commits": GET
  - Enables fetching commit data for the repository.

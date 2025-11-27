# Como executar o projeto (dev)

## Pré-requisitos
- Docker + Docker Compose instalados
- Java 17+ (se for rodar o backend fora do Docker)
- Node 18+ (se for rodar frontend/bot fora do Docker)

## Rodando tudo com Docker

```bash
docker compose up --build
```

- Backend: http://localhost:8080
- Frontend: http://localhost:3000

## Rodando manualmente

### Banco (Docker)
```bash
docker compose up db
```

### Backend
```bash
cd backend
./mvnw spring-boot:run  # ou mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Bot do Discord
```bash
cd discord-bot
npm install
npm start
```

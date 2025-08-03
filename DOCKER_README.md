# 🐳 Docker - Portal CSU

Este documento contém instruções para executar a aplicação CSU usando Docker.

## 📋 Pré-requisitos

- Docker (versão 20.10 ou superior)
- Docker Compose (versão 2.0 ou superior)

## 🚀 Execução Rápida

### 1. Build e Execução com Docker Compose

```bash
# Build e iniciar a aplicação
docker-compose up --build

# Executar em background
docker-compose up -d --build

# Parar a aplicação
docker-compose down
```

### 2. Execução Direta com Docker

```bash
# Build da imagem
docker build -t csu-portal .

# Executar container
docker run -p 3000:3000 csu-portal

# Executar em background
docker run -d -p 3000:3000 --name csu-app csu-portal
```

## 🔧 Configurações

### Variáveis de Ambiente

O Dockerfile inclui as seguintes variáveis de ambiente:

- `NODE_ENV=production` - Ambiente de produção
- `PORT=3000` - Porta da aplicação
- `NEXT_TELEMETRY_DISABLED=1` - Desabilita telemetria do Next.js

### Portas

- **3000** - Aplicação Next.js
- **80/443** - Nginx (apenas em produção)

## 🏗️ Estrutura do Dockerfile

### Multi-stage Build

1. **Stage 1 (deps)**: Instalação de dependências
2. **Stage 2 (builder)**: Build da aplicação
3. **Stage 3 (runner)**: Imagem de produção

### Otimizações

- ✅ **Alpine Linux**: Imagem base leve
- ✅ **Multi-stage**: Reduz tamanho final
- ✅ **Usuário não-root**: Segurança
- ✅ **Cache limpo**: Otimização de espaço

## 📊 Monitoramento

### Health Check

A aplicação inclui health check automático:

```bash
# Verificar status
docker ps

# Ver logs
docker logs csu-app

# Health check manual
curl http://localhost:3000/api/health
```

## 🔒 Segurança

### Headers de Segurança

O Next.js está configurado com headers de segurança:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`

### Usuário Não-root

A aplicação roda como usuário `nextjs` (UID 1001) para segurança.

## 🚀 Deploy em Produção

### 1. Build para Produção

```bash
# Build otimizado
docker build --target runner -t csu-portal:prod .

# Executar em produção
docker run -d \
  -p 3000:3000 \
  --name csu-prod \
  --restart unless-stopped \
  csu-portal:prod
```

### 2. Com Docker Compose (Produção)

```bash
# Executar com Nginx
docker-compose --profile production up -d
```

### 3. Variáveis de Ambiente

Crie um arquivo `.env` para produção:

```env
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

## 🛠️ Desenvolvimento

### Executar em Modo Desenvolvimento

```bash
# Build para desenvolvimento
docker build --target builder -t csu-dev .

# Executar com volumes para hot reload
docker run -d \
  -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  csu-dev
```

## 📝 Comandos Úteis

```bash
# Ver logs em tempo real
docker logs -f csu-app

# Executar comandos no container
docker exec -it csu-app sh

# Verificar uso de recursos
docker stats csu-app

# Backup da aplicação
docker commit csu-app csu-backup

# Limpar imagens não utilizadas
docker system prune -a
```

## 🔍 Troubleshooting

### Problemas Comuns

1. **Porta já em uso**:
   ```bash
   # Mudar porta
   docker run -p 3001:3000 csu-portal
   ```

2. **Permissões**:
   ```bash
   # Corrigir permissões
   sudo chown -R $USER:$USER .
   ```

3. **Cache do Docker**:
   ```bash
   # Limpar cache
   docker builder prune
   ```

## 📈 Performance

### Otimizações Implementadas

- ✅ **Standalone output**: Next.js otimizado
- ✅ **Alpine Linux**: Imagem base mínima
- ✅ **Multi-stage build**: Reduz tamanho
- ✅ **Compressão**: Gzip habilitado
- ✅ **Cache limpo**: Otimização de espaço

### Métricas Esperadas

- **Tamanho da imagem**: ~200MB
- **Tempo de build**: ~3-5 minutos
- **Memória em uso**: ~150-200MB
- **Startup time**: ~10-15 segundos

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique os logs: `docker logs csu-app`
2. Consulte a documentação do Next.js
3. Abra uma issue no repositório

---

**🎉 A aplicação CSU está pronta para produção com Docker!** 
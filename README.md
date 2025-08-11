# Portal do Cadastro Social Único (CSU)

Uma landing page simples e focada para o Portal do Cadastro Social Único, desenvolvida com Next.js, Tailwind CSS e DaisyUI.

## 🎨 Paleta de Cores

| Cor      | Proporção | Código Hex |
| -------- | --------- | ---------- |
| Vermelho | 60%       | `#DA291C`  |
| Preto    | 30%       | `#000000`  |
| Amarelo  | 10%       | `#FFCD00`  |

## 🚀 Tecnologias Utilizadas

- **Next.js 15.4.5** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3.4.0** - Framework CSS utilitário
- **DaisyUI 5.0.50** - Componentes UI
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos automáticos

## 📁 Estrutura do Projeto

```
csu-next/
├── src/
│   └── app/
│       ├── page.tsx              # Landing page principal
│       ├── layout.tsx            # Layout raiz
│       └── globals.css           # Estilos globais
├── public/                       # Arquivos estáticos
├── tailwind.config.js            # Configuração Tailwind + DaisyUI
├── postcss.config.mjs            # Configuração PostCSS
└── package.json                  # Dependências e scripts
```

## 🎯 Seções da Landing Page

### 1. **Cabeçalho/Menu** (`#header`)
- Navegação responsiva com logo CSU
- Menu hambúrguer para mobile
- Links para todas as seções
- Botão de acesso ao sistema

### 2. **Banner/Hero** (`#banner`)
- Seção de destaque com gradiente
- Logo CSU em destaque
- Título principal e descrição
- Call-to-action buttons

### 3. **Indicadores** (`#indicadores`)
- Estatísticas do sistema CSU
- Números impactantes (40M+ famílias, 15+ programas, etc.)
- Layout em grid responsivo

### 4. **Documentos** (`#documentos`)
- Grid de Editais Importantes
- Manual do usuário, regulamentação, política de privacidade
- Botões de download para cada documento

### 5. **Parceiros** (`#parceiros`)
- Grid de parceiros institucionais
- Ministérios, bancos, órgãos governamentais
- Layout responsivo com ícones

### 6. **FAQs** (`#faqs`)
- Accordion com perguntas frequentes
- 6 perguntas principais sobre o CSU
- Respostas detalhadas e úteis

### 7. **Contato** (`#contato`)
- Formulário de contato completo
- Informações de contato (telefone, email, horário)
- Seção de atendimento emergencial

### 8. **Localização** (`#localizacao`)
- Mapa interativo (simulado)
- Lista de escritórios principais
- Horários de funcionamento

### 9. **Rodapé** (`#footer`)
- Logo e descrição do CSU
- Links para todas as seções
- Informações de contato
- Redes sociais
- Copyright

## 🎨 Design System

### Cores Personalizadas
- `csu-red`: #DA291C (60% - Cor principal)
- `csu-black`: #000000 (30% - Textos e elementos escuros)
- `csu-yellow`: #FFCD00 (10% - Destaques e CTAs)

### Componentes Utilizados
- **Navbar** - Navegação responsiva
- **Hero Section** - Seção de destaque
- **Cards** - Exibição de conteúdo
- **Accordion** - FAQs
- **Forms** - Formulário de contato
- **Grid Layouts** - Organização de conteúdo

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Navegar para o diretório do projeto
cd csu-next

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎯 Navegação

A landing page possui navegação suave entre seções:
- **Indicadores** - Estatísticas do sistema
- **Documentos** - Downloads importantes
- **Parceiros** - Instituições parceiras
- **FAQs** - Perguntas frequentes
- **Contato** - Formulário e informações

## 📊 Conteúdo

### Indicadores Principais
- 40M+ Famílias Cadastradas
- 15+ Programas Sociais
- 100% Cobertura Nacional
- 24/7 Disponibilidade

### Documentos Disponíveis
- Manual do Usuário
- Regulamentação CSU
- Política de Privacidade
- Termos de Uso
- Relatório Anual
- FAQ Oficial

### Parceiros Institucionais
- Ministério da Cidadania
- Caixa Econômica Federal
- Banco do Brasil
- INSS
- Ministério da Educação
- Ministério da Saúde
- Governos Estaduais
- Prefeituras

## 📞 Informações de Contato

- **Telefone**: 939 092 959 /  939 092 969 
- **Email**: cncsu.oficial@mfids.gov.cv
- **Horário**: Segunda a Sexta, 8h às 18h

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração do Portal do Cadastro Social Único.

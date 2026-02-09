# 📊 Sistema NPS - AureonGo

Sistema de avaliação NPS (Net Promoter Score) simples e elegante para coletar feedback dos clientes via WhatsApp.

## 🔗 Link de Acesso

**URL Principal:**
```
https://creao-build-studio-production.s3-us-west-2.amazonaws.com/agentapp-static/f871b310-c041-702c-94a1-309a37a88dff/kV2viaftXz/index.html
```

## 📱 Como Enviar para Clientes via WhatsApp

### Opção 1: Link Direto
Envie esta mensagem para seus clientes:

```
Olá! 👋

Sua opinião é muito importante para nós!

Por favor, avalie nossa experiência:
https://creao-build-studio-production.s3-us-west-2.amazonaws.com/agentapp-static/f871b310-c041-702c-94a1-309a37a88dff/kV2viaftXz/index.html

Leva menos de 1 minuto! 😊
```

### Opção 2: Link Personalizado (com nome do cliente)
```
https://creao-build-studio-production.s3-us-west-2.amazonaws.com/agentapp-static/f871b310-c041-702c-94a1-309a37a88dff/kV2viaftXz/index.html?nome=João&id=12345
```

### Opção 3: Link Encurtado
Use um serviço como bit.ly ou tinyurl para criar um link mais curto e fácil de lembrar.

## ⚙️ Configuração

### Alterar o Número do WhatsApp
Edite o arquivo `script.js` na linha 2:

```javascript
const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo seu número
```

**Formato do número:**
- Código do país: 55 (Brasil)
- DDD: 11 (São Paulo)
- Número: 914470385
- Exemplo completo: `5511914470385`

## 🎨 Cores Utilizadas

O sistema utiliza as cores da identidade visual AureonGo:

- **Dourado AureonGo**: `#D4AF77`
- **Fundo Escuro**: `#1a1a1a` a `#2d2d2d`
- **Texto**: `#2d2d2d`

## 📈 Como Funciona o NPS

### Categorias de Avaliação:

- **Detratores (0-6)**: 😞 Clientes insatisfeitos
- **Neutros (7-8)**: 😐 Clientes satisfeitos mas sem entusiasmo
- **Promotores (9-10)**: 😃 Clientes entusiastas

### Cálculo do NPS:

```
NPS = (% Promotores) - (% Detratores)
```

O resultado varia de -100 a +100:
- **-100 a 0**: Zona Crítica
- **0 a 50**: Zona de Aperfeiçoamento
- **50 a 75**: Zona de Qualidade
- **75 a 100**: Zona de Excelência

## 🔄 Fluxo de Uso

1. Cliente acessa o link
2. Escolhe uma nota de 0 a 10
3. Opcionalmente adiciona um comentário
4. Clica em "Enviar Avaliação"
5. É redirecionado para WhatsApp com a mensagem formatada
6. A avaliação é enviada automaticamente para a empresa

## 💾 Armazenamento

O sistema salva as avaliações no navegador do usuário (localStorage) e calcula o NPS automaticamente. Para ver o relatório, abra o Console do navegador (F12).

## 📱 Responsivo

O sistema é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones
- 💻 Tablets
- 🖥️ Desktops

## 🚀 Melhorias Futuras

- [ ] Dashboard administrativo para visualizar resultados
- [ ] Exportação de dados para Excel/CSV
- [ ] Integração com banco de dados
- [ ] Notificações automáticas por email
- [ ] Gráficos e relatórios detalhados

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do WhatsApp configurado no sistema.

---

**Desenvolvido para AureonGo** ✨

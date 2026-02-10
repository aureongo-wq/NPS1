// Configurações
const WHATSAPP_NUMBER = '5511914470385'; // Substitua pelo número do WhatsApp da empresa
let selectedScore = null;

// Elementos DOM
const ratingButtons = document.querySelectorAll('.rating-btn');
const feedbackSection = document.getElementById('feedbackSection');
const feedbackText = document.getElementById('feedbackText');
const submitBtn = document.getElementById('submitBtn');
const thankYou = document.getElementById('thankYou');
const card = document.querySelector('.card');

// Event listeners para os botões de avaliação
ratingButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        selectedScore = parseInt(this.dataset.score);

        // Remove seleção anterior
        ratingButtons.forEach(b => {
            b.classList.remove('selected', 'detractor', 'passive', 'parceiro');
        });

        // Adiciona classe baseada na categoria NPS
        this.classList.add('selected');

        if (selectedScore <= 6) {
            this.classList.add('detractor');
        } else if (selectedScore <= 8) {
            this.classList.add('passive');
        } else {
            this.classList.add('PARCEIRO');
        }

        // Mostra seção de feedback
        feedbackSection.style.display = 'block';
    });
});

// Event listener para o botão de envio
submitBtn.addEventListener('click', function() {
    enviarParaWhatsApp();
});

function enviarParaWhatsApp() {
    // Monta a mensagem
    const categoria = getCategoriaTexto(selectedScore);
    const comentario = feedbackText.value.trim();

    let mensagem = `*Avaliação NPS - AureonGo*\n\n`;
    mensagem += `📊 Nota: *${selectedScore}/10*\n`;
    mensagem += `📋 Categoria: ${categoria}\n\n`;

    if (comentario) {
        mensagem += `💬 Comentário:\n${comentario}\n\n`;
    }

    mensagem += `Obrigado por avaliar nosso serviço!`;

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;

    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostra mensagem de agradecimento
    setTimeout(() => {
        feedbackSection.style.display = 'none';
        thankYou.style.display = 'block';

        // Salva no localStorage
        salvarAvaliacao(selectedScore, comentario);
    }, 500);
}

function getCategoriaTexto(score) {
    if (score <= 6) {
        return '😞 Detrator';
    } else if (score <= 8) {
        return '😐 Neutro';
    } else {
        return '😃 Parceiro';
    }
}

function salvarAvaliacao(score, comentario) {
    const avaliacao = {
        score: score,
        comentario: comentario,
        data: new Date().toISOString(),
        categoria: getCategoriaTexto(score)
    };

    // Recupera avaliações existentes
    let avaliacoes = JSON.parse(localStorage.getItem('nps_avaliacoes') || '[]');
    avaliacoes.push(avaliacao);

    // Salva no localStorage
    localStorage.setItem('nps_avaliacoes', JSON.stringify(avaliacoes));

    // Calcula e exibe NPS
    calcularNPS();
}

function calcularNPS() {
    const avaliacoes = JSON.parse(localStorage.getItem('nps_avaliacoes') || '[]');

    if (avaliacoes.length === 0) return;

    const parceiros = avaliacoes.filter(a => a.score >= 9).length;
    const detratores = avaliacoes.filter(a => a.score <= 6).length;
    const total = avaliacoes.length;

    const nps = Math.round(((parceiros - detratores) / total) * 100);

    console.log('=== RELATÓRIO NPS ===');
    console.log(`Total de avaliações: ${total}`);
    console.log(`Parceiros (9-10): ${parceiros} (${Math.round(parceiros/total*100)}%)`);
    console.log(`Neutros (7-8): ${avaliacoes.filter(a => a.score >= 7 && a.score <= 8).length}`);
    console.log(`Detratores (0-6): ${detratores} (${Math.round(detratores/total*100)}%)`);
    console.log(`NPS Score: ${nps}`);
    console.log('====================');
}

// Função para obter parâmetros da URL
function obterParametrosURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const clienteNome = urlParams.get('nome');
    const clienteId = urlParams.get('id');

    if (clienteNome || clienteId) {
        // Personaliza a experiência se tiver parâmetros
        console.log(`Cliente: ${clienteNome || clienteId}`);
    }
}

// Inicializa
obterParametrosURL();


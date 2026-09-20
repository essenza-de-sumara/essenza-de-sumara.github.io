// ======================================================
// ESSENZA DE SUMARA — CONFIGURAÇÕES
// ======================================================

// Código do país + DDD + telefone, somente números.
const WHATSAPP_NUMBER = '5562999883730';

// COMO EDITAR:
// volume: 30     → mostra 30 ml
// volume: 50     → mostra 50 ml
// volume: 100    → mostra 100 ml
// volume: null   → oculta o volume
//
// price: 80.00   → mostra R$ 80,00
// price: null    → mostra "Consulte o preço"
//
// Não escreva "ml" no campo volume.
// Use ponto nos valores decimais: 7.5, 80.90 etc.

// ======================================================
// PRODUTOS — EDITE AQUI
// ======================================================

const perfumes = [
    {
        id: 1,
        name: 'Khamrah',
        brand: 'LATTAFA',
        gender: 'Unissex',
        volume: 30,
        price: 80.00,
        family: 'Âmbar · Especiarias · Baunilha',
        image: 'khamrah.webp',
        badge: 'INTENSO & ENVOLVENTE',
        description: 'Uma fragrância de presença marcante para quem aprecia acordes quentes e adocicados.',
        notes: 'Quente, especiado e adocicado'
    },
    {
        id: 2,
        name: 'Asad',
        brand: 'LATTAFA',
        gender: 'Masculino',
        volume: 100,
        price: 320.00,
        family: 'Especiarias · Madeiras · Âmbar',
        image: 'asad.webp',
        badge: 'FORTE & MARCANTE',
        description: 'Um perfume de caráter intenso para quem gosta de uma assinatura amadeirada e especiada.',
        notes: 'Pimenta preta, tabaco e abacaxi; patchouli, café e íris; baunilha, âmbar, madeira seca, benjoim e ládano.'
    },
    {
        id: 3,
        name: 'Yara Moi',
        brand: 'LATTAFA',
        gender: 'Feminino',
        volume: 30,
        price: 80.00,
        family: 'Floral · Amadeirado · Adocicado',
        image: 'moi.webp',
        badge: 'SUAVE & SOFISTICADO',
        description: 'Uma combinação de delicadeza floral e notas envolventes para acompanhar momentos especiais.',
        notes: 'Floral, amadeirado e adocicado'
    },
    {
        id: 4,
        name: 'Sabah Al Ward',
        brand: 'AL WATANIAH',
        gender: 'Feminino',
        volume: 100,
        price: 240.00, // Confira: este valor significa R$ 8.000,00.
        family: 'Flores brancas · Cacau · Baunilha',
        image: 'sabah-al-ward.webp',
        badge: 'FLORAL & ENVOLVENTE',
        description: 'Um floral oriental que combina flores brancas e cacau com o calor da baunilha.',
        notes: 'Mandarina e pimenta rosa; flor de laranjeira, cacau e jasmim sambac; baunilha, fava tonka e patchouli.'
    },
    {
        id: 5,
        name: 'Durrat Al Aroos',
        brand: 'AL WATANIAH',
        gender: 'Feminino',
        volume: 100,
        price: 240.00,
        family: 'Almíscar · Especiarias · Madeiras',
        image: 'durrat-al-aroos.webp',
        badge: 'AMADEIRADO & CREMOSO',
        description: 'Almíscar branco, baunilha e especiarias se encontram em uma composição com fundo amadeirado.',
        notes: 'Almíscar branco e nagarmota; baunilha, cardamomo e açafrão; madeira guaiac e cumarina.'
    },
    {
        id: 6,
        name: 'Amnia',
        brand: 'AL WATANIAH',
        gender: 'Unissex',
        volume: 100,
        price: 240,
        family: 'Amêndoa · Tuberosa · Baunilha',
        image: 'amnia.webp',
        badge: 'FLORAL & AMENDOADO',
        description: 'Uma fragrância compartilhável que une a delicadeza das flores ao toque amendoado e à baunilha.',
        notes: 'Pimenta rosa e amêndoa; tuberosa e flor de laranjeira; baunilha, fava tonka e patchouli.'
    },
    {
        id: 7,
        name: 'Sabah Al Ward Valentine',
        brand: 'AL WATANIAH',
        gender: 'Feminino',
        volume: 100,
        price: 350,
        family: 'Cereja · Café · Baunilha',
        image: 'sabah-al-ward-valentine.webp',
        badge: 'DOCE & CREMOSO',
        description: 'Cereja, baunilha e nuances cremosas se combinam com café e flores em uma proposta adocicada.',
        notes: 'Cereja, notas doces, baunilha e creme; café, cítricos, flor de laranjeira e flores brancas; almíscar, patchouli e âmbar.'
    },
    {
        id: 8,
        name: 'Sabah Al Ward Garden of Eden',
        brand: 'AL WATANIAH',
        gender: 'Feminino',
        volume: 100,
        price: 399.90,
        family: 'Floral · Aquático · Baunilha',
        image: 'sabah-al-ward-garden.webp',
        badge: 'FLORAL & AQUÁTICO',
        description: 'Uma composição floral aquática, com nuances de lótus e íris sobre um fundo de baunilha e madeiras.',
        notes: 'Lótus azul, notas aquáticas, bergamota, frutas e mandarina; lírio, íris, jasmim-manga e jasmim; baunilha, sândalo, âmbar e almíscar.'
    },
    {
        id: 9,
        name: 'Angham',
        brand: 'LATTAFA',
        gender: 'Unissex',
        volume: 100,
        price: 300.00,
        family: 'Lavanda · Pralinê · Baunilha',
        image: 'angham.webp',
        badge: 'AROMÁTICO & ADOCICADO',
        description: 'Lavanda e baunilha se encontram com nuances de pralinê e especiarias em uma composição compartilhável.',
        notes: 'Gengibre, mandarina e pimenta rosa; lavanda, pralinê, cacau e jasmim; baunilha, âmbar e almíscar.'
    },
    {
        id: 10,
        name: 'Chants Tenderina',
        brand: 'MAISON ALHAMBRA',
        gender: 'Feminino',
        volume: 100,
        price: 290.00,
        family: 'Cítrico · Floral · Almíscar',
        image: 'chants-tenderina.webp',
        badge: 'FLORAL & DELICADO',
        description: 'Um floral frutado que combina a vivacidade dos cítricos com rosa, jasmim e um fundo almiscarado.',
        notes: 'Bergamota, flor de toranja e pêssego; rosa, jasmim e íris; almíscar branco, baunilha, vetiver e patchouli.'
    },
    {
        id: 11,
        name: 'Victoria',
        brand: 'LATTAFA',
        gender: 'Unissex',
        volume: 100,
        price: 300.00,
        family: 'Torta de limão · Néroli · Baunilha',
        image: 'victoria.webp',
        badge: 'CÍTRICO & GOURMAND',
        description: 'Uma composição compartilhável que combina a nota de torta de limão com merengue, néroli e baunilha.',
        notes: 'Torta de limão com merengue na saída; néroli no coração; baunilha no fundo.'
    },
    {
        id: 12,
        name: 'Salvo Eau de Parfum',
        brand: 'MAISON ALHAMBRA',
        gender: 'Masculino',
        volume: 100,
        price: 320.00,
        family: 'Bergamota · Lavanda · Ambroxan',
        image: 'salvo.webp',
        badge: 'FRESCO & ESPECIADO',
        description: 'A versão tradicional de Salvo traz bergamota, lavanda e especiarias sobre uma base de ambroxan e baunilha.',
        notes: 'Bergamota; lavanda, pimenta de Sichuan, anis-estrelado e noz-moscada; ambroxan e baunilha.'
    },
    {
        id: 13,
        name: 'Salvo Elixir',
        brand: 'MAISON ALHAMBRA',
        gender: 'Masculino',
        volume: 100,
        price: 320.00,
        family: 'Especiarias · Tabaco · Âmbar',
        image: 'salvo-elixir.webp',
        badge: 'AMBARADO & AMADEIRADO',
        description: 'Uma composição especiada com tabaco, nuances de café e um fundo de madeiras, âmbar e baunilha.',
        notes: 'Pimenta preta, tabaco e abacaxi; patchouli, íris e café; madeiras, âmbar, baunilha, benjoim e ládano.'
    },
    {
        id: 14,
        name: 'Victorioso',
        brand: 'MAISON ALHAMBRA',
        gender: 'Masculino',
        volume: 100,
        price: 280.00,
        family: 'Marinho · Bergamota · Madeiras',
        image: 'victorioso.webp',
        badge: 'AQUÁTICO & AROMÁTICO',
        description: 'O Victorioso original combina notas marinhas e bergamota com um coração aromático e fundo amadeirado.',
        notes: 'Notas marinhas e bergamota; folha de louro e jasmim; âmbar-cinzento, musgo de carvalho, patchouli e madeira guaiac.'
    }
];

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

let filter = 'Todos';
let message = '';

const $ = selector => document.querySelector(selector);

function money(value) {
    if (!Number.isFinite(value)) {
        return 'Consulte o preço';
    }

    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function formatVolume(volume) {
    // Não assume nenhum volume padrão.
    if (!Number.isFinite(volume) || volume <= 0) {
        return '';
    }

    return volume.toLocaleString('pt-BR', {
        maximumFractionDigits: 3
    }) + ' ML';
}

function volumeText(perfume) {
    const label = formatVolume(perfume.volume);
    return label ? ` · ${label}` : '';
}

function normalized(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function comparePrices(a, b, direction) {
    // Produtos sem preço ficam no final em ambas as ordenações.
    if (!Number.isFinite(a.price)) {
        return Number.isFinite(b.price) ? 1 : 0;
    }

    if (!Number.isFinite(b.price)) {
        return -1;
    }

    return direction * (a.price - b.price);
}

// ======================================================
// EXIBIÇÃO DO CATÁLOGO
// ======================================================

function render() {
    const query = normalized($('#search').value);

    const list = perfumes.filter(perfume => {
        const matchesGender =
            filter === 'Todos' || perfume.gender === filter;

        const text = [
            perfume.name,
            perfume.brand,
            perfume.family
        ].join(' ');

        const matchesSearch = normalized(text).includes(query);

        return matchesGender && matchesSearch;
    });

    const sort = $('#sort').value;

    if (sort === 'asc') {
        list.sort((a, b) => comparePrices(a, b, 1));
    }

    if (sort === 'desc') {
        list.sort((a, b) => comparePrices(a, b, -1));
    }

    if (sort === 'name') {
        list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    $('#count').textContent =
        `${list.length} fragrância${list.length === 1 ? '' : 's'}`;

    $('#empty').hidden = list.length > 0;

    $('#products').innerHTML = list.map(perfume => `
        <article class="product">
            <button
                class="product-image"
                data-id="${perfume.id}"
                aria-label="Ver detalhes de ${perfume.name}"
            >
                <span class="badge">${perfume.badge}</span>

                <img
                    src="${perfume.image}"
                    alt="Frasco do perfume ${perfume.name} da ${perfume.brand}"
                    loading="lazy"
                >
            </button>

            <div class="product-meta">
                <span>${perfume.brand}</span>
                <span>
                    ${perfume.gender.toUpperCase()}${volumeText(perfume)}
                </span>
            </div>

            <h3>${perfume.name}</h3>

            <p class="notes">${perfume.family}</p>

            <div class="price">
                ${money(perfume.price)}

                <small>
                    ${Number.isFinite(perfume.price)
                        ? 'preço ilustrativo'
                        : 'pelo WhatsApp'}
                </small>
            </div>

            <button
                class="details-button"
                data-id="${perfume.id}"
            >
                Conhecer fragrância
                <span>↗</span>
            </button>
        </article>
    `).join('');
}

// ======================================================
// DETALHES DO PERFUME
// ======================================================

function showProduct(id) {
    const perfume = perfumes.find(item => item.id === id);

    if (!perfume) {
        return;
    }

    $('#detail-content').innerHTML = `
        <img
            src="${perfume.image}"
            alt="Frasco ${perfume.name}"
        >

        <div>
            <p class="eyebrow">
                ${perfume.brand} · ${perfume.gender.toUpperCase()}
            </p>

            <h2>${perfume.name}</h2>

            <p>Eau de Parfum${volumeText(perfume)}</p>

            <p>${perfume.description}</p>

            <div class="note-label">PERFIL OLFATIVO</div>

            <p>${perfume.notes}</p>

            <strong>${money(perfume.price)}</strong>

            <p>
                ${Number.isFinite(perfume.price) ? 'Valor ilustrativo. ' : ''}
                Consulte preço e disponibilidade com a loja.
            </p>

            <button class="gold-button" id="interest">
                Tenho interesse ↗
            </button>
        </div>
    `;

    $('#detail').showModal();

    $('#interest').onclick = () => {
        $('#detail').close();
        contact(perfume.name, perfume.volume);
    };
}

// ======================================================
// WHATSAPP
// ======================================================

function contact(name, volume = null) {
    const volumeLabel = formatVolume(volume);

    if (name) {
        const productLabel = volumeLabel
            ? `${name} (${volumeLabel})`
            : name;

        message =
            `Olá, Essenza de Sumara! Tenho interesse no perfume ${productLabel}. ` +
            'Poderia informar o preço e a disponibilidade?';
    } else {
        message =
            'Olá, Essenza de Sumara! Gostaria de ajuda para escolher um perfume árabe.';
    }

    if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank', 'noopener,noreferrer');
        return;
    }

    // Alternativa caso o telefone ainda não esteja configurado.
    $('#contact-text').textContent = message;
    $('#copy-status').textContent = '';
    $('#contact').showModal();
}

// ======================================================
// FILTROS E EVENTOS
// ======================================================

$('#filters').addEventListener('click', event => {
    const button = event.target.closest('button');

    if (!button) {
        return;
    }

    filter = button.dataset.filter;

    $('#filters').querySelectorAll('button').forEach(item => {
        const selected = item === button;

        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
    });

    render();
});

$('#search').addEventListener('input', render);
$('#sort').addEventListener('change', render);

$('#reset').onclick = () => {
    $('#search').value = '';
    $('#filters button').click();
};

$('#products').onclick = event => {
    const button = event.target.closest('[data-id]');

    if (button) {
        showProduct(Number(button.dataset.id));
    }
};

// Inclui o botão flutuante do WhatsApp.
document.querySelectorAll('.contact').forEach(button => {
    button.onclick = () => contact();
});

// Fechar janelas pelo botão ou ao clicar fora.
document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.close').onclick = () => {
        dialog.close();
    };

    dialog.addEventListener('click', event => {
        if (event.target !== dialog) {
            return;
        }

        const rect = dialog.getBoundingClientRect();

        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {
            dialog.close();
        }
    });
});

$('#copy').onclick = async () => {
    try {
        await navigator.clipboard.writeText(message);
        $('#copy-status').textContent = 'Mensagem copiada!';
    } catch {
        $('#copy-status').textContent =
            'Selecione e copie a mensagem acima.';
    }
};

// Carrega os produtos ao abrir a página.
render();

// ======================================================
// INTEGRAÇÃO OPCIONAL COM NAVEGADORES COMPATÍVEIS
// ======================================================

if (document.modelContext?.registerTool) {
    try {
        Promise.resolve(
            document.modelContext.registerTool({
                name: 'search_perfume_catalog',
                description:
                    'Busca perfumes e atualiza os resultados visíveis do catálogo.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        query: {
                            type: 'string'
                        }
                    },
                    required: ['query'],
                    additionalProperties: false
                },
                annotations: {
                    readOnlyHint: false
                },
                execute(input) {
                    if (!input || typeof input.query !== 'string') {
                        throw new Error('query deve ser texto');
                    }

                    $('#search').value = input.query;
                    $('#filters button').click();

                    return {
                        query: input.query,
                        count: $('#count').textContent
                    };
                }
            })
        ).catch(() => {});
    } catch {
        // O catálogo funciona mesmo sem essa integração.
    }
}
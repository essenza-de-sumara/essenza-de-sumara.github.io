# Essenza de Sumara — catálogo de perfumes árabes

Site estático responsivo, em português. Edite a lista `perfumes` em `dist/app.js` para trocar produtos e preços; edite `WHATSAPP_NUMBER` para ativar o contato (código do país, DDD e número, somente dígitos). O número vazio abre uma demonstração sem enviar mensagens. Identidade e contato baseados na captura enviada pela loja. Produtos e preços são exemplos, sem integração com estoque ou pagamento.

Abra `dist/index.html` via servidor HTTP para usar o template. Arquivos de interface: index.html, style.css e app.js.

## Imagens de referência

Hero original gerado por IA. Fotos de catálogo obtidas das fontes abaixo, com recorte e redimensionamento. Direitos das fotos pertencem aos respectivos titulares; substituir por fotos autorizadas da loja para uso comercial.

- Asad e Khamrah: https://www.ebay.com/itm/405507790421
- Yara: https://sykz.fr/products/lattafa-yara-eau-de-parfum-de-dubai-mixte
- Yara Moi: https://fragarabic.com/products/yara-moi-lattafa-eau-de-parfum-para-mujer

Validação: sintaxe JavaScript e referências locais verificadas. Contexto de execução WebMCP não disponível para validação; a busca pela interface funciona independentemente dele.

Identidade: roxo #412442, dourado #e8d69d. Logotipo extraído da captura fornecida, sem redesenho. Contato informado: +55 62 99988-3730, São Miguel do Araguaia–GO.

## Atualização do catálogo — 20/09/2026
Onze perfumes adicionados: cinco Al Wataniah, dois Lattafa e quatro Maison Alhambra. Catálogo total de 15 itens; Asad preservado sem duplicação. Sem preço informado: price=null mostra “Consulte o preço” e permanece ao final da ordenação por valor. volume=null omite o volume não confirmado. Os quatro perfumes anteriores foram preservados.

Fontes dos perfis olfativos:
- https://www.fragrantica.com.br/perfume/Al-Wataniah/Sabah-Al-Ward-64579.html
- https://www.fragrantica.com.br/perfume/Al-Wataniah/Durrat-Al-Aroos-78154.html
- https://www.fragrantica.com.br/perfume/Al-Wataniah/Amnia-88546.html
- https://www.fragrantica.com.br/perfume/Al-Wataniah/Sabah-Al-Ward-Valentine-126408.html
- https://www.fragrantica.com.br/perfume/Al-Wataniah/Sabah-Al-Ward-Garden-of-Eden-136843.html

- https://www.fragrantica.com.br/perfume/Lattafa-Perfumes/Angham-96768.html
- https://www.fragrantica.com.br/perfume/Maison-Alhambra/Chants-Tenderina-89034.html
- https://www.fragrantica.com.br/perfume/Lattafa-Perfumes/Victoria-102906.html
- https://www.fragrantica.com/perfume/Maison-Alhambra/Salvo-93538.html
- https://www.fragrantica.com/perfume/Maison-Alhambra/Salvo-Elixir-94166.html
- https://www.fragrantica.com/p/92617
- https://www.fragrantica.com.br/perfume/Lattafa-Perfumes/Asad-72821.html

### Fotos adicionadas

```json
{
  "sabah-al-ward": {
    "image": "https://cdn.shopify.com/s/files/1/0679/9871/1877/files/sabah-al-ward.png?v=1759755351",
    "page": "https://www.alwataniah.com/products/sabah-al-ward"
  },
  "durrat-al-aroos": {
    "image": "https://cdn.shopify.com/s/files/1/0679/9871/1877/files/durrat-al-aroos.png?v=1759830220",
    "page": "https://www.alwataniah.com/products/durrat-al-aroos"
  },
  "amnia": {
    "image": "https://cdn.shopify.com/s/files/1/0679/9871/1877/files/amnia.png?v=1759669017",
    "page": "https://www.alwataniah.com/products/amnia"
  },
  "sabah-al-ward-garden-of-eden": {
    "image": "https://cdn.shopify.com/s/files/1/0679/9871/1877/files/Sabah_Al_Ward_Garden_Of_Eden_Perfume.png?v=1781765585",
    "page": "https://www.alwataniah.com/products/sabah-al-ward-garden-of-eden"
  },
  "sabah-al-ward-valentine": {
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.126408.jpg",
    "page": "https://www.fragrantica.com.br/perfume/Al-Wataniah/Sabah-Al-Ward-Valentine-126408.html"
  }
}
```

```json
{
  "angham": {
    "page": "https://www.fragrantica.com/perfume/Lattafa-Perfumes/Angham-96768.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.96768.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/angham.webp"
  },
  "chants-tenderina": {
    "page": "https://www.fragrantica.com/perfume/Maison-Alhambra/Chants-Tenderina-89034.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.89034.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/chants-tenderina.webp"
  },
  "victoria": {
    "page": "https://www.fragrantica.com/perfume/Lattafa-Perfumes/Victoria-102906.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.102906.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/victoria.webp"
  },
  "salvo": {
    "page": "https://www.fragrantica.com/perfume/Maison-Alhambra/Salvo-93538.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.93538.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/salvo.webp"
  },
  "salvo-elixir": {
    "page": "https://www.fragrantica.com/perfume/Maison-Alhambra/Salvo-Elixir-94166.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.94166.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/salvo-elixir.webp"
  },
  "victorioso": {
    "page": "https://www.fragrantica.com/perfume/Maison-Alhambra/Victorioso-92617.html",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/375x500.92617.jpg",
    "local": "/workspace/scratch/9b112e5e32af/new-perfume-assets/victorioso.webp"
  }
}
```

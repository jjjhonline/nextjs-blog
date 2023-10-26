---
title: 'Duas formas de pré-renderização'
date: '2023-10-26'
---
Next.js tem duas formas de pré-renderização: **Geração estática** e **Renderização no lado do servidor* *. A diferença está em **quando** ele gera o HTML de uma página. - **Geração Estática** é o método de pré-renderização que gera o HTML no **tempo de construção**. O HTML pré-renderizado é então _reutilizado_ em cada solicitação. - **Renderização no lado do servidor** é o método de pré-renderização que gera o HTML em **cada solicitação**. É importante ressaltar que Next.js permite que você **escolha** qual formulário de pré-renderização usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando geração estática para a maioria das páginas e renderização do lado do servidor para outras.
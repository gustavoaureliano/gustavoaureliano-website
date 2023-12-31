---
title: "Lâmpadas"
subtitle: "Um projeto sobre automação residencial"
date: "2023-11-03"
---

# Lâmpadas

Nesta página eu gostaria de falar um pouco sobre meu projeto de controle de lâmpadas pela internet.

No futuro colocarei o código no github e um link para ele aqui.

Por agora posso dizer que o projeto é dividido em duas partes, o controle do meu abajur e da luz do meu quarto. Tudo se iniciou com meu abajur e a ideia de controlá-lo batendo palmas. Inicialmente eu utilizava um arduino nano e um sensor de som para fazer o controle. Posteriormente troquei por um ESP8266, mais especificamente uma NodeMCU, e adicionei o controle pela internet utilizando o protocolo MQTT e por fim o controle pela alexa.

Quando vi que o abajur funcionava bem eu parti para fazer o controle da luz do meu quarto, a ideia era substituir o interruptor e fazer um interruptor inteligente. Nesse caso eu utilizei um ESP01S e desenvolvi uma placa de circuito impresso (PCB) para manter o circuito compacto e caber no lugar do interruptor original.

A partir desse ponto passei a desenvolver os dois em conjunto e adicionei funcionalidades de upload do codigo via OTA (Over-the-air) e controle automatizado da rede wifi, sem a necessidade de carregar o código novamente só para mudar o wifi.

### O Projeto inicial

![Esquema elétrico do projeto inicial](/images/esquema-arduino.webp)

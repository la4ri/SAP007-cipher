# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. design](#3-design)
---

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

  Já sentiu a necessidade de mandar uma mensagem secreta para seu companheiro, fazendo uma surpresa de certa forma mas não gostaria que todos entendessem aquilo que foi mandado por você? 

  ![crush](https://img.freepik.com/vetores-gratis/envelope-de-carta-com-o-icone-de-coracao-isolado_25030-30175.jpg?size=626&ext=jpg)

O projeto foi criado com a intenção de que fosse possível ter uma comunicação com seu Crush/parceiro de uma forma que só vocês entenderiam, mantendo assim a privacidade de assuntos. Sua finalidade foi desenvolvida para que fossem deslocadas as letras e enviada a mensagem ao destinatario, e recebendo essa mensagem, pudesse entrar novamente e descodificar a mensagem.

## 3. Design

O site foi desenvolvido de uma forma simples e intuitiva, de forma que qualquer pessoa que acessar consiga seguir as instruç e codificar sua mensagem. 



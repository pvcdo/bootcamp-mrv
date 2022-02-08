# Criando a Interface do iFood com React Native

Projeto do curso da trilha do Bootcamp da MRV.

## Iniciando o projeto

Utilizaremos o [expo](https://expo.dev) ao invés do cli (?).

No painel do expo eu criei o projeto cloneIfood e fiz a inicialização a partir de `npm i -g expo-cli` e depois `expo init cloneIfood`.

Ao darmos `expo start` nós rodamos o app. Esse comando agora é o início sempre que eu quiser desenvolver o app. Isso abrirá uma página no navegador onde podemos escolher como acompanhar a execução do nosso código. Eu escolhi acompanhar por uma aba do navegador, ao invés de um simulador de mobile.

O professor orientou mudarmos o caminho "main" que aparece em package.json, criando o AppEntry.js em cloneIfood/src. Esse AppEntry terá o mesmo conteúdo que "IFOOD_CLONE\cloneIfood\node_modules\expo\AppEntry.js".

Instalou o styled-components, o react-navigation/native (core do react-navigation), react-navigation/stack (navegação padrão), react-navigation/bottom-tabs (navegação com abas inferiores). Por estarmos usando o expo, temos que instalar mais algumas dependências a partir dessa linha de código `expo install react-native-screens react-native-safe-area-context` de acordo com a [documentação](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-an-expo-managed-project) do react-navigation.

# Criando a Interface do iFood com React Native

Projeto do curso da trilha do Bootcamp da MRV.

Neste projeto criarei a interface de um marcador de hora de banho e tosa de petshop.

O projeto base está [nesta página](https://github.com/pablohdev/app-ifood-clone) do github.

## Parte 1 -  Iniciando o projeto

Utilizaremos o [expo](https://expo.dev) ao invés do cli (?).

No painel do expo eu criei o projeto cloneIfood e fiz a inicialização a partir de `npm i -g expo-cli` e depois `expo init cloneIfood`.

Ao darmos `expo start` nós rodamos o app. Esse comando agora é o início sempre que eu quiser mexer no app. Isso abrirá uma página no navegador onde podemos escolher como acompanhar a execução do nosso código. Eu escolhi acompanhar por uma aba do navegador, ao invés de um simulador de mobile.

O professor orientou mudarmos o caminho "main" que aparece em package.json, criando o AppEntry.js em cloneIfood/src. Esse AppEntry terá o mesmo conteúdo que "IFOOD_CLONE\cloneIfood\node_modules\expo\AppEntry.js". O professor também moveu o script core da aplicação (App.js) para a pasta src.

Instalou o styled-components, o react-navigation/native (core do react-navigation), react-navigation/stack (navegação padrão), react-navigation/bottom-tabs (navegação com abas inferiores). Por estarmos usando o expo, temos que instalar mais algumas dependências a partir dessa linha de código `expo install react-native-screens react-native-safe-area-context` de acordo com a [documentação](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-an-expo-managed-project) do react-navigation.

## Parte 2

Os códigos que serão exibidos na tela do dispositivo passarão pelo App.js que foi o que nós colocamos na pasta src.

O professor colocou em assets as imagens que iremos utilizar.

Em app.json podemos alterar o backgroundColor: "#F001A" (cor padrão). Em src também teremos um assets, mais precisamente, src/assets/img. Em app.json podemos configurar várias coisas (mas pode dar descompatibilidade com o projeto que está hospedado na plataforma do expo).

Não usei isso => Em src/AppEntry.js colocamos `import 'react-native-gesture-handler';` logo no início de todo o código. Esse import é do react-navigation.

Criamos src/pages, ../Home, renomeamos src/App.js para src/pages/Home/index.js e alteramos nela:

```js
    export default function App(){}

    //para

    export default function Home(){}
```

Criamos src/routes.js:

```js
    import React from 'react';

    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

    import Home from './pages/Home';

    const Stack = createStackNavigator();

    const Routes = () => {

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default Routes
```

Em src/AppEntry.js alteramos para o seguinte:

```js

    import 'react-native-gesture-handler';
    import registerRootComponent from 'expo/build/launch/registerRootComponent';

    import Routes from './routes';

    registerRootComponent(Routes);

```
## Parte 3

É a mesma da Parte 2. Eles repostaram a parte 2.

## Parte 4

Em Home ele colocou um texto, a imagem de entrada (banner), e dois textos, tudo isso dentro do style criado para a Home. Depois colocou dois botões. Esses botões são importados de src/components/Buttons, que também tem seu style.js. 

## Parte 5

Criou a página Principal como cópia de Home inicialmente. Também criou a página Main. Importou a página Main em routes.js e colocou no Stack.Screen. Alterou Stack.Navigator colocando a prop initialRouteName="Main". Ele teve que instalar pelo npm o `react-native-vector-icons/Feather` e em Main ele importou o Feather a partir desse módulo. No screenOption do Tab.Navigator ele fez alterações de iconName a partir de ifs comparando routes.name; o screenOption retorna um componente Feather. Ele ainda adicionou a prop tabBarOptions em Tab.Navigator fazendo suas alterações.  

Criou a página Perfil baseada na Principal, fez sua importação em Main e a colocou na Tab.Screen do Tab.Navigator de Main.
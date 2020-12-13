# React Clean Architecture

Aplicar arquitetura limpa a uma base de código reac traz muitos benefícios. Uma vantagem que me impressiona é ter as regras de negócios isoladas das coisas específicas da estrutura. Isso significa que nossa lógica principal não está acoplada a React, React Native, Express, etc...
Isso dá a você flexibilidade suficiente para, por exemplo, mover partes específicas do aplicativo para um backend, alterar bibliotecas sem muita dificuldade, testar uma vez e reutilize quantas vezes quiser, compartilhe código entre os aplicativos React e React Native, entre outros.

## Explicação detalhada

Este post está explicando melhor o que é Arquitetura Limpa, por que adotá-la e como. [Arquitetura Limpa para bases de código react](https://medium.com/@eduardomoroni/arquitetura-limpa-para-bases-de-c%C3%B3digo-react-df0f78d2b42e)

## Filosofia

<!-- ![high-level-diagram](./docs/images/high-level-diagram.jpg) -->

A nomenclatura pode variar, mas o conceito por trás desse padrão arquitetônico é: o domínio dita como as ferramentas devem ser organizadas e não o contrário. Devemos organizar nossa base de código em torno das regras de negócios e não em torno das estruturas que usamos para cumprir as regras de negócios. O diagrama acima mostra como funciona a regra de dependência, os círculos internos não devem saber sobre os círculos externos. Ou seja, não pode haver uma importação de um caso de uso dentro de uma entidade, ou importação de uma estrutura dentro de um caso de uso. Outra regra importante é: entidades e casos de uso não devem depender de bibliotecas externas. A explicação é simples, o núcleo de nosso aplicativo deve ser robusto e maleável o suficiente para atender às demandas do negócio sem a necessidade de qualquer intervenção externa.

## Estrutura da Pasta

Este repositório contém 1 exemplo de como implementar o react seguindo a arquitetura limpa, representada pelo [diagrama](#philosophy) acima, seguindo esta estrutura de pastas:

```
./
├── core
│   ├── components
│   ├── dataProvider
│   ├── domain
│   ├── useCase
│   └── stores
├── mobile
│   └── src
│       ├── infra
│       │   └── routes.ts
│       └── presentation
│           └── components
│           └── pages
└── web
    └── src
        ├── infra
        │   └── routes.ts
        └── presentation
            └── components
            └── pages
```


## Executando


### Preparando o projeto
Instalar o plugin do react para renomear o projeto, disponível em: https://www.npmjs.com/package/react-native-rename-next
Exemplo de comando para rename: react-native-rename-next "My App" -b io.github.mayconmesquita.myapp

Dica: O react native geralmente gera para iOS sub módulos para Apple TV e para testes. Geralmente não utilizamos esses módulos e ele acaba deixando o tempo de build mais lento, portanto, remova essas dependências.

### Utilizando NPM

Execute `npm install` sob o projeto que você gostaria de executar (`web` ou `native`), e então execute:

- `web`: `npm start`
- `native`: `npm start` depois `npm run android` ou `npm run ios`

### Utilizando YARN

Execute `yarn install` sob o projeto que você gostaria de executar (`web` ou `native`), e então execute:

`web`: `yarn start`
Para Android:
`native`: `yarn start` depois `yarn android` 

Para ios:
Acessar o diretorio ios
executar  
`pod install`
`cd  ..`
`yarn ios`

### Running on Windows

Há um problema relacionado à dependência do arquivo de link simbólico `yarn/npm` no Windows. Devido a esse problema, você deve primeiro ir no módulo `core` e executar `yarn/npm install` e `yarn build` ou `npm run build`. Isso deixará o módulo `core` pronto para ser instalado nos outros módulos.

## Referências

- [Clean Architecture: a craftsman's guide to software structure and design](https://goo.gl/2h3fsD)
- [The clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Agility and Architecture](https://www.youtube.com/watch?v=0oGpWmS0aYQ)
- [Github](https://github.com/topics/clean-architecture?o=desc&s=stars)
- [Arquitetura Limpa para bases de código react](https://medium.com/@eduardomoroni/rquitetura-limpa-para-bases-de-c%C3%B3digo-react-df0f78d2b42e)

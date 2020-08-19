[![Netlify Status](https://api.netlify.com/api/v1/badges/d6824dd6-b627-481f-b4f5-cd1996764a3d/deploy-status)](https://app.netlify.com/sites/festive-benz-033a02/deploys)

# O Cinéfilo

App para exibição de dados sobre filmes e séries baseado na [OMDb API](http://www.omdbapi.com/)

## Contruido com

Feito com [Node](https://nodejs.org/en/download/), para rodar certifique que possui instalado em sua máquina
para fazer esse projeto foi usada a versão 10.16.3.

### Outras tecnologias
* [NextJS](http://nextjs.org/)
* [Babel](https://babeljs.io/)
* [React](https://reactjs.org/)
* [Sass](https://sass-lang.com/)
* [Typescript](https://www.typescriptlang.org/)

## Install Instructions

No terminal, navegue até a pasta do projeto fazendo a instalação das dependencias usando o comando

```
npm install
```
Após todas as dependências instaladas rodar o comando para abrir em modo de desenvolvimento

```
npm run dev
```
Após esse comando abrir no navegador o [localhost](https://localhost:3000) na porta 3000 para se ter
visualização do projeto

## Production
Para rodar a build de produção é necessário usar o comando
```
npm build
```
Será gerada uma pasta .next onde está estará com os arquivos necessários para fazer o projeto
rodar de uma forma mais veloz e pronta para produção, sendo necessário rodar o comando de start
para poder se visualizar no navegador

```
npm start
```

## Aprimoramentos para o futuro

- [ ] Persistência favoritos
- [ ] Adição de botão de favoritos na página interna do filme/série
- [ ] Melhor disposição da página principal quando se faz uma busca
- [ ] Acrescentar dado de classificação na página interna
- [ ]

## Author
Feito por [Vanderlei Oliveira](https://oliverdx.com.br)

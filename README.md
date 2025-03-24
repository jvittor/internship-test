<p align="center">
  <a href="https://ibb.co/KjVHfm6w">
    <img src="/assets/logo" alt="Logo" width=72 height=72>
  </a>
  <p align="center">
    [r-shop]<br />descrição e funcionalidades
    <br>
  </p>
</p>


## conteúdo

- [passo inicial](#passo-inicial)
- [funcionalidades](#funcionalidades)
- [criador](#criador)
- [agradecimentos](#agradecimentos)
- [Copyright and license](#copyright-and-license)


## passo inicial

1. **clone o repositório**:

```bash
git clone https://github.com/seu-usuario/internship-test.git
```

2. **navegue até o diretório do projeto**

```bash
cd internship-test
```

**instale as dependências**

```bash
pnpm install
```

**execute o servidor**

```bash
pnpm dev
```

## funcionalidades

**design Responsivo**
a aplicação é totalmente responsiva. ela se adapta a qualquer tamanho de tela, garantindo uma experiência fluida no celular e no desktop. Em telas grandes, a aplicação exibe o conteúdo em um layout de grid. em dispositivos menores, o layout é ajustado para uma exibição em coluna única, facilitando a navegação.

**Scroll Infinito**
a página inicial contém uma lista de categorias carregadas dinamicamente. conforme o usuário rola para baixo, novas categorias são carregadas e adicionadas à lista. Isso é feito utilizando o componente React Infinite Scroll, que ajuda a reduzir o tempo de carregamento inicial e otimiza a experiência do usuário.

**formulário de Login**
o formulário de login permite que os usuários insiram suas credenciais. ele inclui validação de formulário (formato de email) e visibilidade dinâmica da senha. após o login bem-sucedido, o usuário é redirecionado para a página inicial. Mensagens de erro são exibidas quando a submissão do formulário falha.

como não estamos utilizando um backend para autenticação, o login está configurado com dados fixos para fins de teste. utilize as seguintes credenciais:

- **Email**: `teste@exemplo.com`
- **Senha**: `senha123`

essas credenciais devem ser inseridas no formulário de login da aplicação.


**lista de categorias**
o componente CategoryList exibe dinamicamente uma lista de categorias. ela é atualizada conforme novos dados são carregados (via a funcionalidade de scroll infinito), demonstrando o uso de estados e efeitos do React para gerenciar dados dinâmicos.

**notificações**
a aplicação utiliza React-Toastify para exibir toasts e feedback para o usuário durante interações, como envios de formulários bem-sucedidos ou tentativas de login.

## criador

- <https://github.com/jvittor>

## agradecimentos

obrigado pela paciência e disponibilidade ;)

## Copyright and license

Code and documentation copyright 2023-2024 the authors. Code released under the [MIT License](https://reponame/blob/master/LICENSE).

Enjoy :metal:
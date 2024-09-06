## ** Distros Linux - Busca Rápida**

### **Descrição**

Este projeto web é um buscador simples para distribuições Linux. Ele permite que o usuário digite o nome de uma distro e obtenha informações como descrição, base e link para o site oficial.

### **Tecnologias Utilizadas**
* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa.
* **JSON:** Armazenamento dos dados das distribuições em um arquivo externo (dados.js).

### **Como Usar**
1. **Clone o repositório:**
   ```bash
   git clone https://seu-repositorio.git
   ```
2. **Abra o arquivo index.html em um navegador.**
3. **Digite o nome da distro que deseja pesquisar no campo de busca e clique em "Pesquisar".**

### **Estrutura dos Dados**
Os dados das distribuições Linux são armazenados em um arquivo JSON (dados.js). Cada objeto dentro do array `distribuicoesLinux` representa uma distro e possui as seguintes propriedades:
* `distro`: Nome da distribuição.
* `descricao`: Descrição breve.
* `base`: Distro base (e.g., Debian, Arch).
* `site`: Link para o site oficial.

**Exemplo de um objeto:**
```javascript
{
  "distro": "Ubuntu",
  "descricao": "Uma distribuição Linux popular e amigável para iniciantes.",
  "base": "Debian",
  "site": "[https://ubuntu.com/](https://ubuntu.com/)"
}
```

### **Funcionalidades**
* **Busca por palavras-chave:** A pesquisa é case-insensitive e busca por correspondências em nome, descrição e base da distro.
* **Resultados dinâmicos:** Os resultados da pesquisa são exibidos na página de forma dinâmica, sem a necessidade de recarregar a página.
* **Links para os sites oficiais:** Cada resultado da pesquisa inclui um link para o site oficial da distro.

### **Contribuições**
Contribuições são bem-vindas! Para contribuir com este projeto, siga estes passos:
1. Fork este repositório.
2. Crie um novo branch para sua feature.
3. Faça as suas alterações e commit.
4. Envie um pull request.

### **Próximos Passos**
* **Adicionar mais distros:** Expandir a base de dados com mais distribuições Linux.
* **Melhorar a interface:** Criar uma interface mais visualmente atraente.
* **Implementar filtros:** Adicionar filtros para pesquisar por base, categoria ou outras propriedades.
* **Utilizar uma API:** Buscar dados de distribuições Linux em uma API externa.

### **Observações**
* **Personalização:** Você pode personalizar o CSS para alterar a aparência da página.
* **Dados:** Para adicionar novas distribuições, basta editar o arquivo dados.js.
* **Funcionalidades adicionais:** A função de pesquisa pode ser aprimorada para incluir mais funcionalidades, como ordenação dos resultados ou destaque das palavras-chave encontradas.


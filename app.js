function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);
  let resultados = "";

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let distro = "";
  let descricao = "";
  let base = "";

  for (let distroLinux of distribuicoesLinux) {
    distro = distroLinux.distro.toLowerCase();
    descricao = distroLinux.descricao.toLowerCase();
    base = distroLinux.base.toLowerCase();

    if (
      distro.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      base.includes(campoPesquisa)
    ) {
      resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${distroLinux.distro}</a>
                    </h2>
                    <p class="descricao-meta">${distroLinux.descricao}</p>
                    <p class="descricao-meta"><strong>Distro base:</strong> ${distroLinux.base}</p>
                    <a href="${distroLinux.site}" target="_blank">Site Oficial</a>
                </div>
            `;
    }
  }

  if (!resultados) {
    resultados = "<p>Distro não encontrada.</p>";
  }
  section.innerHTML = resultados;
}

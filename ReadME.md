# Data integration challenge

## instalação necessária:
 - Instale o NODE.jS.
 - Abra o prompt de comando na pasta "raiz" do projeto e digite "npm install".
    - Aqui será instalado tudo que foi necessário para realização do projeto.

## Para rodar o programa:
- Abra o prompt de comando na pasta "raiz" do projeto.
- Digite no prompt "node server.js"
    - Este comando já irá iniciar o servidor e ler o arquivo 'q1_catalog.csv' e criar o banco de dados.

## Para dar o update no banco de dados
- Coloque o arquivo ".csv" desejado na pasta "csvFiles"
- Após o servidor estar funcionando utilize o método **POST** para atualizar o banco de dados
- **POST** - localhost:3000/api/update/"nome do arquivo inserido"
    - **Obs.:** Utilizar o nome do arquivo com a extensão, nesse caso ".csv"
    - No challenge o arquivo utilizado foi o q2_clienteData.csv
- Certificar a inserção dos dados no banco.


## Usando Method GET da API

### Procurando pelo NAME e ZIP:
- **GET** - localhost:3000/api/search?name="name"&zip="zip"

### Procurando pelo NAME:
- **GET** - localhost:3000/api/name/"nome"

### Procurando pelo ZIP:
- **GET** - localhost:3000/api/zip/"zip"

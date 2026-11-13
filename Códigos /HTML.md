
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <aside class="sidebar">
        <h2>MyDashboard</h2>
        <nav>
            <a href="#inicio">Início</a>
            <a href="#tarefas">Tarefas</a>
            <a href="#metas">Metas</a>
            <a href="#notas">Anotações</a>
        </nav>
    </aside>

    <main>
        <header>
            <div>
                <h1>Meu Dashboard</h1>
                <p>Organize seu dia e acompanhe seus objetivos.</p>
            </div>
            <div id="clock"></div>
        </header>

        <section class="cards" id="inicio">
            <article class="card">
                <h3>Tarefas concluídas</h3>
                <p id="completed">0</p>
            </article>

            <article class="card">
                <h3>Tarefas pendentes</h3>
                <p id="pending">0</p>
            </article>

            <article class="card">
                <h3>Metas</h3>
                <p id="goals">3</p>
            </article>
        </section>

        <section class="panel" id="tarefas">
            <h2>Minhas tarefas</h2>

            <form id="taskForm">
                <input
                    type="text"
                    id="taskInput"
                    placeholder="Digite uma tarefa..."
                    required
                >
                <button type="submit">Adicionar</button>
            </form>

            <ul id="taskList"></ul>
        </section>

        <section class="panel" id="metas">
            <h2>Minhas metas</h2>
            <ul>
                <li>Estudar programação</li>
                <li>Ler um livro</li>
                <li>Praticar exercícios</li>
            </ul>
        </section>

        <section class="panel" id="notas">
            <h2>Anotações rápidas</h2>
            <textarea
                id="notes"
                placeholder="Escreva suas anotações..."
            ></textarea>
        </section>
    </main>

    <script src="js/script.js"></script>
</body>
</html>

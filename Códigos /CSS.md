{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f1f3f8;
    color: #252a41;
    display: flex;
}

.sidebar {
    width: 230px;
    min-height: 100vh;
    background: #20243a;
    color: white;
    padding: 30px 20px;
}

.sidebar h2 {
    margin-bottom: 40px;
    font-size: 22px;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sidebar a {
    color: #d6d9e8;
    text-decoration: none;
    padding: 10px;
    border-radius: 8px;
}

.sidebar a:hover {
    background: #363c59;
    color: white;
}

main {
    flex: 1;
    padding: 35px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
}

header p {
    color: #777;
    margin-top: 8px;
}

#clock {
    font-weight: bold;
    color: #6558d3;
}

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.card, .panel {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 3px 12px #00000008;
}

.card p {
    font-size: 30px;
    color: #6558d3;
    font-weight: bold;
    margin-top: 15px;
}

.panel {
    margin-bottom: 25px;
}

.panel h2 {
    margin-bottom: 20px;
}

form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font: inherit;
}

input {
    flex: 1;
    min-width: 0;
}

button {
    background: #6558d3;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #5043bd;
}

#taskList {
    list-style: none;
}

#taskList li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid #eee;
}

#taskList li span {
    flex: 1;
    overflow-wrap: anywhere;
}

#taskList li.done span {
    text-decoration: line-through;
    color: #999;
}

.delete {
    background: #e05252;
}

textarea {
    width: 100%;
    min-height: 120px;
    resize: vertical;
}

@media (max-width: 700px) {
    body {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        min-height: auto;
    }

    .sidebar h2 {
        margin-bottom: 15px;
    }

    .sidebar nav {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
    }

    main {
        padding: 20px;
    }

    .cards {
        grid-template-columns: 1fr;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
    }

    form {
        flex-wrap: wrap;
    }
}


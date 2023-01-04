function startGame() {
    const data = Object.assign({}, {category_ids:
    cateogoryIDArray(totalNumberOfCateogories)})

    const configObject = {
        method: "POST" ,
        Headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch("http://localhost:3000/games", configObject)
    .then(resp => resp.json())
    .then(function(json) {
        game = new Gamepad(json)
        discardState()
        renderBoard(game);
    })
}
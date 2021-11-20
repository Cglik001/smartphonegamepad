import consumer from "./consumer";

const initGameCable = () => {
  const button_interactionsContainer = document.getElementById('button_interactions');
  if (button_interactionsContainer) {
    const id = button_interactionsContainer.dataset.gameId;

    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        console.log(data); // called when data is broadcast in the cable
        button_interactionsContainer.insertAdjacentHTML('beforeend', data)
      },
      // let button = document.querySelector(“a-button”);
      // button.addEventListener("click"', (e) => {
      // button.dispatchEvent(new KeyboardEvent('keydown', {
      //   'key': 'a'
      // })
    });
  }
}

export { initGameCable };

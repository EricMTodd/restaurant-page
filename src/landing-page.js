const landingPageController = (() => {

  const sayHello = () => {
    console.log("Hello from landing-page.js!")
  }

  const writeToDoc = (string) => {
    document.write(`<h1>${string}</h1>`)
  }

  const appendButton = () => {
    let button = document.createElement('button');
    button.innerText = 'Click Me!'
    button.addEventListener('click', (e) => console.log('click'))
    document.body.appendChild(button);
  }

  return {
    sayHello,
    writeToDoc,
    appendButton,
  }
})()

export default landingPageController
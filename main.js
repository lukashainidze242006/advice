const idHtml = document.querySelector('.advice_id')
const adviceHtml = document.querySelector('.advice_html')
const button = document.querySelector('.advice_button')





async function getQuote(){
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()

  console.log(data.slip)
  adviceHtml.textContent = data.slip.advice

  idHtml.textContent = `ADVICE # ${data.slip.id}`
}


button.addEventListener('click', () =>{
getQuote()
})



+
+
gfdgsd
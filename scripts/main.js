async function getAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    try {
        let res = await fetch(url,{method:'GET'});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderAdvice() {
    let advice = await getAdvice();
    let html = `<h3 class="title">ADVICE # ${advice.slip.id}</h3>
                  <p>
                     "${advice.slip.advice}"
                  </p>
                  `;

    let container = document.querySelector('.adviceGen');
    container.innerHTML = html;
}

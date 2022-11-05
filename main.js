function createGame(player1,hour,player2){
    return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong> ${hour} </strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
    `
}
let delay = -0.3;
function createCard(date,day,games){
  delay = delay + 0.3;
    return`
    <div class="card" style="animation-delay: ${delay}s">
  <h2>${date}<span>${day}</span></h2>
  <ul>
    
    ${games}
  </ul>
</div>
    `
}


document.querySelector('#cards').innerHTML= 



createCard('24/11','quinta',
createGame("switzerland","07:00","cameroon")+

createGame("brazil","16:00","serbia")

)+


createCard('26/11',"segunda",
createGame("france","13:00","dinamarca")+
createGame("argentina","16:00","mexico")
)+
createCard('27/11',"sexta",
createGame("belgica","16:00","marrocos")+
createGame("alemanha","16:00","spain")
)+

createCard('28/11',"segunda",
createGame("brazil","13:00","switzerland")+
createGame("portugal","16:00","uruguay")
)+

createCard('29/11',"terça",
createGame("equador","12:00","senegal")+
createGame("gales","16:00","inglaterra")
)+

createCard('30/11',"quarta",
createGame("tunisia","12:00","france")+
createGame("polonia","16:00","argentina")
)+

createCard('1/12',"quinta",
createGame("japao","16:00","spain")+
createGame("costarica","16:00","alemanha")
)+

createCard('2/12',"sexta",
createGame("coreiadosul","12:00","portugal")+
createGame("cameroon","16:00","brazil")
)





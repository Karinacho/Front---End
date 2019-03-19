function hideElement() {
    let buttonId = $('#listenButton')[0];
    let modalText = $('h2')[1];
    let showText = $('h2')[0];
    let modal = $('#myMod')[0];
    buttonId.addEventListener('click', function remove() {

        modalText.style.display = 'none';

        modal.style.display = 'none'
        let newButton = $('<button id="newButton">').text('Show')

        newButton[0].addEventListener('click', showContent)
        $('div.container').append(newButton)
       showText.style.display = 'block';
    })
    function showContent() {
        showText.style.display = 'none';
        this.style.display = 'none';
        modalText.style.display = 'block';
        modal.style.display = 'block'
    }
}

window.onload = main

function main() {
    const animationDelay = 1; //ms
    const upButton = document.getElementsByClassName('upper_frame_button')[0]
    const mainButton = document.getElementsByClassName('upper_frame_main_button')[0]

    const popUp = document.createElement('div')
    let overlay = document.createElement('div')
    const blackout = document.createElement('div');
    blackout.classList.add('blackout');

    upButton.addEventListener('click', onButtonClick)
    mainButton.addEventListener('click', onButtonClick)
    blackout.addEventListener('click', popupClose)
    window.addEventListener('scroll', onWindowScroll)
    overlay.classList.add('overlay')
    overlay.appendChild(blackout)
    overlay.appendChild(createPopup())

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape')
            popupClose()
    });

    function onButtonClick() {
        document.body.appendChild(overlay)
        setTimeout(() => {
            popUp.classList.add('popUpShow')
            blackout.classList.add('blackoutShow')
        }, animationDelay)
        const cross = document.getElementsByClassName('form-crossbar__image')[0];
        cross.addEventListener('click', popupClose)
    }

    function onWindowScroll() {
        overlay.style.top = window.scrollY + 'px'
    }

    function createPopup() {
        popUp.classList.add('popUp');
        popUp.innerHTML =
        `<div class="form-wrap">
            <div class="form-crossbar">
                <img src="images/form-exit.png" alt="exit" class="form-crossbar__image"/>
            </div>
            <img class="image-welcome" src="images/welcome.png" alt="welcome">
            <h2 class="form-text">���������� �� ����</h2>
            <form class="form-section" action="register.php" method="POST">
                <label>
                    <input class="input-wrap" type="text" name="name" placeholder="���� ���"/>
                </label>
                <label>
                    <input class="input-wrap" type="text" name="email" placeholder="Email"/>
                </label>
                    <select name="%activity%" class="input-wrap">
                        <option selected disabled>������������</option>
                        <option value="programmer">�����������</option>
                        <option value="designer">��������</option>
                        <option value="marketer">����������</option>
                    </select>
                <div class="checkbox-block-wrap">
                    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" class="subscribe-block">
                    <label for="subscribeNews" class="checkbox-text">�������� �������� �������������� ��������� � ������ �����</label>
                </div>
                <p>
                    <input type="submit" class="submit-block" value="���������� �� ����"/>
                </p>
            </form>
        </div>`;
        return popUp
    }

    function  popupClose() {
        const overlay = document.getElementsByClassName('overlay')[0]
        setTimeout( () => {
            document.body.removeChild(overlay)
        }, 220)
        popUp.classList.remove('popUpShow')
        blackout.classList.remove('blackoutShow')
    }
}

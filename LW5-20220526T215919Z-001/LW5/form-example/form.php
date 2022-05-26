<div>
    <form class="site-form" method="post" action="form_handler.php">
        <input class="site-form_name-input" required type="text" name="%name%" placeholder="Ваше имя">
        <select class="site-form_state-input" required name="%state%" >
            <option style="display: none" value="Ваша жалоба">Ваша жалоба</option>
            <option value="Ни капельки не устал!">Устал</option>
            <option value="Всё супер!">Чуток устал</option>
            <option value="Выспался)))">Невероятно устал</option>
        </select>
        <button class="site-form_button-input" type="submit">Пожаловаться</button>
    </form>
</div>

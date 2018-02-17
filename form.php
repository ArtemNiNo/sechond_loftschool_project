<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $house_block = $_POST['house-block'];
    $apartament = $_POST['apartament'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $pay = $_POST['pay-option'];

    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Адрес: ' . $street . ', ' . $home . ', ' . $house_block . ', ' . $floor . ', ' . $apartament . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <lyulinartem.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('SeanJoun@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Сообщение отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>
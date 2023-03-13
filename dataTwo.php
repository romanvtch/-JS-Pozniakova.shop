<?php
$servername = "gingerbr.mysql.tools";
$username = "gingerbr_goods";
$password = "%t^T8h3K5k";
$dbname = "gingerbr_goods";

// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Выбираем данные из таблицы
$sql = "SELECT * FROM gingerbread";
$result = mysqli_query($conn, $sql);

// Преобразуем результат в формат JSON
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);

// Закрываем соединение
mysqli_close($conn);
?>







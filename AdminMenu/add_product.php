<?php
$servername = "gingerbr.mysql.tools";
$username = "gingerbr_goods";
$password = "%t^T8h3K5k";
$dbname = "gingerbr_goods";

// Підключаємося до бази даних
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Перевіряємо з'єднання
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Отримуємо дані з форми
$name = $_POST['name'];
$img = $_POST['img'];

// Додаємо дані до бази даних
$sql = "INSERT INTO goods (name,img) VALUES ('$name','$img')";
if (mysqli_query($conn, $sql)) {
  echo "Продукт успішно додано!";
} else {
  echo "Помилка: " . $sql . "<br>" . mysqli_error($conn);
}

// Закриваємо з'єднання
mysqli_close($conn);
?>

<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGBD93RB90"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZGBD93RB90');
  </script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/general.css">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/toggle.css">
  <link rel="stylesheet" href="styles/footer.css">
</head>
<body>
  <?php 
    $title = 'About';
    $page = 'about';
    include_once('views/header.php');
  ?>
  <p>About Commandify</p>

  <?php
    include_once('views/footer.php');
  ?>
  
  <script src="scripts/Mode toggle.js"></script>
</body>
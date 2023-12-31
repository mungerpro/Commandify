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
  <link rel="stylesheet" href="styles/atf.css">
  <link rel="stylesheet" href="styles/tool selection.css">
</head>
<body>
  <?php 
    $title = 'Home';
    $page = 'home';
    include_once('views/header.php');
  ?>

  <div class="atf-box">
    <div class="atf-text-box">
      <p class="atf-main-text">Minecraft Commands Made Easy</p>
      <p class="atf-subtext">Commandify provides configurators that let you build Minecraft commands in a few clicks, streamlining the command experience for Minecraft veterans and making commands accessible for anyone.</p>
    </div>
  </div>
  <div class="tool-selection-box">
    <p class="tool-selection-title">v &nbsp;&nbsp;&nbsp;Configurators&nbsp;&nbsp;&nbsp; v</p>
    <div class="tool-grid">
      <a href="./Give Items.php">
        <div class="tool-option">
          <p class="tool-option-title">Item Generator</p>
          <p class="tool-option-command">/give @p diamond_sword</p>
        </div>
      </a>
      <a href="./404.php">
        <div class="tool-option tool-dne">
          <p class="tool-option-title">Chest Generator?</p>
          <p class="tool-option-command">/give @p chest {nbt}</p>
        </div>
      </a>
      <a href="./404.php">
        <div class="tool-option tool-dne">
          <p class="tool-option-title">Mob Creator?</p>
          <p class="tool-option-command">/summon creeper ~ ~ ~</p>
        </div>
      </a>
    </div>
  </div>

  <?php
    include_once('views/footer.php');
  ?>

  <script src="Data/advancements.js"></script>
  <script src="scripts/Mode toggle.js"></script>
</body>
</html>
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
  <link rel="stylesheet" href="styles/about.css">
</head>
<body>
  <?php 
    $title = 'About';
    $page = 'about';
    include_once('views/header.php');
  ?>
  <div class="about-hero-box">
    <div class="about-hero-title-box">
      <p class="about-hero-title">About Commandify</p>
    </div>
  </div>
  <div class="about-writeup-box">
    <p class="about-writeup-title">Commandify aims to create easy to use tools to help users create Minecraft commands and customize their world.</p>
    <p class="about-writeup-paragraph">
    Welcome to Commandify, a personal project that helps you create custom commands for Minecraft.
    I'm a passionate Minecraft fan and coder, and I wanted to share my hobby with other players who love to explore the endless possibilities of this sandbox game.
    </p>
    <p class="about-writeup-paragraph">
      My goal is to help you customize your game and create custom maps without having to learn Minecraft commands. 
      You can use Commandify in any browser on your computer and paste the commands into Minecraft Java through the chat or a command block. 
      Commandify's first tool is a custom item generator that lets you make named and enchanted armor and tools. 
      In addition to the custom item generator, I'm planning to create more tools such as a custom mob generator and a chest generator. 
      Currently Minecraft Java 1.20 is the only supported version but I plan to add more in the future.
    </p>
    <p class="about-writeup-paragraph">
      As my first personal project, Commandify has helped me learn to code efficiently with future updates in mind. 
      From using excel to parse through the thousands of items in Minecraft, to learning CKEditor 5's framework, to coding with Javascript to create a final working product, 
        this experience has given me unique challenges that have helped me learn basic computer programming. 
    </p>
    <p class="about-writeup-paragraph">
    If you are interested in how I made Commandify, you can check out the source code on <a href="https://github.com/mungerpro/Commandify" target="_blank">Github</a>. 
    There, you can also find the documentation and changelog of the project. 
    You can also give me feedback, report bugs, or suggest new features by opening an issue or a pull request. 
    I appreciate any kind of contribution or support from the community. 
    Thank you for visiting my website and happy crafting!
    </p>
    <p class="about-writeup-signature">~ Mungerpro</p>
  </div>

  <?php
    include_once('views/footer.php');
  ?>
  
  <script src="scripts/Mode toggle.js"></script>
</body>


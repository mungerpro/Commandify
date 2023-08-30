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
  <link rel="stylesheet" href="styles/search input.css">
  <link rel="stylesheet" href="styles/preview.css">
  <link rel="stylesheet" href="styles/customizations.css">
  <link rel="stylesheet" href="styles/command output.css">
  <link rel="stylesheet" href="styles/ckeditor.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,-25" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
  <?php 
    $title = 'Give Items';
    $page = 'give_items';
    include_once('views/header.php');
  ?>

  <section class="options-and-preview">
    <div class="options-box">
      <div class="search-box">
        <div class="wrapper">
          <div class="search-input-element">
              <input class="item-input" type="text" required id="js-item-input" onkeyup="filterItems()" onclick="this.select();" title="Search Items">
              <div class="underline"></div>
              <label>Item Search</label>
          </div>
        </div>
        <div class="item-list" id="js-item-list">
          <div style="display:flex; align-items: center;">
          </div>
        </div>
      </div>
      <div class="customizations-box">
        <div class="main-command-customizations">
          <div class="custom-text">
            <div class="custom-item-name-box">
              <p class="customization-title custom-text-title">Custom Name:</p>
              <input type="text" class="custom-item-name editor" id="js-name-editor" placeholder="Custom Name">
            </div>
            <div class="custom-item-lore-box">
              <p class="customization-title custom-text-title">Custom Description:</p>
              <div class="custom-item-lore-editor-box">
                <input type="text" class="custom-item-lore editor" id="js-lore-editor" placeholder="Custom Description">
              </div>
            </div>
          </div>
        </div>
        <div class="advanced-command-customizations" id="js-advanced-command-customizations">
          <div class="custom-enchantments">
            <div class="enchantments-title-line">
              <div class="wrapper">
                <div class="search-input-element">
                    <input class="item-input" type="text" required id="js-enchantment-filter-input" onkeyup="filterEnchantments()" onclick="this.select();" title="Filter Enchantments">
                    <div class="underline"></div>
                    <label>Enchantment Filter</label>
                </div>
              </div>
              <button class="clear-button" onclick="clearSelectedEnchantments();" title="Remove All Enchantments">Clear</button>
            </div>
            <div class="enchantments" id="js-enchantments"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview-box">
      <div class="preview-image-container">
        <img class="preview-image" id="js-preview-image" src="Assets/item/diamond_sword.png" title="Diamond Sword">
      </div>
      <div class="preview-text-box">
        <p class="preview-name selectable-text" id="js-preview-name">
          <i>Custom Name Preview</i>
        </p>
        <div class="preview-enchantments selectable-text" id="js-preview-enchantments">
          <p>List of II</p>
          <p>Enchantments IV</p>
        </div>
        <div class="preview-description selectable-text" id="js-preview-description">
          <p>Your</p>
          <p>custom</p>
          <p>description</p>
          <p>will preview</p>
          <p>here!</p>
        </div>
      </div>
    </div>
  </section>
  <div class="command-output-warning" id="js-command-output-warning"></div>
  <section class="command-output-container">
    <button onclick="writeCommandOutput();" class="generate-command-button" id="generate-command-button">Generate Command</button>
    <input type="text" value="command will show up here" id="js-command-output" class="command-output" autocorrect="off">
  </section>
  <?php
    include_once('views/footer.php');
  ?>


  <script src="Data/items2.js"></script>
  <script src="Data/enchantments.js"></script>
  <script src="scripts/Give items.js"></script>
  <script src="scripts/w3color.js"></script>
  <script src="scripts/Mode toggle.js"></script>

  <script src="Ckeditor5/dist/bundle.js"></script>
</body>
</html>
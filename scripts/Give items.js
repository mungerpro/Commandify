let filteredItems = [];
let itemListHTML = '';
let selectedItemName = 'diamond_sword';
let previewExtension = '.png';

localStorage.removeItem('loreParagraphArray');
localStorage.removeItem('nameTextArray');
localStorage.removeItem('customNameActivation');

/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
/*---------------------------------SEARCH ITEM---------------------------------*/
/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
//every time a key is pressed in the search box, filter items
function filterItems() {
  const inputElement = document.getElementById('js-item-input');
  const item = inputElement.value;
  const search = item;
  if (search) {
    filteredItems = items2.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.displayName.toLowerCase().includes(search.toLowerCase())
    );
  
    //adds each item that matched the filter to the list HTML
    itemListHTML = '';
    let itemsToShow = 15;
    if (filteredItems.length > 15) {
      filteredItems = filteredItems.splice(0, itemsToShow);
    }
    filteredItems.forEach((itemObject) => {
      const { displayName, name } = itemObject;
      const html = `
      <div class="item-list-div" onclick="selectItemForGive('${name}', '${displayName}')" style="display:flex; align-items: center;">
      <img src="Assets/item/${name}.png" style="margin-right: 10px;" class="minecraft-item">
      <p>${displayName}</p>
      </div>
      `;
      itemListHTML += html;
    });
  
    //puts list HTML onto the page
    document.getElementById('js-item-list')
      .innerHTML = itemListHTML;
    if (itemListHTML === '') {
      document.getElementById('js-item-list')
        .innerHTML = "No items match this query";
    }
  } else {
    document.getElementById('js-item-list')
      .innerHTML = '';
  }
}

//Onclick, select the item and update the page/variables
function selectItemForGive(name, displayName) {
  document.getElementById('js-preview-image')
    .src = ("Assets/item/" + name + previewExtension);
  document.getElementById('js-preview-image')
    .title = (displayName);
  selectedItemName = name;
}
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------SEARCH ITEM END---------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

//Adds functionality to the advanced options button
function toggleAdvancedOpitons() {
  const advancedOptions = document.getElementById('js-advanced-command-customizations');
  advancedOptions.classList.toggle('hidden');
}

/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
/*---------------------------------ENCHANTMENTS---------------------------------*/
/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
//Generate enchantment grid
let enchantmentListHTML = ``;
enchantments.forEach((enchantmentObject) => {
  const { name, displayName, compatability, maxLevel, description, exclusive } = enchantmentObject;
  let html = `
  <div class="enchantment-container ${name}">
    <p class="enchantment-name" onclick="selectEnchantment('${name}', '${displayName}', ${maxLevel})">${displayName}</p>`
  if (maxLevel) {
    html += `
    <input type="number" step="1" class="enchantment-level-input" placeholder="lvl" min=1 max=255 oninput="changeEnchantmentLevel('${name}', '${displayName}');" onkeydown="return event.keyCode !== 190 && event.keyCode !== 110" />`
  }
  html += `<div class="description-icon-container">
      <span class="material-symbols-outlined description-icon">info</span>
      <div class="tooltip">
        <p class="tooltip-title"><b>${displayName}:</b></p>
        <p>Meant for: ${compatability}</p>`
  if (maxLevel) {
    html += `
    <p>Max level: ${maxLevel}</p>`
  }
  html += `<p class="tooltip-description">Description: ${description}.`
  if (exclusive) {
    html += ` By default, it is mutually exclusive with ${exclusive}.`
  }
  html +=`</p>
      </div>
    </div>
  </div>
  `;
  enchantmentListHTML += html;
});
document.getElementById('js-enchantments')
  .innerHTML = enchantmentListHTML;

let selectedEnchantmentsList = [];
let enchantmentsDisplayList = [];

//select Enchantment on click
function selectEnchantment(enchantmentName, enchantmentDisplayName, maxLevel) {
  if (document.querySelector(`.${enchantmentName} p`).classList.contains('selected-enchantment')) {
    if (document.querySelector(`.${enchantmentName} input`)) {
      document.querySelector(`.${enchantmentName} input`).value = "";
    }
    document.querySelector(`.${enchantmentName} p`).classList.remove('selected-enchantment');
    if (selectedEnchantmentsList.includes(`${enchantmentName}`)) {
      const index = selectedEnchantmentsList.indexOf(`${enchantmentName}`);
      selectedEnchantmentsList.splice(index, 1);
      //Update Enchantment Preview
      enchantmentsDisplayList = enchantmentsDisplayList.filter(o => o.displayName !== `${enchantmentDisplayName}`);
      updateEnchantmentPreview();
    }
  } else {
    if (document.querySelector(`.${enchantmentName} input`)) {
    document.querySelector(`.${enchantmentName} input`).value = maxLevel;
    }
    document.querySelector(`.${enchantmentName} p`).classList.add('selected-enchantment');
    if (!selectedEnchantmentsList.includes(`${enchantmentName}`)) {
      selectedEnchantmentsList.push(`${enchantmentName}`);
      //Update Enchantment Preview
      enchantmentsDisplayList.push({
        displayName: `${enchantmentDisplayName}`,
        lvl: maxLevel
      });
      updateEnchantmentPreview();
    }
  }
}
//select enchantment by changing the level
function changeEnchantmentLevel(enchantmentName, enchantmentDisplayName) {
  if (document.querySelector(`.${enchantmentName} input`).value) {
    if (document.querySelector(`.${enchantmentName} input`).value > 255) {
      document.querySelector(`.${enchantmentName} input`).value = 255;
    }
    if (document.querySelector(`.${enchantmentName} input`).value < 1) {
      document.querySelector(`.${enchantmentName} input`).value = 0;
    }
    if (!document.querySelector(`.${enchantmentName} p`).classList.contains('selected-enchantment')) {
      document.querySelector(`.${enchantmentName} p`).classList.add('selected-enchantment');
      if (!selectedEnchantmentsList.includes(`${enchantmentName}`)) {
        selectedEnchantmentsList.push(`${enchantmentName}`);
        //Update Enchantment Preview
        const lvl = document.querySelector(`.${enchantmentName} input`).value;
        enchantmentsDisplayList.push({
          displayName: `${enchantmentDisplayName}`,
          lvl: lvl
        });
        updateEnchantmentPreview();
      }
    } else {
      //Update Enchantment Preview
      const obj = enchantmentsDisplayList.find(o => o.displayName === enchantmentDisplayName);
      obj.lvl = document.querySelector(`.${enchantmentName} input`).value;
      updateEnchantmentPreview();
    }
  } else if (document.querySelector(`.${enchantmentName} p`).classList.contains('selected-enchantment')) {
    document.querySelector(`.${enchantmentName} p`).classList.remove('selected-enchantment');
    if (selectedEnchantmentsList.includes(`${enchantmentName}`)) {
      const index = selectedEnchantmentsList.indexOf(`${enchantmentName}`);
      selectedEnchantmentsList.splice(index, 1);
      //Update Enchantment Preview
      enchantmentsDisplayList = enchantmentsDisplayList.filter(o => o.displayName !== `${enchantmentDisplayName}`);
      updateEnchantmentPreview();
    }
  }
}
//clears selected enchantments when the clear button is pressed
function clearSelectedEnchantments() {
  const inputs = document.querySelectorAll('.enchantment-level-input');
  inputs.forEach(input => {
    input.value = "";
  })
  const elements = document.querySelectorAll('.selected-enchantment');
  elements.forEach(element => {
    element.classList.remove('selected-enchantment');
  });
  selectedEnchantmentsList = [];
  enchantmentsDisplayList = [];
  updateEnchantmentPreview();
  document.getElementById('js-enchantment-filter-input').value = ""
  filterEnchantments();
}

//filters enchantments based on the current search term
function filterEnchantments() {
  const elements = document.querySelectorAll('.filtered-enchantment');
  elements.forEach(element => {
    element.classList.remove('filtered-enchantment');
  });
  const inputElement = document.getElementById('js-enchantment-filter-input');
  const enchantmentFilter = inputElement.value;
  const search = enchantmentFilter;
  let filteredEnchantments;
  let currentEnchantment;
  filteredEnchantments = enchantments.filter((enchantment) =>
    !enchantment.searchTerms.toLowerCase().includes(search.toLowerCase())
  );
  filteredEnchantments.forEach(enchantment => {
    currentEnchantment = document.querySelector(`.${enchantment.name} p`);
    currentEnchantment.classList.add('filtered-enchantment');
  });
}

//rewrite enchantment preview html
function updateEnchantmentPreview() {
  let enchantmentPreviewHTML = '';
  enchantmentsDisplayList.forEach((enchantment) => {
    let currentHTML = '';
    if (enchantment.displayName.includes('Curse')) {
      currentHTML += `<p style="color:#F05151">${enchantment.displayName}`;
    } else {
      currentHTML += `<p>${enchantment.displayName}`;
    }
    if (enchantment.lvl) {
      if ((enchantment.lvl > 10) || (enchantment.lvl < 1)) {
        currentHTML += ` enchantment.level.${enchantment.lvl}`
      } else {
        let romanNum = convertToRoman(enchantment.lvl);
        currentHTML += ` ${romanNum}`;
      }
    }
    currentHTML += `</p>`;
    enchantmentPreviewHTML += currentHTML;
  });
  //change between gif and png
  if (enchantmentPreviewHTML && previewExtension === '.png') {
    previewExtension = '.gif';
    var image = document.getElementById('js-preview-image'); // get the image element by id
    var png_src = image.src; // get the original src
    var gif_src = png_src.replace(".png", ".gif"); // replace .png with .gif
    image.src = gif_src;
  } else if (!enchantmentPreviewHTML) {
    previewExtension = '.png';
    var image = document.getElementById('js-preview-image'); // get the image element by id
    var gif_src = image.src; // get the original src
    var png_src = gif_src.replace(".gif", ".png"); // replace .png with .gif
    image.src = png_src;
  }
  const enchantmentsPreviewDiv = document.getElementById('js-preview-enchantments');
  enchantmentsPreviewDiv.innerHTML = enchantmentPreviewHTML;
}
//Arabic to Roman converter
function convertToRoman(num) {
  let romanNum = "";
  const romanNumList = ["I", "IV", "V", "IX", "X"];
  const numList = [1, 4, 5, 9, 10];
  let i = 4;
  while (num > 0) {
    if (num >= numList[i]) {
      romanNum += romanNumList[i];
      num -= numList[i];
    } else {
      i--;
    }
  }
  return romanNum;
}
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*---------------------------------ENCHANTMENTS END---------------------------------*/
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*--------------------------------COMMAND GENERATION--------------------------------*/
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
//Generates the minecraft command
let enchantmentsJSON = '';
function writeCommandOutput() {
  let htmlOutput;
  const customNameStringify = localStorage.getItem('nameTextArray');
  const nameTextArray = JSON.parse(customNameStringify);
  const customNameActivation = localStorage.getItem('customNameActivation');
  const customLoreStringify = localStorage.getItem('loreParagraphArray');
  const loreParagraphArray = JSON.parse(customLoreStringify);

  htmlOutput = `/give minecraft:${selectedItemName}`;
  if (customNameActivation || (loreParagraphArray) || (selectedEnchantmentsList.length > 0)) {
    htmlOutput += `{`;
    if (customNameActivation || loreParagraphArray) {
      htmlOutput += `display:{`;
      if (customNameActivation) {
        writeCustomNameJSON(nameTextArray);
        htmlOutput += `Name:'[${customNameJSON}]'`;
      }
      if (customNameActivation && loreParagraphArray) {
        htmlOutput += `,`;
      }
      if (loreParagraphArray) {
        writeCustomLoreJSON(loreParagraphArray);
        htmlOutput += `Lore:[${customLoreJSON}]`;
      }
      htmlOutput += `}`;
    }
    if (selectedEnchantmentsList.length > 0) {
      if (customNameActivation || loreParagraphArray) {
        htmlOutput += `,`;
      }
      writeEnchantmentJSON();
      htmlOutput += `Enchantments:[${enchantmentsJSON}]`;
    }
    htmlOutput += `}`;
  }

  //warn user to use a command block if the command is too long for chat
  document.getElementById('js-command-output')
    .value = htmlOutput;
  if (htmlOutput.length > 256) {
    document.getElementById('js-command-output-warning')
      .innerHTML = `
      <div class="command-warning-box">
        <span class="material-symbols-outlined">warning</span>
        <span class="warning-text">This command is too long for chat, it must be placed in a command block to run</span>
        <span class="material-symbols-outlined">warning</span>
      </div>
      `;
  } else {
    document.getElementById('js-command-output-warning')
      .innerHTML = "";
  }

  //copies the command to the clipboard
  copyToClipboard();
}

//Writes enchantment section of the final command
function writeEnchantmentJSON() {
  enchantmentsJSON = ``;
  selectedEnchantmentsList.forEach((enchantment) => {
    let level;
    if (document.querySelector(`.${enchantment} input`)) {
      level = document.querySelector(`.${enchantment} input`).value;
    }
    enchantmentsJSON += `,{id:${enchantment}`;
    if (level) {
      enchantmentsJSON += `,lvl:${level}`;
    } else {
      enchantmentsJSON += `,lvl:1`;
    }
    enchantmentsJSON +=`}`;
  });
  enchantmentsJSON = enchantmentsJSON.slice(1);
}

let customNameJSON;
function writeCustomNameJSON(nameTextArray) {
  let textJSON = '';
  nameTextArray.forEach(textNode => {
    textJSON += `,{"text":"${textNode.data}"`;
    if (textNode.attributes) {
      const currentAttributes = textNode.attributes;
      if (currentAttributes.bold) {
        textJSON += `,"bold":"true"`;
      }
      if (!currentAttributes.italic) {
        textJSON += `,"italic":"false"`;
      } else {
      }
      if (currentAttributes.strikethrough) {
        textJSON += `,"strikethrough":"true"`;
      }
      if (currentAttributes.underline) {
        textJSON += `,"underlined":"true"`;
      }
      if (currentAttributes.fontColor) {
        hexColor = w3color(currentAttributes.fontColor).toHexString();
        textJSON += `,"color":"${hexColor}"`;
      } else {
        textJSON += `,"color":"#00ffff"`;
      }
    } else {
      textJSON += `,"italic":"false"`;
      textJSON += `,"color":"#00ffff"`;
    }
    textJSON += `}`;
  });
  if (!textJSON) {
    textJSON = '{"text":""}';
  } else {
    textJSON = textJSON.slice(1);
  }
  customNameJSON = textJSON;
}

let customLoreJSON;
function writeCustomLoreJSON(loreParagraphArray) {
  let paragraphJSON = '';
  loreParagraphArray.forEach( paragraph => {
    paragraphJSON += `,'[`;
    let textJSON = '';
    const currentTextArray = paragraph.children;
    currentTextArray.forEach(textNode => {
      textJSON += `,{"text":"${textNode.data}"`;
      if (textNode.attributes) {
        const currentAttributes = textNode.attributes;
        if (currentAttributes.bold) {
          textJSON += `,"bold":"true"`;
        }
        if (!currentAttributes.italic) {
          textJSON += `,"italic":"false"`;
        } else {
        }
        if (currentAttributes.strikethrough) {
          textJSON += `,"strikethrough":"true"`;
        }
        if (currentAttributes.underline) {
          textJSON += `,"underlined":"true"`;
        }
        if (currentAttributes.fontColor) {
          hexColor = w3color(currentAttributes.fontColor).toHexString();
          textJSON += `,"color":"${hexColor}"`;
        }
      } else {
        textJSON += `,"italic":"false"`;
      }
      textJSON += `}`;
    });
    textJSON = textJSON.slice(1);
    paragraphJSON += textJSON;
    paragraphJSON += `]'`;
  });
  paragraphJSON = paragraphJSON.slice(1);
  customLoreJSON = paragraphJSON;
}

//copy generated command to the clipboard
function copyToClipboard() {
  var copyText = document.getElementById("js-command-output");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  const button = document.getElementById("generate-command-button");
  button.innerHTML = "Copied!";
  setTimeout(function() {
    button.innerHTML = "Generate Command";
  }, 1500);
}
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
/*--------------------------------COMMAND GENERATION END--------------------------------*/
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
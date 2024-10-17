let selectedButton = null;





function selectButton(button) {


  
    if (selectedButton) {
        selectedButton.classList.remove('selected');
      
    }

    // Marca o botão atual como selecionado
    selectedButton = button;
    selectedButton.classList.add('selected');
}


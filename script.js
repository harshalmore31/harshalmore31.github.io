window.onload = function() {
    const popUpCard = document.createElement('div');
    popUpCard.style.position = 'fixed';
    popUpCard.style.top = '50%';
    popUpCard.style.left = '50%';
    popUpCard.style.transform = 'translate(-50%, -50%)';
    popUpCard.style.backgroundColor = 'white';
    popUpCard.style.padding = '20px';
    popUpCard.style.borderRadius = '20px';
    popUpCard.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    popUpCard.style.zIndex = '9999';
    popUpCard.classList.add('infodata');
popUpCard.classList.add('hover');

    popUpCard.innerHTML = '<p style="color: black; font-size: 40px"> Portfolio is in Progress </p>';
    document.body.appendChild(popUpCard);
};


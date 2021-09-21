
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const pTag = document.createElement('p');
  pTag.innerText = string;

  if (htmlElement.children) {
    Array.from(htmlElement.children).forEach(child => htmlElement.removeChild(child));
  };

  htmlElement.appendChild(pTag);
};

htmlGenerator('I <3 Vanilla DOM', partyHeader);
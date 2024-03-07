
  function handleButtonClick(buttonText) {
      console.log(buttonText + ' button clicked!');
  }

  function toggleAccordion(sectionId) {
      const section = document.getElementById(sectionId);
      if (section.style.display === 'block') {
          section.style.display = 'none';
      } else {
          section.style.display = 'block';
      }
  }

  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
  

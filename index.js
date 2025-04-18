const educationItems = [
    "2019: Master's in Library and Information Science from the University of Washington iSchool",
    "2015: Bachelor's in Political Science and Sociology from Texas A&M University-San Antonio",
    "2012: Associate's in Geographic Information Systems from San Antonio College"
  ];

  const projectItems = [
    "Gregorio Cortez",
    "Mapping",
    "Workshop Notebooks"
  ];

  const workItems = [
    "UTSA Libraries",
    "work 2",
    "work 3",
  ];
  
  let eduIndex = 0;
  let workIndex = 0;
  let projIndex = 0;
  
  function updateCard(sectionId, itemsArray, index) {
    const card = document.getElementById(`${sectionId}-card`);
    const prev = document.getElementById(`prev-${sectionId}`);
    const next = document.getElementById(`next-${sectionId}`);
  
    card.textContent = itemsArray[index];
    prev.disabled = index === 0;
    next.disabled = index === itemsArray.length - 1;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // EDU
    document.getElementById("prev-edu").addEventListener("click", () => {
      if (eduIndex > 0) eduIndex--;
        updateCard("edu", educationItems, eduIndex);
      });
      document.getElementById("next-edu").addEventListener("click", () => {
        if (eduIndex < educationItems.length - 1) eduIndex++;
        updateCard("edu", educationItems, eduIndex)
      })
      // WORK
  document.getElementById("prev-we").addEventListener("click", () => {
    if (workIndex > 0) workIndex--;
    updateCard("we", workItems, workIndex);
  });
  document.getElementById("next-we").addEventListener("click", () => {
    if (workIndex < workItems.length - 1) workIndex++;
    updateCard("we", workItems, workIndex);
  });

  // PROJECTS
  document.getElementById("prev-dp").addEventListener("click", () => {
    if (projIndex > 0) projIndex--;
    updateCard("dp", projectItems, projIndex);
  });
  document.getElementById("next-dp").addEventListener("click", () => {
    if (projIndex < projectItems.length - 1) projIndex++;
    updateCard("dp", projectItems, projIndex);
  });

  // Initialize all cards
  updateCard("edu", educationItems, eduIndex);
  updateCard("we", workItems, workIndex);
  updateCard("dp", projectItems, projIndex);
});

  
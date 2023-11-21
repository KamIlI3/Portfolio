//Wyświetlenie diva z opisem projektu, po naciśnięciu przycisku przypisanego do projektu
function showProject(projectId){
    const description = document.getElementsByClassName("description");
    for (let i=0;i<description.length; i++){
        description[i].style.display = "none";
    }
    var selectedProject = document.getElementById(projectId);
        selectedProject.style.display = 'block';
}
//Ustawianie stanu widoczności diva w LocalStorage
function setVisibilityState(projectId) {
    localStorage.setItem('selectedProject', projectId);
  }
  
  //Pobieranie stanu widoczności diva z LocalStorage
  function getVisibilityState() {
    return localStorage.getItem('selectedProject');
  }
  
  //Ustawianie widoczności diva
  function showProject(projectId) {
    const description = document.getElementsByClassName("description");
    for (let i = 0; i < description.length; i++) {
      description[i].style.display = "none";
    }
    var selectedProject = document.getElementById(projectId);
    selectedProject.style.display = 'block';
    //Zapisanie stanu widoczności diva w LocalStorage po jego zmianie
    setVisibilityState(projectId);
  }
  
  //Sprawdzenie, czy istnieje zapisany stan widoczności diva w LocalStorage
  const savedState = getVisibilityState();
  if (savedState) {
    showProject(savedState);
  } else {
    showProject('wprowadzenie');
  }


  
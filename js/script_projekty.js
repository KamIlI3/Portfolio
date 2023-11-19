//Wyświetlenie diva z opisem projektu, po naciśnięciu przycisku przypisanego do projektu
function showProject(projectId){
    const description = document.getElementsByClassName("description");
    for (let i=0;i<description.length; i++){
        description[i].style.display = "none";
    }
    var selectedProject = document.getElementById(projectId);
        selectedProject.style.display = 'block';
}
const subjectsDataTerminale = {};
["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  subjectsDataTerminale[subject] = { quiz:[], exercises:[], videos:[], bonus:[] };
  for(let i=1;i<=100;i++){
    subjectsDataTerminale[subject].quiz.push({
      question:`Quiz ${subject} Terminale #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsDataTerminale[subject].exercises.push({
      title:`Exercice ${subject} Terminale #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsDataTerminalale[subject].videos.push({
      title:`Vidéo ${subject} Terminale #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsDataTerminale[subject].bonus.push({
      title:`Défi ${subject} Terminale #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});

const subjectsDataPremiere = {};
["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  subjectsDataPremiere[subject] = { quiz:[], exercises:[], videos:[], bonus:[] };
  for(let i=1;i<=100;i++){
    subjectsDataPremiere[subject].quiz.push({
      question:`Quiz ${subject} Première #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsDataPremiere[subject].exercises.push({
      title:`Exercice ${subject} Première #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsDataPremiere[subject].videos.push({
      title:`Vidéo ${subject} Première #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsDataPremiere[subject].bonus.push({
      title:`Défi ${subject} Première #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});

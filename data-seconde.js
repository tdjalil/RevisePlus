const subjectsDataSeconde = {};
["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  subjectsDataSeconde[subject] = { quiz:[], exercises:[], videos:[], bonus:[] };
  for(let i=1;i<=100;i++){
    subjectsDataSeconde[subject].quiz.push({
      question:`Quiz ${subject} Seconde #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsDataSeconde[subject].exercises.push({
      title:`Exercice ${subject} Seconde #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsDataSeconde[subject].videos.push({
      title:`Vidéo ${subject} Seconde #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsDataSeconde[subject].bonus.push({
      title:`Défi ${subject} Seconde #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});

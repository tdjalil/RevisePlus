const subjectsData3e = {};
["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  subjectsData3e[subject] = { quiz:[], exercises:[], videos:[], bonus:[] };
  for(let i=1;i<=100;i++){
    subjectsData3e[subject].quiz.push({
      question:`Quiz ${subject} 3e #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsData3e[subject].exercises.push({
      title:`Exercice ${subject} 3e #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsData3e[subject].videos.push({
      title:`Vidéo ${subject} 3e #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsData3e[subject].bonus.push({
      title:`Défi ${subject} 3e #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});

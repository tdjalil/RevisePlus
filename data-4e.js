const subjectsData4e = {};
["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  subjectsData4e[subject] = { quiz:[], exercises:[], videos:[], bonus:[] };
  for(let i=1;i<=100;i++){
    subjectsData4e[subject].quiz.push({
      question:`Quiz ${subject} 4e #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsData4e[subject].exercises.push({
      title:`Exercice ${subject} 4e #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsData4e[subject].videos.push({
      title:`Vidéo ${subject} 4e #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsData4e[subject].bonus.push({
      title:`Défi ${subject} 4e #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});

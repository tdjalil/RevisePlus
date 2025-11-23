const subjectsData6e = {
  maths: { quiz:[], exercises:[], videos:[], bonus:[] },
  francais: { quiz:[], exercises:[], videos:[], bonus:[] },
  histoire: { quiz:[], exercises:[], videos:[], bonus:[] },
  geographie: { quiz:[], exercises:[], videos:[], bonus:[] },
  sciences: { quiz:[], exercises:[], videos:[], bonus:[] }
};

// Exemple pour Maths 6e : 100 quiz et 100 exercices
for(let i=1; i<=100; i++){
  subjectsData6e.maths.quiz.push({
    question:`Exercice quiz Maths 6e #${i}: Calcule le périmètre d'un rectangle ${i}m × ${i+2}m`,
    choices:[`${2*i + 4}`, `${i+i+2}`, `${i*2}`],
    answer:`${2*i + 4}`,
    image:`images/maths${i}.png`
  });
  subjectsData6e.maths.exercises.push({
    title:`Exercice Maths 6e #${i}`,
    content:`Calcule le périmètre du rectangle ${i}m × ${i+2}m`,
    image:`images/maths${i}.png`,
    solution:`${2*i + 4} m`
  });
  subjectsData6e.maths.videos.push({
    title:`Vidéo Maths 6e #${i}`,
    src:`videos/maths${i}.mp4`
  });
  subjectsData6e.maths.bonus.push({
    title:`Défi Maths 6e #${i}`,
    content:`Résous rapidement : ${i} × ${(i+1)}`
  });
}

// Même logique pour Français, Histoire, Géographie, Sciences
// Avec 100 quiz et 100 exercices par matière
